// build/gen-stage-texts.js — генерирует объяснения контр-пиков из базы знаний.
// Источники (только данные, без авторских текстов):
//   - heroes-data.js      — имена героев (window.HEROES)
//   - stage-data.js       — стадийные контр-списки (window.STAGE_COUNTERS)
//   - build/kb/spells.js  — способности героев (названия и тип урона)
//   - build/kb/weak.js    — к чему уязвим каждый герой (fear)
// Никаких авторских объяснений пар в этом файле нет: всё, что говорится
// о героях, берётся из базы знаний.
// Результат: stage-texts.js (window.STAGE_PAIR_TEXTS).
// Формат объяснения пары:
//   «{C} контрит {T}. Способности {C}: {spells}. Уязвимость {T}: {fear}. Взаимодействие: {spells} против {T}.»
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
const sc = readData("stage-data.js", "STAGE_COUNTERS");

const byName = {};
heroes.forEach((h) => (byName[h.name] = h));

// ---- база знаний ----
const spellsDB = require(path.join(__dirname, "kb", "spells.js"));
const weakDB = require(path.join(__dirname, "kb", "weak.js"));

// ---- способности, выдаваемые Aghanim's Shard/Scepter как новые навыки ----
// Источник: dotaconstants aghs_desc.json (shard_new_skill / scepter_new_skill).
// Такие способности не входят в базовый набор героя и исключаются из списка.
const EXCLUDED = {
  "alchemist": ["Berserk Potion"],
  "beastmaster": ["Drums of Slom"],
  "bounty_hunter": ["Friendly Shadow"],
  "bristleback": ["Hairball"],
  "broodmother": ["Spinner's Snare"],
  "centaur": ["Work Horse"],
  "clinkz": ["Burning Barrage", "Burning Army"],
  "crystal_maiden": ["Crystal Clone"],
  "dark_seer": ["Normal Punch"],
  "disruptor": ["Kinetic Fence"],
  "dragon_knight": ["Fireball"],
  "drow_ranger": ["Glacier"],
  "earth_spirit": ["Enchant Remnant"],
  "enchantress": ["Sproink", "Little Friends"],
  "faceless_void": ["Reverse Time Walk"],
  "furion": ["Curse of the Oldgrowth"],
  "grimstroke": ["Dark Portrait"],
  "gyrocopter": ["Side Gunner"],
  "hoodwink": ["Hunter's Boomerang"],
  "juggernaut": ["Swiftslash"],
  "keeper_of_the_light": ["Will-O-Wisp"],
  "kunkka": ["Tidal Wave"],
  "leshrac": ["Nihilism"],
  "lich": ["Ice Spire"],
  "lina": ["Flame Cloak"],
  "lycan": ["Wolf Bite"],
  "magnataur": ["Horn Toss"],
  "medusa": ["Cold Blooded"],
  "meepo": ["Dig", "MegaMeepo Fling"],
  "muerta": ["Spectral Slug"],
  "necrolyte": ["Death Seeker"],
  "nyx_assassin": ["Burrow"],
  "ogre_magi": ["Fire Shield", "Unrefined Fireblast"],
  "oracle": ["Rain of Destiny"],
  "pangolier": ["Roll Up"],
  "phantom_assassin": ["Fan of Knives"],
  "primal_beast": ["Rock Throw"],
  "rattletrap": ["Jetpack", "Overclocking"],
  "ringmaster": ["Spotlight"],
  "shadow_demon": ["Demonic Cleanse"],
  "shredder": ["Flamethrower"],
  "slark": ["Depth Shroud"],
  "snapfire": ["Spit Out"],
  "sniper": ["Concussive Grenade"],
  "spirit_breaker": ["Planar Pocket"],
  "techies": ["Minefield Sign"],
  "terrorblade": ["Demon Zeal", "Terror Wave"],
  "tidehunter": ["Dead in the Water"],
  "tinker": ["Warp Flare"],
  "tiny": ["Tree Volley"],
  "treant": ["Eyes In The Forest"],
  "tusk": ["Drinking Buddies", "Walrus Kick"],
  "viper": ["Nosedive"],
  "windrunner": ["Gale Force"],
  "witch_doctor": ["Voodoo Switcheroo"],
  "zuus": ["Lightning Hands", "Nimbus"]
};

const ERR = [];
const err = (m) => ERR.push(m);

// ---- валидация базы знаний ----
for (const [hid, rec] of Object.entries(weakDB)) {
  if (!byName[hid]) err("kb/weak: неизвестный герой " + hid);
  if (!rec.fear) err("kb/weak: нет fear у " + hid);
}
for (const hid of Object.keys(spellsDB)) {
  if (!byName[hid]) err("kb/spells: неизвестный герой " + hid);
  if (!spellsDB[hid].spells || !spellsDB[hid].spells.length) err("kb/spells: нет способностей у " + hid);
}
for (const hid of Object.keys(sc)) {
  if (!byName[hid]) err("STAGE_COUNTERS: неизвестный герой " + hid);
  if (!weakDB[hid]) err("STAGE_COUNTERS: нет записи weak для " + hid);
  if (!spellsDB[hid]) err("STAGE_COUNTERS: нет записи spells для " + hid);
}

// ---- исключаемые способности по именам ----
const excludedNames = new Set();
for (const hid of Object.keys(EXCLUDED)) {
  for (const n of EXCLUDED[hid]) excludedNames.add(n);
}

const spellNames = (cid) =>
  (spellsDB[cid].spells || [])
    .filter((x) => !excludedNames.has(x.name))
    .map((x) => x.name)
    .join(", ");

const STAGES = ["line", "mid", "late"];

const pairTexts = {};

for (const hid of Object.keys(sc)) {
  const T = byName[hid].ln;
  const fear = weakDB[hid].fear;
  for (const s of STAGES) {
    const list = sc[hid][s] || [];
    for (const cname of list) {
      const C = byName[cname] ? byName[cname].ln : cname;
      const spells = spellNames(cname);
      const fearClean = fear.replace(/[.!?…]+$/, "");
      const text =
        C + " контрит " + T + ". " +
        "Способности " + C + ": " + spells + ". " +
        "Уязвимость " + T + ": " + fearClean + ". " +
        "Взаимодействие: " + spells + " против " + T + ".";
      const key = cname + "__" + hid;
      pairTexts[key] = pairTexts[key] || {};
      pairTexts[key][s] = text;
    }
  }
}

// ---- вывод ----
const header =
  "// stage-texts.js — сгенерировано build/gen-stage-texts.js.\n" +
  "// Всё содержимое собрано из базы знаний: способности (build/kb/spells.js)\n" +
  "// и уязвимости героев (build/kb/weak.js).\n" +
  "// window.STAGE_PAIR_TEXTS[\"контрящий__контримый\"][стадия] = объяснение\n" +
  "// для кнопки «Почему?» на конкретном контр-пике.\n";
const body =
  "window.STAGE_PAIR_TEXTS = " +
  JSON.stringify(pairTexts, null, 1).replace(/\n/g, "\n").replace(/^(\s{2,})"([^"]+)":/gm, (m, i, k) => i + k + ":") +
  ";\n";
fs.writeFileSync(path.join(ROOT, "stage-texts.js"), header + body);

console.log("OK: stage-texts.js записан, пар=" + Object.keys(pairTexts).length);
if (ERR.length) {
  console.log("ОШИБКИ: " + ERR.length);
  ERR.slice(0, 40).forEach((e) => console.log("  ! " + e));
  process.exit(1);
}