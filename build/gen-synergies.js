// build/gen-synergies.js — генерирует synergies.js из build/kb/synergies.js.
// window.SYNERGIES[герой] = [{hero, why}], window.SYNERGY_TEXTS[герой__партнёр] = текст.
// Запуск: node build/gen-synergies.js

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
const heroNames = new Set(heroes.map((h) => h.name));

const kb = require(path.join(__dirname, "kb", "synergies.js"));

const errs = [];
for (const hid of Object.keys(kb)) {
  if (!heroNames.has(hid)) errs.push("неизвестный герой " + hid);
  for (const p of kb[hid].partners) {
    if (!heroNames.has(p)) errs.push(hid + ": неизвестный партнёр " + p);
    if (!kb[hid].texts[p]) errs.push(hid + ": нет текста для " + p);
  }
}

const SYNERGIES = {};
const SYNERGY_TEXTS = {};
for (const hid of Object.keys(kb)) {
  SYNERGIES[hid] = kb[hid].partners.map((p) => ({ hero: p, why: kb[hid].texts[p] }));
  for (const p of kb[hid].partners) {
    SYNERGY_TEXTS[hid + "__" + p] = kb[hid].texts[p];
  }
}

const header =
  "// synergies.js — сгенерировано build/gen-synergies.js.\n" +
  "// SYNERGIES[герой] = список партнёров, с которыми герой силён в одной команде.\n" +
  "// SYNERGY_TEXTS[\"герой__партнёр\"] = объяснение связки.\n";
const body =
  "window.SYNERGIES = " + JSON.stringify(SYNERGIES) +
  ";\n\nwindow.SYNERGY_TEXTS = " + JSON.stringify(SYNERGY_TEXTS, null, 1) +
  ";\n";
fs.writeFileSync(path.join(ROOT, "synergies.js"), header + body);

console.log("OK: synergies.js записан, героев=" + Object.keys(SYNERGIES).length);
if (errs.length) {
  console.log("ОШИБКИ: " + errs.length);
  errs.slice(0, 20).forEach((e) => console.log("  ! " + e));
  process.exit(1);
}
