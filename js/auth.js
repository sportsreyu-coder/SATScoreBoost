// SAT ScoreBoost — authentication
//
// Both email/password and Google sign-in are real, backed by Supabase Auth
// (see js/supabaseClient.js) — Supabase owns credentials, sessions, and the
// OAuth redirect/token exchange; this file just mirrors whichever session
// is active into the local {id, email, name, provider, plan, createdAt,
// avatarUrl, avatarColor} shape the rest of the app reads through
// getCurrentUser(), and caches the display fields (not credentials) in
// localStorage under USERS_KEY so synchronous reads work offline. A
// `profiles` row is auto-created for every new auth.users row by a DB
// trigger regardless of provider (see supabase/schema.sql), so email and
// Google accounts share the same backend identity and RLS policies.
(function () {
  "use strict";

  const USERS_KEY = "sat_auth_users_cache";
  const SESSION_KEY = "sat_auth_session";
  const listeners = [];

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
    if (!window.supabaseClient) return { ok: false, error: "Sign-up isn't available right now. Try again shortly." };
    const displayName = (name || "").trim() || email.split("@")[0];
    const { data, error } = await window.supabaseClient.auth.signUp({
      email,
      password,
      options: { data: { full_name: displayName } },
    });
    if (error) return { ok: false, error: error.message };
    // Supabase returns a user with no identities (and no error) when the
    // email already belongs to a confirmed account — a deliberate
    // anti-enumeration response, not a real new signup.
    if (data.user && data.user.identities && data.user.identities.length === 0) {
      return { ok: false, error: "An account with that email already exists." };
    }
    if (!data.session) {
      // This project requires email confirmation — there's no session
      // until the user clicks the link Supabase just emailed them.
      return { ok: true, pendingConfirmation: true };
    }
    await syncSupabaseSession(data.session);
    return { ok: true, user: getCurrentUser() };
  }

  async function signIn(email, password) {
    email = (email || "").trim().toLowerCase();
    if (!window.supabaseClient) return { ok: false, error: "Sign-in isn't available right now. Try again shortly." };
    const { data, error } = await window.supabaseClient.auth.signInWithPassword({ email, password });
    if (error) {
      return {
        ok: false,
        error: /invalid login credentials/i.test(error.message || "") ? "Incorrect email or password." : error.message,
      };
    }
    await syncSupabaseSession(data.session);
    return { ok: true, user: getCurrentUser() };
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

  // Mirrors a Supabase session (email/password or Google, from a fresh
  // sign-in or one already on file at page load) into our own {id, email,
  // name, provider, plan} shape and persists it under our normal
  // SESSION_KEY — this is what makes getCurrentUser() work without every
  // other call site needing to know Supabase exists.
  //
  // The plan/name of record lives in the `profiles` table (a row
  // auto-created by a DB trigger on first sign-in, any provider — see
  // supabase/schema.sql), not localStorage, so it follows the user across
  // browsers/devices. localStorage still gets a copy for the synchronous
  // getCurrentUser() reads the rest of the app relies on.
  async function syncSupabaseSession(session) {
    const authUser = session && session.user;
    const email = authUser && authUser.email && authUser.email.toLowerCase();
    if (!email) return;
    const provider = (authUser.app_metadata && authUser.app_metadata.provider) || "email";
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
    users[email] = { name, provider, plan, createdAt, avatarUrl, avatarColor };
    saveUsers(users);
    setSession({ id: authUser.id, email, name, provider, plan, createdAt, avatarUrl, avatarColor });
  }

  // On load, adopt any Supabase session already on file (a returning
  // user, or the redirect straight back from Google's consent screen),
  // then keep listening in case one arrives or ends later.
  function initSupabaseAuth() {
    if (!window.supabaseClient) return;
    window.supabaseClient.auth.getSession().then(({ data }) => syncSupabaseSession(data.session));
    window.supabaseClient.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") syncSupabaseSession(session);
      else if (event === "SIGNED_OUT") {
        if (getCurrentUser()) signOut();
      }
    });
  }

  // Demo stand-in for a real upgrade flow (Stripe checkout, etc.) — just
  // flips the current user's plan. No payment is collected. This still
  // writes through to the account's `profiles` row so the plan sticks
  // across browsers/devices, not just this one's localStorage.
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
    if (user.id && window.supabaseClient) {
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

  // Renames the current account, writing through to `profiles.name`
  // (best-effort) so it follows the user across devices.
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
    if (user.id && window.supabaseClient) {
      try {
        await window.supabaseClient.from("profiles").update({ name }).eq("id", user.id);
      } catch (e) {
        // Best-effort — the local session already has the new name.
      }
    }
    return { ok: true, user: updated };
  }

  // Sets the account's profile picture from a data URL (already resized/
  // compressed client-side — see resizeImageFile in app.js), uploaded to
  // the `avatars` Supabase Storage bucket (one file per user id); the
  // resulting public URL is written to `profiles.avatar_url` — see
  // supabase/schema.sql for the bucket + storage policies this needs.
  async function updateAvatar(dataUrl) {
    const user = getCurrentUser();
    if (!user) return { ok: false, error: "Log in first." };
    let avatarUrl = dataUrl;
    if (user.id && window.supabaseClient) {
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
    if (user.id && window.supabaseClient) {
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
    // Also end the underlying Supabase session so the account doesn't just
    // come back on the next page load via initSupabaseAuth().
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
