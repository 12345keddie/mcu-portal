// Marvel Multiverse Portal — UI logic

const state = {
  search: "",
  sort: "date-asc",
  filters: { type: new Set(), universe: new Set(), saga: new Set(), studio: new Set(), streaming: new Set() },
  userTier: null,           // current spoiler tier (0..8); null = never set
  viewMode: "all",          // "mcu" | "all" | "custom"
  displayLayout: "grid",    // "grid" | "timeline"
  customGroups: new Set(["mcu","marvel-tv","netflix","sony","fox","classic"]),
  watchedIds: new Set(),    // per-item watched tracking
  playlist: new Set(),      // bookmarked items
  showOnlyPlaylist: false,  // filter state
  region: "GB",             // JustWatch region: "GB" | "US"
  revealedIds: new Set()    // items the user explicitly chose to reveal despite spoiler
};

const PROGRESS_KEY      = "mcu-portal-progress-v1";
const VIEW_MODE_KEY     = "mcu-portal-view-v1";
const DISPLAY_LAYOUT_KEY= "mcu-portal-layout-v1";
const CUSTOM_GROUPS_KEY = "mcu-portal-groups-v1";
const WATCHED_KEY       = "mcu-portal-watched-v1";
const REGION_KEY        = "mcu-portal-region-v1";
(() => {
  const saved = localStorage.getItem(PROGRESS_KEY);
  if (saved !== null) state.userTier = parseInt(saved, 10);
  const savedView = localStorage.getItem(VIEW_MODE_KEY);
  if (savedView) state.viewMode = savedView;
  const savedLayout = localStorage.getItem(DISPLAY_LAYOUT_KEY);
  if (savedLayout) state.displayLayout = savedLayout;
  const savedGroups = localStorage.getItem(CUSTOM_GROUPS_KEY);

  if (savedGroups) {
    try { state.customGroups = new Set(JSON.parse(savedGroups)); } catch (e) {}
  }
  const savedWatched = localStorage.getItem(WATCHED_KEY);
  if (savedWatched) {
    try { state.watchedIds = new Set(JSON.parse(savedWatched)); } catch (e) {}
  }
  const savedPlaylist = localStorage.getItem("mcu-portal-playlist-v1");
  if (savedPlaylist) {
    try { state.playlist = new Set(JSON.parse(savedPlaylist)); } catch (e) {}
  }
  const savedRegion = localStorage.getItem(REGION_KEY);
  if (savedRegion) state.region = savedRegion;
})();

function checkShareLink() {
  const params = new URLSearchParams(window.location.search);
  const shareData = params.get('share');
  if (!shareData) return;
  
  try {
    const payload = JSON.parse(atob(shareData));
    const confirmImport = confirm("You opened a shared watch-progress link. Do you want to apply this progress to your profile? (This will overwrite your current progress).");
    if (confirmImport) {
      if (payload.t !== undefined) state.userTier = payload.t;
      if (payload.v !== undefined) state.viewMode = payload.v;
      if (payload.g !== undefined) state.customGroups = new Set(payload.g);
      if (payload.w !== undefined) {
        state.watchedIds.clear();
        payload.w.forEach(idx => {
          if (CATALOG[idx]) state.watchedIds.add(CATALOG[idx].id);
        });
      }
      
      // Save all to localStorage
      if (state.userTier !== null) localStorage.setItem(PROGRESS_KEY, String(state.userTier));
      localStorage.setItem(VIEW_MODE_KEY, state.viewMode);
      localStorage.setItem(CUSTOM_GROUPS_KEY, JSON.stringify([...state.customGroups]));
      localStorage.setItem(WATCHED_KEY, JSON.stringify([...state.watchedIds]));
      
      alert("Shared progress applied successfully!");
    }
  } catch(e) {
    alert("Invalid or corrupted share link.");
  }
  
  // Clean up URL
  const url = new URL(window.location.href);
  url.searchParams.delete('share');
  window.history.replaceState({}, document.title, url.toString());
}
checkShareLink();

function saveWatched() {
  try { localStorage.setItem(WATCHED_KEY, JSON.stringify([...state.watchedIds])); } catch (e) {}
}
function toggleWatched(id) {
  if (state.watchedIds.has(id)) state.watchedIds.delete(id);
  else state.watchedIds.add(id);
  saveWatched();
}

// ---------- Poster cache ----------
const POSTER_CACHE_KEY = "mcu-portal-poster-cache-v1";
const posterCache = (() => {
  try { return JSON.parse(localStorage.getItem(POSTER_CACHE_KEY) || "{}"); }
  catch (e) { return {}; }
})();

// One-time targeted eviction: flush stale wrong-match entries from the poster cache.
// Add an item's id here if it was ever fetched by a bad title-search before its imdbId was pinned.
const POSTER_STALE_IDS = ["the-consultant-2011", "thors-hammer-2011", "agent-carter-one-shot-2013", "all-hail-the-king-2014"];
(() => {
  let dirty = false;
  POSTER_STALE_IDS.forEach(id => {
    if (posterCache[id] !== undefined) { delete posterCache[id]; dirty = true; }
  });
  if (dirty) savePosterCache();
})();

function savePosterCache() {
  try { localStorage.setItem(POSTER_CACHE_KEY, JSON.stringify(posterCache)); } catch (e) {}
}

async function fetchPoster(item) {
  // Local poster takes absolute priority — no API call needed
  if (item.localPoster) {
    posterCache[item.id] = item.localPoster;
    savePosterCache();
    return item.localPoster;
  }
  if (posterCache[item.id] !== undefined) return posterCache[item.id]; // "" means no poster
  const t = normalizeTitle(item.title);
  const tries = [
    // If a pinned IMDb ID exists, use it first — avoids title-search mismatch
    ...(item.imdbId ? [`https://www.omdbapi.com/?apikey=${OMDB_KEY}&i=${item.imdbId}&plot=short`] : []),
    `https://www.omdbapi.com/?apikey=${OMDB_KEY}&t=${encodeURIComponent(t)}&y=${item.year}&plot=short`,
    `https://www.omdbapi.com/?apikey=${OMDB_KEY}&t=${encodeURIComponent(t)}&plot=short`,
  ];
  for (const url of tries) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response !== "False" && data.Poster && data.Poster !== "N/A") {
        posterCache[item.id] = data.Poster;
        savePosterCache();
        return data.Poster;
      }
    } catch (e) { /* try next */ }
  }
  posterCache[item.id] = ""; // mark as checked, no poster found
  savePosterCache();
  return "";
}

function applyPosterToCard(cardEl, posterUrl) {
  const posterDiv = cardEl.querySelector(".card-poster");
  if (!posterDiv || posterDiv.querySelector(".poster-img")) return; // already applied
  if (!posterUrl) return;
  const img = document.createElement("img");
  img.className = "poster-img";
  img.src = posterUrl;
  img.alt = "";
  img.loading = "lazy";
  img.decoding = "async";
  posterDiv.insertBefore(img, posterDiv.firstChild);
  posterDiv.classList.add("has-poster");
}

function prefetchPosters(items) {
  // Stagger requests to avoid hammering the API
  items.forEach((item, i) => {
    if (posterCache[item.id] !== undefined) return; // already cached
    setTimeout(() => fetchPoster(item), i * 120);
  });
}

const grid = document.getElementById("grid");
const resultCount = document.getElementById("result-count");
const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");
const clearBtn = document.getElementById("clear-filters");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");

// ---------- Build filter chips ----------
function uniqueValues(key) {
  const set = new Set();
  CATALOG.forEach(item => {
    const val = item[key];
    if (Array.isArray(val)) {
      val.forEach(v => set.add(v));
    } else if (val) {
      set.add(val);
    }
  });
  return [...set].sort();
}

const filterLabels = {
  type: "Type", universe: "Universe", saga: "Saga / Era", studio: "Studio", streaming: "Streaming"
};

function updateDropdownButton(filterKey) {
  const btn = document.querySelector(`#dropdown-${filterKey} .dropdown-btn`);
  if (!btn) return;
  const count = state.filters[filterKey].size;
  if (count > 0) {
    btn.textContent = `${filterLabels[filterKey]} (${count}) ▾`;
    btn.classList.add("has-selections");
  } else {
    btn.textContent = `${filterLabels[filterKey]} ▾`;
    btn.classList.remove("has-selections");
  }
}

