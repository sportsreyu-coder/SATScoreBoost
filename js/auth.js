// SAT ScoreBoost — authentication
//
// Email/password is a local-only demo: "users" and the active session are
// just JSON in localStorage, and password hashing is client-side SHA-256 —
// fine for testing the login UX, not a real security boundary. Google
// sign-in is real, backed by Supabase Auth (see js/supabaseClient.js) —
// Supabase handles the OAuth redirect, token exchange, and session
// storage; this file just mirrors the result into the same local
// {email, name, provider, plan} shape the rest of the app already reads
// through getCurrentUser(), so every call site works unchanged either way.
(function () {
  "use strict";

  const USERS_KEY = "sat_auth_users_demo";
  const SESSION_KEY = "sat_auth_session";
  const listeners = [];

  async function hashPassword(password) {
    const bytes = new TextEncoder().encode(password);
    const digest = await crypto.subtle.digest("SHA-256", bytes);
    return Array.from(new Uint8Array(digest))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  }

  function loadUsers() {
    try {
      const raw = localStorage.getItem(USERS_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveUsers(users) {
    try {
      localStorage.setItem(USERS_KEY, JSON.stringify(users));
    } catch (e) { /* localStorage unavailable */ }
  }

  function setSession(user) {
    try {
      localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    } catch (e) { /* localStorage unavailable */ }
    listeners.forEach((fn) => fn(user));
  }

  function getCurrentUser() {
    try {
      const raw = localStorage.getItem(SESSION_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  async function signUp(email, password, name) {
    email = (email || "").trim().toLowerCase();
    if (!isValidEmail(email)) return { ok: false, error: "Enter a valid email address." };
    if (!password || password.length < 6) {
      return { ok: false, error: "Password must be at least 6 characters." };
    }
    const users = loadUsers();
    if (users[email]) return { ok: false, error: "An account with that email already exists." };
    const displayName = (name || "").trim() || email.split("@")[0];
    users[email] = { name: displayName, passwordHash: await hashPassword(password), provider: "email", plan: "free" };
    saveUsers(users);
    const user = { email, name: displayName, provider: "email", plan: "free" };
    setSession(user);
    return { ok: true, user };
  }

  async function signIn(email, password) {
    email = (email || "").trim().toLowerCase();
    const users = loadUsers();
    const record = users[email];
    if (!record || record.provider !== "email") {
      return { ok: false, error: "No account found for that email." };
    }
    const hash = await hashPassword(password || "");
    if (hash !== record.passwordHash) return { ok: false, error: "Incorrect password." };
    const user = { email, name: record.name, provider: "email", plan: record.plan || "free" };
    setSession(user);
    return { ok: true, user };
  }

  // Kicks off the real Google OAuth flow via Supabase Auth. This navigates
  // the whole page away to Google's consent screen, so nothing meaningful
  // runs after the await on success — the redirect back is handled by
  // syncSupabaseSession() below, once the page reloads. The promise only
  // resolves here (with an error) if Supabase rejects the request before
  // ever redirecting, e.g. the Google provider isn't enabled yet.
  async function signInWithGoogle() {
    if (!window.supabaseClient) {
      return { ok: false, error: "Google sign-in isn't available right now. Try again shortly." };
    }
    const { error } = await window.supabaseClient.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: window.location.origin + window.location.pathname },
    });
    if (error) return { ok: false, error: error.message };
    return { ok: true };
  }

  // Mirrors a Supabase session (from a fresh Google sign-in redirect, or an
  // existing session found on page load) into our own {email, name,
  // provider, plan} shape and persists it under our normal SESSION_KEY —
  // this is what makes getCurrentUser() work for Google users without
  // every other call site needing to know Supabase exists.
  function syncSupabaseSession(session) {
    const authUser = session && session.user;
    const email = authUser && authUser.email && authUser.email.toLowerCase();
    if (!email) return;
    const meta = authUser.user_metadata || {};
    const displayName = meta.full_name || meta.name || email.split("@")[0];
    const users = loadUsers();
    if (!users[email]) {
      users[email] = { name: displayName, provider: "google", plan: "free" };
      saveUsers(users);
    }
    setSession({ email, name: users[email].name, provider: "google", plan: users[email].plan || "free" });
  }

  // On load, adopt any Supabase session already on file (a returning
  // Google user, or the redirect straight back from Google's consent
  // screen), then keep listening in case one arrives or ends later.
  function initSupabaseAuth() {
    if (!window.supabaseClient) return;
    window.supabaseClient.auth.getSession().then(({ data }) => syncSupabaseSession(data.session));
    window.supabaseClient.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") syncSupabaseSession(session);
      else if (event === "SIGNED_OUT") {
        const current = getCurrentUser();
        if (current && current.provider === "google") signOut();
      }
    });
  }

  // Demo stand-in for a real upgrade flow (Stripe checkout, etc.) — just
  // flips the current user's plan locally. No payment is collected.
  function upgradeToPremium() {
    const user = getCurrentUser();
    if (!user) return { ok: false, error: "Log in first." };
    const users = loadUsers();
    if (users[user.email]) {
      users[user.email].plan = "premium";
      saveUsers(users);
    }
    const updated = { ...user, plan: "premium" };
    setSession(updated);
    return { ok: true, user: updated };
  }

  function isPremium() {
    const user = getCurrentUser();
    return !!user && user.plan === "premium";
  }

  function signOut() {
    try {
      localStorage.removeItem(SESSION_KEY);
    } catch (e) { /* localStorage unavailable */ }
    listeners.forEach((fn) => fn(null));
    // Also end the underlying Supabase session so a Google sign-in doesn't
    // just come back on the next page load via initSupabaseAuth().
    if (window.supabaseClient) window.supabaseClient.auth.signOut();
  }

  function onChange(fn) {
    listeners.push(fn);
  }

  initSupabaseAuth();

  window.Auth = {
    signUp,
    signIn,
    signInWithGoogle,
    signOut,
    getCurrentUser,
    onChange,
    isValidEmail,
    upgradeToPremium,
    isPremium,
  };
})();
