# SAT ScoreBoost

Free, Bluebook-style digital SAT practice — inspired by [1600.lol](https://1600.lol).
A self-contained static site: no build step, no backend required to practice.

## Features

- **Three practice modes** — Reading & Writing, Math, or a mixed Full Practice set
- **Bluebook-style question UI** — passage display, A–D choices, and a live countdown timer (90s per question)
- **Answer elimination** (cross-out tool) and **mark for review**
- **Instant Check** — reveals the correct answer and an explanation as you go
- **Results screen** — animated score ring, correct/incorrect breakdown, a 200–800 section score estimate (×2 for the full test), and a clickable per-question review
- **Lifetime stats** — sessions + accuracy
- **Profile dropdown** — a topbar menu linking to two pages:
  - **Streak & Stats** — a daily streak (kept alive by answering at least one question a day), best-streak tracking, a 7-day activity view, and today's question count
  - **Badges** — five-tier (Bronze → Diamond) achievements for total questions answered, Math questions, Reading & Writing questions, and longest streak
- **Login (demo)** — practice works fully as a guest, but progress only survives a page reload/new tab once you're logged in:
  - Guests: progress lives in `sessionStorage` — real within the tab, gone once it's closed
  - Logged in: progress lives in `localStorage`, scoped per account, so it survives across visits
  - Email/password and a "Continue with Google (demo)" option are both **local-only stand-ins** (see `js/auth.js`) — no real backend or OAuth yet. Meant to be swapped for real Firebase Authentication later.
- **Keyboard shortcuts** — `1`–`4` to answer, `←`/`→` to navigate, `M` to mark for review
- Answer choices are **shuffled per question**, so the correct option isn't always in the same position

## Running locally

Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8731
# then visit http://localhost:8731/
```

## Project structure

```
index.html        # landing, exam, results, and modal shells
css/styles.css    # dark, Bluebook-inspired theme
js/questions.js   # question bank (Reading & Writing + Math)
js/auth.js        # demo local-only auth (email/password + Google stand-in)
js/app.js         # practice engine (timer, scoring, navigation, persistence)
```

## Disclaimer

Not affiliated with the College Board. SAT® is a trademark of the College Board.