function buildChips(filterKey) {
  const container = document.querySelector(`.chips[data-filter="${filterKey}"]`);
  const values = uniqueValues(filterKey);
  container.innerHTML = "";
  values.forEach(val => {
    const chip = document.createElement("button");
    chip.className = "chip";
    chip.textContent = val;
    chip.dataset.value = val;
    chip.addEventListener("click", () => {
      const filterSet = state.filters[filterKey];
      if (filterSet.has(val)) {
        filterSet.delete(val);
        chip.classList.remove("active");
      } else {
        filterSet.add(val);
        chip.classList.add("active");
      }
      updateDropdownButton(filterKey);
      render();
    });
    container.appendChild(chip);
  });
}

Object.keys(filterLabels).forEach(buildChips);

// Dropdown interactions
document.addEventListener("click", e => {
  if (!e.target.closest('.filter-dropdown')) {
    document.querySelectorAll('.dropdown-content.open').forEach(el => el.classList.remove('open'));
  }
});

document.querySelectorAll('.filter-dropdown').forEach(dropdown => {
  const btn = dropdown.querySelector('.dropdown-btn');
  const content = dropdown.querySelector('.dropdown-content');
  if (btn && content) {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      // Close others
      document.querySelectorAll('.dropdown-content.open').forEach(el => {
        if (el !== content) el.classList.remove('open');
      });
      content.classList.toggle('open');
    });
  }
});

if (clearBtn) {
  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    state.search = "";
    Object.values(state.filters).forEach(set => set.clear());
    document.querySelectorAll(".chip.active").forEach(chip => chip.classList.remove("active"));
    Object.keys(filterLabels).forEach(updateDropdownButton);
    render();
  });
}

// ---------- Content groups (for Custom view mode) ----------
const MCU_UNIVERSES    = ["MCU"];
const MARV_TV_UNIVERSES = ["Marvel Television"];
const NETFLIX_UNIVERSES = ["Netflix Defenders"];
const SONY_UNIVERSES   = ["Raimi Spider-Man","Webb Spider-Man","Sony's Spider-Man Universe","Spider-Verse Animated"];
const FOX_UNIVERSES    = ["Fox X-Men","Fox X-Men / Animated"];

const CONTENT_GROUPS = [
  { id: "mcu",      icon: "🎬", label: "MCU",                 desc: "Marvel Studios — all phases, films & Disney+ shows",
    test: i => i.universe === "MCU" },
  { id: "marvel-tv",icon: "📺", label: "Marvel Television",    desc: "Agents of S.H.I.E.L.D., Agent Carter, Inhumans & more",
    test: i => i.universe === "Marvel Television" },
  { id: "netflix",  icon: "🔴", label: "Netflix Defenders",    desc: "Daredevil, Jessica Jones, Luke Cage, Iron Fist & The Punisher",
    test: i => i.universe === "Netflix Defenders" },
  { id: "sony",     icon: "🕷️", label: "Sony Spider-Man",     desc: "Raimi trilogy, Webb films, SSU (Venom/Morbius), Spider-Verse animated",
    test: i => SONY_UNIVERSES.includes(i.universe) },
  { id: "fox",      icon: "⚡", label: "Fox X-Men",           desc: "Full X-Men theatrical run, Wolverine films, Deadpool & Logan",
    test: i => FOX_UNIVERSES.includes(i.universe) },
  { id: "classic",  icon: "📼", label: "Classic & Pre-MCU",   desc: "Blade trilogy, 90s animated series, pre-MCU theatrical oddities",
    test: i => ![...MCU_UNIVERSES,...MARV_TV_UNIVERSES,...NETFLIX_UNIVERSES,...SONY_UNIVERSES,...FOX_UNIVERSES].includes(i.universe) }
];

function itemGroupId(item) {
  const g = CONTENT_GROUPS.find(g => g.test(item));
  return g ? g.id : null;
}

// ---------- Filtering & sorting ----------
function passesFilters(item) {
  if (state.showOnlyPlaylist && !state.playlist.has(item.id)) return false;
  
  // View mode gate
  if (state.viewMode === "mcu" && item.universe !== "MCU") return false;
  if (state.viewMode === "custom") {
    const gid = itemGroupId(item);
    if (!gid || !state.customGroups.has(gid)) return false;
  }
  if (state.search) {
    const q = state.search.toLowerCase();
    let actors = "";
    if (imdbCache[item.id] && !imdbCache[item.id]._failed) {
      actors = imdbCache[item.id].Actors || "";
    }
    const haystack = `${item.title} ${item.director || ""} ${item.synopsis || ""} ${actors}`.toLowerCase();
    if (!haystack.includes(q)) return false;
  }
  for (const key of ["type", "universe", "saga", "studio", "streaming"]) {
    const set = state.filters[key];
    if (set.size > 0) {
      if (Array.isArray(item[key])) {
        const hasAny = item[key].some(v => set.has(v));
        if (!hasAny) return false;
      } else {
        if (!set.has(item[key])) return false;
      }
    }
  }
  return true;
}

function sortItems(items) {
  const copy = [...items];
  switch (state.sort) {
    case "date-asc":
      return copy.sort((a, b) => a.releaseDate.localeCompare(b.releaseDate));
    case "date-desc":
      return copy.sort((a, b) => b.releaseDate.localeCompare(a.releaseDate));
    case "title-asc":
      return copy.sort((a, b) => a.title.localeCompare(b.title));
    case "title-desc":
      return copy.sort((a, b) => b.title.localeCompare(a.title));
  }
  return copy;
}

// ---------- Rendering ----------
function render() {
  const items = sortItems(CATALOG.filter(passesFilters));
  resultCount.textContent = items.length;
  
  const playlistToggleBtn = document.getElementById("playlist-toggle-btn");
  if (playlistToggleBtn) {
    playlistToggleBtn.textContent = `❤️ Playlist (${state.playlist.size})`;
    playlistToggleBtn.classList.toggle("active", state.showOnlyPlaylist);
  }
  
  const tlView = document.getElementById("timeline-view");
  
  if (state.displayLayout === "timeline") {
    grid.classList.add("hidden");
    tlView.classList.remove("hidden");
    renderTimeline(items);
  } else {
    tlView.classList.add("hidden");
    grid.classList.remove("hidden");
    grid.innerHTML = "";
    items.forEach(item => grid.appendChild(makeCard(item)));
  }
  
  prefetchPosters(items);
  updateCompletionBar();
}

function renderTimeline(items) {
  const tlView = document.getElementById("timeline-view");
  tlView.innerHTML = "";
  
  if (items.length === 0) return;

  // For timeline view, we strongly prefer chronological sort.
  // If the user has a title sort selected, we still group by year, which might look weird,
  // but it's consistent. Best is to force date-asc for the timeline logic locally.
  const tlItems = [...items].sort((a, b) => a.releaseDate.localeCompare(b.releaseDate));

  // Group by year
  const groups = {};
  tlItems.forEach(item => {
    if (!groups[item.year]) groups[item.year] = [];
    groups[item.year].push(item);
  });

  Object.keys(groups).sort().forEach(year => {
    const groupWrap = document.createElement("div");
    groupWrap.className = "timeline-year-group";
    
    const spine = document.createElement("div");
    spine.className = "timeline-spine";
    spine.innerHTML = `<div class="timeline-year-label">${year}</div>`;
    
    const tGrid = document.createElement("div");
    tGrid.className = "timeline-grid";
    groups[year].forEach(item => tGrid.appendChild(makeCard(item)));
    
    groupWrap.appendChild(spine);
    groupWrap.appendChild(tGrid);
    tlView.appendChild(groupWrap);
  });
}

// ---------- Granular spoiler check ----------
function isSpoiler(item) {
  if (state.userTier === null) return false;
  if (state.revealedIds.has(item.id)) return false;
  if (getUnlock(item) > state.userTier) return true;
  // Check granular requires[] — item is locked if ANY prerequisite is still locked
  if (item.requires && item.requires.length) {
    return item.requires.some(reqId => {
      const req = CATALOG.find(i => i.id === reqId);
      return req ? isSpoiler(req) : false;
    });
  }
  return false;
}

// ---------- Completion progress bar ----------
function updateCompletionBar() {
  const mcuItems = CATALOG.filter(i => i.universe === "MCU");
  const watched  = mcuItems.filter(i => state.watchedIds.has(i.id)).length;
  const total    = mcuItems.length;
  const pct      = total ? Math.round((watched / total) * 100) : 0;
  const fill     = document.getElementById("completion-bar-fill");
  const label    = document.getElementById("completion-label");
  const wrap     = document.getElementById("completion-bar-wrap");
  if (!fill || !label || !wrap) return;
  fill.style.width = pct + "%";
  label.textContent = `${watched} / ${total} MCU titles watched (${pct}%)`;
  wrap.classList.toggle("hidden-bar", watched === 0);
}

