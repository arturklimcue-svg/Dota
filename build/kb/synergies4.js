// build/kb/synergies4.js — часть 4 базы синергий. См. build/kb/synergies.js.
module.exports = {
  lycan: {
    partners: ["beastmaster", "chen", "furion", "drow_ranger", "enchantress"],
    texts: {
      "beastmaster": "Оба ведут зверье — пуш и фарм со стороны армии крипов.",
      "chen": "Оба ведут зверье — пуш и фарм со стороны армии крипов.",
      "furion": "Оба сплит-пушеры — давление по двум линиям одновременно.",
      "drow_ranger": "Aura Drow усиливает волков Lycan, пуш становится невыносимым.",
      "enchantress": "Обе управляют крипами — двойной контроль леса и линий."
    }
  },
  brewmaster: {
    partners: ["magnataur", "enigma", "tidehunter", "dark_seer", "warlock"],
    texts: {
      "magnataur": "Reverse Polarity держит толпу, Primal Split разрывает всех.",
      "enigma": "Black Hole держит врагов, Primal Split добивает.",
      "tidehunter": "Ravage станит толпу, Brewmaster бьёт по всем застаненым.",
      "dark_seer": "Vacuum стягивает врагов, Thunder Clap и Primal Split добивают.",
      "warlock": "Fatal Bonds связывает толпу, Brewmaster добивает всех."
    }
  },
  shadow_demon: {
    partners: ["mirana", "kunkka", "morphling", "phantom_assassin", "templar_assassin"],
    texts: {
      "mirana": "Disruption создаёт мираж, Mirana целит Arrow по появившейся жертве.",
      "kunkka": "Disruption + Torrent — контроль, из которого не выбраться.",
      "morphling": "Disruption создаёт копию Morphling, которая наносит урон и обманывает.",
      "phantom_assassin": "Disruption + Coup de Grace — PA бьёт по беззащитной цели.",
      "templar_assassin": "Disruption создаёт мираж, TA бьёт Meld по появившейся жертве."
    }
  },
  lone_druid: {
    partners: ["beastmaster", "chen", "lycan", "enchantress", "wisp"],
    texts: {
      "beastmaster": "Оба с питомцами — двойной фарм и двойной пуш линий.",
      "chen": "Оба ведут зверье — армия животных для пуша и фарма.",
      "lycan": "Оба ведут зверье — пуш и фарм со стороны армии крипов.",
      "enchantress": "Обе управляют крипами — двойной контроль леса и линий.",
      "wisp": "Tether + Overcharge усиливают Lone Druid и его медведя."
    }
  },
  chaos_knight: {
    partners: ["wisp", "magnataur", "dark_seer", "vengefulspirit", "omniknight"],
    texts: {
      "wisp": "Классика: Relocate доставляет CK с иллюзиями на цель, Reality Rift ловит её.",
      "magnataur": "Reverse Polarity держит толпу, Reality Rift и криты добивают.",
      "dark_seer": "Surge разгоняет CK, Wall of Replica удваивает его иллюзии.",
      "vengefulspirit": "Aura Venge даёт урон CK, Swap открывает цель.",
      "omniknight": "Guardian Angel защищает CK и его иллюзии, Purification лечит."
    }
  },
  meepo: {
    partners: ["dark_seer", "magnataur", "enigma", "tidehunter", "keeper_of_the_light"],
    texts: {
      "dark_seer": "Wall of Replica создаёт армию копий Meepo — толпа в копиях.",
      "magnataur": "Reverse Polarity держит толпу, армия Meepo рвёт всех.",
      "enigma": "Black Hole держит врагов, армия Meepo налетает на всех.",
      "tidehunter": "Ravage станит толпу, армия Meepo добивает всех.",
      "keeper_of_the_light": "Chakra Magic подпитывает Meepo на постоянные Poof и Earthbind."
    }
  },
  treant: {
    partners: ["spectre", "furion", "dazzle", "oracle", "wisp"],
    texts: {
      "spectre": "Living Armor лечит Spectre глобально, пока она фармит в стороне.",
      "furion": "Living Armor защищает Furion и его деревья, оба давят с пуша.",
      "dazzle": "Living Armor + Shallow Grave — двойная защита от смерти.",
      "oracle": "Living Armor + False Promise — герой не умирает вообще.",
      "wisp": "Living Armor глобально, Tether локально — двойное лечение."
    }
  },
  ogre_magi: {
    partners: ["bloodseeker", "magnataur", "tidehunter", "witch_doctor", "warlock"],
    texts: {
      "bloodseeker": "Bloodlust разгоняет Bloodseeker, он догоняет и режет.",
      "magnataur": "Bloodlust на Sven/Magnus — удар с максимума скорости атаки.",
      "tidehunter": "Bloodlust на Tidehunter — он танкует и бьёт быстрее.",
      "witch_doctor": "Bloodlust разгоняет Death Ward — урон на максимуме.",
      "warlock": "Bloodlust + Fatal Bonds — урон по связанной толпе быстрее."
    }
  },
  undying: {
    partners: ["venomancer", "dazzle", "phoenix", "warlock", "skeleton_king"],
    texts: {
      "venomancer": "Tombstone + яды — давление на толпу, которое не остановить.",
      "dazzle": "Decay + Shallow Grave — враги слабеют, свои не умирают.",
      "phoenix": "Tombstone + Supernova — два объекта, которые надо убить.",
      "warlock": "Fatal Bonds связывает толпу, Decay и Golem добивают.",
      "skeleton_king": "Tombstone + Skeleton King — два источника давления на толпу."
    }
  },
  rubick: {
    partners: ["magnataur", "enigma", "tidehunter", "pudge", "batrider"],
    texts: {
      "magnataur": "Lift + Reverse Polarity — контроль, из которого не выбраться.",
      "enigma": "Rubick крадёт Black Hole, двойное затягивание по толпе.",
      "tidehunter": "Rubick крадёт Ravage, двойной стан по толпе.",
      "pudge": "Telekinesis держит цель, Pudge вешает Hook.",
      "batrider": "Lift + Lasso — двойной контроль, враг обезврежен."
    }
  },
  disruptor: {
    partners: ["rattletrap", "pudge", "magnataur", "enigma", "tidehunter"],
    texts: {
      "rattletrap": "Glimpse возвращает цель в Power Cogs, Kinetic Field держит её внутри.",
      "pudge": "Glimpse возвращает цель, Pudge вешает Hook по отмеченному месту.",
      "magnataur": "Kinetic Field + Reverse Polarity — двойное запирание толпы.",
      "enigma": "Static Storm + Black Hole — толпа под молчанием и затягиванием.",
      "tidehunter": "Kinetic Field + Ravage — толпа заперта и застанена."
    }
  },
  nyx_assassin: {
    partners: ["magnataur", "enigma", "puck", "lina", "skywrath_mage"],
    texts: {
      "magnataur": "Reverse Polarity держит толпу, Mana Burn и Impale добивают.",
      "enigma": "Black Hole держит врагов, Vendetta наносит урон из засады.",
      "puck": "Dream Coil держит цель, Impale добивает застывшую жертву.",
      "lina": "Impale + Laguna Blade — двойной контроль и бурст.",
      "skywrath_mage": "Spiked Carapace + Mystic Flare — урон по застывшей цели."
    }
  },
  naga_siren: {
    partners: ["dark_seer", "magnataur", "enigma", "tidehunter", "keeper_of_the_light"],
    texts: {
      "dark_seer": "Wall of Replica удваивает иллюзии Naga — армия непобедима.",
      "magnataur": "Reverse Polarity держит толпу, орда иллюзий Naga набрасывается.",
      "enigma": "Black Hole держит врагов, иллюзии Naga рвут всех.",
      "tidehunter": "Ravage станит толпу, иллюзии Naga добивают всех.",
      "keeper_of_the_light": "Chakra Magic подпитывает Naga на постоянные Mirror Image."
    }
  },
  keeper_of_the_light: {
    partners: ["leshrac", "pugna", "tinker", "storm_spirit", "zuus"],
    texts: {
      "leshrac": "Chakra Magic подпитывает Leshrac на бесконечные Pulse Nova и Lightning Storm.",
      "pugna": "Chakra Magic подпитывает Pugna на постоянные Nether Blast и Life Drain.",
      "tinker": "Chakra Magic подпитывает Tinker на бесконечный Rearm и марш машин.",
      "storm_spirit": "Chakra Magic подпитывает Storm на бесконечные Ball Lightning.",
      "zuus": "Chakra Magic подпитывает Zeus на бесконечный Lightning Bolt и глобальный урон."
    }
  },
  wisp: {
    partners: ["tiny", "chaos_knight", "huskar", "life_stealer", "sven", "alchemist"],
    texts: {
      "tiny": "Легендарная связка: Relocate доставляет Tiny на цель, Tether усиливает его урон.",
      "chaos_knight": "Классика: Relocate доставляет CK с иллюзиями на цель, Tether усиливает его.",
      "huskar": "Tether + Overcharge усиливают Huskar, Relocate доставляет его к цели.",
      "life_stealer": "Infest в Tether — Life Stealer едет с Tether и Overcharge, оставаясь в тени.",
      "sven": "Relocate доставляет Sven к цели, Tether + Overcharge усиливают его атаки.",
      "alchemist": "Relocate доставляет Alchemist с полным запасом на цель, Tether усиливает его."
    }
  },
  visage: {
    partners: ["drow_ranger", "beastmaster", "undying", "venomancer", "lich"],
    texts: {
      "drow_ranger": "Aura Drow усиливает Familiars Visage — урон на максимуме.",
      "beastmaster": "Оба ведут зверье — пуш и фарм со стороны армии.",
      "undying": "Grave Chill + Tombstone — давление на толпу, которое не остановить.",
      "venomancer": "Grave Chill и яды — враги медленные и отравленные.",
      "lich": "Ice Armor защищает Familiars, Frost Shield усиливает их."
    }
  },
  slark: {
    partners: ["magnataur", "dark_seer", "lion", "shadow_shaman", "dazzle"],
    texts: {
      "magnataur": "Reverse Polarity держит толпу, Dark Pact и Essence Shift добивают.",
      "dark_seer": "Surge разгоняет Slark, Vacuum стягивает врагов под него.",
      "lion": "Hex держит цель, Slark бьёт Pounce и добивает.",
      "shadow_shaman": "Shackles фиксирует цель, Slark добивает из Pounce.",
      "dazzle": "Shallow Grave спасает Slark на нулевом HP, пока тот не спрыгнул."
    }
  },
  medusa: {
    partners: ["dazzle", "magnataur", "slardar", "wisp", "warlock"],
    texts: {
      "dazzle": "Grave спасает Medusa под фокусом, Weave усиливает её броню.",
      "magnataur": "Reverse Polarity держит толпу, Split Shot добивает всех.",
      "slardar": "Corrosive Haze снимает броню, Split Shot разрывает толпу.",
      "wisp": "Tether + Overcharge усиливают Medusa, она танкует вечность.",
      "warlock": "Fatal Bonds связывает толпу, Split Shot бьёт по всем сразу."
    }
  },
  troll_warlord: {
    partners: ["drow_ranger", "slardar", "magnataur", "vengefulspirit", "lich"],
    texts: {
      "drow_ranger": "Troll даёт скорость атаки, Drow — урон; вместе давят башни.",
      "slardar": "Corrosive Haze снимает броню, Troll разрывает голую цель.",
      "magnataur": "Reverse Polarity держит толпу, Troll добивает в Berserker's Rage.",
      "vengefulspirit": "Aura Venge даёт урон Troll, Swap открывает цель.",
      "lich": "Frost Armor защищает Troll, Frost Shield усиливает его живучесть."
    }
  },
  centaur: {
    partners: ["magnataur", "tidehunter", "enigma", "dark_seer", "wisp"],
    texts: {
      "magnataur": "Reverse Polarity держит толпу, Hoof Stomp и Double Edge добивают.",
      "tidehunter": "Ravage станит толпу, Hoof Stomp продлевает контроль.",
      "enigma": "Black Hole держит врагов, Hoof Stomp и Stampede добивают.",
      "dark_seer": "Surge разгоняет Centaur, Vacuum стягивает врагов под него.",
      "wisp": "Tether + Overcharge усиливают Centaur, он танкует вечность."
    }
  },
  magnataur: {
    partners: ["sven", "tiny", "ember_spirit", "earthshaker", "faceless_void", "enigma"],
    texts: {
      "sven": "Reverse Polarity собирает толпу, God's Strength + cleave Sven уничтожает всех.",
      "tiny": "Reverse Polarity собирает врагов, Tiny кидает Avalanche + Toss в толпу.",
      "ember_spirit": "Reverse Polarity держит толпу, Sleight of Fist и Flame Guard добивают.",
      "earthshaker": "Reverse Polarity + Echo Slam — легендарное комбо по толпе.",
      "faceless_void": "Reverse Polarity + Chronosphere — контроль, из которого не выбраться.",
      "enigma": "Reverse Polarity + Black Hole — два стягивания подряд."
    }
  },
  shredder: {
    partners: ["magnataur", "enigma", "tidehunter", "dark_seer", "keeper_of_the_light"],
    texts: {
      "magnataur": "Reverse Polarity держит толпу, Whirling Death и Timber Chain добивают.",
      "enigma": "Black Hole держит врагов, Shredder режет деревья и бьёт по толпе.",
      "tidehunter": "Ravage станит толпу, Shredder добивает цепью и пилой.",
      "dark_seer": "Surge разгоняет Shredder, Vacuum стягивает врагов под пилу.",
      "keeper_of_the_light": "Chakra Magic подпитывает Shredder на постоянные Timber Chain и Whirling Death."
    }
  },
  bristleback: {
    partners: ["dazzle", "wisp", "oracle", "phoenix", "undying"],
    texts: {
      "dazzle": "Shallow Grave держит Bristleback на нулевом HP, пока Quill Spray добивает.",
      "wisp": "Tether + Overcharge усиливают Bristleback, он танкует вечность.",
      "oracle": "False Promise держит Bristleback на нуле, лечение поднимает его.",
      "phoenix": "Двойной DoT — яды Quill Spray и огонь Phoenix жгут толпу.",
      "undying": "Decay + Quill Spray — враги теряют HP и броню одновременно."
    }
  },
  tusk: {
    partners: ["axe", "magnataur", "batrider", "tiny", "kunkka"],
    texts: {
      "axe": "Snowball закатывает Axe в толпу, Call выпадает мгновенно.",
      "magnataur": "Snowball + Reverse Polarity — две инициации подряд.",
      "batrider": "Snowball + Lasso — две инициации, из которых не выбраться.",
      "tiny": "Snowball закатывает Tiny в толпу, Toss добивает.",
      "kunkka": "Snowball закатывает толпу, Kunkka бьёт Torrent и Ghost Ship."
    }
  },
  skywrath_mage: {
    partners: ["legion_commander", "faceless_void", "bane", "puck", "magnataur"],
    texts: {
      "legion_commander": "Классика: Duel держит цель, Mystic Flare наносит весь урон по ней.",
      "faceless_void": "Chronosphere фиксирует цель, Mystic Flare разрывает её полностью.",
      "bane": "Fiend's Grip держит цель, Mystic Flare наносит полный урон.",
      "puck": "Dream Coil держит цель, Mystic Flare наносит весь урон.",
      "magnataur": "Reverse Polarity держит толпу, Mystic Flare добивает главную цель."
    }
  }
};