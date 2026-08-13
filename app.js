(function () {
  "use strict";

  const VERSION = "20260810c";
  const IMG_BASE = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes";
  const MATCHUPS_URL = "https://api.opendota.com/api/heroes";
  const CACHE_TTL = 12 * 60 * 60 * 1000; // 12 часов
  const FAV_KEY = "dcp_favs_v1";
  const VER_KEY = "dcp_ver";
  const APPROX = [38, 40, 41, 42, 43, 44, 45];
  const MAX_TEAM = 5;
  const FALLBACK_ICON =
    "data:image/svg+xml," +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 9">' +
        '<rect width="16" height="9" fill="#172029"/>' +
        '<text x="8" y="6.6" font-size="6" fill="#8fa3b2" text-anchor="middle" font-family="sans-serif">?</text></svg>'
    );

  const $ = (id) => document.getElementById(id);
  const heroesEl = $("heroList");
  const searchEl = $("search");
  const sourceEl = $("source");
  const heroGridEl = $("heroGrid");
  const heroViewEl = $("heroView");
  const heroMainEl = $("heroMain");
  const poolCountersEl = $("poolCounters");
  const countersListEl = $("countersList");
  const countersMetaEl = $("countersMeta");
  const noCountersEl = $("noCounters");
  const noResultsEl = $("noResults");
  const backBtn = $("backBtn");
  const tabCountersEl = $("tabCounters");
  const tabSynergiesEl = $("tabSynergies");
  const countersPaneEl = $("countersPane");
  const synergiesPaneEl = $("synergiesPane");
  const synergiesListEl = $("synergiesList");
  const synergiesMetaEl = $("synergiesMeta");
  const noSynergiesEl = $("noSynergies");
  const trainBtn = $("trainBtn");
  const trainViewEl = $("trainView");
  const trainBackBtn = $("trainBackBtn");
  const trainHint = $("trainHint");
  const trainQuiz = $("trainQuiz");
  const trainTargetEl = $("trainTarget");
  const trainFeedbackEl = $("trainFeedback");
  const trainPickTitleEl = $("trainPickTitle");
  const trainSearch = $("trainSearch");
  const trainStartBtn = $("trainStartBtn");
  const trainTargetBlockEl = $("trainTargetBlock");
  const trainPickWrapEl = $("trainPickWrap");
  const confirmModal = $("confirmModal");
  const confirmBackdrop = $("confirmBackdrop");
  const confirmHeroEl = $("confirmHero");
  const confirmOkBtn = $("confirmOk");
  const confirmCancelBtn = $("confirmCancel");
  let pendingPick = null;
  const modal = $("reasonModal");
  const modalTitle = $("modalTitle");
  const modalText = $("modalText");
  const modalStat = $("modalStat");
  const teamViewEl = $("teamView");
  const teamBtn = $("teamBtn");
  const teamBackBtn = $("teamBackBtn");
  const teamHint = $("teamHint");
  const teamEnemiesEl = $("teamEnemies");
  const teamSearch = $("teamSearch");
  const teamPickGridEl = $("teamPickGrid");
  const teamCountersEl = $("teamCounters");
  const teamCopyBtn = $("teamCopyBtn");
  const teamNoSelEl = $("teamNoSel");
  const compareModal = $("compareModal");
  const compareBaseEl = $("compareBase");
  const compareSearch = $("compareSearch");
  const comparePickEl = $("comparePick");
  const compareResultEl = $("compareResult");
  const toastEl = $("toast");

  let heroesById = {};
  let dataSource = "Встроенная база";
  let currentHero = null;
  let liveItems = {};
  let muPending = false;
  let trainTarget = null;
  let trainAnswered = false;
  let gridAttr = "";
  let gridRole = "";
  let favs = loadFavs();
  let team = [];
  let teamRanked = [];
  let compareBase = null;

  const byName = {};
  const ROLE_CN = {
    Carry: "дожимает в поздней игре",
    Support: "держит контроль на карте и диктует темп",
    Initiator: "умеет начинать драки на своих условиях",
    Durable: "выдерживает урон и стоит в лицо",
    Disabler: "лишает героя возможности действовать контролем",
    Nuker: "продавливает магическим уроном",
    Escape: "уворачивается от инициации",
    Pusher: "давит здания и заставляет возвращаться",
  };

  // ---------- мелкие утилиты ----------

  function iconUrl(name) {
    return IMG_BASE + "/" + name + ".png";
  }

  function fullUrl(name) {
    return IMG_BASE + "/" + name + "_full.png";
  }

  function setImg(img, url) {
    img.onerror = function () {
      img.onerror = null;
      img.src = FALLBACK_ICON;
    };
    img.src = url;
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );
  }

  function attrLabel(a) {
    return (
      {
        str: "Сила",
        agi: "Ловкость",
        int: "Интеллект",
        all: "Универсальный",
      }[a] || a
    );
  }

  function roleSentence(hero) {
    const r = hero.roles[0];
    return ROLE_CN[r] ? "Сильные стороны: " + ROLE_CN[r] + "." : "";
  }

  function approxWr(enemy, counterName) {
    const list = (window.COUNTERS && window.COUNTERS[enemy.name]) || [];
    const i = list.indexOf(counterName);
    return i >= 0 ? APPROX[i % APPROX.length] : 44;
  }

  function initHeroes() {
    (window.HEROES || []).forEach((h) => {
      heroesById[h.id] = h;
      byName[h.name] = h;
    });
  }

  function loadFavs() {
    try {
      return new Set(JSON.parse(localStorage.getItem(FAV_KEY)) || []);
    } catch (e) {
      return new Set();
    }
  }

  function saveFavs() {
    try {
      localStorage.setItem(FAV_KEY, JSON.stringify(Array.from(favs)));
    } catch (e) {}
  }

  function toggleFav(name) {
    if (favs.has(name)) favs.delete(name);
    else favs.add(name);
    saveFavs();
  }

  // очистка кэша данных при смене версии приложения
  function cleanOldCache() {
    try {
      if (localStorage.getItem(VER_KEY) === VERSION) return;
      const drop = [];
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.indexOf("dcp_mu_") === 0) drop.push(k);
      }
      drop.forEach((k) => localStorage.removeItem(k));
      localStorage.setItem(VER_KEY, VERSION);
    } catch (e) {}
  }

  let toastTimer;
  function showToast(msg) {
    toastEl.textContent = msg;
    toastEl.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => (toastEl.hidden = true), 2200);
  }

  // ---------- грид героев ----------

  function filteredHeroes() {
    const q = searchEl.value.trim().toLowerCase();
    return (window.HEROES || []).filter((h) => {
      if (gridAttr && h.attr !== gridAttr) return false;
      if (gridRole && !h.roles.includes(gridRole)) return false;
      if (
        q &&
        !(
          h.ln.toLowerCase().includes(q) ||
          h.name.toLowerCase().includes(q) ||
          h.roles.some((r) => r.toLowerCase().includes(q))
        )
      )
        return false;
      return true;
    });
  }

  function renderGrid(list) {
    const sorted = [...list].sort((a, b) =>
      a.ln.toLowerCase().localeCompare(b.ln.toLowerCase(), "ru")
    );
    heroesEl.innerHTML = "";
    sorted.forEach((h) => {
      const card = document.createElement("div");
      card.className = "hero-card";
      card.title = h.ln;
      const star = document.createElement("span");
      star.className = "fav" + (favs.has(h.name) ? " on" : "");
      star.textContent = "★";
      star.title = "В избранное (свой пул)";
      star.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleFav(h.name);
        star.classList.toggle("on");
      });
      const img = document.createElement("img");
      setImg(img, iconUrl(h.name));
      img.alt = h.ln;
      img.loading = "lazy";
      const name = document.createElement("div");
      name.className = "hname";
      name.textContent = h.ln;
      card.appendChild(img);
      card.appendChild(star);
      card.appendChild(name);
      card.addEventListener("click", () => openHero(h));
      heroesEl.appendChild(card);
    });
    noResultsEl.hidden = sorted.length > 0;
  }

  function applySearch() {
    renderGrid(filteredHeroes());
  }

  function setupGridFilters() {
    $("attrFilter").addEventListener("click", (e) => {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      gridAttr = btn.getAttribute("data-attr");
      $("attrFilter").querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c === btn));
      applySearch();
    });
    $("roleFilter").addEventListener("click", (e) => {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      gridRole = btn.getAttribute("data-role");
      $("roleFilter").querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c === btn));
      applySearch();
    });
  }

  // ---------- выбор героя ----------

  function openHero(hero) {
    searchEl.value = "";
    heroGridEl.hidden = true;
    heroViewEl.hidden = false;
    teamViewEl.hidden = true;
    trainViewEl.hidden = true;
    modal.hidden = true;
    compareModal.hidden = true;
    currentHero = hero;
    liveItems[hero.id] = null;
    muPending = true;
    showHeroTab("counters");
    window.scrollTo(0, 0);

    heroMainEl.innerHTML =
      '<img src="' + fullUrl(hero.name) + '" alt="' + escapeHtml(hero.ln) + '">' +
      '<div class="hero-info">' +
      '<div class="hrow"><h2>' + escapeHtml(hero.ln) + "</h2>" +
      '<button id="heroFavBtn" class="star-btn' + (favs.has(hero.name) ? " on" : "") +
      '" title="Добавить в свой пул">★</button>' +
      '<button id="heroCompareBtn" class="pill-btn">1v1</button></div>' +
      '<div class="tags">' +
      '<span class="tag attr-' + escapeHtml(hero.attr) + '">' + attrLabel(hero.attr) + "</span>" +
      '<span class="tag">' + escapeHtml(hero.atk === "Melee" ? "Ближний бой" : "Дальний бой") + "</span>" +
      hero.roles.map((r) => '<span class="tag">' + escapeHtml(r) + "</span>").join("") +
      "</div></div>";

    $("heroFavBtn").addEventListener("click", () => {
      toggleFav(hero.name);
      $("heroFavBtn").classList.toggle("on", favs.has(hero.name));
      renderPool(hero);
    });
    $("heroCompareBtn").addEventListener("click", () => openCompare(hero));

    countersListEl.innerHTML = "";
    synergiesListEl.innerHTML = "";
    noCountersEl.hidden = true;
    noSynergiesEl.hidden = true;
    countersMetaEl.textContent = "Встроенная база…";
    setSource();

    renderPool(hero);
    renderCounters(hero);
    renderSynergies(hero);
    loadMatchups(hero).then((items) => refreshWinrates(items));
  }

  function showHeroTab(tab) {
    const counters = tab === "counters";
    tabCountersEl.classList.toggle("active", counters);
    tabSynergiesEl.classList.toggle("active", !counters);
    countersPaneEl.hidden = !counters;
    synergiesPaneEl.hidden = counters;
  }

  function renderPool(selected) {
    const mine = Array.from(favs)
      .map((n) => byName[n])
      .filter(Boolean);
    const hits = mine.filter((h) => (window.COUNTERS[selected.name] || []).includes(h.name));
    if (!hits.length) {
      poolCountersEl.hidden = true;
      return;
    }
    poolCountersEl.hidden = false;
    poolCountersEl.innerHTML =
      '<div class="pool-label">Из твоего пула контрят ' + escapeHtml(selected.ln) + "а:</div>" +
      '<div class="pool-list">' +
      hits
        .map((h) => {
          return (
            '<button class="pool-item" data-pool="' + escapeHtml(h.name) + '">' +
            '<img src="' + iconUrl(h.name) + '" alt="">' +
            "<span>" + escapeHtml(h.ln) + "</span></button>"
          );
        })
        .join("") +
      "</div>";
    poolCountersEl.querySelectorAll(".pool-item").forEach((btn) => {
      btn.addEventListener("click", () => {
        const h = byName[btn.getAttribute("data-pool")];
        if (!h) return;
        showReason(selected, { hero: h, winrate: approxWr(selected, h.name), approx: true, games: 0 });
      });
    });
  }

  // ---------- данные о контр-пиках ----------

  async function loadMatchups(hero) {
    try {
      const cached = localStorage.getItem("dcp_mu_v2_" + hero.id);
      if (cached) {
        const obj = JSON.parse(cached);
        if (Date.now() - obj.ts < CACHE_TTL) {
          return obj.items;
        }
      }
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 15000);
      const res = await fetch(MATCHUPS_URL + "/" + hero.id + "/matchups", {
        signal: ctrl.signal,
      });
      clearTimeout(timer);
      if (!res.ok) throw new Error("HTTP " + res.status);
      const data = await res.json();
      if (!Array.isArray(data) || !data.length) throw new Error("empty");
      const items = data
        .filter((m) => heroesById[m.hero_id])
        .map((m) => ({
          hero: heroesById[m.hero_id],
          // OpenDota не всегда отдаёт winrate — считаем сами
          winrate:
            typeof m.winrate === "number"
              ? m.winrate
              : m.games_played
                ? (m.wins / m.games_played) * 100
                : NaN,
          games: m.games_played,
          wins: m.wins,
        }));
      try {
        localStorage.setItem(
          "dcp_mu_v2_" + hero.id,
          JSON.stringify({ ts: Date.now(), items })
        );
      } catch (e) {}
      return items;
    } catch (e) {
      return null;
    }
  }

  function fallbackItems(hero) {
    const names = (window.COUNTERS && window.COUNTERS[hero.name]) || [];
    return names.map((n) => ({
      hero: byName[n],
      winrate: approxWr(hero, n),
      games: 0,
      wins: 0,
      approx: true,
    }));
  }

  function renderCounters(selected) {
    const source = fallbackItems(selected);
    const list = source.filter(Boolean);

    if (!list.length) {
      countersListEl.innerHTML = "";
      noCountersEl.hidden = false;
      noCountersEl.textContent = "Нет данных о контр-пиках";
      countersMetaEl.textContent = "";
      return;
    }

    countersMetaEl.textContent =
      "встроенная база: механики способностей (стабильны от патча к патчу)";
    setSource();

    countersListEl.innerHTML = "";
    list.forEach((m) => {
      const card = document.createElement("div");
      card.className = "counter-card";
      card.title = m.hero.ln;
      const wr = muPending
        ? '<span class="cwr shimmer"></span>'
        : '<span class="cwr">≈' + m.winrate + "%</span>";
      card.innerHTML =
        '<img src="' + iconUrl(m.hero.name) + '" alt="' + escapeHtml(m.hero.ln) + '" loading="lazy">' +
        '<div class="counter-body"><span class="cname">' + escapeHtml(m.hero.ln) +
        "</span>" + wr + "</div>" +
        '<button class="why" data-c="' + escapeHtml(m.hero.name) + '">Почему?</button>';
      setImg(card.querySelector("img"), iconUrl(m.hero.name));
      card
        .querySelector(".why")
        .addEventListener("click", (e) => {
          e.stopPropagation();
          showReason(selected, m);
        });
      countersListEl.appendChild(card);
    });
    applyLive();
  }

  function renderSynergies(selected) {
    const syn = (window.SYNERGIES && window.SYNERGIES[selected.name]) || [];
    synergiesListEl.innerHTML = "";
    if (!syn.length) {
      noSynergiesEl.hidden = false;
      return;
    }
    noSynergiesEl.hidden = true;
    synergiesListEl.innerHTML = "";
    syn.forEach((s) => {
      const hero = byName[s.hero];
      if (!hero) return;
      const card = document.createElement("div");
      card.className = "counter-card";
      card.title = hero.ln;
      card.innerHTML =
        '<img src="' + iconUrl(hero.name) + '" alt="' + escapeHtml(hero.ln) + '" loading="lazy">' +
        '<div class="counter-body"><span class="cname">' + escapeHtml(hero.ln) +
        '</span></div><button class="why" data-s="' + escapeHtml(hero.name) + '">Почему?</button>';
      setImg(card.querySelector("img"), iconUrl(hero.name));
      card
        .querySelector(".why")
        .addEventListener("click", (e) => {
          e.stopPropagation();
          showSynergyReason(selected, hero);
        });
      synergiesListEl.appendChild(card);
    });
  }

  function showSynergyReason(hero, partner) {
    const key = hero.name + "__" + partner.name;
    const text =
      (window.SYNERGY_TEXTS && window.SYNERGY_TEXTS[key]) ||
      (window.SYNERGY_TEXTS && window.SYNERGY_TEXTS[partner.name + "__" + hero.name]) ||
      "";
    modalTitle.innerHTML =
      "Почему <b>" + escapeHtml(hero.ln) + "</b> силён с <b>" + escapeHtml(partner.ln) + "</b>?";
    modalText.textContent = text || "Связка не описана.";
    modalStat.textContent = "";
    modal.hidden = false;
  }

  // применение реального винрейта OpenDota к уже отрисованным карточкам
  function applyLive() {
    if (!currentHero || !liveItems[currentHero.id]) return;
    const by = {};
    (liveItems[currentHero.id] || []).forEach((it) => {
      if (it.hero && isFinite(it.winrate)) by[it.hero.name] = it;
    });
    let updated = 0;
    countersListEl.querySelectorAll(".counter-card").forEach((card) => {
      const btn = card.querySelector(".why");
      const name = btn && btn.getAttribute("data-c");
      const it = by[name];
      const wrEl = card.querySelector(".cwr");
      if (it && it.games >= 30) {
        const wr = it.winrate;
        wrEl.textContent = wr.toFixed(1) + "%";
        wrEl.className = "cwr " + (wr < 42 ? "bad" : wr < 45 ? "" : "good");
        updated++;
      } else if (wrEl.classList.contains("shimmer")) {
        wrEl.textContent = "≈" + approxWr(currentHero, name) + "%";
        wrEl.className = "cwr";
      }
    });
    if (updated) {
      countersMetaEl.textContent =
        "встроенная база + реальный винрейт OpenDota (минимальный)";
      dataSource = "Встроенная база + OpenDota";
      setSource();
    }
  }

  // фоновое уточнение винрейта из OpenDota, не трогая состав списка
  function refreshWinrates(items) {
    muPending = false;
    if (items) liveItems[currentHero.id] = items;
    applyLive();
  }

  // ---------- объяснения ----------

  function reasonFor(counterHero, selected, m) {
    const key = counterHero.name + "__" + selected.name;
    const custom =
      (window.STAGE_PAIR_TEXTS && window.STAGE_PAIR_TEXTS[key]) ||
      (window.REASONS && window.REASONS[key]);
    if (custom) return custom;
    const real = liveWinrate(selected, m.hero);
    const wr = real
      ? real.toFixed(1) + "%"
      : m.approx ? "≈" + m.winrate + "%" : m.winrate ? m.winrate.toFixed(1) + "%" : "";
    const src = dataSource === "Встроенная база" ? "встроенной базы" : "статистики OpenDota";
    return (
      "По данным " + src + ", " + counterHero.ln + " обыгрывает " + selected.ln +
      (wr ? " в " + wr + " матчей." : ".") + " " + roleSentence(counterHero)
    );
  }

  function liveWinrate(selected, counter) {
    const items = liveItems[selected.id];
    if (!items) return null;
    const it = items.find((x) => x.hero && x.hero.id === counter.id);
    return it && isFinite(it.winrate) ? it.winrate : null;
  }

  function showReason(selected, m) {
    const title =
      "Почему <b>" + escapeHtml(m.hero.ln) + "</b> контрит <b>" + escapeHtml(selected.ln) + "</b>?";
    modalTitle.innerHTML = title;
    modalText.textContent = reasonFor(m.hero, selected, m);
    const real = liveWinrate(selected, m.hero);
    const wr = real
      ? real.toFixed(1) + "%"
      : m.approx ? "≈" + m.winrate + "%" : m.winrate.toFixed(1) + "%";
    const games = real
      ? ""
      : m.games ? " Сыграно матчей: " + m.games.toLocaleString("ru-RU") + "." : "";
    modalStat.textContent =
      "Процент побед " + selected.ln + " против " + m.hero.ln + ": " + wr + "." + games;
    modal.hidden = false;
  }

  function setSource() {
    sourceEl.textContent = dataSource;
  }

  // ---------- сравнение 1 на 1 ----------

  function openCompare(hero) {
    compareBase = hero;
    compareModal.hidden = false;
    modal.hidden = true;
    compareResultEl.innerHTML = "";
    compareSearch.value = "";
    compareBaseEl.textContent = hero.ln;
    renderComparePick();
  }

  function renderComparePick() {
    const q = compareSearch.value.trim().toLowerCase();
    const list = (window.HEROES || [])
      .filter((h) => h.id !== compareBase.id)
      .filter(
        (h) =>
          !q ||
          h.ln.toLowerCase().includes(q) ||
          h.name.toLowerCase().includes(q) ||
          h.roles.some((r) => r.toLowerCase().includes(q))
      )
      .sort((a, b) => a.ln.toLowerCase().localeCompare(b.ln.toLowerCase(), "ru"));
    comparePickEl.innerHTML = "";
    list.forEach((h) => {
      const card = document.createElement("div");
      card.className = "hero-card mini-card";
      card.title = h.ln;
      const img = document.createElement("img");
      setImg(img, iconUrl(h.name));
      img.alt = h.ln;
      img.loading = "lazy";
      card.appendChild(img);
      card.addEventListener("click", () => selectCompare(h));
      comparePickEl.appendChild(card);
    });
  }

  function compareRow(a, b) {
    const list = window.COUNTERS && window.COUNTERS[b.name];
    if (!list || !list.includes(a.name)) return null;
    return { counter: a, selected: b, key: a.name + "__" + b.name };
  }

  function selectCompare(b) {
    const a = compareBase;
    const r1 = compareRow(a, b);
    const r2 = compareRow(b, a);
    compareResultEl.innerHTML = "";
    const block = document.createElement("div");
    block.className = "compare-result";
    if (r1) {
      const row = document.createElement("div");
      row.className = "compare-row";
      row.innerHTML =
        '<img src="' + iconUrl(a.name) + '" alt="">' +
        "<div><b>" + escapeHtml(a.ln) + "</b> контрит <b>" + escapeHtml(b.ln) + "</b></div>";
      row.appendChild(makeWhyBtn(a, b));
      block.appendChild(row);
    }
    if (r2) {
      const row = document.createElement("div");
      row.className = "compare-row";
      row.innerHTML =
        '<img src="' + iconUrl(b.name) + '" alt="">' +
        "<div><b>" + escapeHtml(b.ln) + "</b> контрит <b>" + escapeHtml(a.ln) + "</b></div>";
      row.appendChild(makeWhyBtn(b, a));
      block.appendChild(row);
    }
    if (!r1 && !r2) {
      const row = document.createElement("div");
      row.className = "compare-row none";
      row.textContent =
        "В базе нет взаимных контр-пиков между " + a.ln + " и " + b.ln + ".";
      block.appendChild(row);
    }
    compareResultEl.appendChild(block);
    comparePickEl.innerHTML = "";
  }

  function makeWhyBtn(counter, selected) {
    const btn = document.createElement("button");
    btn.className = "why";
    btn.textContent = "Почему?";
    btn.addEventListener("click", () => {
      const m = {
        hero: counter,
        winrate: approxWr(selected, counter.name),
        approx: true,
        games: 0,
      };
      compareModal.hidden = true;
      showReason(selected, m);
    });
    return btn;
  }

  // ---------- инструмент «против тима» ----------

  function openTeam() {
    teamViewEl.hidden = false;
    heroGridEl.hidden = true;
    heroViewEl.hidden = true;
    trainViewEl.hidden = true;
    modal.hidden = true;
    compareModal.hidden = true;
    teamSearch.value = "";
    window.scrollTo(0, 0);
    renderTeamPick();
    renderTeamEnemies();
    renderTeamCounters();
  }

  function renderTeamPick() {
    const q = teamSearch.value.trim().toLowerCase();
    const list = (window.HEROES || [])
      .filter(
        (h) =>
          !q ||
          h.ln.toLowerCase().includes(q) ||
          h.name.toLowerCase().includes(q) ||
          h.roles.some((r) => r.toLowerCase().includes(q))
      )
      .sort((a, b) => a.ln.toLowerCase().localeCompare(b.ln.toLowerCase(), "ru"));
    teamPickGridEl.innerHTML = "";
    list.forEach((h) => {
      const inTeam = team.some((t) => t.id === h.id);
      const card = document.createElement("div");
      card.className = "hero-card" + (inTeam ? " selected" : "") + (favs.has(h.name) ? " mine" : "");
      card.title = h.ln;
      if (favs.has(h.name)) {
        const star = document.createElement("span");
        star.className = "fav on";
        star.textContent = "★";
        card.appendChild(star);
      }
      const img = document.createElement("img");
      setImg(img, iconUrl(h.name));
      img.alt = h.ln;
      img.loading = "lazy";
      card.appendChild(img);
      const name = document.createElement("div");
      name.className = "hname";
      name.textContent = h.ln;
      card.appendChild(name);
      card.addEventListener("click", () => {
        if (inTeam) team = team.filter((t) => t.id !== h.id);
        else if (team.length >= MAX_TEAM) {
          showToast("Максимум " + MAX_TEAM + " вражеских героев");
          return;
        } else team.push(h);
        renderTeamPick();
        renderTeamEnemies();
        renderTeamCounters();
      });
      teamPickGridEl.appendChild(card);
    });
  }

  function renderTeamEnemies() {
    teamEnemiesEl.innerHTML = "";
    team.forEach((h) => {
      const chip = document.createElement("button");
      chip.className = "enemy-chip";
      chip.title = "Убрать " + h.ln;
      const img = document.createElement("img");
      setImg(img, iconUrl(h.name));
      img.alt = h.ln;
      chip.appendChild(img);
      chip.appendChild(document.createTextNode(h.ln));
      chip.addEventListener("click", () => {
        team = team.filter((t) => t.id !== h.id);
        renderTeamPick();
        renderTeamEnemies();
        renderTeamCounters();
      });
      teamEnemiesEl.appendChild(chip);
    });
    teamHint.textContent = team.length
      ? "Выбрано: " + team.length + "/" + MAX_TEAM + " — клик по врагу убирает его"
      : "Выберите до " + MAX_TEAM + " вражеских героев";
  }

  function renderTeamCounters() {
    teamCountersEl.innerHTML = "";
    teamNoSelEl.hidden = team.length > 0;
    teamCopyBtn.hidden = team.length === 0;
    if (!team.length) {
      teamRanked = [];
      return;
    }

    const cov = {}; // counterName -> {count, enemies:Set, wrSum, n}
    team.forEach((enemy) => {
      ((window.COUNTERS && window.COUNTERS[enemy.name]) || []).forEach((cname) => {
        if (!byName[cname]) return;
        cov[cname] = cov[cname] || { count: 0, enemies: new Set(), wrSum: 0, n: 0 };
        cov[cname].count++;
        cov[cname].enemies.add(enemy.id);
        cov[cname].wrSum += approxWr(enemy, cname);
        cov[cname].n++;
      });
    });

    teamRanked = Object.keys(cov)
      .map((cname) => ({
        hero: byName[cname],
        count: cov[cname].count,
        enemies: Array.from(cov[cname].enemies).map((id) => heroesById[id]),
        wrAvg: cov[cname].wrSum / cov[cname].n,
      }))
      .sort((a, b) => b.count - a.count || b.wrAvg - a.wrAvg);

    teamRanked.forEach((c) => {
      const card = document.createElement("div");
      card.className = "counter-card team-card";
      card.title = c.hero.ln;
      card.innerHTML =
        '<img src="' + iconUrl(c.hero.name) + '" alt="' + escapeHtml(c.hero.ln) + '" loading="lazy">' +
        '<div class="counter-body"><span class="cname">' + escapeHtml(c.hero.ln) +
        '</span><span class="tcount">' + c.count + "/" + team.length + "</span></div>" +
        '<div class="tcovers">' +
        c.enemies
          .map(
            (en) =>
              '<button class="coven" data-enemy="' + escapeHtml(en.name) + '" title="Контрит ' +
              escapeHtml(en.ln) + '"><img src="' + iconUrl(en.name) + '" alt=""></button>'
          )
          .join("") +
        "</div>";
      setImg(card.querySelector("img"), iconUrl(c.hero.name));
      card.querySelectorAll(".coven").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          const en = byName[btn.getAttribute("data-enemy")];
          if (!en) return;
          showReason(en, {
            hero: c.hero,
            winrate: approxWr(en, c.hero.name),
            approx: true,
            games: 0,
          });
        });
      });
      teamCountersEl.appendChild(card);
    });
  }

  function copyTeamDraft() {
    if (!team.length || !teamRanked.length) return;
    const lines = [];
    lines.push("Против: " + team.map((h) => h.ln).join(", "));
    const top = teamRanked.slice(0, 5);
    top.forEach((c, i) => {
      const names = c.enemies.map((en) => en.ln).join(", ");
      lines.push((i + 1) + ". " + c.hero.ln + " — контрит: " + names);
    });
    const text = lines.join("\n");
    const done = () => showToast("Драфт скопирован");
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, () => fallbackCopy(text, done));
    } else {
      fallbackCopy(text, done);
    }
  }

  function fallbackCopy(text, done) {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      done();
    } catch (e) {
      showToast("Не удалось скопировать");
    }
  }

  // ---------- тренировка ----------

  function openTrain() {
    trainViewEl.hidden = false;
    heroGridEl.hidden = true;
    heroViewEl.hidden = true;
    teamViewEl.hidden = true;
    modal.hidden = true;
    compareModal.hidden = true;
    trainSearch.value = "";
    trainQuiz.hidden = true;
    trainFeedbackEl.hidden = true;
    trainPickWrapEl.hidden = true;
    trainStartBtn.hidden = false;
    trainStartBtn.textContent = "НАЧАТЬ";
    trainTarget = null;
    trainAnswered = false;
    window.scrollTo(0, 0);
  }

  function renderTrainPick() {
    const q = trainSearch.value.trim().toLowerCase();
    const list = (window.HEROES || [])
      .filter(
        (h) =>
          !q ||
          h.ln.toLowerCase().includes(q) ||
          h.name.toLowerCase().includes(q) ||
          h.roles.some((r) => r.toLowerCase().includes(q))
      )
      .sort((a, b) => a.ln.toLowerCase().localeCompare(b.ln.toLowerCase(), "ru"));
    const grid = $("trainPickGrid");
    grid.innerHTML = "";
    list.forEach((h) => {
      const card = document.createElement("div");
      card.className = "hero-card mini-card";
      card.title = h.ln;
      const img = document.createElement("img");
      setImg(img, iconUrl(h.name));
      img.alt = h.ln;
      img.loading = "lazy";
      card.appendChild(img);
      card.addEventListener("click", () => selectTrainPick(h));
      grid.appendChild(card);
    });
  }

  function selectTrainPick(pick) {
    if (!trainTarget) return;
    if (trainAnswered) return;
    pendingPick = pick;
    confirmHeroEl.innerHTML =
      '<img src="' + iconUrl(pick.name) + '" alt=""> <b>' + escapeHtml(pick.ln) + '</b>';
    confirmModal.hidden = false;
  }

  function confirmPick() {
    if (!pendingPick) return;
    const pick = pendingPick;
    pendingPick = null;
    confirmModal.hidden = true;
    const name = pick.name;
    const counters = (window.COUNTERS && window.COUNTERS[trainTarget.name]) || [];
    const isCounter = counters.includes(name);
    const isTarget = pick.id === trainTarget.id;

    trainAnswered = true;
    trainFeedbackEl.hidden = false;
    trainPickWrapEl.hidden = true;
    trainTargetBlockEl.hidden = true;
    trainFeedbackEl.className = "train-feedback " + (isCounter ? "ok" : "bad");
    trainFeedbackEl.innerHTML =
      (isCounter
        ? "✅ Верно! <b>" + escapeHtml(pick.ln) + "</b> контрит <b>" + escapeHtml(trainTarget.ln) + "</b>."
        : isTarget
          ? "❌ Это сам " + escapeHtml(trainTarget.ln) + ", а не его контр-пик."
          : "❌ Неверно: <b>" + escapeHtml(pick.ln) + "</b> не является контр-пиком <b>" +
            escapeHtml(trainTarget.ln) + "</b>.") +
      '<div class="train-again" id="trainAgain">Заново</div>';

    $("trainAgain").addEventListener("click", () => {
      trainFeedbackEl.hidden = true;
      trainAnswered = false;
      startTrainRound();
    });

    requestAnimationFrame(() => {
      trainFeedbackEl.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  function startTrainRound() {
    const pool = (window.HEROES || []).filter((h) => {
      const c = (window.COUNTERS && window.COUNTERS[h.name]) || [];
      return c.length > 0;
    });
    if (!pool.length) {
      showToast("Нет данных для тренировки");
      return;
    }
    trainTarget = pool[Math.floor(Math.random() * pool.length)];
    trainAnswered = false;
    trainStartBtn.hidden = true;
    trainQuiz.hidden = false;
    trainFeedbackEl.hidden = true;
    trainTargetBlockEl.hidden = false;
    trainPickWrapEl.hidden = false;
    trainPickTitleEl.textContent = "Выберите контр-пик для " + trainTarget.ln;
    trainTargetEl.innerHTML =
      '<img src="' + iconUrl(trainTarget.name) + '" alt=""> ' + escapeHtml(trainTarget.ln);
    renderTrainPick();
    window.scrollTo(0, 0);
  }

  function startTrain() {
    startTrainRound();
  }

  // ---------- события ----------

  searchEl.addEventListener("input", applySearch);
  teamSearch.addEventListener("input", renderTeamPick);
  compareSearch.addEventListener("input", renderComparePick);
  trainSearch.addEventListener("input", renderTrainPick);

  backBtn.addEventListener("click", () => {
    heroViewEl.hidden = true;
    heroGridEl.hidden = false;
    modal.hidden = true;
    sourceEl.textContent = dataSource;
  });

  teamBtn.addEventListener("click", openTeam);
  teamBackBtn.addEventListener("click", () => {
    teamViewEl.hidden = true;
    heroGridEl.hidden = false;
    team = [];
    renderTeamPick();
    renderTeamEnemies();
    renderTeamCounters();
  });

  teamCopyBtn.addEventListener("click", copyTeamDraft);

  tabCountersEl.addEventListener("click", () => {
    if (currentHero) {
      showHeroTab("counters");
      renderCounters(currentHero);
    }
  });
  tabSynergiesEl.addEventListener("click", () => {
    if (currentHero) {
      showHeroTab("synergies");
      renderSynergies(currentHero);
    }
  });

  trainBtn.addEventListener("click", openTrain);
  trainStartBtn.addEventListener("click", startTrain);
  trainBackBtn.addEventListener("click", () => {
    trainViewEl.hidden = true;
    heroGridEl.hidden = false;
    trainTarget = null;
  });

  function closeConfirm() {
    confirmModal.hidden = true;
    pendingPick = null;
  }
  confirmOkBtn.addEventListener("click", confirmPick);
  confirmCancelBtn.addEventListener("click", closeConfirm);
  confirmBackdrop.addEventListener("click", closeConfirm);

  function closeModal() {
    modal.hidden = true;
  }
  $("modalClose").addEventListener("click", closeModal);
  $("modalBackdrop").addEventListener("click", closeModal);

  function closeCompare() {
    compareModal.hidden = true;
  }
  $("compareClose").addEventListener("click", closeCompare);
  $("compareBackdrop").addEventListener("click", closeCompare);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      closeCompare();
    }
  });

  cleanOldCache();
  initHeroes();
  setupGridFilters();
  applySearch();
  setSource();
})();