function makeCard(item) {
  const card = document.createElement("div");
  const spoiler = isSpoiler(item);
  const watched = state.watchedIds.has(item.id);
  const bookmarked = state.playlist.has(item.id);
  card.className = "card" + (spoiler ? " spoiler" : "") + (watched ? " watched" : "");
  card.dataset.itemId = item.id;
  const cls = posterClass(item);
  const cachedPoster = item.localPoster || posterCache[item.id] || "";
  const hasPoster = !!cachedPoster;

  const cd = getCountdownParts(item.releaseDate);
  const yearHtml = cd 
    ? `<div class="poster-year live-countdown countdown-short" data-countdown="${item.releaseDate}"></div>` 
    : `<div class="poster-year">${item.year}</div>`;

  const inner = `
    <div class="bookmark-btn ${bookmarked ? 'bookmarked' : ''}" data-action="bookmark" data-id="${item.id}" title="Bookmark">
      ${bookmarked ? '♥' : '♡'}
    </div>
    <div class="card-poster ${cls}${hasPoster ? " has-poster" : ""}">
      ${hasPoster ? `<img class="poster-img" src="${escapeHtml(cachedPoster)}" alt="" loading="lazy" decoding="async">` : ""}
      <span class="type-badge">${item.type}</span>
      ${watched ? '<span class="watched-badge">✓ Watched</span>' : ""}
      <div class="glare"></div>
      <div class="poster-content">
        <h3 class="poster-title">${escapeHtml(item.title)}</h3>
        ${yearHtml}
      </div>
    </div>
    <div class="card-meta">
      <span>${escapeHtml(item.universe)}</span>
      <span>${item.phase ? "Phase " + item.phase : ""}</span>
    </div>
  `;
  if (spoiler) {
    card.innerHTML = inner + `
      <div class="spoiler-lock-overlay">
        <div class="spoiler-lock-icon">🔒</div>
        <div class="spoiler-lock-text">Spoiler-locked</div>
        <div class="spoiler-lock-sub">Click to reveal</div>
      </div>`;
  } else {
    card.innerHTML = inner;
  }

  // Small watch-checkbox button in meta row — stops propagation so it doesn't open the modal
  const metaRow = card.querySelector(".card-meta");
  const cb = document.createElement("button");
  cb.className = "watch-cb" + (watched ? " checked" : "");
  cb.title = watched ? "Mark as unwatched" : "Mark as watched";
  cb.textContent = watched ? "✓" : "○";
  cb.setAttribute("aria-label", cb.title);
  cb.addEventListener("click", e => {
    e.stopPropagation();
    toggleWatched(item.id);
    const isNow = state.watchedIds.has(item.id);
    card.classList.toggle("watched", isNow);
    cb.classList.toggle("checked", isNow);
    cb.textContent = isNow ? "✓" : "○";
    cb.title = isNow ? "Mark as unwatched" : "Mark as watched";
    let badge = card.querySelector(".watched-badge");
    if (isNow && !badge) {
      badge = document.createElement("span");
      badge.className = "watched-badge";
      badge.textContent = "✓ Watched";
      card.querySelector(".card-poster").appendChild(badge);
    } else if (!isNow && badge) {
      badge.remove();
    }
    updateCompletionBar();
  });
  metaRow.appendChild(cb);

  // Background poster fetch
  if (!hasPoster && posterCache[item.id] === undefined) {
    fetchPoster(item).then(url => {
      if (!url) return;
      const liveCard = grid.querySelector(`[data-item-id="${item.id}"]`);
      if (liveCard) applyPosterToCard(liveCard, url);
    });
  }

  card.addEventListener("click", () => {
    if (isSpoiler(item)) showSpoilerWarning(item);
    else openModal(item);
  });

  // 3D Tilt Effect
  card.addEventListener("mousemove", e => {
    if (window.innerWidth <= 900) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Mild tilt: +/- 8 degrees
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    
    const glare = card.querySelector('.glare');
    if (glare) {
      // Move a large radial gradient so its center follows the mouse
      glare.style.transform = `translate(${x - rect.width}px, ${y - rect.height}px)`;
      glare.style.opacity = '0.4';
    }
  });

  card.addEventListener("mouseenter", () => {
    if (window.innerWidth <= 900) return;
    card.style.transition = "none";
    const glare = card.querySelector('.glare');
    if (glare) glare.style.transition = "none";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transition = "transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), border-color 0.4s, box-shadow 0.4s";
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    const glare = card.querySelector('.glare');
    if (glare) {
      glare.style.transition = "opacity 0.4s ease";
      glare.style.opacity = '0';
    }
  });

  const bBtn = card.querySelector('.bookmark-btn');
  if (bBtn) {
    bBtn.addEventListener("click", e => {
      e.stopPropagation();
      if (state.playlist.has(item.id)) state.playlist.delete(item.id);
      else state.playlist.add(item.id);
      try { localStorage.setItem("mcu-portal-playlist-v1", JSON.stringify([...state.playlist])); } catch(err){}
      render();
    });
  }

  return card;
}

function showSpoilerWarning(item) {
  const tierLabel = TIER_LABELS[state.userTier] || "your current progress";
  modalBody.innerHTML = `
    <div class="spoiler-warning">
      <div class="warning-icon">⚠️</div>
      <h2>Spoilers ahead</h2>
      <p class="warning-sub">
        <strong>${escapeHtml(item.title)}</strong> (${item.year}) is beyond your watch progress
        <em>(${escapeHtml(tierLabel)})</em>.<br>
        Reading the synopsis or cast may spoil events from earlier titles you haven't seen yet.
      </p>
      <div class="modal-actions">
        <button id="spoiler-cancel">Keep it hidden</button>
        <button id="spoiler-reveal" class="primary">Reveal anyway</button>
      </div>
    </div>
  `;
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  document.getElementById("spoiler-cancel").addEventListener("click", closeModal);
  document.getElementById("spoiler-reveal").addEventListener("click", () => {
    state.revealedIds.add(item.id);
    openModal(item);
    render();   // un-blur the card behind
  });
}

