// build/kb/synergies1.js — часть 1 базы синергий. См. build/kb/synergies.js.
module.exports = {
  antimage: {
    partners: ["dazzle", "oracle", "winter_wyvern", "wisp", "magnataur", "enigma"],
    texts: {
      "dazzle": "Shallow Grave держит Anti-Mage на ногах под фокусом, пока Blink не уведёт — классическая защита керри.",
      "oracle": "False Promise прячет AM на нулевом HP, а лечащие заклинания поднимают его после Mana Void.",
      "winter_wyvern": "Cold Embrace делает AM неуязвимым в момент фокуса, и он не тратит Blink на спасение.",
      "wisp": "Overcharge разгоняет атаки AM в фарме, а Relocate доставляет его к драке с заряженным Mana Void.",
      "magnataur": "Reverse Polarity стягивает врагов, потративших ману, и Mana Void добивает их всех разом.",
      "enigma": "Black Hole держит врагов под Mana Void — каждый истраченный манапул становится смертным приговором."
    }
  },
  axe: {
    partners: ["dark_seer", "magnataur", "tusk", "enigma", "dazzle", "undying"],
    texts: {
      "dark_seer": "Vacuum стягивает толпу прямо в Call — Counter Helix даёт максимум прокрутов. Классическая связка.",
      "magnataur": "Reverse Polarity держит врагов в зоне Call, чтобы Counter Helix перемалывал всю толпу.",
      "tusk": "Snowball закатывает Axe в гущу врагов, и Call выпадает мгновенно — идеальное открытие.",
      "enigma": "Black Hole сдерживает врагов, пока Axe ждёт своего Call — двойной ультовый контроль.",
      "dazzle": "Shallow Grave спасает Axe на низком HP после Call, и он дожимает толпу до конца.",
      "undying": "Tombstone пускает зомби по всем, кого Axe собрал Call-ом — давление в каждой драке."
    }
  },
  bane: {
    partners: ["mirana", "skywrath_mage", "pudge", "invoker", "kunkka", "grimstroke"],
    texts: {
      "mirana": "Fiend's Grip держит цель 5 секунд — Sacred Arrow попадает без промаха.",
      "skywrath_mage": "Grip фиксирует жертву, Mystic Flare наносит весь урон по неподвижной цели.",
      "pudge": "Grip держит врага, пока Pudge целит Hook — гарантированный захват.",
      "invoker": "Sunstrike по цели под Fiend's Grip — ульта Invoker попадает без промаха.",
      "kunkka": "Grip держит цель, Kunkka ставит Torrent и Ghost Ship по неподвижной жертве.",
      "grimstroke": "Soulbind + Enfeeble усиливают давление, пока Bane держит цель в Grip."
    }
  },
  bloodseeker: {
    partners: ["pudge", "crystal_maiden", "earthshaker", "lion", "keeper_of_the_light", "skywrath_mage"],
    texts: {
      "pudge": "Hook затягивает жертву под Rupture, и любой побег только ускоряет кровопотерю.",
      "crystal_maiden": "Замедления CM не дают цели уйти из Rupture — каждый шаг наносит урон.",
      "earthshaker": "Станы и Echo Slam держат врага на месте, пока Rupture тикает по полной.",
      "lion": "Hex и Impale держат цель, и Rupture наносит весь урон без движения жертвы.",
      "keeper_of_the_light": "Chakra Magic подпитывает Blood Rage и Rupture без остановки, а Illuminate давит линию.",
      "skywrath_mage": "Mystic Flare по цели под Rupture — мгновенный бурст поверх кровопотери."
    }
  },
  crystal_maiden: {
    partners: ["luna", "magnataur", "enigma", "faceless_void", "storm_spirit", "sven"],
    texts: {
      "luna": "Классика: aura CM даёт Luna ману на Eclipse, а Freezing Field добивает после ульты.",
      "magnataur": "Reverse Polarity стягивает толпу, и Freezing Field морозит всех собранных.",
      "enigma": "Black Hole держит врагов, пока Freezing Field наносит урон по всей зоне.",
      "faceless_void": "Chronosphere фиксирует врагов, Freezing Field бьёт по всей застывшей толпе.",
      "storm_spirit": "Aura CM обеспечивает Storm ману на Ball Lightning — постоянное давление.",
      "sven": "Aura подпитывает Sven ману, а станы дают время на God's Strength."
    }
  },
  drow_ranger: {
    partners: ["vengefulspirit", "troll_warlord", "luna", "sniper", "beastmaster"],
    texts: {
      "vengefulspirit": "Классика: aura Vengeful Spirit + Trueshot Aura Drow — двойная прибавка дальнего урона для пуша.",
      "troll_warlord": "Troll даёт скорость атаки, Drow — урон; вместе давят башни и героев с дистанции.",
      "luna": "Обе дальние керри: Trueshot Aura усиливает Luna, а Eclipse добивает цели Drow.",
      "sniper": "Trueshot Aura качает базовый урон Sniper, который и так бьёт с огромной дистанции.",
      "beastmaster": "Inner Beast разгоняет атаку Drow, а Roar сдерживает тех, кто пытается подойти."
    }
  },
  earthshaker: {
    partners: ["magnataur", "dark_seer", "tidehunter", "enigma", "faceless_void"],
    texts: {
      "magnataur": "Reverse Polarity собирает толпу, Echo Slam удваивает урон по каждому — легендарное комбо.",
      "dark_seer": "Vacuum стягивает врагов в одну точку, и Echo Slam бьёт по всей толпе разом.",
      "tidehunter": "Ravage + Echo Slam — двойной ультовый контроль и урон по толпе.",
      "enigma": "Black Hole держит врагов кучей, Echo Slam срывает максимум отражений.",
      "faceless_void": "Chronosphere фиксирует толпу, Echo Slam наносит урон всем внутри."
    }
  },
  juggernaut: {
    partners: ["omniknight", "magnataur", "dazzle", "crystal_maiden", "faceless_void"],
    texts: {
      "omniknight": "Классика лейна: Guardian Angel защищает Juggernaut во время Omnislash, а Repel снимает дебаффы.",
      "magnataur": "Reverse Polarity держит толпу, Omnislash перекидывается по всем собранным.",
      "dazzle": "Shallow Grave спасает Juggernaut, пока он добивает толпу в Bladefury.",
      "crystal_maiden": "Aura CM даёт ману на Bladefury и Healing Ward, а замедления держат цель.",
      "faceless_void": "Chronosphere фиксирует цель, Omnislash бьёт по застывшим врагам."
    }
  },
  mirana: {
    partners: ["bane", "shadow_demon", "pudge", "kunkka", "storm_spirit"],
    texts: {
      "bane": "Fiend's Grip держит цель, и Sacred Arrow попадает без промаха — классическая связка.",
      "shadow_demon": "Disruption создаёт мираж, и Mirana целит Arrow по появившейся жертве.",
      "pudge": "Arrow станит цель, и Hook попадает гарантированно — двойное открытие.",
      "kunkka": "X Marks The Spot возвращает цель, Mirana ставит Arrow по отмеченному месту.",
      "storm_spirit": "Storm станит Ball Lightning-ом, Mirana добивает Arrow — мобильная пара для гангов."
    }
  },
  morphling: {
    partners: ["keeper_of_the_light", "shadow_demon", "magnataur", "tidehunter", "mirana"],
    texts: {
      "keeper_of_the_light": "Chakra Magic подпитывает Morphling на постоянные Waveform и Adaptive Strike.",
      "shadow_demon": "Disruption создаёт копию Morphling, которая наносит урон и обманывает врагов.",
      "magnataur": "Reverse Polarity фиксирует толпу, Adaptive Strike морфит по неподвижным целям.",
      "tidehunter": "Ravage станит, Morphling влетает Waveform-ом и добивает Adaptive Strike.",
      "mirana": "Sacred Arrow станит, Morphling дожимает цель в морфе на Agility."
    }
  },
  nevermore: {
    partners: ["magnataur", "enigma", "tidehunter", "keeper_of_the_light", "dark_seer"],
    texts: {
      "magnataur": "Reverse Polarity собирает толпу, Requiem of Souls наносит урон всем собранным.",
      "enigma": "Black Hole держит врагов, Requiem попадает по всей толпе — мгновенный фарм и килы.",
      "tidehunter": "Ravage + Requiem — контроль и урон по толпе разом.",
      "keeper_of_the_light": "Chakra Magic даёт ману на постоянные Shadow Raze и фарм Necromastery.",
      "dark_seer": "Vacuum стягивает врагов в кучу, Requiem добивает их всех."
    }
  },
  phantom_lancer: {
    partners: ["dark_seer", "magnataur", "keeper_of_the_light", "omniknight", "undying"],
    texts: {
      "dark_seer": "Wall of Replica создаёт копии иллюзий PL — армия удваивается.",
      "magnataur": "Reverse Polarity собирает толпу, и орда иллюзий PL набрасывается на всех.",
      "keeper_of_the_light": "Chakra Magic поддерживает ману на Doppelganger и постоянный пуш иллюзиями.",
      "omniknight": "Repel и Guardian Angel защищают PL, пока он набирает армию иллюзий.",
      "undying": "Tombstone + орда иллюзий PL — два источника давления на драку."
    }
  },
  puck: {
    partners: ["skywrath_mage", "zuus", "invoker", "lina", "magnataur"],
    texts: {
      "skywrath_mage": "Dream Coil держит цель, Mystic Flare наносит полный урон по запертой жертве.",
      "zuus": "Dream Coil запирает врага, Zeus добивает глобальным уроном.",
      "invoker": "Dream Coil держит цель, Sunstrike попадает гарантированно.",
      "lina": "Dream Coil фиксирует врага, Lina добивает Laguna Blade.",
      "magnataur": "Reverse Polarity + Dream Coil — двойной контроль, из которого не выбраться."
    }
  },
  pudge: {
    partners: ["mirana", "bane", "kunkka", "techies", "bloodseeker"],
    texts: {
      "mirana": "Hook тянет цель, Mirana ставит Sacred Arrow по оглушённому врагу.",
      "bane": "Fiend's Grip держит жертву, и Hook попадает без промаха.",
      "kunkka": "X Marks The Spot возвращает цель, Pudge вешает Hook по отмеченному месту.",
      "techies": "Hook затягивает врага прямо на кучу мин Techies — мгновенный урон.",
      "bloodseeker": "Rupture не даёт жертве сбежать, Hook доводит до смерти."
    }
  },
  razor: {
    partners: ["magnataur", "dark_seer", "tidehunter", "vengefulspirit", "slardar"],
    texts: {
      "magnataur": "Reverse Polarity держит толпу, Static Link вытягивает урон с главного керри.",
      "dark_seer": "Surge разгоняет Razor на цель, Vacuum стягивает врагов под link.",
      "tidehunter": "Ravage станит, Razor вытягивает урон с вражеского керри.",
      "vengefulspirit": "Aura Venge даёт урон, Razor крадёт атаки у вражеского керри.",
      "slardar": "Corrosive Haze уменьшает броню, урон Razor бьёт по незащищённой цели."
    }
  },
  sand_king: {
    partners: ["dark_seer", "magnataur", "enigma", "tidehunter", "keeper_of_the_light"],
    texts: {
      "dark_seer": "Классика: Vacuum стягивает толпу, и Epicenter бьёт по всем собранным.",
      "magnataur": "Reverse Polarity + Epicenter — два ультовых AoE по толпе.",
      "enigma": "Black Hole держит врагов, Epicenter наносит полный урон.",
      "tidehunter": "Ravage станит, Sand King выпрыгивает с Epicenter следом.",
      "keeper_of_the_light": "Chakra Magic даёт ману на постоянные Epicenter и Burrowstrike."
    }
  },
  storm_spirit: {
    partners: ["keeper_of_the_light", "crystal_maiden", "mirana", "pudge", "magnataur"],
    texts: {
      "keeper_of_the_light": "Chakra Magic подпитывает Storm на бесконечные Ball Lightning — постоянное давление.",
      "crystal_maiden": "Aura CM даёт ману на рывки, замедления держат цель.",
      "mirana": "Mirana ставит Arrow, Storm станит Ball-ом — двойной контроль в ганге.",
      "pudge": "Hook тянет жертву, Storm догоняет и добивает рывком.",
      "magnataur": "Reverse Polarity держит толпу, Storm влетает в затягивание."
    }
  },
  sven: {
    partners: ["magnataur", "vengefulspirit", "slardar", "wisp", "dark_seer"],
    texts: {
      "magnataur": "Reverse Polarity собирает толпу, God's Strength + cleave Sven уничтожает всех.",
      "vengefulspirit": "Aura Venge даёт Sven урон, а Swap открывает цель для него.",
      "slardar": "Corrosive Haze уменьшает броню, и God's Strength дробит беззащитную толпу.",
      "wisp": "Relocate доставляет Sven к цели, Tether + Overcharge усиливают его атаки.",
      "dark_seer": "Vacuum стягивает врагов в кучу, и cleave Sven бьёт по всем."
    }
  },
  tiny: {
    partners: ["wisp", "magnataur", "enigma", "dark_seer", "keeper_of_the_light"],
    texts: {
      "wisp": "Легендарная связка: Relocate доставляет Tiny на цель, Tether усиливает его урон.",
      "magnataur": "Reverse Polarity собирает врагов, Tiny кидает Avalanche + Toss в толпу.",
      "enigma": "Black Hole держит врагов, Tiny швыряет их по одному.",
      "dark_seer": "Vacuum стягивает толпу, Tiny бросает в них Toss.",
      "keeper_of_the_light": "Chakra Magic даёт ману на постоянные Avalanche + Toss в лейн."
    }
  },
  vengefulspirit: {
    partners: ["drow_ranger", "sven", "phantom_assassin", "luna", "slardar"],
    texts: {
      "drow_ranger": "Классика: aura Vengeful Spirit + Trueshot Aura Drow — огромная прибавка дальнего урона.",
      "sven": "Aura даёт Sven урон, а Swap открывает цель под God's Strength.",
      "phantom_assassin": "Aura усиливает PA, Swap вытаскивает жертву под Coup de Grace.",
      "luna": "Aura даёт Luna урон, а Swap ловит врага под Eclipse.",
      "slardar": "Corrosive Haze снимает броню, урон Venge бьёт по голой цели."
    }
  },
  windrunner: {
    partners: ["slardar", "magnataur", "vengefulspirit", "elder_titan", "tidehunter"],
    texts: {
      "slardar": "Corrosive Haze снижает броню, и Focus Fire Windrunner сносит цель за секунды.",
      "magnataur": "Reverse Polarity держит толпу, Powershot пробивает всех собранных.",
      "vengefulspirit": "Aura даёт урон Windrunner, а Swap открывает цель.",
      "elder_titan": "Natural Order срезает сопротивление и броню, Focus Fire бьёт по голой цели.",
      "tidehunter": "Ravage станит, Windrunner ставит Shackleshot по застывшему врагу."
    }
  },
  zuus: {
    partners: ["keeper_of_the_light", "crystal_maiden", "grimstroke", "faceless_void", "magnataur"],
    texts: {
      "keeper_of_the_light": "Chakra Magic подпитывает Zeus на бесконечный Lightning Bolt и глобальный урон.",
      "crystal_maiden": "Aura CM даёт ману на спам, глобальный урон добивает всех.",
      "grimstroke": "Soulbind удваивает Lightning Bolt — два громовых разряда по цели.",
      "faceless_void": "Chronosphere фиксирует врагов, Nimbus бьёт по застывшим.",
      "magnataur": "Reverse Polarity собирает толпу, Thundergod's Wrath добивает всех."
    }
  },
  kunkka: {
    partners: ["pudge", "mirana", "bane", "tusk", "magnataur"],
    texts: {
      "pudge": "X Marks The Spot возвращает цель, Pudge вешает Hook по отмеченному месту.",
      "mirana": "X возвращает цель, и Sacred Arrow попадает без промаха.",
      "bane": "Fiend's Grip держит цель, пока Kunkka целит Torrent и Ghost Ship.",
      "tusk": "Snowball закатывает толпу, Kunkka бьёт Torrent и Ghost Ship по собранным.",
      "magnataur": "Reverse Polarity + Ghost Ship — двойной урон и контроль по толпе."
    }
  },
  lina: {
    partners: ["grimstroke", "puck", "magnataur", "keeper_of_the_light", "vengefulspirit"],
    texts: {
      "grimstroke": "Soulbind удваивает Laguna Blade — две молнии по двум целям.",
      "puck": "Dream Coil держит цель, Lina добивает Laguna Blade.",
      "magnataur": "Reverse Polarity фиксирует толпу, Laguna добивает главную цель.",
      "keeper_of_the_light": "Chakra Magic даёт ману на постоянные Dragon Slave и Laguna.",
      "vengefulspirit": "Aura даёт урон Lina, Swap ловит цель под Laguna."
    }
  },
  lion: {
    partners: ["grimstroke", "magnataur", "faceless_void", "pudge", "crystal_maiden"],
    texts: {
      "grimstroke": "Soulbind удваивает Finger of Death — два мгновенных убийства.",
      "magnataur": "Reverse Polarity держит толпу, Finger добивает главную цель.",
      "faceless_void": "Chronosphere фиксирует цель, Finger of Death мгновенно её уничтожает.",
      "pudge": "Hex превращает цель, Pudge вешает Hook по обездвиженному врагу.",
      "crystal_maiden": "Aura CM даёт ману на постоянные Impale и Finger."
    }
  },
  shadow_shaman: {
    partners: ["pudge", "mirana", "undying", "keeper_of_the_light", "tidehunter"],
    texts: {
      "pudge": "Shackles и Hex держат цель, пока Pudge вешает Hook.",
      "mirana": "Shackles фиксирует жертву, и Sacred Arrow попадает без промаха.",
      "undying": "Tombstone + Serpent Wards давят башню и толпу одновременно.",
      "keeper_of_the_light": "Chakra Magic подпитывает ману на постоянные Shackles и Wards.",
      "tidehunter": "Ravage станит толпу, Serpent Wards добивают всех."
    }
  }
};
