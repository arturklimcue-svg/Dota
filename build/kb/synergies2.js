// build/kb/synergies2.js — часть 2 базы синергий. См. build/kb/synergies.js.
module.exports = {
  slardar: {
    partners: ["templar_assassin", "phantom_assassin", "luna", "windrunner", "juggernaut"],
    texts: {
      "templar_assassin": "Corrosive Haze снимает броню — Meld TA бьёт по полностью голой цели.",
      "phantom_assassin": "Haze уменьшает броню, криты PA становятся ещё разрушительнее.",
      "luna": "Haze снижает броню толпы, и Eclipse Luna разрывает всех.",
      "windrunner": "Haze + Focus Fire Windrunner сносят цель за секунды.",
      "juggernaut": "Haze снижает броню, Omnislash Juggernaut добивает беззащитных."
    }
  },
  tidehunter: {
    partners: ["juggernaut", "luna", "gyrocopter", "enigma", "magnataur", "sand_king"],
    texts: {
      "juggernaut": "Ravage станит толпу, Omnislash перекидывается по всем застывшим.",
      "luna": "Ravage держит толпу, Eclipse бьёт по всем застаненым.",
      "gyrocopter": "Ravage + Call Down — двойной контроль и урон по толпе.",
      "enigma": "Ravage после Black Hole продлевает контроль на максимум.",
      "magnataur": "Ravage + Reverse Polarity — два ультовых стана по толпе.",
      "sand_king": "Ravage станит, Epicenter бьёт по всем застывшим."
    }
  },
  witch_doctor: {
    partners: ["faceless_void", "magnataur", "enigma", "tidehunter", "centaur"],
    texts: {
      "faceless_void": "Death Ward в Chronosphere — неубиваемый урон по всей застывшей толпе.",
      "magnataur": "Reverse Polarity стягивает толпу под Death Ward.",
      "enigma": "Black Hole держит врагов, Death Ward расстреливает всех.",
      "tidehunter": "Ravage станит толпу, Death Ward добивает.",
      "centaur": "Hoof Stomp станит, Death Ward и Maledict добивают цель."
    }
  },
  lich: {
    partners: ["grimstroke", "faceless_void", "magnataur", "enigma", "dazzle"],
    texts: {
      "grimstroke": "Soulbind дублирует Chain Frost — ледяной урон по двум целям сразу.",
      "faceless_void": "Chain Frost бьёт по всем внутри Chronosphere.",
      "magnataur": "Reverse Polarity собирает толпу, Chain Frost скачет по всем.",
      "enigma": "Black Hole держит врагов, Chain Frost не даёт им разбежаться.",
      "dazzle": "Ice Armor + Weave усиливают живучесть всей команды в драках."
    }
  },
  riki: {
    partners: ["slardar", "bounty_hunter", "windrunner", "legion_commander", "phantom_assassin"],
    texts: {
      "slardar": "Corrosive Haze снимает броню и показывает цель — Smoke Screen добивает.",
      "bounty_hunter": "Два невидимых героя давят всю карту, Track даёт золото за килы Riki.",
      "windrunner": "Shackleshot ловит цель из Smoke Screen, Riki добивает сзади.",
      "legion_commander": "Duel + Smoke Screen — цель без реакций под контролем LC.",
      "phantom_assassin": "Оба бьют сзади — PA открывает бой, Riki добивает с клинков."
    }
  },
  enigma: {
    partners: ["luna", "magnataur", "crystal_maiden", "sand_king", "nevermore", "witch_doctor"],
    texts: {
      "luna": "Black Hole держит толпу, Eclipse бьёт по всем собранным.",
      "magnataur": "Black Hole + Reverse Polarity — два стягивания, из которых не выбраться.",
      "crystal_maiden": "Black Hole держит врагов, Freezing Field добивает толпу.",
      "sand_king": "Black Hole держит врагов, Epicenter наносит полный урон.",
      "nevermore": "Black Hole держит толпу, Requiem добивает всех собранных.",
      "witch_doctor": "Black Hole держит врагов, Death Ward расстреливает всю толпу."
    }
  },
  tinker: {
    partners: ["keeper_of_the_light", "dark_seer", "magnataur", "faceless_void", "techies"],
    texts: {
      "keeper_of_the_light": "Chakra Magic подпитывает Tinker на бесконечный Rearm и марш машин.",
      "dark_seer": "Vacuum стягивает толпу под March of the Machines.",
      "magnataur": "Reverse Polarity держит толпу, March и Laser добивают всех.",
      "faceless_void": "Chronosphere фиксирует врагов, March разрывает их внутри.",
      "techies": "Tinker ставит мины и марш, Techies добивает с минных полей."
    }
  },
  sniper: {
    partners: ["drow_ranger", "slardar", "magnataur", "vengefulspirit", "luna"],
    texts: {
      "drow_ranger": "Trueshot Aura качает урон Sniper, оба бьют с огромной дистанции.",
      "slardar": "Corrosive Haze снимает броню, Shrapnel и Headshot добивают с дистанции.",
      "magnataur": "Reverse Polarity держит толпу, Sniper расстреливает всех с безопасного расстояния.",
      "vengefulspirit": "Aura Venge даёт урон Sniper, Swap защищает его от фокуса.",
      "luna": "Оба дальние: Luna открывает бой, Sniper добивает с максимальной дистанции."
    }
  },
  necrolyte: {
    partners: ["phoenix", "undying", "wisp", "oracle", "warlock"],
    texts: {
      "phoenix": "Phoenix лечит всех вокруг, Necrolyte режет HP аурами — двойное давление.",
      "undying": "Decay + Heartstopper Aura — враги тают на линии без лечения.",
      "wisp": "Tether + Overcharge усиливают живучесть Necrolyte, он не умирает в драках.",
      "oracle": "False Promise держит Necrolyte на нуле, пока Reaper's Scythe казнит цель.",
      "warlock": "Fatal Bonds связывает толпу, Heartstopper Aura добивает всех сразу."
    }
  },
  warlock: {
    partners: ["keeper_of_the_light", "techies", "magnataur", "enigma", "faceless_void", "death_prophet"],
    texts: {
      "keeper_of_the_light": "Fatal Bonds + Illuminate — огромный урон по связанной толпе.",
      "techies": "Fatal Bonds связывает толпу, мины Techies добивают всех сразу.",
      "magnataur": "Reverse Polarity собирает толпу под Fatal Bonds и Golem.",
      "enigma": "Black Hole держит врагов, Golem и Bonds добивают.",
      "faceless_void": "Chronosphere фиксирует толпу, Golem бьёт по всем внутри.",
      "death_prophet": "Fatal Bonds усиливает Exorcism — духи бьют по связанной толпе."
    }
  },
  beastmaster: {
    partners: ["lycan", "drow_ranger", "windrunner", "troll_warlord", "lone_druid"],
    texts: {
      "lycan": "Оба дают атаку зверями и ауры — пуш со стороны зверья.",
      "drow_ranger": "Inner Beast разгоняет атаку Drow, Roar защищает её от фокуса.",
      "windrunner": "Inner Beast + Focus Fire — Windrunner стреляет на максимуме скорости.",
      "troll_warlord": "Inner Beast и атаки Troll дают невероятный темп пуша.",
      "lone_druid": "Оба с питомцами — двойной фарм и двойной пуш линий."
    }
  },
  queenofpain: {
    partners: ["magnataur", "enigma", "tidehunter", "keeper_of_the_light", "faceless_void"],
    texts: {
      "magnataur": "Reverse Polarity держит толпу, Sonic Wave и Scream добивают всех.",
      "enigma": "Black Hole держит врагов, Sonic Wave бьёт по всей толпе.",
      "tidehunter": "Ravage станит толпу, QoP влетает с Blink и Sonic Wave.",
      "keeper_of_the_light": "Chakra Magic подпитывает QoP на постоянные Blink и Scream.",
      "faceless_void": "Chronosphere фиксирует цель, Sonic Wave и Scream разрывают её."
    }
  },
  venomancer: {
    partners: ["viper", "necrolyte", "phoenix", "warlock", "undying", "batrider"],
    texts: {
      "viper": "Классическая пара: яды Viper и Veno полностью запирают линию, соперник не может даже выйти на фарм.",
      "necrolyte": "Яды + Heartstopper Aura — враги тают на линии вдвойне.",
      "phoenix": "Яды разъедают, Phoenix жжёт — двойной DoT на линии.",
      "warlock": "Fatal Bonds связывает толпу, Poison Nova добивает всех.",
      "undying": "Tombstone + яды — давление на толпу, которое не остановить.",
      "batrider": "Lasso тянет цель в яды Veno, и та умирает в луже яда."
    }
  },
  faceless_void: {
    partners: ["skywrath_mage", "invoker", "luna", "crystal_maiden", "witch_doctor", "gyrocopter"],
    texts: {
      "skywrath_mage": "Chronosphere фиксирует цель, Mystic Flare разрывает её полностью.",
      "invoker": "Chronosphere + Sunstrike/Cataclysm — ульта Invoker бьёт без промаха.",
      "luna": "Chronosphere фиксирует толпу, Eclipse бьёт по всем внутри.",
      "crystal_maiden": "Chronosphere держит врагов, Freezing Field морозит всех внутри.",
      "witch_doctor": "Death Ward в Chronosphere расстреливает всю застывшую толпу.",
      "gyrocopter": "Chronosphere + Call Down — двойной контроль и урон по толпе."
    }
  },
  skeleton_king: {
    partners: ["dazzle", "magnataur", "wisp", "slardar", "lich"],
    texts: {
      "dazzle": "Shallow Grave держит Skeleton King до реинкарнации — он не умирает вообще.",
      "magnataur": "Reverse Polarity собирает толпу, Hellfire Blast и криты добивают.",
      "wisp": "Tether + Overcharge усиливают Skeleton King, он танкует вечность.",
      "slardar": "Corrosive Haze снимает броню, криты Skeleton King разрывают голую цель.",
      "lich": "Ice Armor защищает Skeleton King, Frost Shield даёт дополнительную живучесть."
    }
  },
  death_prophet: {
    partners: ["magnataur", "enigma", "warlock", "crystal_maiden", "tidehunter"],
    texts: {
      "magnataur": "Reverse Polarity держит толпу, Exorcism бьёт по всем собранным.",
      "enigma": "Black Hole держит врагов, духи Exorcism высасывают жизнь.",
      "warlock": "Fatal Bonds связывает толпу, Exorcism добивает всех сразу.",
      "crystal_maiden": "Freezing Field и Exorcism — двойной урон по застывшей толпе.",
      "tidehunter": "Ravage станит толпу, Exorcism высасывает всех застаненых."
    }
  },
  phantom_assassin: {
    partners: ["slardar", "magnataur", "vengefulspirit", "dark_seer", "wisp", "legion_commander"],
    texts: {
      "slardar": "Corrosive Haze снимает броню — Coup de Grace бьёт по голой цели.",
      "magnataur": "Reverse Polarity собирает толпу, PA влетает с критами по всем.",
      "vengefulspirit": "Aura Venge даёт урон PA, Swap открывает цель под крит.",
      "dark_seer": "Surge разгоняет PA на цель, Vacuum стягивает толпу под неё.",
      "wisp": "Tether + Overcharge усиливают PA, Relocate доставляет её к цели.",
      "legion_commander": "Duel держит цель, PA добивает её критом без шансов."
    }
  },
  pugna: {
    partners: ["leshrac", "skywrath_mage", "lina", "zuus", "keeper_of_the_light"],
    texts: {
      "leshrac": "Decrepify + Pulse Nova — Leshrac жжёт, Pugna сосёт дебаффнутую цель.",
      "skywrath_mage": "Decrepify усиливает магический урон — Mystic Flare бьёт по максимуму.",
      "lina": "Decrepify усиливает Laguna Blade — одноразовый бурст в цель.",
      "zuus": "Decrepify усиливает молнии, Nether Ward молчит врагов.",
      "keeper_of_the_light": "Chakra Magic подпитывает Pugna на постоянные Nether Blast и Life Drain."
    }
  },
  templar_assassin: {
    partners: ["slardar", "magnataur", "vengefulspirit", "dark_seer", "wisp"],
    texts: {
      "slardar": "Corrosive Haze снимает броню — Meld TA бьёт по полностью голой цели.",
      "magnataur": "Reverse Polarity держит толпу, Meld и Psionic Traps добивают всех.",
      "vengefulspirit": "Aura Venge даёт урон TA, Swap открывает цель.",
      "dark_seer": "Surge разгоняет TA, Vacuum стягивает врагов под её трапы.",
      "wisp": "Tether + Overcharge усиливают TA, Relocate доставляет её к цели."
    }
  },
  viper: {
    partners: ["venomancer", "huskar", "dazzle", "necrolyte", "undying"],
    texts: {
      "venomancer": "Классическая пара лейна: яды Viper и Veno полностью запирают линию, соперник не может выйти на фарм.",
      "huskar": "Оба давят HP на линии — враги умирают от ядов и копий Huskar.",
      "dazzle": "Viper режет реген с Poison Attack, Dazzle добивает с Weave.",
      "necrolyte": "Яды Viper + Heartstopper Aura — враги тают без лечения.",
      "undying": "Decay + яды Viper — соперник теряет HP и броню одновременно."
    }
  },
  luna: {
    partners: ["enigma", "magnataur", "crystal_maiden", "grimstroke", "vengefulspirit", "faceless_void"],
    texts: {
      "enigma": "Black Hole держит толпу, Eclipse бьёт по всем собранным.",
      "magnataur": "Reverse Polarity собирает толпу, Eclipse разрывает всех.",
      "crystal_maiden": "Классика: aura CM даёт ману на Eclipse, Freezing Field добивает толпу.",
      "grimstroke": "Soulbind дублирует Eclipse — лунный урон по двум целям.",
      "vengefulspirit": "Aura Venge даёт урон Luna, Swap ловит цель под Eclipse.",
      "faceless_void": "Chronosphere фиксирует толпу, Eclipse бьёт по всем внутри."
    }
  },
  dragon_knight: {
    partners: ["wisp", "magnataur", "slardar", "dazzle", "vengefulspirit"],
    texts: {
      "wisp": "Tether + Overcharge усиливают DK, Relocate доставляет его к цели.",
      "magnataur": "Reverse Polarity собирает толпу, Dragon Tail станит главную цель.",
      "slardar": "Corrosive Haze снимает броню, огненное дыхание DK жжёт толпу.",
      "dazzle": "Shallow Grave спасает DK, пока он танкует весь фокус.",
      "vengefulspirit": "Aura Venge даёт урон DK, Swap открывает цель под его станом."
    }
  },
  dazzle: {
    partners: ["skeleton_king", "huskar", "medusa", "spectre", "legion_commander", "troll_warlord"],
    texts: {
      "skeleton_king": "Shallow Grave держит Skeleton King до реинкарнации — он не умирает вообще.",
      "huskar": "Shallow Grave держит Huskar на нулевом HP, пока тот бурстит копьями.",
      "medusa": "Grave спасает Medusa под фокусом, Weave усиливает её броню.",
      "spectre": "Grave держит Spectre, пока Haunt добивает по всей карте.",
      "legion_commander": "Grave спасает LC под Duel, Weave усиливает её урон.",
      "troll_warlord": "Weave усиливает броню, Grave спасает Troll под фокусом."
    }
  },
  rattletrap: {
    partners: ["disruptor", "magnataur", "dark_seer", "tidehunter", "faceless_void"],
    texts: {
      "disruptor": "Glimpse возвращает цель в Power Cogs, Kinetic Field держит её внутри.",
      "magnataur": "Reverse Polarity держит толпу, Battery Assault и Rocket Flare добивают.",
      "dark_seer": "Vacuum стягивает врагов, Power Cogs запирают их внутри.",
      "tidehunter": "Ravage станит толпу, Hookshot влетает в самую гущу.",
      "faceless_void": "Chronosphere фиксирует цель, Hookshot бьёт по застывшему врагу."
    }
  }
};