function openModal(item) {
  const runtime = typeof item.runtime === "number" ? `${item.runtime} min` : item.runtime;
  const subParts = [item.year, runtime, item.director].filter(Boolean);
  const badges = [
    item.type,
    item.universe,
    item.saga,
    item.phase ? "Phase " + item.phase : null,
    item.studio
  ].filter(Boolean);
  const watched = state.watchedIds.has(item.id);
  const bookmarked = state.playlist.has(item.id);

  // Build requires warning if item has unmet prerequisites
  let requiresHtml = "";
  if (item.requires && item.requires.length) {
    const unmet = item.requires
      .map(id => CATALOG.find(i => i.id === id))
      .filter(req => req && !state.watchedIds.has(req.id));
    if (unmet.length) {
      requiresHtml = `<div class="requires-warn">
        <strong>⚠ Watch first:</strong> ${unmet.map(r => escapeHtml(r.title)).join(" → ")}
      </div>`;
    }
  }

  const cd = getCountdownParts(item.releaseDate);
  const cdHtml = cd 
    ? `<div class="live-countdown countdown-long" data-countdown="${item.releaseDate}" style="color: var(--accent); font-weight: 700; margin-top: 4px; font-size: 0.85rem;"></div>`
    : "";

  modalBody.innerHTML = `
    <div class="modal-watched-row" style="display:flex; justify-content:space-between; align-items:center;">
      <button id="modal-watched-btn" class="modal-watched-btn${watched ? " on" : ""}">
        ${watched ? "✓ Watched" : "○ Mark as watched"}
      </button>
      <button id="modal-bookmark-btn" class="ghost-btn ${bookmarked ? 'bookmarked' : ''}" style="border:1px solid var(--border); border-radius:8px; padding:6px 12px;">
        ${bookmarked ? '♥ Bookmarked' : '♡ Add to Playlist'}
      </button>
    </div>
    <h2>${escapeHtml(item.title)}</h2>
    <div class="modal-sub">${subParts.map(escapeHtml).join(" • ")}</div>
    <div class="badge-row">
      ${badges.map(b => `<span class="badge">${escapeHtml(b)}</span>`).join("")}
    </div>
    ${requiresHtml}
    <p class="synopsis">${escapeHtml(item.synopsis)}</p>
    <div class="meta-grid">
      <span class="key">Released</span><span>${formatDate(item.releaseDate)}${cdHtml}</span>
      ${item.runtime ? `<span class="key">Runtime</span><span>${runtime}</span>` : ""}
      ${item.director ? `<span class="key">Director</span><span>${escapeHtml(item.director)}</span>` : ""}
    </div>
    <div id="cast-section"></div>
    <div id="watch-providers-section">
      <div class="watch-loading">Checking live availability…</div>
    </div>
    <div class="imdb-section" id="imdb-section">
      <h3 class="imdb-heading">IMDb</h3>
      <div class="imdb-loading">Loading IMDb data…</div>
    </div>
  `;
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  loadWatchProviders(item);
  loadImdbData(item);
  loadCastData(item);

  // Watched toggle in modal
  document.getElementById("modal-watched-btn").addEventListener("click", () => {
    toggleWatched(item.id);
    const isNow = state.watchedIds.has(item.id);
    const btn = document.getElementById("modal-watched-btn");
    if (btn) {
      btn.textContent = isNow ? "✓ Watched" : "○ Mark as watched";
      btn.classList.toggle("on", isNow);
    }
    // Sync card in background
    const liveCard = grid.querySelector(`[data-item-id="${item.id}"]`);
    if (liveCard) {
      liveCard.classList.toggle("watched", isNow);
      const cb = liveCard.querySelector(".watch-cb");
      if (cb) { cb.classList.toggle("checked", isNow); cb.textContent = isNow ? "✓" : "○"; }
      let badge = liveCard.querySelector(".watched-badge");
      if (isNow && !badge) {
        badge = document.createElement("span"); badge.className = "watched-badge"; badge.textContent = "✓ Watched";
        liveCard.querySelector(".card-poster").appendChild(badge);
      } else if (!isNow && badge) badge.remove();
    }
    updateCompletionBar();
  });

  document.getElementById("modal-bookmark-btn").addEventListener("click", () => {
    if (state.playlist.has(item.id)) state.playlist.delete(item.id);
    else state.playlist.add(item.id);
    try { localStorage.setItem("mcu-portal-playlist-v1", JSON.stringify([...state.playlist])); } catch(err){}
    
    const isNow = state.playlist.has(item.id);
    const btn = document.getElementById("modal-bookmark-btn");
    btn.textContent = isNow ? '♥ Bookmarked' : '♡ Add to Playlist';
    btn.classList.toggle("bookmarked", isNow);
    
    const liveCardBtn = grid.querySelector(`[data-item-id="${item.id}"] .bookmark-btn`);
    if (liveCardBtn) {
      liveCardBtn.classList.toggle("bookmarked", isNow);
      liveCardBtn.textContent = isNow ? '♥' : '♡';
    }
    render();
  });
}

function watchSection(title, list, cls) {
  const inner = (list && list.length)
    ? `<div class="watch-list">${list.map(p => `<span class="watch-pill ${cls}">${escapeHtml(p)}</span>`).join("")}</div>`
    : `<p class="watch-empty">Not currently available in this category.</p>`;
  return `<div class="watch-section"><h3>${title}</h3>${inner}</div>`;
}

function closeModal() {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}

modal.querySelector(".modal-close").addEventListener("click", closeModal);
modal.querySelector(".modal-backdrop").addEventListener("click", closeModal);
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});

// ---------- Watch Order Modal ----------
const watchOrderModal  = document.getElementById("watch-order-modal");
const watchOrderList   = document.getElementById("watch-order-list");
const watchOrderBtn    = document.getElementById("watch-order-btn");
const watchOrderClose  = document.getElementById("watch-order-close");

// Newcomer path: a curated essential-only list (IDs in recommended viewing order)
const NEWCOMER_PATH = [
  "iron-man-2008",
  "avengers-2012",
  "guardians-of-the-galaxy-2014",
  "avengers-age-of-ultron-2015",
  "captain-america-civil-war-2016",
  "spider-man-homecoming-2017",
  "thor-ragnarok-2017",
  "avengers-infinity-war-2018",
  "avengers-endgame-2019",
  "spider-man-far-from-home-2019",
  "wandavision-2021",
  "loki-s1-2021",
  "shang-chi-2021",
  "spider-man-no-way-home-2021",
  "doctor-strange-multiverse-madness-2022",
  "thor-love-and-thunder-2022",
  "black-panther-wakanda-forever-2022",
  "guardians-of-the-galaxy-3-2023",
  "loki-s2-2023",
  "deadpool-wolverine-2024",
  "captain-america-brave-new-world-2025",
  "thunderbolts-2025",
  "fantastic-four-first-steps-2025",
];

let currentWatchOrder = "canonical";

function buildWatchOrderList(order) {
  currentWatchOrder = order;
  let items;
  if (order === "newcomer") {
    items = NEWCOMER_PATH
      .map(id => CATALOG.find(i => i.id === id))
      .filter(Boolean);
  } else {
    const mcuItems = CATALOG.filter(i => i.universe === "MCU");
    if (order === "release") {
      items = [...mcuItems].sort((a, b) => a.releaseDate.localeCompare(b.releaseDate));
    } else {
      // Canonical = release order for MCU (same as release for now; could diverge with in-universe dates)
      items = [...mcuItems].sort((a, b) => a.releaseDate.localeCompare(b.releaseDate));
    }
  }

  const watched = items.filter(i => state.watchedIds.has(i.id)).length;
  const pct = items.length ? Math.round((watched / items.length) * 100) : 0;

  watchOrderList.innerHTML = `
    <div class="wo-progress">
      <div class="wo-progress-track"><div class="wo-progress-fill" style="width:${pct}%"></div></div>
      <span>${watched} / ${items.length} watched (${pct}%)</span>
    </div>
    <ol class="wo-items">
      ${items.map((item, idx) => {
        const isWatched = state.watchedIds.has(item.id);
        const isSpo = isSpoiler(item);
        return `<li class="wo-item${isWatched ? " watched" : ""}${isSpo ? " locked" : ""}" data-id="${item.id}">
          <span class="wo-num">${idx + 1}</span>
          <span class="wo-info">
            <span class="wo-title">${escapeHtml(item.title)}</span>
            <span class="wo-meta">${item.year} · ${item.type}</span>
          </span>
          <button class="wo-cb${isWatched ? " checked" : ""}" title="${isWatched ? "Mark unwatched" : "Mark watched"}">${isWatched ? "✓" : "○"}</button>
        </li>`;
      }).join("")}
    </ol>
  `;

  // Wire up item checkboxes
  watchOrderList.querySelectorAll(".wo-item").forEach(li => {
    const id  = li.dataset.id;
    const btn = li.querySelector(".wo-cb");
    btn.addEventListener("click", e => {
      e.stopPropagation();
      toggleWatched(id);
      const isNow = state.watchedIds.has(id);
      li.classList.toggle("watched", isNow);
      btn.classList.toggle("checked", isNow);
      btn.textContent = isNow ? "✓" : "○";
      btn.title = isNow ? "Mark unwatched" : "Mark watched";
      // Sync grid card
      const liveCard = grid.querySelector(`[data-item-id="${id}"]`);
      if (liveCard) {
        liveCard.classList.toggle("watched", isNow);
        const cb = liveCard.querySelector(".watch-cb");
        if (cb) { cb.classList.toggle("checked", isNow); cb.textContent = isNow ? "✓" : "○"; }
        let badge = liveCard.querySelector(".watched-badge");
        if (isNow && !badge) {
          badge = document.createElement("span"); badge.className = "watched-badge"; badge.textContent = "✓ Watched";
          liveCard.querySelector(".card-poster").appendChild(badge);
        } else if (!isNow && badge) badge.remove();
      }
      updateCompletionBar();
      // Refresh progress in the watch order list
      const wo = items.filter(i => state.watchedIds.has(i.id)).length;
      const p  = items.length ? Math.round((wo / items.length) * 100) : 0;
      const fill = watchOrderList.querySelector(".wo-progress-fill");
      const lbl  = watchOrderList.querySelector(".wo-progress span");
      if (fill) fill.style.width = p + "%";
      if (lbl)  lbl.textContent = `${wo} / ${items.length} watched (${p}%)`;
    });
    // Click row to open modal
    li.addEventListener("click", () => {
      const item = CATALOG.find(i => i.id === id);
      if (item) { closeWatchOrderModal(); if (isSpoiler(item)) showSpoilerWarning(item); else openModal(item); }
    });
  });
}

