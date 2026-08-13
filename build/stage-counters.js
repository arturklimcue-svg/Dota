// build/stage-counters.js — собирает стадийные контр-списки.
// Источники:
//   - counters.js               — какие герои контрят кого (общий список)
//   - stages.js                 — в каких стадиях каждый контр силён
//   - build/additions/*.js      — структура дополнительных пар (t/c/s, без текста)
// Результат: stage-data.js (window.STAGE_COUNTERS + window.STAGE_REASONS).
// Текстовые объяснения в этот файл не попадают: они генерируются отдельно
// из базы знаний (build/kb/*) в build/gen-stage-texts.js.
// Запуск: node build/stage-counters.js

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");

function readData(file, key) {
  const s = fs.readFileSync(path.join(ROOT, file), "utf8");
  if (!s.includes("window." + key + " =")) throw new Error("Нет window." + key + " в " + file);
  const sandbox = { window: {} };
  vm.runInNewContext(s, sandbox);
  return sandbox.window[key];
}

const heroes = readData("heroes-data.js", "HEROES");
const counters = readData("counters.js", "COUNTERS");
const stages = readData("stages.js", "STAGES");

const heroNames = new Set(heroes.map((h) => h.name));
const STAGES = ["line", "mid", "late"];
const errors = [];
const err = (m) => errors.push(m);

// ---- дополнения: только структура пары (без текста) ----
const additions = [];
for (const f of fs.readdirSync(path.join(__dirname, "additions"))) {
  if (!f.endsWith(".js")) continue;
  const list = require(path.join(__dirname, "additions", f));
  if (!Array.isArray(list)) throw new Error("additions/" + f + " должен экспортировать массив");
  additions.push(...list);
}

// ---- основа: существующие пары по стадиям ----
const sc = {}; // target -> { line:[], mid:[], late:[] }
for (const target of Object.keys(counters)) {
  sc[target] = { line: [], mid: [], late: [] };
  for (const c of counters[target]) {
    const st = stages[c + "__" + target] || [];
    for (const s of st) if (STAGES.includes(s)) sc[target][s].push(c);
  }
}

// ---- дополнения ----
const seen = new Set();
for (const a of additions) {
  if (!heroNames.has(a.t)) err("дополнение: неизвестный герой-цель " + a.t);
  if (!heroNames.has(a.c)) err("дополнение: неизвестный контр-герой " + a.c);
  if (!STAGES.includes(a.s)) err("дополнение: неверная стадия " + a.s + " для " + a.c + "__" + a.t);
  const key = a.c + "__" + a.t;
  if (seen.has(key)) err("дополнение: дубль пары " + key);
  seen.add(key);
  sc[a.t] = sc[a.t] || { line: [], mid: [], late: [] };
  if (!sc[a.t][a.s].includes(a.c)) sc[a.t][a.s].push(a.c);
}

// ---- валидация: покрытие и консистентность ----
const pairCount = { line: 0, mid: 0, late: 0 };
const covered = new Set(); // пары, которые есть хотя бы в одной стадии
for (const target of Object.keys(sc)) {
  for (const s of STAGES) {
    const list = sc[target][s];
    for (const c of list) {
      pairCount[s]++;
      covered.add(c + "__" + target);
      if (!heroNames.has(c)) err("STAGE_COUNTERS: неизвестный герой " + c);
    }
  }
}

// каждый контр из общего списка должен быть распределён по стадиям
for (const target of Object.keys(counters)) {
  for (const c of counters[target]) {
    const key = c + "__" + target;
    if (!covered.has(key)) err("COUNTERS: пара " + key + " не распределена по стадиям (stages.js)");
  }
}

// ---- вывод ----
const header =
  "// stage-data.js — сгенерировано build/stage-counters.js.\n" +
  "// STAGE_COUNTERS[герой][стадия] = контр-пики, сильные именно в этой стадии.\n" +
  "// STAGE_REASONS — пусто: объяснения генерируются из базы знаний.\n";
const body =
  "window.STAGE_COUNTERS = " +
  JSON.stringify(sc, null, 1).replace(/\n/g, "\n").replace(/^(\s{2,})"([^"]+)":/gm, (m, i, k) => i + k + ":") +
  ";\n\nwindow.STAGE_REASONS = {};\n";
fs.writeFileSync(path.join(ROOT, "stage-data.js"), header + body);

console.log("Дополнений (структура): " + additions.length);
console.log("Пар по стадиям -> line: " + pairCount.line + ", mid: " + pairCount.mid + ", late: " + pairCount.late);
const dist = {};
for (const target of Object.keys(sc)) {
  for (const s of STAGES) {
    const n = sc[target][s].length;
    dist[s] = dist[s] || {};
    dist[s][n] = (dist[s][n] || 0) + 1;
  }
}
for (const s of STAGES) {
  const d = dist[s];
  const keys = Object.keys(d).map(Number).sort((a, b) => a - b);
  console.log("  " + s + ": " + keys.map((k) => k + " шт=" + d[k]).join(", "));
}
if (errors.length) {
  console.log("ОШИБКИ: " + errors.length);
  errors.slice(0, 40).forEach((e) => console.log("  ! " + e));
  process.exit(1);
}
console.log("OK: stage-data.js записан");
