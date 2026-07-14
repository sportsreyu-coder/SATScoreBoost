// SAT ScoreBoost — demo authentication
//
// Local-only stand-in for real accounts: "users" and the active session are
// just JSON in localStorage, and password hashing is client-side SHA-256 —
// fine for testing the login UX, not a real security boundary. Intended to
// be swapped for Firebase Authentication later behind this same interface
// (signUp/signIn/signInWithGoogleDemo/signOut/getCurrentUser/onChange).
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
    users[email] = { name: displayName, passwordHash: await hashPassword(password), provider: "email" };
    saveUsers(users);
    const user = { email, name: displayName, provider: "email" };
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
    const user = { email, name: record.name, provider: "email" };
    setSession(user);
    return { ok: true, user };
  }

  // Stand-in for real Google Sign-In until OAuth is wired up — just creates
  // (or reuses) a local demo account under a synthetic @demo.google address.
  function signInWithGoogleDemo(name) {
    const displayName = (name || "").trim() || "Demo User";
    const slug = displayName.toLowerCase().replace(/[^a-z0-9]+/g, ".").replace(/^\.+|\.+$/g, "") || "demo.user";
    const email = `${slug}@demo.google`;
    const users = loadUsers();
    if (!users[email]) {
      users[email] = { name: displayName, provider: "google-demo" };
      saveUsers(users);
    }
    const user = { email, name: users[email].name, provider: "google-demo" };
    setSession(user);
    return { ok: true, user };
  }

  function signOut() {
    try {
      localStorage.removeItem(SESSION_KEY);
    } catch (e) { /* localStorage unavailable */ }
    listeners.forEach((fn) => fn(null));
  }

  function onChange(fn) {
    listeners.push(fn);
  }

  window.Auth = {
    signUp,
    signIn,
    signInWithGoogleDemo,
    signOut,
    getCurrentUser,
    onChange,
    isValidEmail,
  };
})();