function openWatchOrderModal() {
  buildWatchOrderList(currentWatchOrder);
  watchOrderModal.classList.remove("hidden");
  watchOrderModal.setAttribute("aria-hidden", "false");
}
function closeWatchOrderModal() {
  watchOrderModal.classList.add("hidden");
  watchOrderModal.setAttribute("aria-hidden", "true");
}

watchOrderBtn.addEventListener("click", openWatchOrderModal);
watchOrderClose.addEventListener("click", closeWatchOrderModal);
watchOrderModal.querySelector(".modal-backdrop").addEventListener("click", closeWatchOrderModal);
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && !watchOrderModal.classList.contains("hidden")) closeWatchOrderModal();
});

// Tab switching
document.querySelectorAll(".wo-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".wo-tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    buildWatchOrderList(tab.dataset.order);
  });
});

// ---------- Inputs ----------
searchInput.addEventListener("input", e => {
  const val = e.target.value.trim().toLowerCase();
  
  if (["thanos", "wanda", "tva"].includes(val)) {
    state.search = ""; // bypass filter to show full grid for effect
  } else {
    state.search = val;
  }
  
  render();

  // Easter Eggs
  if (val === "thanos") triggerThanosSnap();
  else if (val === "wanda") triggerWandaHex();
  else if (val === "tva") triggerTvaCRT();
  else resetEasterEggs();
});

function triggerThanosSnap() {
  document.body.classList.add("easter-egg-active");
  const cards = document.querySelectorAll(".card, .timeline-card");
  cards.forEach(c => {
    if (Math.random() > 0.5) c.classList.add("dusted");
  });
}
function triggerWandaHex() {
  document.body.classList.add("easter-egg-active", "hex-vision");
}
function triggerTvaCRT() {
  document.body.classList.add("easter-egg-active", "tva-crt");
}
function resetEasterEggs() {
  document.body.classList.remove("easter-egg-active", "hex-vision", "tva-crt");
  document.querySelectorAll(".dusted").forEach(c => c.classList.remove("dusted"));
}

sortSelect.addEventListener("change", e => {
  state.sort = e.target.value;
  render();
});
clearBtn.addEventListener("click", () => {
  state.search = "";
  searchInput.value = "";
  Object.values(state.filters).forEach(s => s.clear());
  document.querySelectorAll(".chip.active").forEach(c => c.classList.remove("active"));
  render();
});

// ---------- Region toggle ----------
(function initRegionToggle() {
  const btns = document.querySelectorAll(".region-btn");
  // Reflect persisted region on load
  btns.forEach(btn => btn.classList.toggle("active", btn.dataset.region === state.region));
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.dataset.region === state.region) return; // no change
      state.region = btn.dataset.region;
      try { localStorage.setItem(REGION_KEY, state.region); } catch (e) {}
      btns.forEach(b => b.classList.toggle("active", b.dataset.region === state.region));
    });
  });
})();

// ---------- Theme toggle ----------
const THEME_KEY = "mcu-portal-theme-v1";
const themeToggle = document.getElementById("theme-toggle");
(function initTheme() {
  const saved = localStorage.getItem(THEME_KEY) || "dark";
  if (saved === "light") {
    document.documentElement.setAttribute("data-theme", "light");
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }
})();
themeToggle.addEventListener("click", () => {
  const isLight = document.documentElement.getAttribute("data-theme") === "light";
  if (isLight) {
    document.documentElement.removeAttribute("data-theme");
    themeToggle.textContent = "🌙";
    localStorage.setItem(THEME_KEY, "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    themeToggle.textContent = "☀️";
    localStorage.setItem(THEME_KEY, "light");
  }
});

// ---------- Surprise Me ----------
document.getElementById("surprise-btn").addEventListener("click", () => {
  const visible = sortItems(CATALOG.filter(passesFilters));
  if (!visible.length) return;
  // Prefer unwatched items; fall back to any visible item
  const unwatched = visible.filter(i => !state.watchedIds.has(i.id));
  const pool = unwatched.length ? unwatched : visible;
  const item = pool[Math.floor(Math.random() * pool.length)];
  // Flash the surprise button
  const btn = document.getElementById("surprise-btn");
  btn.textContent = "🎲 Finding...";
  setTimeout(() => { btn.textContent = "🎲 Surprise me"; }, 800);
  // Scroll to and highlight the card, then open its modal
  setTimeout(() => {
    const card = grid.querySelector(`[data-item-id="${item.id}"]`);
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "center" });
      card.focus();
      card.classList.add("surprise-highlight");
      setTimeout(() => card.classList.remove("surprise-highlight"), 1200);
    }
    setTimeout(() => {
      if (isSpoiler(item)) showSpoilerWarning(item);
      else openModal(item);
    }, 400);
  }, 200);
});

// ---------- Keyboard navigation ----------
(function initKeyboardNav() {
  // Make all cards focusable
  function refreshTabIndex() {
    grid.querySelectorAll(".card").forEach(card => {
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
    });
  }
  // Re-run after every render
  const origRender = window._originalRender;
  const _patchRender = () => {
    setTimeout(refreshTabIndex, 0); // after DOM update
  };
  // Patch: observe grid mutations
  new MutationObserver(_patchRender).observe(grid, { childList: true });
  refreshTabIndex();

  document.addEventListener("keydown", e => {
    // '/' focuses search
    if (e.key === "/" && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
      return;
    }

    const focused = document.activeElement;
    const cards   = [...grid.querySelectorAll(".card")];
    if (!cards.length) return;
    const idx = cards.indexOf(focused);

    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const next = idx === -1 ? cards[0] : cards[Math.min(idx + 1, cards.length - 1)];
      next.focus();
      next.scrollIntoView({ block: "nearest" });
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      if (idx <= 0) return;
      const prev = cards[idx - 1];
      prev.focus();
      prev.scrollIntoView({ block: "nearest" });
    } else if (e.key === "Enter" && cards.includes(focused)) {
      focused.click();
    }
  });
})();

// ---------- Helpers ----------
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[c]);
}
function formatDate(iso) {
  const d = new Date(iso);
  if (isNaN(d)) return iso;
  return d.toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" });
}

// ---------- IMDb (OMDb API) ----------
// To use your own key, replace OMDB_KEY below. Get a free key at omdbapi.com.
const OMDB_KEY = "91a34db0";
const IMDB_CACHE_KEY = "mcu-portal-imdb-cache-v1";
const imdbCache = (() => {
  try { return JSON.parse(localStorage.getItem(IMDB_CACHE_KEY) || "{}"); }
  catch (e) { return {}; }
})();

// One-time targeted eviction: flush stale wrong-match entries from the IMDb cache.
const IMDB_STALE_IDS = ["the-consultant-2011"];
(() => {
  let dirty = false;
  IMDB_STALE_IDS.forEach(id => {
    if (imdbCache[id]) { delete imdbCache[id]; dirty = true; }
  });
  if (dirty) try { localStorage.setItem(IMDB_CACHE_KEY, JSON.stringify(imdbCache)); } catch (e) {}
})();

function normalizeTitle(t) {
  return t
    .replace(/\s*\(.*?\)\s*/g, " ")    // strip "(Season 1)", "(Netflix)", "(TV Series)"
    .replace(/[…*]/g, "")               // strip ellipsis & asterisks
    .replace(/\s+/g, " ")
    .trim();
}

async function fetchImdb(item) {
  if (imdbCache[item.id]) return imdbCache[item.id];
  const t = normalizeTitle(item.title);
  const tries = [
    // If a pinned IMDb ID exists, use it first — avoids title-search mismatch
    ...(item.imdbId ? [`https://www.omdbapi.com/?apikey=${OMDB_KEY}&i=${item.imdbId}&plot=full`] : []),
    `https://www.omdbapi.com/?apikey=${OMDB_KEY}&t=${encodeURIComponent(t)}&y=${item.year}&plot=full`,
    `https://www.omdbapi.com/?apikey=${OMDB_KEY}&t=${encodeURIComponent(t)}&plot=full`,
  ];
  let result = null;
  for (const url of tries) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response !== "False") { result = data; break; }
    } catch (e) { /* try next */ }
  }
  imdbCache[item.id] = result || { _failed: true };
  try { localStorage.setItem(IMDB_CACHE_KEY, JSON.stringify(imdbCache)); } catch (e) {}
  return imdbCache[item.id];
}

function playTrailer(videoId) {
  const wrap = document.getElementById("modal-media-wrap");
  if (!wrap) return;
  wrap.classList.add("full-width");
  wrap.innerHTML = `
    <div class="trailer-wrap">
      <iframe 
        src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
      </iframe>
    </div>
  `;
}

