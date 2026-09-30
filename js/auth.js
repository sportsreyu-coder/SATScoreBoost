// SAT ScoreBoost — authentication
//
// Email/password is a local-only demo: "users" and the active session are
// just JSON in localStorage, and password hashing is client-side SHA-256 —
// fine for testing the login UX, not a real security boundary. Google
// sign-in is real, backed by Supabase Auth (see js/supabaseClient.js) —
// Supabase handles the OAuth redirect, token exchange, and session
// storage; this file just mirrors the result into the same local
// {email, name, provider, plan, createdAt, avatarUrl, avatarColor} shape
// the rest of the app already reads through getCurrentUser(), so every
// call site works unchanged either way.
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
    const createdAt = new Date().toISOString();
    users[email] = {
      name: displayName,
      passwordHash: await hashPassword(password),
      provider: "email",
      plan: "free",
      createdAt,
    };
    saveUsers(users);
    const user = { email, name: displayName, provider: "email", plan: "free", createdAt };
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
    const user = {
      email,
      name: record.name,
      provider: "email",
      plan: record.plan || "free",
      createdAt: record.createdAt,
      avatarUrl: record.avatarUrl,
      avatarColor: record.avatarColor,
    };
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
  // existing session found on page load) into our own {id, email, name,
  // provider, plan} shape and persists it under our normal SESSION_KEY —
  // this is what makes getCurrentUser() work for Google users without
  // every other call site needing to know Supabase exists.
  //
  // The plan/name of record for a Google user lives in the `profiles`
  // table (a row auto-created by a DB trigger on first sign-in — see
  // supabase/schema.sql), not localStorage, so it follows the user across
  // browsers/devices. localStorage still gets a copy for the synchronous
  // getCurrentUser() reads the rest of the app relies on.
  async function syncSupabaseSession(session) {
    const authUser = session && session.user;
    const email = authUser && authUser.email && authUser.email.toLowerCase();
    if (!email) return;
    const meta = authUser.user_metadata || {};
    const displayName = meta.full_name || meta.name || email.split("@")[0];
    let name = displayName;
    let plan = "free";
    let avatarUrl;
    let createdAt = authUser.created_at;
    if (window.supabaseClient) {
      try {
        const { data } = await window.supabaseClient
          .from("profiles")
          .select("name, plan, avatar_url, created_at")
          .eq("id", authUser.id)
          .maybeSingle();
        if (data) {
          name = data.name || displayName;
          plan = data.plan || "free";
          avatarUrl = data.avatar_url || undefined;
          createdAt = data.created_at || createdAt;
        }
      } catch (e) {
        // Offline, or the trigger hasn't created the row yet — fall back
        // to defaults; this self-heals on the next successful sync.
      }
    }
    // avatarColor is a local-only cosmetic fallback (see setAvatarColor) —
    // never stored in Supabase, so preserve whatever this browser already
    // had for the account instead of losing it on every re-sync.
    const users = loadUsers();
    const avatarColor = users[email] && users[email].avatarColor;
    users[email] = { name, provider: "google", plan, createdAt, avatarUrl, avatarColor };
    saveUsers(users);
    setSession({ id: authUser.id, email, name, provider: "google", plan, createdAt, avatarUrl, avatarColor });
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
  // flips the current user's plan. No payment is collected. For a Google
  // user this also writes through to their `profiles` row so the plan
  // sticks across browsers/devices, not just this one's localStorage.
  async function upgradeToPremium() {
    const user = getCurrentUser();
    if (!user) return { ok: false, error: "Log in first." };
    const users = loadUsers();
    if (users[user.email]) {
      users[user.email].plan = "premium";
      saveUsers(users);
    }
    const updated = { ...user, plan: "premium" };
    setSession(updated);
    if (user.provider === "google" && user.id && window.supabaseClient) {
      try {
        await window.supabaseClient.from("profiles").update({ plan: "premium" }).eq("id", user.id);
      } catch (e) {
        // Best-effort — localStorage is already updated, so the current
        // session still sees "premium"; this just didn't follow to Supabase.
      }
    }
    return { ok: true, user: updated };
  }

  function isPremium() {
    const user = getCurrentUser();
    return !!user && user.plan === "premium";
  }

  // Renames the current account. For a Google user this writes through to
  // `profiles.name` (best-effort) so it follows them across devices; for
  // the email/password demo it's purely local, like the rest of that path.
  async function updateName(name) {
    const user = getCurrentUser();
    if (!user) return { ok: false, error: "Log in first." };
    name = (name || "").trim();
    if (!name) return { ok: false, error: "Name can't be empty." };
    const users = loadUsers();
    if (users[user.email]) {
      users[user.email].name = name;
      saveUsers(users);
    }
    const updated = { ...user, name };
    setSession(updated);
    if (user.provider === "google" && user.id && window.supabaseClient) {
      try {
        await window.supabaseClient.from("profiles").update({ name }).eq("id", user.id);
      } catch (e) {
        // Best-effort — the local session already has the new name.
      }
    }
    return { ok: true, user: updated };
  }

  // Sets the account's profile picture from a data URL (already resized/
  // compressed client-side — see resizeImageFile in app.js). For the email
  // demo path this is stored directly in localStorage. For a Google user
  // it's uploaded to the `avatars` Supabase Storage bucket (one file per
  // user id) and the resulting public URL is written to `profiles.avatar_url`
  // — see supabase/schema.sql for the bucket + storage policies this needs.
  async function updateAvatar(dataUrl) {
    const user = getCurrentUser();
    if (!user) return { ok: false, error: "Log in first." };
    let avatarUrl = dataUrl;
    if (user.provider === "google" && user.id && window.supabaseClient) {
      try {
        const blob = await (await fetch(dataUrl)).blob();
        const path = `${user.id}/avatar.jpg`;
        const { error: uploadError } = await window.supabaseClient.storage
          .from("avatars")
          .upload(path, blob, { upsert: true, contentType: "image/jpeg" });
        if (uploadError) throw uploadError;
        const { data } = window.supabaseClient.storage.from("avatars").getPublicUrl(path);
        avatarUrl = `${data.publicUrl}?t=${Date.now()}`; // cache-bust the CDN copy
        await window.supabaseClient.from("profiles").update({ avatar_url: avatarUrl }).eq("id", user.id);
      } catch (e) {
        return { ok: false, error: "Couldn't upload that photo. Try again in a moment." };
      }
    }
    const users = loadUsers();
    if (users[user.email]) {
      users[user.email].avatarUrl = avatarUrl;
      saveUsers(users);
    }
    const updated = { ...user, avatarUrl };
    setSession(updated);
    return { ok: true, user: updated };
  }

  function removeAvatar() {
    const user = getCurrentUser();
    if (!user) return { ok: false, error: "Log in first." };
    const users = loadUsers();
    if (users[user.email]) {
      delete users[user.email].avatarUrl;
      saveUsers(users);
    }
    const updated = { ...user };
    delete updated.avatarUrl;
    setSession(updated);
    if (user.provider === "google" && user.id && window.supabaseClient) {
      window.supabaseClient
        .from("profiles")
        .update({ avatar_url: null })
        .eq("id", user.id)
        .then(() => {}, () => {}); // best-effort
    }
    return { ok: true, user: updated };
  }

  // Sets the background color for the initials avatar shown when there's
  // no uploaded photo. Purely cosmetic and local to this browser — never
  // synced to Supabase, so it isn't worth a schema column or a network
  // round-trip; see the avatarColor handling in syncSupabaseSession.
  function setAvatarColor(color) {
    const user = getCurrentUser();
    if (!user) return { ok: false, error: "Log in first." };
    const users = loadUsers();
    if (users[user.email]) {
      users[user.email].avatarColor = color;
      saveUsers(users);
    }
    const updated = { ...user, avatarColor: color };
    setSession(updated);
    return { ok: true, user: updated };
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
    updateName,
    updateAvatar,
    removeAvatar,
    setAvatarColor,
  };
})();
