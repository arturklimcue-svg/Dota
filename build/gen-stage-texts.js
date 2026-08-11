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

const ERR = [];
const err = (m) => ERR.push(m);

// ---- текстовые заготовки ----
const INTRO = {
  line: [
    "Лейнинг — это первые минуты игры, и именно здесь {hero} страдает сильнее всего: у него нет ни предметов, ни уровней, чтобы компенсировать плохой старт.",
    "На линии всё решают исходные статы, дальность атаки и то, насколько герой вообще может стоять против агрессивного давления.",
    "{hero} не может просто отсидеться на лайне, если противник выставил жёсткий контр-пик, — каждая ошибка превращается в невосполнимое отставание.",
  ],
  mid: [
    "Мидгейм открывается, когда герои разбегаются по карте и начинается борьба за смоки, Рошана и контроль территории.",
    "В мидгейме {hero} уже обязан отвечать за что-то — давать урон, держать лайны или участвовать в драках, — и именно здесь его слабые стороны становятся фатальными.",
    "Если мидгейм уходит в минус, {hero} теряет карту целиком: с ним перестают считаться, и он просто не успевает вступить в свою сильную фазу.",
  ],
  late: [
    "В лейте игры решаются одной дракой — вокруг Рошана, на хайграунде или в борьбе за контроль очевидности.",
    "В поздней игре у {hero} меньше пространства для маневра: каждый выбранный предмет и каждая позиция в драке могут стать последними.",
    "Лейт прощает ошибки меньше всех остальных стадий, и если у противника есть готовый ответ на {hero}, отыграться становится почти невозможно.",
  ],
};

const LEAD = [
  "Первый и самый важный ответ на {hero} в этой стадии — {c}.",
  "Ключевая причина, почему {hero} контрится именно сейчас, — {c}.",
  "Особенно сильно {hero} ломает {c}.",
  "Из списка контр-пиков этой стадии выделяется {c}.",
  "Без {c} справиться с {hero} в этой стадии почти невозможно.",
  "Отдельного внимания заслуживает {c} — он бьёт ровно по слабостям {hero}.",
  "Если противник берёт {c}, {hero} теряет главный козырь этой стадии.",
];

const TIE = [
  "В этой стадии {c} делает это намного опаснее, потому что у {hero} ещё нет ни средств спасения, ни предметов на выживание.",
  "Именно в этой фазе игры {c} получает всё, что нужно для работы против {hero}.",
  "Для {hero} этот контр особенно неприятен именно сейчас, когда каждый обмен решает исход.",
  "Темп этой стадии заставляет {hero} рисковать, и {c} этим пользуется.",
  "Пока {hero} не перерос фазу, в которой {c} силён, каждая встреча с ним кончается одинаково.",
  "В такой стадии {c} не даёт {hero} дышать и спокойно набирать форму.",
];

const OUTRO = [
  "Итог прост: пока {hero} не соберёт ответные предметы и не переживёт эту фазу, каждый бой против этих героев будет проигран ещё до его начала.",
  "Чтобы выжить в этой стадии против таких контр-пиков, {hero} придётся менять стиль игры и собираться в оборону — и даже тогда оставаться в невыгодном положении.",
  "Именно поэтому под эту стадию {hero} закрывают эти герои: они бьют по самому уязвимому месту его таймингов, не давая ему войти в игру.",
];

const fill = (s, map) => s.replace(/\{(\w+)\}/g, (m, k) => map[k] || m);

const STAGES = ["line", "mid", "late"];
const out = {};

for (const h of Object.keys(facts)) {
  const f = facts[h];
  const hero = byName[h];
  if (!hero) {
    err("факты: неизвестный герой " + h);
    continue;
  }
  out[h] = {};
  for (const s of STAGES) {
    const list = (sc[h] && sc[h][s]) || [];
    const sentences = [];
    const put = (arr) => {
      const txt = arr
        .map((t) => fill(t, { hero: hero.ln }))
        .join(" ")
        .trim();
      if (txt) sentences.push(txt);
    };

    const note = f[s] && f[s].trim();
    put(INTRO[s].slice(0, 2));
    if (f.weak && f.weak.trim()) sentences.push(fill(f.weak.trim(), { hero: hero.ln }));
    if (note) sentences.push(fill(note, { hero: hero.ln }));

    let li = 0;
    let ti = 0;
    list.slice(0, 6).forEach((cname) => {
      const c = byName[cname];
      if (!c) {
        err("стадийный контр неизвестен: " + cname + " -> " + h);
        return;
      }
      const pair = cname + "__" + h;
      const why = (reasons[pair] || stageReasons[pair] || "").trim();
      const lead = fill(LEAD[li % LEAD.length], { hero: hero.ln, c: c.ln });
      li++;
      sentences.push(lead);
      if (why) sentences.push(why);
      const tie = fill(TIE[ti % TIE.length], { hero: hero.ln, c: c.ln });
      ti++;
      sentences.push(tie);
    });

    sentences.push(fill(OUTRO[0], { hero: hero.ln }));

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
  "// почему этот герой контрится именно в этой стадии.\n";
const body =
  "window.STAGE_TEXTS = " +
  JSON.stringify(out, null, 1).replace(/\n/g, "\n").replace(/^(\s{2,})"([^"]+)":/gm, (m, i, k) => i + k + ":") +
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