function loadImdbData(item) {
  const targetId = item.id;
  fetchImdb(item).then(data => {
    const section = document.getElementById("imdb-section");
    // user may have closed the modal or opened a different one — bail
    if (!section || section.dataset.itemId && section.dataset.itemId !== targetId) return;
    section.dataset.itemId = targetId;
    if (!data || data._failed) {
      section.innerHTML = `
        <h3 class="imdb-heading">IMDb</h3>
        <p class="imdb-error">No IMDb match found for "${escapeHtml(item.title)}".</p>`;
    } else {
      section.innerHTML = renderImdb(data, item);
      // After rendering IMDb, check for trailer
      fetchTmdbTrailer(item).then(key => {
        const btnContainer = document.getElementById("trailer-btn-container");
        if (!btnContainer || !key || section.dataset.itemId !== targetId) return;
        btnContainer.innerHTML = `<button class="trailer-btn" id="play-trailer-btn">▶ Watch Trailer</button>`;
        document.getElementById("play-trailer-btn").addEventListener("click", () => playTrailer(key));
      });
    }
  });
}

function renderImdb(d, item) {
  const rating  = d.imdbRating && d.imdbRating !== "N/A" ? d.imdbRating : null;
  const votes   = d.imdbVotes  && d.imdbVotes  !== "N/A" ? d.imdbVotes  : null;
  // Use local poster if one is pinned, otherwise fall back to OMDb
  const poster  = (item && item.localPoster) || (d.Poster && d.Poster !== "N/A" ? d.Poster : null);
  const plot    = d.Plot       && d.Plot       !== "N/A" ? d.Plot       : null;
  const genre   = d.Genre      && d.Genre      !== "N/A" ? d.Genre      : null;
  const cast    = d.Actors     && d.Actors     !== "N/A" ? d.Actors     : null;
  const writer  = d.Writer     && d.Writer     !== "N/A" ? d.Writer     : null;
  const awards  = d.Awards     && d.Awards     !== "N/A" ? d.Awards     : null;
  const rated   = d.Rated      && d.Rated      !== "N/A" ? d.Rated      : null;
  const meta    = d.Metascore  && d.Metascore  !== "N/A" ? d.Metascore  : null;
  const tomato  = d.Ratings && d.Ratings.find(r => r.Source === "Rotten Tomatoes");
  const id      = d.imdbID;

  return `
    <h3 class="imdb-heading">IMDb</h3>
    <div class="imdb-content">
      <div class="imdb-poster-wrap" id="modal-media-wrap">
        ${poster ? `<img class="imdb-poster" src="${poster}" alt="${escapeHtml(d.Title || "")} poster" loading="lazy">` : ""}
        <div id="trailer-btn-container"></div>
      </div>
      <div class="imdb-text">
        <div class="imdb-scores">
          ${rating ? `<div class="imdb-rating"><span class="star">★</span><strong>${rating}</strong>/10${votes ? `<span class="votes">${votes} votes</span>` : ""}</div>` : ""}
          ${tomato ? `<div class="score-pill rt">🍅 ${tomato.Value}</div>` : ""}
          ${meta   ? `<div class="score-pill mc">Metacritic ${meta}</div>` : ""}
          ${rated  ? `<div class="score-pill rated">${escapeHtml(rated)}</div>` : ""}
        </div>
        ${genre ? `<div class="imdb-row"><span class="key">Genre</span>${escapeHtml(genre)}</div>` : ""}
        ${cast  ? `<div class="imdb-row"><span class="key">Cast</span>${escapeHtml(cast)}</div>` : ""}
        ${writer? `<div class="imdb-row"><span class="key">Writer</span>${escapeHtml(writer)}</div>` : ""}
        ${awards? `<div class="imdb-row"><span class="key">Awards</span>${escapeHtml(awards)}</div>` : ""}
        ${plot  ? `<p class="imdb-plot">${escapeHtml(plot)}</p>` : ""}
        ${id    ? `<a class="imdb-link" href="https://www.imdb.com/title/${id}/" target="_blank" rel="noopener">View on IMDb →</a>` : ""}
      </div>
    </div>
  `;
}

// ---------- TMDB / JustWatch watch providers ----------
const TMDB_KEY           = "95b5229c445a0d885ba7df1e91270f1c";
const TMDB_ID_CACHE_KEY  = "mcu-portal-tmdb-id-v1";
const WATCH_PROV_KEY     = "mcu-portal-watch-prov-v1";
const TRAILER_KEY        = "mcu-portal-trailers-v1";
const CREDITS_KEY        = "mcu-portal-credits-v1";

const tmdbIdCache = (() => {
  try { return JSON.parse(localStorage.getItem(TMDB_ID_CACHE_KEY) || "{}"); }
  catch (e) { return {}; }
})();
const watchProvCache = (() => {
  try { return JSON.parse(localStorage.getItem(WATCH_PROV_KEY) || "{}"); }
  catch (e) { return {}; }
})();
const trailerCache = (() => {
  try { return JSON.parse(localStorage.getItem(TRAILER_KEY) || "{}"); }
  catch (e) { return {}; }
})();
const creditsCache = (() => {
  try { return JSON.parse(localStorage.getItem(CREDITS_KEY) || "{}"); }
  catch (e) { return {}; }
})();

function isTvType(item) {
  return ["TV Series", "Animated Series", "TV Special"].includes(item.type);
}

async function fetchTmdbId(item) {
  if (tmdbIdCache[item.id] !== undefined) return tmdbIdCache[item.id];
  // Prefer IMDb ID lookup — most accurate
  const imdbId = item.imdbId ||
    (imdbCache[item.id] && !imdbCache[item.id]._failed ? imdbCache[item.id].imdbID : null);
  if (imdbId) {
    try {
      const res  = await fetch(`https://api.themoviedb.org/3/find/${imdbId}?external_source=imdb_id&api_key=${TMDB_KEY}`);
      const data = await res.json();
      const hits = isTvType(item) ? data.tv_results : data.movie_results;
      if (hits && hits.length) {
        tmdbIdCache[item.id] = hits[0].id;
        try { localStorage.setItem(TMDB_ID_CACHE_KEY, JSON.stringify(tmdbIdCache)); } catch (e) {}
        return hits[0].id;
      }
    } catch (e) { /* fall through to title search */ }
  }
  // Fall back to title search
  const type     = isTvType(item) ? "tv" : "movie";
  const yearKey  = isTvType(item) ? "first_air_date_year" : "year";
  const t        = normalizeTitle(item.title);
  try {
    const res  = await fetch(`https://api.themoviedb.org/3/search/${type}?query=${encodeURIComponent(t)}&${yearKey}=${item.year}&api_key=${TMDB_KEY}`);
    const data = await res.json();
    if (data.results && data.results.length) {
      tmdbIdCache[item.id] = data.results[0].id;
      try { localStorage.setItem(TMDB_ID_CACHE_KEY, JSON.stringify(tmdbIdCache)); } catch (e) {}
      return data.results[0].id;
    }
  } catch (e) { /* network error */ }
  tmdbIdCache[item.id] = null;
  try { localStorage.setItem(TMDB_ID_CACHE_KEY, JSON.stringify(tmdbIdCache)); } catch (e) {}
  return null;
}

async function fetchWatchProviders(item) {
  const cacheKey = `${item.id}:${state.region}`;
  if (watchProvCache[cacheKey] !== undefined) return watchProvCache[cacheKey];
  const tmdbId = await fetchTmdbId(item);
  if (!tmdbId) { watchProvCache[cacheKey] = null; return null; }
  const type = isTvType(item) ? "tv" : "movie";
  try {
    const res  = await fetch(`https://api.themoviedb.org/3/${type}/${tmdbId}/watch/providers?api_key=${TMDB_KEY}`);
    const data = await res.json();
    const regionData = data.results && data.results[state.region] ? data.results[state.region] : null;
    watchProvCache[cacheKey] = regionData;
    try { localStorage.setItem(WATCH_PROV_KEY, JSON.stringify(watchProvCache)); } catch (e) {}
    return regionData;
  } catch (e) {}
  watchProvCache[cacheKey] = null;
  try { localStorage.setItem(WATCH_PROV_KEY, JSON.stringify(watchProvCache)); } catch (e) {}
  return null;
}

