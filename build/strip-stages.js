// build/strip-stages.js — временный скрипт: убирает из текстов объяснений
// упоминания стадий игры. Тексты построены как "<механика>. Контрит <стадия>."
// Удаляем всё от последнего " Контрит" до конца, чистим хвост.
// Запуск: node build/strip-stages.js

const fs = require("fs");
const path = require("path");

const FILE = path.join(__dirname, "kb", "countertexts.js");
const raw = fs.readFileSync(FILE, "utf8");
const obj = require(FILE);

let changed = 0;
const out = {};
for (const key of Object.keys(obj)) {
  let t = obj[key];
  const idx = t.lastIndexOf(" Контрит");
  if (idx > 0) {
    t = t.slice(0, idx);
    changed++;
  }
  t = t.replace(/\s+$/g, "");
  if (!/[.!?]$/.test(t)) t += ".";
  out[key] = t;
}

let body = JSON.stringify(out, null, 1);
const header =
  "// build/kb/countertexts.js — объяснения контр-пиков (пишутся вручную).\n" +
  "// Ключ: \"<контрящий>__<контримый>\" (hero.name). Текст: ЗА СЧЁТ ЧЕГО контрит\n" +
  "// конкретного героя (по механике способностей, без привязки к стадии игры).\n";
fs.writeFileSync(FILE, header + "module.exports = " + body + ";\n");
console.log("OK: обрезано текстов =", changed, "из", Object.keys(obj).length);
