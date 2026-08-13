// build/kb/synergies.js — база знаний: синергии героев (связки).
// Для каждого героя перечислены партнёры, с которыми он силён в одной команде,
// и объяснение, почему связка работает. Ключи — hero.name.
// Файл собран из частей build/kb/synergies1.js .. synergies5.js.
module.exports = Object.assign(
  {},
  require("./synergies1"),
  require("./synergies2"),
  require("./synergies3"),
  require("./synergies4"),
  require("./synergies5")
);