async function fetchTmdbTrailer(item) {
  if (trailerCache[item.id] !== undefined) return trailerCache[item.id];
  const tmdbId = await fetchTmdbId(item);
  if (!tmdbId) { trailerCache[item.id] = null; return null; }
  const type = isTvType(item) ? "tv" : "movie";
  try {
    const res  = await fetch(`https://api.themoviedb.org/3/${type}/${tmdbId}/videos?api_key=${TMDB_KEY}`);
    const data = await res.json();
    const video = data.results && data.results.find(v => v.site === "YouTube" && (v.type === "Trailer" || v.type === "Teaser"));
    const key = video ? video.key : null;
    trailerCache[item.id] = key;
    try { localStorage.setItem(TRAILER_KEY, JSON.stringify(trailerCache)); } catch (e) {}
    return key;
  } catch (e) {}
  trailerCache[item.id] = null;
  return null;
}

async function fetchTmdbCredits(item) {
  if (creditsCache[item.id] !== undefined) return creditsCache[item.id];
  const tmdbId = await fetchTmdbId(item);
  if (!tmdbId) { creditsCache[item.id] = null; return null; }
  const type = isTvType(item) ? "tv" : "movie";
  try {
    const res  = await fetch(`https://api.themoviedb.org/3/${type}/${tmdbId}/credits?api_key=${TMDB_KEY}`);
    const data = await res.json();
    creditsCache[item.id] = data;
    try { localStorage.setItem(CREDITS_KEY, JSON.stringify(creditsCache)); } catch (e) {}
    return data;
  } catch (e) {}
  creditsCache[item.id] = null;
  return null;
}

function loadCastData(item) {
  fetchTmdbCredits(item).then(credits => {
    const section = document.getElementById("cast-section");
    // check if stale
    if (!section || document.getElementById("imdb-section").dataset.itemId !== item.id) return;
    if (!credits || !credits.cast || credits.cast.length === 0) {
      section.innerHTML = "";
      return;
    }
    
    const topCast = credits.cast.slice(0, 10);
    const html = `
      <h3 class="cast-heading">Top Cast</h3>
      <div class="cast-scroll">
        ${topCast.map(c => `
          <div class="cast-member" data-name="${escapeHtml(c.name)}">
            <img class="cast-photo" src="${c.profile_path ? `https://image.tmdb.org/t/p/w185${c.profile_path}` : 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23666"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>'}" alt="${escapeHtml(c.name)}" loading="lazy">
            <div class="cast-name">${escapeHtml(c.name)}</div>
            <div class="cast-role">${escapeHtml(c.character)}</div>
          </div>
        `).join("")}
      </div>
    `;
    section.innerHTML = html;

    // Attach click listeners for Deep-Dive filtering
    section.querySelectorAll('.cast-member').forEach(el => {
      el.addEventListener('click', () => {
        const name = el.dataset.name;
        searchInput.value = name;
        state.search = name;
        closeModal();
        render();
      });
    });
  });
}

function loadWatchProviders(item) {
  const section = document.getElementById("watch-providers-section");
  if (!section) return;
  section.dataset.itemId = item.id;
  const regionLabel = state.region === "GB" ? "UK" : state.region;
  fetchWatchProviders(item).then(prov => {
    const s = document.getElementById("watch-providers-section");
    if (!s || s.dataset.itemId !== item.id) return; // stale — user moved on
    if (!prov) {
      // Fall back gracefully to hardcoded catalogue data
      s.innerHTML =
        watchSection(`Streaming (${regionLabel})`, item.streaming, "streaming") +
        watchSection("Digital purchase / rent", item.purchase, "purchase") +
        watchSection("Physical media", item.physical, "physical") +
        `<p class="watch-source-note">Availability data from catalogue snapshot. <a href="https://www.justwatch.com" target="_blank" rel="noopener">Check JustWatch</a> for live info.</p>`;
      return;
    }
    const streaming = (prov.flatrate || []).map(p => p.provider_name);
    const rent      = (prov.rent     || []).map(p => p.provider_name);
    const buy       = (prov.buy      || []).map(p => p.provider_name);
    const purchase  = [...new Set([...rent, ...buy])];
    const jwLink    = prov.link ? `<a class="justwatch-link" href="${prov.link}" target="_blank" rel="noopener">View full availability on JustWatch →</a>` : "";
    s.innerHTML =
      watchSection(`Streaming (${regionLabel})`, streaming, "streaming") +
      watchSection("Digital purchase / rent", purchase, "purchase") +
      watchSection("Physical media", item.physical, "physical") +
      `<p class="watch-source-note">Live data via JustWatch &amp; TMDB. ${jwLink}</p>`;
  });
}

// ---------- Progress questionnaire ----------
const progressModal = document.getElementById("progress-modal");
const progressForm = document.getElementById("progress-form");
const progressBtn = document.getElementById("progress-btn");
const progressLabel = document.getElementById("progress-label");
const progressClose = document.getElementById("progress-close");

const VIEW_OPTIONS = [
  {
    value: "mcu",
    icon: "🎬",
    label: "MCU canon only",
    sub: "Films, Disney+ shows & one-shots — the main Marvel Studios timeline"
  },
  {
    value: "all",
    icon: "🌐",
    label: "The full Marvel multiverse",
    sub: "Everything: Sony, Fox X-Men, Netflix Defenders, classic TV & more"
  },
  {
    value: "custom",
    icon: "🎛️",
    label: "Custom",
    sub: "Pick exactly which franchises you want to see"
  }
];

function buildProgressForm() {
  const isCustom = state.viewMode === "custom";

  progressForm.innerHTML = `
    <div class="form-section-label">Where are you in the MCU?</div>
    ${TIER_LABELS.map((label, i) => `
      <label data-tier="${i}">
        <input type="radio" name="tier" value="${i}" ${state.userTier === i ? "checked" : ""}>
        <span class="tier-num">${i}</span>
        <span>${escapeHtml(label)}</span>
      </label>
    `).join("")}

    <div class="form-section-label" style="margin-top:20px">What would you like to browse?</div>
    <div class="view-options">
      ${VIEW_OPTIONS.map(o => `
        <label class="view-option${state.viewMode === o.value ? " selected" : ""}">
          <input type="radio" name="viewMode" value="${o.value}" ${state.viewMode === o.value ? "checked" : ""}>
          <span class="view-icon">${o.icon}</span>
          <span class="view-text">
            <strong>${o.label}</strong>
            <span class="view-sub">${o.sub}</span>
          </span>
        </label>
      `).join("")}
    </div>

    <div class="custom-panel${isCustom ? " open" : ""}" id="custom-panel">
      <div class="form-section-label" style="margin-top:16px">Choose franchises</div>
      <div class="group-toggles">
        ${CONTENT_GROUPS.map(g => `
          <label class="group-toggle${state.customGroups.has(g.id) ? " on" : ""}">
            <input type="checkbox" name="group" value="${g.id}" ${state.customGroups.has(g.id) ? "checked" : ""}>
            <span class="group-toggle-icon">${g.icon}</span>
            <span class="group-toggle-body">
              <strong>${g.label}</strong>
              <span class="group-toggle-desc">${g.desc}</span>
            </span>
            <span class="group-toggle-check">✓</span>
          </label>
        `).join("")}
      </div>
    </div>

    <div class="modal-actions">
      <button type="button" id="progress-skip">Skip</button>
      <button type="submit" class="primary">Save preferences</button>
    </div>
  `;

  // Tier radio highlight
  progressForm.querySelectorAll('label[data-tier]').forEach(l => {
    const radio = l.querySelector('input[name="tier"]');
    if (radio.checked) l.classList.add("selected");
    radio.addEventListener("change", () => {
      progressForm.querySelectorAll('label[data-tier]').forEach(x => x.classList.remove("selected"));
      l.classList.add("selected");
    });
  });

  // View mode radio highlight + custom panel toggle
  const customPanel = document.getElementById("custom-panel");
  progressForm.querySelectorAll('.view-option').forEach(l => {
    const radio = l.querySelector('input[name="viewMode"]');
    radio.addEventListener("change", () => {
      progressForm.querySelectorAll('.view-option').forEach(x => x.classList.remove("selected"));
      l.classList.add("selected");
      customPanel.classList.toggle("open", radio.value === "custom");
    });
  });

  // Group toggle on/off styling
  progressForm.querySelectorAll('.group-toggle').forEach(l => {
    const cb = l.querySelector('input[type="checkbox"]');
    cb.addEventListener("change", () => l.classList.toggle("on", cb.checked));
  });

  document.getElementById("progress-skip").addEventListener("click", () => {
    savePreferences(TIER_LABELS.length - 1, "all", new Set(CONTENT_GROUPS.map(g => g.id)));
  });
}


