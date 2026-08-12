// build/gen-stage-texts.js — генерирует длинные объяснения «почему герой
// контрится в каждой стадии» (15+ предложений).
// Источники:
//   - build/facts/*.js        — авторские факты по героям (weak/line/mid/late)
//   - reasons.js              — конкретные пары «кто и почему контрит»
//   - stage-data.js           — стадийные списки контр-пиков
// Результат: stage-texts.js (window.STAGE_TEXTS[герой][стадия]).
// Запуск: node build/gen-stage-texts.js (после build/stage-counters.js)

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");

function readData(file, key) {
  const s = fs.readFileSync(path.join(ROOT, file), "utf8");
  const sandbox = { window: {} };
  vm.runInNewContext(s, sandbox);
  return sandbox.window[key];
}

const heroes = readData("heroes-data.js", "HEROES");
const reasons = readData("reasons.js", "REASONS");
const stageReasons = readData("stage-data.js", "STAGE_REASONS");
const sc = readData("stage-data.js", "STAGE_COUNTERS");

const byName = {};
heroes.forEach((h) => (byName[h.name] = h));

// ---- авторские факты ----
const facts = {};
for (const f of fs.readdirSync(path.join(__dirname, "facts")).sort()) {
  if (!f.endsWith(".js")) continue;
  const arr = require(path.join(__dirname, "facts", f));
  if (!Array.isArray(arr)) throw new Error("facts/" + f + " должен экспортировать массив");
  for (const e of arr) facts[e.h] = e;
}

// ---- база знаний: способности, чем контрит, к чему уязвим ----
const spellsDB = require(path.join(__dirname, "kb", "spells.js"));
const tagsDB = require(path.join(__dirname, "kb", "tags.js"));
const weakDB = require(path.join(__dirname, "kb", "weak.js"));

const ERR = [];
const err = (m) => ERR.push(m);

// ---- род героев (для согласования окончаний) ----
const FEMALE = new Set([
  "crystal_maiden", "drow_ranger", "lina", "vengefulspirit", "phantom_assassin",
  "luna", "medusa", "mirana", "naga_siren", "queenofpain", "spectre",
  "templar_assassin", "windrunner", "death_prophet", "enchantress", "broodmother",
  "dawnbreaker", "muerta", "marci", "snapfire", "hoodwink", "winter_wyvern",
  "legion_commander", "dark_willow",
]);

const PRON = (id) =>
  FEMALE.has(id)
    ? { nom: "она", gen: "её", dat: "ей", neg: "у неё", sney: "с ней", oblig: "обязана", strong: "сильна", overcome: "переросла" }
    : { nom: "он", gen: "его", dat: "ему", neg: "у него", sney: "с ним", oblig: "обязан", strong: "силён", overcome: "перерос" };

const mapFor = (id, name) => {
  const p = PRON(id);
  return { hero: name, hn: p.nom, hg: p.gen, hd: p.dat, hneg: p.neg, hsney: p.sney, hobl: p.oblig, hstrong: p.strong, hovercome: p.overcome };
};

