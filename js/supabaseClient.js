// SAT ScoreBoost — Supabase client
//
// Anon/public key: safe to ship in client-side code by design, gated by
// Supabase Row Level Security policies on the backend (not a secret).
(function () {
  "use strict";

  const SUPABASE_URL = "https://hwbhcisozlakelijhxwr.supabase.co";
  const SUPABASE_ANON_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3YmhjaXNvemxha2VsaWpoeHdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ0MTIzNzcsImV4cCI6MjA5OTk4ODM3N30.5EldDtLGqmNtgfCsK_1g1FSKyi1l_NwH-zKajzLOGc8";

  window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
})();
