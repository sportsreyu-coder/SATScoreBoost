// SAT ScoreBoost — Lessons content
//
// Structured the same way the official digital SAT is: one entry per College
// Board domain, each holding a set of lessons. `skill` on every lesson
// matches the `skill` field on QUESTIONS exactly, so a lesson can hand off
// straight into a filtered practice set — even when several lessons share
// the same skill (deeper sub-lessons on the same official CB skill).
//
// Tiering: every skill in every domain gets one `tier: "free"` foundations
// lesson plus two `tier: "pro"` sub-lessons that go deeper — advanced
// strategies, edge cases, and harder worked examples for that same skill.
//
// Content itself lives in js/lessons/*.js (one file per domain, mirroring
// js/questions/*.js), each of which pushes its domain group onto this array.
const LESSONS = [];
