// build/gen-stage-texts.js — генерирует объяснения контр-пиков.
// Тексты берутся из build/kb/countertexts.js (вручную написанные объяснения,
// формат «за счёт чего контрит» — по механике, без привязки к стадии игры).
// Результат: stage-texts.js (window.STAGE_PAIR_TEXTS — плоская карта
// «контрящий__контримый» => текст).
// Запуск: node build/gen-stage-texts.js

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
const counters = readData("counters.js", "COUNTERS");

const byName = {};
heroes.forEach((h) => (byName[h.name] = h));

const countertexts = require(path.join(__dirname, "kb", "countertexts.js"));

// ---- валидация ----
const ERR = [];
const err = (m) => ERR.push(m);

for (const [key, text] of Object.entries(countertexts)) {
  const [cid, hid] = key.split("__");
  if (!byName[cid]) err("countertexts: неизвестный герой " + cid + " (" + key + ")");
  if (!byName[hid]) err("countertexts: неизвестный герой " + hid + " (" + key + ")");
  if (!text || !text.length) err("countertexts: пустой текст " + key);
}

// ---- проверка покрытия всех пар из COUNTERS ----
const pairs = new Set();
for (const t in counters)
  for (const c of counters[t]) pairs.add(c + "__" + t);
const missing = [...pairs].filter((p) => !countertexts[p]);
if (missing.length) err("countertexts: нет текста для " + missing.length + " пар (первые 20: " + missing.slice(0, 20).join(", ") + ")");
const extra = Object.keys(countertexts).filter((k) => !pairs.has(k));
if (extra.length) err("countertexts: лишние пары, которых нет в COUNTERS: " + extra.join(", "));

// ---- вывод ----
const header =
  "// stage-texts.js — сгенерировано build/gen-stage-texts.js.\n" +
  "// Источник текстов: build/kb/countertexts.js (вручную написанные объяснения).\n" +
  "// window.STAGE_PAIR_TEXTS[\"контрящий__контримый\"] = объяснение\n" +
  "// для кнопки «Почему?» на конкретном контр-пике.\n";
const body =
  "window.STAGE_PAIR_TEXTS = " +
  JSON.stringify(countertexts, null, 1).replace(/^(\s{2,})"([^"]+)":/gm, (m, i, k) => i + k + ":") +
  ";\n";
fs.writeFileSync(path.join(ROOT, "stage-texts.js"), header + body);

console.log("OK: stage-texts.js записан, текстов=" + Object.keys(countertexts).length);
if (ERR.length) {
  console.log("ОШИБКИ: " + ERR.length);
  ERR.slice(0, 40).forEach((e) => console.log("  ! " + e));
  process.exit(1);
}