// ---- объяснение уязвимости героя по тегу из базы знаний ----
const WEAK_PHRASE = {
  silence: "Сайленс выключает его способности, и он не может ответить — это не лечится предметами, только позицией.",
  control: "Жёсткий контроль делает его лёгкой целью: его способности и уход не работают под станом.",
  burst: "Высокий мгновенный урон наказывает его без шанса ответить — его запас HP и брони не рассчитан на фокус.",
  "mobility-lock": "Он не может убежать или закрыть дистанцию, когда его ловят, — у него нет надёжного инструмента выхода.",
  "mana-burn": "Выгорание маны оставляет его без способностей, а сам он без маны почти бесполезен.",
  decrepify: "Эфирная форма отключает его физический урон и делает его цель неуязвимой — предметы тут не спасают.",
  save: "Сейвы союзников отменяют его главный приём — он вкладывается в комбо, а его цель выживает.",
  "heal-reduce": "Подавление лечения убивает его выживаемость: его реген и пассивки перестают работать.",
  reveal: "Обнаружение лишает его невидимости, и он оказывается открытой целью без защиты.",
  kiting: "Его держат на дистанции и расстреливают, не давая подойти — его урон не реализуется.",
  ghost: "Иллюзии и призывы путают его фокус и не дают убить цель.",
  "bkb-pierce": "Контроль сквозь иммунитет к магии отключает его даже с BKB — предмет не спасает.",
  aoe: "Урон по области рассыпает его иллюзии, призывов и не даёт стоять в драке.",
  global: "Глобальные способности находят его где угодно, и он не может спрятаться.",
  "stun-immune": "Его не выключают из драки — он продолжает давить, даже когда его пытаются остановить.",
  stats: "Он переживает бурст и отвечает — его запас здоровья рассчитан на обмен.",
  "mana-dep": "Сам зависит от маны, и выжигание маны оставляет его без урона.",
  magic: "Магический бурст проходит по его сопротивлению, и он не успевает собрать защиту.",
};

function weakPhrase(tag, id, ln, fear) {
  const base = WEAK_PHRASE[tag] || "Его слабость — это конкретная механика, которой он не может ответить.";
  return fear ? fear : base;
}

// ---- валидация базы знаний ----
const knownTags = new Set(Object.keys(WEAK_PHRASE));
for (const [hid, rec] of Object.entries(tagsDB)) {
  if (!byName[hid]) err("kb/tags: неизвестный герой " + hid);
  if (!rec.tags || !rec.tags.length) err("kb/tags: нет тегов у " + hid);
  for (const t of rec.tags) if (!knownTags.has(t)) err("kb/tags: неизвестный тег '" + t + "' у " + hid);
}
for (const [hid, rec] of Object.entries(weakDB)) {
  if (!byName[hid]) err("kb/weak: неизвестный герой " + hid);
  if (!rec.tag) err("kb/weak: нет тега у " + hid);
  if (!knownTags.has(rec.tag)) err("kb/weak: неизвестный тег '" + rec.tag + "' у " + hid);
  if (!rec.fear) err("kb/weak: нет fear у " + hid);
}
for (const hid of Object.keys(spellsDB)) {
  if (!byName[hid]) err("kb/spells: неизвестный герой " + hid);
  if (!spellsDB[hid].spells || !spellsDB[hid].spells.length) err("kb/spells: нет способностей у " + hid);
}

// ---- текстовые заготовки ----
const INTRO = {
  line: [
    "Лейнинг — это первые минуты игры, и именно здесь {hero} страдает сильнее всего: {hneg} нет ни предметов, ни уровней, чтобы компенсировать плохой старт.",
    "На линии всё решают исходные статы, дальность атаки и то, насколько герой вообще может стоять против агрессивного давления.",
    "{hero} не может просто отсидеться на лайне, если противник выставил жёсткий контр-пик, — каждая ошибка превращается в невосполнимое отставание.",
  ],
  mid: [
    "Мидгейм открывается, когда герои разбегаются по карте и начинается борьба за смок-тайминги, Рошана и контроль территории.",
    "В мидгейме {hero} уже {hobl} отвечать за что-то — давать урон, держать лайны или участвовать в драках, — и именно здесь {hg} слабые стороны становятся фатальными.",
    "Если мидгейм уходит в минус, {hero} теряет карту целиком: с {hn} перестают считаться, и {hn} просто не успевает вступить в свою сильную фазу.",
  ],
  late: [
    "В лейте игры всё решается одной дракой — вокруг Рошана, на хайграунде или в борьбе за контроль обзора.",
    "В поздней игре у {hero} меньше пространства для маневра: каждый выбранный предмет и каждая позиция в драке могут стать последними.",
    "Лейт прощает ошибки меньше всех остальных стадий, и если у противника есть готовый ответ на {hero}, отыграться становится почти невозможно.",
  ],
};

