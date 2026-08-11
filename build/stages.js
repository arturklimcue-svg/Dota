// build/stages.js — классификатор стадий по текстам объяснений.
// Классифицирует причины из reasons.js (общий список) и stage-data.js
// (стадийные списки), пишет stages.js (window.STAGES).
// Заодно валидирует все файлы данных.
// Запуск: node build/stages.js  (после build/stage-counters.js)

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");

function readData(file, key) {
  const s = fs.readFileSync(path.join(ROOT, file), "utf8");
  if (!s.includes("window." + key + " =")) {
    throw new Error("Не найден window." + key + " в " + file);
  }
  const sandbox = { window: {} };
  vm.runInNewContext(s, sandbox);
  return sandbox.window[key];
}

const heroes = readData("heroes-data.js", "HEROES");
const counters = readData("counters.js", "COUNTERS");
const reasons = readData("reasons.js", "REASONS");
const stageData = fs.existsSync(path.join(ROOT, "stage-data.js"))
  ? { sc: readData("stage-data.js", "STAGE_COUNTERS"), sr: readData("stage-data.js", "STAGE_REASONS") }
  : { sc: {}, sr: {} };

const stageReasons = stageData.sr;
const stageCounters = stageData.sc;

const B = "[^а-яёa-z0-9_]";
const wordRe = (w) => new RegExp("(?:^|" + B + ")" + w + "(?:$|" + B + ")");

function classify(text) {
  const t = " " + text.toLowerCase() + " ";
  if (t.includes("любой стадии")) return ["line", "mid", "late"];
  const line =
    t.includes("на линии") ||
    t.includes("в линии") ||
    t.includes("на лайне") ||
    t.includes("лейнинг") ||
    t.includes("лейн") ||
    wordRe("ранн").test(t);
  const mid = t.includes("мидгейм") || wordRe("мид").test(t) || wordRe("минут").test(t);
  const late = t.includes("лейт") || wordRe("поздн").test(t);
  const res = [];
  if (line) res.push("line");
  if (mid) res.push("mid");
  if (late) res.push("late");
  if (!res.length) res.push("line", "mid", "late");
  return res;
}

// ---- валидация ----

const heroNames = new Set(heroes.map((h) => h.name));
const pairSet = new Set();
let errors = 0;

function err(msg) {
  errors++;
  console.error("  ! " + msg);
}

for (const [target, list] of Object.entries(counters)) {
  if (!heroNames.has(target)) err("counters: неизвестный герой-ключ " + target);
  for (const c of list) {
    if (!heroNames.has(c)) err("counters: неизвестный контр-герой " + c);
    pairSet.add(c + "__" + target);
  }
}
for (const target of Object.keys(stageCounters)) {
  for (const list of Object.values(stageCounters[target])) {
    for (const c of list || []) {
      if (!heroNames.has(c)) err("stages: неизвестный контр-герой " + c);
      pairSet.add(c + "__" + target);
    }
  }
}

for (const key of Object.keys(reasons)) {
  if (!pairSet.has(key)) err("reasons: лишний ключ " + key);
  const [c, t] = key.split("__");
  if (!heroNames.has(c) || !heroNames.has(t)) err("reasons: неизвестные имена в " + key);
}
for (const key of Object.keys(stageReasons)) {
  if (!pairSet.has(key)) err("stage-data: лишний ключ " + key);
  const [c, t] = key.split("__");
  if (!heroNames.has(c) || !heroNames.has(t)) err("stage-data: неизвестные имена в " + key);
}
for (const key of pairSet) {
  if (!reasons[key] && !stageReasons[key]) err("нет объяснения для " + key);
}

const stagesOut = {};
let noStage = 0;
for (const key of pairSet) {
  const text = stageReasons[key] || reasons[key];
  stagesOut[key] = classify(text);
  if (stagesOut[key].length === 0) noStage++;
}

// ---- вывод ----

const header =
  "// stages.js — сгенерировано build/stages.js.\n" +
  "// Ключ: \"<имя контрящего>__<имя контримого>\", значение — стадии,\n" +
  "// в которых этот контр силён: line | mid | late (могут комбинироваться).\n" +
  "window.STAGES = " +
  JSON.stringify(stagesOut, null, 1)
    .replace(/\n/g, "\n")
    .replace(/^(\s{2,})"([^"]+)": \[/gm, (m, indent, k) => indent + '"' + k + '": [') +
  ";\n";

fs.writeFileSync(path.join(ROOT, "stages.js"), header);

const dist = {};
for (const arr of Object.values(stagesOut)) {
  const k = arr.join("+");
  dist[k] = (dist[k] || 0) + 1;
}

console.log("Героев:        " + heroNames.size);
console.log("Пар (общ. + стад.): " + pairSet.size);
console.log("Распределение стадий:");
for (const k of Object.keys(dist).sort()) {
  console.log("  " + (k || "(пусто)") + ": " + dist[k]);
}
if (noStage) err("стадия не определена для " + noStage + " пар");
console.log(errors ? "ОШИБКИ: " + errors : "OK: всё согласовано");
process.exit(errors ? 1 : 0);