function openProgressModal() {
  buildProgressForm();
  progressModal.classList.remove("hidden");
  progressModal.setAttribute("aria-hidden", "false");
}
function closeProgressModal() {
  progressModal.classList.add("hidden");
  progressModal.setAttribute("aria-hidden", "true");
}
function savePreferences(tier, viewMode, customGroups) {
  state.userTier = tier;
  state.viewMode = viewMode;
  if (customGroups) state.customGroups = customGroups;
  state.revealedIds.clear();
  localStorage.setItem(PROGRESS_KEY, String(tier));
  localStorage.setItem(VIEW_MODE_KEY, viewMode);
  localStorage.setItem(CUSTOM_GROUPS_KEY, JSON.stringify([...state.customGroups]));
  updateProgressLabel();
  closeProgressModal();
  render();
}
function updateProgressLabel() {
  const tierText = state.userTier === null ? "Not set" : TIER_LABELS[state.userTier];
  let viewText;
  if (state.viewMode === "mcu")         viewText = "MCU only";
  else if (state.viewMode === "custom") viewText = `Custom (${state.customGroups.size} group${state.customGroups.size !== 1 ? "s" : ""})`;
  else                                  viewText = "Full multiverse";
  progressLabel.textContent = `${tierText} · ${viewText}`;
}

progressBtn.addEventListener("click", openProgressModal);
progressClose.addEventListener("click", closeProgressModal);
progressModal.querySelector(".modal-backdrop").addEventListener("click", closeProgressModal);

const viewToggleBtn = document.getElementById("view-toggle-btn");
if (viewToggleBtn) {
  viewToggleBtn.addEventListener("click", () => {
    state.displayLayout = state.displayLayout === "timeline" ? "grid" : "timeline";
    localStorage.setItem(DISPLAY_LAYOUT_KEY, state.displayLayout);
    viewToggleBtn.textContent = state.displayLayout === "timeline" ? "🔲 Grid View" : "⏳ Timeline View";
    render();
  });
  // Initial label
  viewToggleBtn.textContent = state.displayLayout === "timeline" ? "🔲 Grid View" : "⏳ Timeline View";
}

progressForm.addEventListener("submit", e => {
  e.preventDefault();
  const checkedTier = progressForm.querySelector('input[name="tier"]:checked');
  const checkedView = progressForm.querySelector('input[name="viewMode"]:checked');
  if (!checkedTier) return;
  const checkedGroups = new Set(
    [...progressForm.querySelectorAll('input[name="group"]:checked')].map(cb => cb.value)
  );
  savePreferences(
    parseInt(checkedTier.value, 10),
    checkedView ? checkedView.value : state.viewMode,
    checkedGroups.size ? checkedGroups : null
  );
});

// ---------- Watch-Progress Sharing ----------
function generateShareLink() {
  const payload = {
    t: state.userTier,
    v: state.viewMode,
    g: [...state.customGroups],
    w: [...state.watchedIds].map(id => CATALOG.findIndex(i => i.id === id)).filter(idx => idx !== -1)
  };
  const str = btoa(JSON.stringify(payload));
  const url = new URL(window.location.href);
  url.searchParams.set('share', str);
  return url.toString();
}

const shareBtn = document.getElementById("share-progress-btn");
if (shareBtn) {
  shareBtn.addEventListener("click", () => {
    const link = generateShareLink();
    navigator.clipboard.writeText(link).then(() => {
      const origText = shareBtn.innerHTML;
      shareBtn.innerHTML = "✅ Copied!";
      setTimeout(() => shareBtn.innerHTML = origText, 2000);
    }).catch(err => {
      prompt("Copy this link to share:", link);
    });
  });
}

// ---------- Live Countdowns ----------
function getCountdownParts(dateStr) {
  const d = new Date(dateStr);
  const now = new Date();
  if (isNaN(d) || d <= now) return null;
  const diffMs = d - now;
  return {
    days: Math.floor(diffMs / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diffMs / (1000 * 60 * 60)) % 24),
    mins: Math.floor((diffMs / 1000 / 60) % 60),
    secs: Math.floor((diffMs / 1000) % 60)
  };
}

function updateCountdowns() {
  document.querySelectorAll('.live-countdown').forEach(el => {
    const parts = getCountdownParts(el.dataset.countdown);
    if (!parts) {
      el.textContent = "Out Now";
      el.classList.remove('live-countdown');
      return;
    }
    const { days, hours, mins, secs } = parts;
    if (el.classList.contains('countdown-short')) {
      el.innerHTML = `⏳ In ${days}d ${hours}h`;
    } else {
      el.innerHTML = `⏳ <strong>${days}</strong>d <strong>${hours}</strong>h <strong>${mins}</strong>m <strong>${secs}</strong>s`;
    }
  });
}
setInterval(updateCountdowns, 1000);

// ---------- Playlists, Stats, Export ----------
const playlistToggleBtn = document.getElementById("playlist-toggle-btn");
if (playlistToggleBtn) {
  playlistToggleBtn.addEventListener("click", () => {
    state.showOnlyPlaylist = !state.showOnlyPlaylist;
    render();
  });
}

function openStatsModal() {
  const statsModal = document.getElementById("stats-modal");
  const body = document.getElementById("stats-body");
  
  let totalMins = 0;
  let totalWatched = 0;
  let mcuWatched = 0;
  const mcuTotal = CATALOG.filter(i => i.universe === "MCU").length;

  CATALOG.forEach(item => {
    if (state.watchedIds.has(item.id)) {
      totalWatched++;
      if (item.universe === "MCU") mcuWatched++;
      if (typeof item.runtime === "number") totalMins += item.runtime;
    }
  });

  const days = Math.floor(totalMins / (24 * 60));
  const hours = Math.floor((totalMins % (24 * 60)) / 60);
  const mins = totalMins % 60;
  const watchTimeString = `${days > 0 ? days + 'd ' : ''}${hours}h ${mins}m`;

  const pct = mcuTotal > 0 ? (mcuWatched / mcuTotal) : 0;
  let rank = "S.H.I.E.L.D. Recruit";
  if (pct >= 1.0) rank = "The Watcher";
  else if (pct >= 0.75) rank = "Sorcerer Supreme";
  else if (pct >= 0.50) rank = "Guardian of the Galaxy";
  else if (pct >= 0.25) rank = "Avenger";

  body.innerHTML = `
    <div class="stats-grid">
      <div class="stat-box full-width">
        <div class="stat-label">Watcher Rank</div>
        <div class="stat-value" style="font-size: 2.2rem;">${rank}</div>
        <div class="rank-badge">${Math.round(pct * 100)}% MCU Completion</div>
      </div>
      <div class="stat-box">
        <div class="stat-label">Total Titles Watched</div>
        <div class="stat-value">${totalWatched}</div>
      </div>
      <div class="stat-box">
        <div class="stat-label">Total Watch Time</div>
        <div class="stat-value">${watchTimeString}</div>
      </div>
    </div>
  `;
  
  statsModal.classList.remove("hidden");
  statsModal.setAttribute("aria-hidden", "false");
}

const statsBtn = document.getElementById("stats-btn");
if (statsBtn) statsBtn.addEventListener("click", openStatsModal);

const statsClose = document.getElementById("stats-close");
if (statsClose) statsClose.addEventListener("click", () => document.getElementById("stats-modal").classList.add("hidden"));
const statsModalEl = document.getElementById("stats-modal");
if (statsModalEl) statsModalEl.querySelector(".modal-backdrop").addEventListener("click", () => statsModalEl.classList.add("hidden"));

const exportBtn = document.getElementById("export-csv-btn");
if (exportBtn) {
  exportBtn.addEventListener("click", () => {
    let csv = "Title,Year,tmdbID\\n";
    [...state.watchedIds].forEach(id => {
      const item = CATALOG.find(i => i.id === id);
      if (item) {
        const tId = tmdbIdCache[item.id] || "";
        // Escape quotes in title
        const safeTitle = item.title.replace(/"/g, '""');
        csv += `"${safeTitle}",${item.year},${tId}\\n`;
      }
    });
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "mcu-portal-watched.csv";
    a.click();
    URL.revokeObjectURL(url);
  });
}

updateProgressLabel();
if (state.userTier === null) openProgressModal();

render();
updateCountdowns();

// ---------- Service Worker Registration ----------
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Service Worker registered', reg))
      .catch(err => console.error('Service Worker registration failed', err));
  });
}