const LEAD = [
  "Первый и самый важный ответ на {hero} в этой стадии — {c}.",
  "Ключевая причина, почему {hero} контрится именно сейчас, — {c}.",
  "Особенно сильно {c} ломает {hero}.",
  "Из списка контр-пиков этой стадии выделяется {c}.",
  "Без {c} справиться с {hero} в этой стадии почти невозможно.",
  "Отдельного внимания заслуживает {c} — {cn} бьёт ровно по слабостям {hero}.",
  "Если противник берёт {c}, {hero} теряет главный козырь этой стадии.",
];

const TIE = [
  "В этой стадии {c} реализует своё преимущество ровно по тому механизму, которым {hero} уязвим: {fear}",
  "Именно в этой фазе игры {c} получает всё, что нужно для работы против {hero}.",
  "Для {hero} этот контр особенно неприятен именно сейчас, когда каждый обмен решает исход.",
  "Темп этой стадии заставляет {hero} рисковать, и {c} этим пользуется.",
  "Пока {hero} не {hovercome} фазу, в которой {c} {cs}, каждая встреча {hsney} кончается одинаково.",
  "В такой стадии {c} не даёт {hero} дышать и спокойно набирать форму.",
  "{Fear2} Именно поэтому {c} закрывает {hero} в этой стадии.",
];

const TIE_NEUTRAL = [
  "Именно в этой фазе игры {c} получает всё, что нужно для работы против {hero}.",
  "Для {hero} этот контр особенно неприятен именно сейчас, когда каждый обмен решает исход.",
  "Темп этой стадии заставляет {hero} рисковать, и {c} этим пользуется.",
  "Пока {hero} не {hovercome} фазу, в которой {c} {cs}, каждая встреча {hsney} кончается одинаково.",
  "В такой стадии {c} не даёт {hero} дышать и спокойно набирать форму.",
  "Именно сейчас {c} находит {hero} в самый неподходящий момент и диктует условия боя.",
  "В этой стадии {c} ломает планы {hero}: {hn} вынужден играть в невыгодной манере.",
];

const OUTRO = [
  "Итог прост: {fear2} В этой стадии каждый бой против этих героев будет проигран ещё до начала драки, если не закрыть эту слабость.",
  "Чтобы выжить в этой стадии против таких контр-пиков, {hero} придётся менять стиль игры и собираться в оборону — и даже тогда оставаться в невыгодном положении.",
  "Именно поэтому под эту стадию {hero} закрывают эти герои: они бьют по самому уязвимому месту {hg} таймингов, не давая {hd} войти в игру.",
];

const fill = (s, map) => s.replace(/\{(\w+)\}/g, (m, k) => map[k] || m);

const lowerFirst = (str) => (str ? str[0].toLowerCase() + str.slice(1) : str);

const STAGES = ["line", "mid", "late"];
const out = {};
const pairTexts = {}; // key(c__t)[stage] = короткое постадийное объяснение пары

