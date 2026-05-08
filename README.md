# Marvel Multiverse Portal

A static, single-page web app that serves as a complete reference portal for every film, TV series, one-shot, and animated special based on Marvel Comics. No build step, no framework, no server — open `index.html` in any browser and it works.

---

## What it is

A searchable, filterable catalogue of ~100 Marvel titles spanning:

- **MCU** — every Phase 1–6 film, every Disney+ series, all five one-shots, all animated Marvel Studios shows (What If…?, X-Men '97, Marvel Zombies, Your Friendly Neighborhood Spider-Man, Eyes of Wakanda)
- **Marvel Television** — Agents of S.H.I.E.L.D., Agent Carter, Inhumans, Cloak & Dagger, Runaways, Helstrom
- **Netflix Defenders Saga** — Daredevil, Jessica Jones, Luke Cage, Iron Fist, The Defenders, The Punisher
- **Sony's Spider-Man Universe** — Raimi trilogy, Webb's Amazing 1+2, both Spider-Verse animated films, Venom trilogy, Morbius, Madame Web, Kraven the Hunter
- **Fox X-Men Universe** — full theatrical run (X-Men 1–3, Origins, First Class, Days of Future Past, Apocalypse, Dark Phoenix, New Mutants), both Wolverine sequels, Logan, Deadpool 1+2, plus Legion and The Gifted TV series
- **Blade Trilogy** + Spike TV series
- **Pre-MCU theatrical** — Howard the Duck (1986), 1989/1990/2004/2008 Punisher, 2003 Daredevil & Hulk, Elektra, Fantastic Four (2005/2007/2015), Ghost Rider 1+2, 1990 Captain America
- **Classic TV** — 1977 Incredible Hulk, 1977 Amazing Spider-Man, 1978 Doctor Strange, 1992 X-Men: The Animated Series, 1994 Spider-Man: The Animated Series

Each entry includes type, studio, universe/saga, phase, release date, runtime, director, and synopsis.

---

## What we've built so far

### Core app

| File | Purpose |
|---|---|
| `index.html` | Page structure — hero, filter controls, card grid, modals |
| `styles.css` | Full dark-theme UI with gradient card families per studio |
| `data.js` | Master catalogue (~100 entries) + unlock map + helpers |
| `app.js` | All rendering, filtering, search, sort, modal, IMDb, spoiler logic |

### Features

**Search & filter**
- Free-text search across title, director, and synopsis
- Multi-select chip filters for Type, Universe, Saga, and Studio
- Sort by release date (oldest/newest) or title (A–Z / Z–A)
- Result count that updates live

**Where to watch (UK region — early 2026 snapshot)**
- Streaming services (Disney+, Netflix, NOW, etc.)
- Digital purchase / rental platforms (Apple TV, Amazon Video, Sky Store, Microsoft Store, Google Play)
- Physical formats (DVD / Blu-ray / 4K UHD Blu-ray / Steelbook editions)
- Colour-coded in the detail panel: green = streaming, blue = purchase, gold = physical

**IMDb integration (OMDb API)**
- Lazy-fetched when you open a card's detail panel — doesn't burn the daily quota on page load
- Cached in `localStorage` under `mcu-portal-imdb-cache-v1` so each title is only fetched once
- Displays: IMDb rating + vote count, Rotten Tomatoes score, Metacritic score, MPAA/BBFC rating, genre, full cast, writer, awards, full plot, and a direct link to the IMDb page
- Also loads the official poster image from OMDb to replace the gradient card placeholder inside the modal
- API key is stored in `app.js` near the bottom (`const OMDB_KEY`); swap it anytime at omdbapi.com (free tier, 1,000 requests/day)

**Watch progress & spoiler lock**
- On first visit, a questionnaire modal asks "Where are you in the MCU?" with 9 milestone options (New → Fully caught up)
- Choice persists in `localStorage` under `mcu-portal-progress-v1`
- MCU titles above the user's tier have their cards blurred with a 🔒 overlay
- Clicking a locked card shows a spoiler warning; user can choose to reveal it individually
- Revealing a card un-blurs it on the grid for that session
- A "Watch progress" button in the controls bar reopens the questionnaire anytime
- Non-MCU titles (Sony, Fox, Netflix Defenders, classic TV, etc.) are never locked — they don't share continuity with the MCU

**Tier system (MCU only)**

| Tier | Milestone | Unlocks |
|---|---|---|
| 0 | New to the MCU | Phase 1 films + one-shots |
| 1 | Through The Avengers (2012) | Phase 2 openers |
| 2 | Through Age of Ultron (2015) | Phase 2 tail + Phase 3 openers |
| 3 | Through Civil War (2016) | Phase 3 lead-ins |
| 4 | Through Infinity War (2018) | Pre-Endgame Phase 3 |
| 5 | Through Endgame (2019) | Most of Phase 4 |
| 6 | Through No Way Home (2021) | Phase 4 tail |
| 7 | Through Loki S2 (2023) | Most of Phase 5 |
| 8 | Fully caught up | Everything |

---

## File structure

```
mcu-portal/
├── index.html      — page shell
├── styles.css      — all styling
├── data.js         — catalogue, unlock map, tier labels, helpers
├── app.js          — all interactivity
└── README.md       — this file
```

---

## What's planned / left to do

### Content gaps
- Older animated series: Avengers: Earth's Mightiest Heroes, Avengers Assemble, Hulk and the Agents of S.M.A.S.H., Wolverine and the X-Men, Spider-Man Unlimited, Ultimate Spider-Man, Marvel Anime series
- Miscellaneous TV movies: 1979 Captain America TV movies, Generation X (1996)
- Punisher: Dirty Laundry short film (2012)
- The unreleased 1994 Roger Corman Fantastic Four
- Upcoming releases: Avengers: Doomsday (2026), Avengers: Secret Wars (2027), Spider-Man: Beyond the Spider-Verse

### Streaming improvements
- **Region selector** — toggle between UK and US (and potentially other regions) without reloading
- **Live availability** — integrate JustWatch or TMDB's watch provider API so streaming info is always accurate rather than a snapshot
- Flag stale entries with a "verify" badge when data is older than X months

### Watch progress
- Per-item "Mark as watched" checkboxes to track individual progress rather than just milestone tiers
- A progress bar showing how much of the MCU the user has completed
- Recommended watch order view (MCU canonical order, release order, and a curated "best of" path for newcomers)
- More granular spoiler dependencies (e.g. Doctor Strange in the Multiverse of Madness requires both WandaVision and No Way Home)

### UI / UX
- Poster images for all cards (currently only shown inside the modal via OMDb); could pre-fetch and cache for the grid
- Dark / light theme toggle
- Mobile layout polish — card grid and filter chips on smaller screens
- Keyboard navigation for the card grid
- "Surprise me" button that opens a random title the user hasn't seen

### PWA / offline
- Service worker to cache the app shell and IMDb data for offline use
- Install-to-home-screen support (Web App Manifest)

### Data quality
- IMDb ID field on each catalogue entry for guaranteed OMDb lookups (currently relies on title+year search which can mismatch multi-season shows)
- Content advisory / trigger warnings
- Episode count and season breakdown for TV series
