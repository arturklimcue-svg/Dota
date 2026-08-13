// build/kb/synergies3.js — часть 3 базы синергий. См. build/kb/synergies.js.
module.exports = {
  leshrac: {
    partners: ["pugna", "keeper_of_the_light", "magnataur", "enigma", "dark_seer"],
    texts: {
      "pugna": "Decrepify + Pulse Nova — Leshrac жжёт, Pugna сосёт дебаффнутую цель.",
      "keeper_of_the_light": "Chakra Magic подпитывает Leshrac на бесконечные Pulse Nova и Lightning Storm.",
      "magnataur": "Reverse Polarity стягивает толпу, Pulse Nova разрывает всех.",
      "enigma": "Black Hole держит врагов, Pulse Nova жжёт всю толпу.",
      "dark_seer": "Vacuum стягивает врагов, Pulse Nova и Diabolic Edict добивают."
    }
  },
  furion: {
    partners: ["spectre", "zuus", "ancient_apparition", "invoker", "lich"],
    texts: {
      "spectre": "Классика: Furion пушит линии сплит-пушем, Spectre приходит на глобальные драки.",
      "zuus": "Sprout ловит цель, Zeus добивает глобальным уроном.",
      "ancient_apparition": "Ice Blast по всей карте, Furion бьёт с глобальным пушем.",
      "invoker": "Sunstrike + глобальный пуш — двойное давление по всей карте.",
      "lich": "Chain Frost по толпе, Furion добивает с деревьев и сплит-пуша."
    }
  },
  life_stealer: {
    partners: ["wisp", "storm_spirit", "magnataur", "enigma", "dazzle"],
    texts: {
      "wisp": "Infest в Tether — Life Stealer едет с Tether и Overcharge, оставаясь в тени.",
      "storm_spirit": "Классический Infest-bomb: Storm влетает в толпу, из него выпрыгивает Life Stealer.",
      "magnataur": "Reverse Polarity держит толпу, Rage и Feast добивают всех.",
      "enigma": "Black Hole держит врагов, Life Stealer выходит и рвёт их изнутри.",
      "dazzle": "Shallow Grave держит Life Stealer на нулевом HP, пока Rage не спасёт его."
    }
  },
  dark_seer: {
    partners: ["axe", "sand_king", "magnataur", "meepo", "techies"],
    texts: {
      "axe": "Vacuum стягивает толпу в Call — Counter Helix даёт максимум прокрутов.",
      "sand_king": "Vacuum стягивает толпу, Epicenter бьёт по всем собранным.",
      "magnataur": "Vacuum + Reverse Polarity — два стягивания подряд.",
      "meepo": "Wall of Replica создаёт армию копий Meepo — толпа в копиях.",
      "techies": "Vacuum затягивает врагов на мины Techies — мгновенная смерть."
    }
  },
  clinkz: {
    partners: ["windrunner", "drow_ranger", "slardar", "legion_commander", "bounty_hunter"],
    texts: {
      "windrunner": "Shackleshot ловит цель, Clinkz расстреливает с Burning Barrage.",
      "drow_ranger": "Trueshot Aura качает урон Clinkz, оба давят с дистанции.",
      "slardar": "Corrosive Haze снимает броню, Clinkz разрывает голую цель.",
      "legion_commander": "Duel держит цель, Clinkz сжигает её сзади.",
      "bounty_hunter": "Оба охотники — невидимые килы по всей карте."
    }
  },
  omniknight: {
    partners: ["juggernaut", "huskar", "wisp", "sven", "phantom_assassin"],
    texts: {
      "juggernaut": "Классика лейна: Guardian Angel защищает Juggernaut во время Omnislash.",
      "huskar": "Guardian Angel защищает Huskar на нулевом HP, Purification лечит его.",
      "wisp": "Tether + Overcharge усиливают Omniknight, Guardian Angel спасает всю команду.",
      "sven": "Guardian Angel защищает Sven в God's Strength, Purification лечит его.",
      "phantom_assassin": "Guardian Angel спасает PA под фокусом, Purification снимает урон."
    }
  },
  enchantress: {
    partners: ["wisp", "huskar", "undying", "dazzle", "warlock"],
    texts: {
      "wisp": "Tether + Overcharge усиливают Enchantress, она не умирает под фокусом.",
      "huskar": "Оба сильны на ранней стадии — импакт-пара для доминирования в лейне.",
      "undying": "Decay + Impetus — враги теряют HP и не могут сбежать от Enchantress.",
      "dazzle": "Shallow Grave держит Enchantress, Weave усиливает её урон.",
      "warlock": "Fatal Bonds + Impetus — огромный урон по связанной толпе."
    }
  },
  huskar: {
    partners: ["dazzle", "oracle", "wisp", "viper", "omniknight", "pugna"],
    texts: {
      "dazzle": "Shallow Grave держит Huskar на нулевом HP, пока тот бурстит копьями.",
      "oracle": "False Promise держит Huskar на нуле, лечение поднимает его снова и снова.",
      "wisp": "Tether + Overcharge усиливают Huskar, Relocate доставляет его к цели.",
      "viper": "Оба давят HP на линии — враги умирают от копий и ядов.",
      "omniknight": "Guardian Angel защищает Huskar на нулевом HP, Purification лечит его.",
      "pugna": "Decrepify защищает Huskar от физического урона, Life Drain лечит его."
    }
  },
  night_stalker: {
    partners: ["batrider", "mirana", "storm_spirit", "bounty_hunter", "legion_commander"],
    texts: {
      "batrider": "Lasso тянет цель в темноту, Night Stalker добивает под покровом ночи.",
      "mirana": "Darkness + Sacred Arrow — враги не видят, откуда летит стрела.",
      "storm_spirit": "Ночью Storm и Night Stalker давят всю карту гангами.",
      "bounty_hunter": "Оба охотники ночи — невидимые килы по всей карте в темноте.",
      "legion_commander": "Duel в темноте — враги не могут помочь своей цели."
    }
  },
  broodmother: {
    partners: ["furion", "dark_seer", "lycan", "clinkz", "techies"],
    texts: {
      "furion": "Оба сплит-пушеры — давление по двум линиям одновременно.",
      "dark_seer": "Vacuum стягивает врагов под пауков, Wall of Replica удваивает армию.",
      "lycan": "Оба пушат линию пауками и волками — башня падает за секунды.",
      "clinkz": "Оба невидимы в лесу — внезапные килы из засады.",
      "techies": "Пауки затягивают врагов на мины Techies."
    }
  },
  bounty_hunter: {
    partners: ["riki", "night_stalker", "clinkz", "slardar", "troll_warlord"],
    texts: {
      "riki": "Два невидимых героя давят всю карту, Track даёт золото за килы Riki.",
      "night_stalker": "Оба охотники ночи — невидимые килы по всей карте в темноте.",
      "clinkz": "Оба невидимы — внезапные килы из засады.",
      "slardar": "Corrosive Haze + Track — цель видна и без брони, добить легко.",
      "troll_warlord": "Track даёт золото с каждого кила, Troll фармит и добивает."
    }
  },
  weaver: {
    partners: ["dark_seer", "magnataur", "slardar", "legion_commander", "queenofpain"],
    texts: {
      "dark_seer": "Surge разгоняет Weaver на цель, Time Lapse отматывает его урон.",
      "magnataur": "Reverse Polarity держит толпу, Swarm и Geminate добивают.",
      "slardar": "Corrosive Haze снимает броню, Weaver разрывает голую цель.",
      "legion_commander": "Duel держит цель, Weaver сжигает её сзади.",
      "queenofpain": "Оба мобильные — ганги по всей карте, Weaver с Time Lapse не умирает."
    }
  },
  jakiro: {
    partners: ["leshrac", "lina", "magnataur", "enigma", "warlock"],
    texts: {
      "leshrac": "Двойной AoE магический урон — толпа тает под Pulse Nova и Fire Breath.",
      "lina": "Dragon Slave + Ice Path — контроль и урон по линии.",
      "magnataur": "Reverse Polarity стягивает толпу, Ice Path станит всех.",
      "enigma": "Black Hole держит врагов, Macropyre жжёт всю толпу.",
      "warlock": "Fatal Bonds связывает толпу, Macropyre и Ice Path добивают."
    }
  },
  batrider: {
    partners: ["magnataur", "venomancer", "night_stalker", "tusk", "tiny"],
    texts: {
      "magnataur": "Lasso тянет цель прямо в Reverse Polarity — двойной контроль.",
      "venomancer": "Lasso тянет врага в яды Veno — тот умирает в луже яда.",
      "night_stalker": "Lasso тянет цель в темноту, Night Stalker добивает.",
      "tusk": "Snowball + Lasso — две инициации, из которых не выбраться.",
      "tiny": "Lasso тянет цель, Tiny кидает Toss по затащенному врагу."
    }
  },
  chen: {
    partners: ["lycan", "beastmaster", "lone_druid", "furion", "enchantress"],
    texts: {
      "lycan": "Оба ведут зверье — пуш и фарм со стороны армии крипов.",
      "beastmaster": "Оба с питомцами — двойной фарм и двойной пуш линий.",
      "lone_druid": "Оба ведут зверье — армия животных для пуша и фарма.",
      "furion": "Chen пушит линию зверьём, Furion сплит-пушит другую.",
      "enchantress": "Обе управляют крипами — двойной контроль леса и линий."
    }
  },
  spectre: {
    partners: ["furion", "dazzle", "wisp", "oracle", "treant"],
    texts: {
      "furion": "Классика: Furion пушит линии, Spectre приходит на глобальные драки.",
      "dazzle": "Grave спасает Spectre под фокусом, пока Haunt добивает по всей карте.",
      "wisp": "Relocate доставляет Spectre к цели, Tether усиливает её.",
      "oracle": "False Promise держит Spectre на нуле, Haunt добивает врагов.",
      "treant": "Living Armor лечит Spectre глобально, пока она фармит в стороне."
    }
  },
  ancient_apparition: {
    partners: ["zuus", "invoker", "lina", "furion", "skywrath_mage"],
    texts: {
      "zuus": "Ice Blast запрещает лечение, глобальный урон Zeus добивает всех.",
      "invoker": "Ice Blast + Sunstrike — двойной глобальный контроль HP.",
      "lina": "Ice Blast запрещает лечение, Laguna добивает цель.",
      "furion": "Ice Blast по всей карте, Furion бьёт с глобальным пушем.",
      "skywrath_mage": "Cold Feet станит, Mystic Flare добивает застывшую цель."
    }
  },
  doom_bringer: {
    partners: ["batrider", "magnataur", "enigma", "tidehunter", "skywrath_mage"],
    texts: {
      "batrider": "Lasso тянет цель под Doom — враг обезврежен навсегда.",
      "magnataur": "Reverse Polarity собирает толпу, Doom накладывается на главную цель.",
      "enigma": "Black Hole держит врагов, Doom добивает их.",
      "tidehunter": "Ravage станит толпу, Doom отключает керри навсегда.",
      "skywrath_mage": "Doom + Mystic Flare — цель без возможностей под ультой."
    }
  },
  ursa: {
    partners: ["lion", "wisp", "magnataur", "enigma", "dazzle"],
    texts: {
      "lion": "Hex держит цель, Ursa рвёт её Overpower до активации.",
      "wisp": "Tether + Overcharge усиливают Ursa, Relocate доставляет его к цели.",
      "magnataur": "Reverse Polarity держит толпу, Ursa фокусит главную цель.",
      "enigma": "Black Hole держит врагов, Ursa рвёт их изнутри.",
      "dazzle": "Shallow Grave держит Ursa на нулевом HP, пока тот добивает."
    }
  },
  spirit_breaker: {
    partners: ["magnataur", "tidehunter", "batrider", "earth_spirit", "legion_commander"],
    texts: {
      "magnataur": "Charge + Reverse Polarity — две инициации подряд.",
      "tidehunter": "Charge влетает в толпу, Ravage станит всех.",
      "batrider": "Charge + Lasso — две инициации, из которых не выбраться.",
      "earth_spirit": "Charge + Stone Remnant — контроль и урон по цели.",
      "legion_commander": "Charge открывает Duel, Global Charge ловит беглецов."
    }
  },
  gyrocopter: {
    partners: ["tidehunter", "magnataur", "enigma", "faceless_void", "wisp"],
    texts: {
      "tidehunter": "Ravage + Call Down — двойной контроль и урон по толпе.",
      "magnataur": "Reverse Polarity держит толпу, Call Down и Flak Cannon добивают.",
      "enigma": "Black Hole держит врагов, Call Down бьёт по всей толпе.",
      "faceless_void": "Chronosphere фиксирует толпу, Call Down разрывает всех внутри.",
      "wisp": "Relocate доставляет Gyro к цели, Tether усиливает его."
    }
  },
  alchemist: {
    partners: ["wisp", "magnataur", "enigma", "dazzle", "treant"],
    texts: {
      "wisp": "Relocate доставляет Alchemist с полным запасом на цель, Tether усиливает его.",
      "magnataur": "Reverse Polarity собирает толпу, Alchemist разбрызгивает концентрированный яд.",
      "enigma": "Black Hole держит врагов, Alchemist бьёт по всем Acid Spray.",
      "dazzle": "Grave спасает Alchemist под фокусом, пока тот не зафармил.",
      "treant": "Living Armor лечит Alchemist, пока тот фармит Грилифа."
    }
  },
  invoker: {
    partners: ["faceless_void", "magnataur", "zuus", "ancient_apparition", "keeper_of_the_light"],
    texts: {
      "faceless_void": "Chronosphere + Sunstrike/Cataclysm — ульта Invoker бьёт без промаха.",
      "magnataur": "Reverse Polarity держит толпу, EMP и Sunstrike добивают всех.",
      "zuus": "Оба глобальные — давление по всей карте Sunstrike и молниями.",
      "ancient_apparition": "Ice Blast + Sunstrike — двойной глобальный контроль HP.",
      "keeper_of_the_light": "Chakra Magic подпитывает Invoker на постоянные заклинания."
    }
  },
  silencer: {
    partners: ["doom_bringer", "enigma", "magnataur", "tidehunter", "grimstroke"],
    texts: {
      "doom_bringer": "Silencer + Doom — два молчания, из которых не выбраться.",
      "enigma": "Black Hole + Global Silence — враги без реакций под ультой.",
      "magnataur": "Global Silence + Reverse Polarity — толпа без заклинаний в стягивании.",
      "tidehunter": "Global Silence + Ravage — враги не могут ответить на ульту.",
      "grimstroke": "Soulbind + Global Silence — двойное давление по толпе."
    }
  },
  obsidian_destroyer: {
    partners: ["magnataur", "enigma", "puck", "skywrath_mage", "keeper_of_the_light"],
    texts: {
      "magnataur": "Reverse Polarity держит толпу, Sanity's Eclipse добивает всех с низкой маной.",
      "enigma": "Black Hole держит врагов, Sanity's Eclipse разрывает их.",
      "puck": "Dream Coil держит цель, OD бьёт Arcane Orb по застывшему врагу.",
      "skywrath_mage": "Sanity's Eclipse + Mystic Flare — двойной магический бурст.",
      "keeper_of_the_light": "Chakra Magic подпитывает OD на постоянные Arcane Orb."
    }
  }
};