for (const h of Object.keys(facts)) {
  const f = facts[h];
  const hero = byName[h];
  if (!hero) {
    err("факты: неизвестный герой " + h);
    continue;
  }
  out[h] = {};
  const hm = mapFor(h, hero.ln);
  const wk = weakDB[h] || {};
  if (wk.fear) {
    hm.fear = lowerFirst(wk.fear);
    hm.Fear = wk.fear;
  }
  if (wk.tag && tagsDB[h] && !wk.fear2) {
    const phr = weakPhrase(wk.tag, h, hero.ln, wk.fear);
    hm.fear2 = lowerFirst(phr);
    hm.Fear2 = phr;
  }
  for (const s of STAGES) {
    const list = (sc[h] && sc[h][s]) || [];
    const sentences = [];
    const put = (arr) => {
      const txt = arr
        .map((t) => fill(t, hm))
        .join(" ")
        .trim();
      if (txt) sentences.push(txt);
    };

    const note = f[s] && f[s].trim();
    put(INTRO[s].slice(0, 2));
    if (f.weak && f.weak.trim()) sentences.push(fill(f.weak.trim(), hm));
    if (note) sentences.push(fill(note, hm));

    let li = 0;
    let ti = 0;
    let anyMatch = false;
    list.slice(0, 6).forEach((cname) => {
      const c = byName[cname];
      if (!c) {
        err("стадийный контр неизвестен: " + cname + " -> " + h);
        return;
      }
      const cm = mapFor(cname, c.ln);
      const pair = cname + "__" + h;
      const why = (reasons[pair] || stageReasons[pair] || "").trim();
      const lead = fill(LEAD[li % LEAD.length], Object.assign({}, hm, { c: c.ln, cn: cm.hn }));
      li++;
      sentences.push(lead);
      if (why) sentences.push(why);
      const cTags = (tagsDB[cname] && tagsDB[cname].tags) || [];
      const matches = wk.tag && cTags.includes(wk.tag);
      if (matches) anyMatch = true;
      const tieCtx = Object.assign({}, hm, {
        c: c.ln,
        cs: cm.hstrong,
        fear: matches ? hm.fear || "" : "",
        Fear: matches ? hm.Fear || "" : "",
        fear2: matches ? hm.fear2 || "" : "",
        Fear2: matches ? hm.Fear2 || "" : "",
      });
      const tiePool = matches ? TIE : TIE_NEUTRAL;
      const tie = fill(tiePool[ti % tiePool.length], tieCtx);
      ti++;
      sentences.push(tie);

      pairTexts[cname + "__" + h] = pairTexts[cname + "__" + h] || {};
      pairTexts[cname + "__" + h][s] = (lead + " " + why + " " + tie)
        .replace(/\s+/g, " ")
        .trim();
    });

    const outroCtx = Object.assign({}, hm, {
      fear2: anyMatch ? hm.fear2 || "" : "",
      Fear2: anyMatch ? hm.Fear2 || "" : "",
    });
    sentences.push(fill(anyMatch ? OUTRO[0] : OUTRO[1], outroCtx));

    out[h][s] = sentences.join(" ");
  }
}

// ---- валидация длины ----
function sentCount(t) {
  return (t.match(/[.!?…]+(\s|$)/g) || []).length;
}

const counts = { line: [], mid: [], late: [] };
for (const h of Object.keys(out)) {
  for (const s of STAGES) {
    const n = sentCount(out[h][s]);
    counts[s].push(n);
    if (n < 15) err(h + " " + s + ": " + n + " предложений (нужно >=15)");
  }
}

// ---- вывод ----
const header =
  "// stage-texts.js — сгенерировано build/gen-stage-texts.js.\n" +
  "// window.STAGE_TEXTS[герой][стадия] = длинное объяснение (15+ предложений),\n" +
  "// почему этот герой контрится именно в этой стадии.\n" +
  "// window.STAGE_PAIR_TEXTS[\"контрящий__контримый\"][стадия] = короткое объяснение\n" +
  "// для кнопки «Почему?» на конкретном контр-пике.\n";
const body =
  "window.STAGE_TEXTS = " +
  JSON.stringify(out, null, 1).replace(/\n/g, "\n").replace(/^(\s{2,})"([^"]+)":/gm, (m, i, k) => i + k + ":") +
  ";\n\nwindow.STAGE_PAIR_TEXTS = " +
  JSON.stringify(pairTexts, null, 1).replace(/\n/g, "\n").replace(/^(\s{2,})"([^"]+)":/gm, (m, i, k) => i + k + ":") +
  ";\n";
fs.writeFileSync(path.join(ROOT, "stage-texts.js"), header + body);

for (const s of STAGES) {
  const arr = counts[s];
  console.log(
    s +
      ": min=" +
      Math.min.apply(null, arr) +
      ", max=" +
      Math.max.apply(null, arr) +
      ", avg=" +
      (arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(1)
  );
}
if (ERR.length) {
  console.log("ОШИБКИ: " + ERR.length);
  ERR.slice(0, 40).forEach((e) => console.log("  ! " + e));
  process.exit(1);
}
console.log("OK: stage-texts.js записан, героев=" + Object.keys(out).length);
