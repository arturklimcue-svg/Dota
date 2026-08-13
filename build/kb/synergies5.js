// build/kb/synergies5.js — часть 5 базы синергий. См. build/kb/synergies.js.
module.exports = {
  abaddon: {
    partners: ["juggernaut", "wisp", "dazzle", "huskar", "slardar"],
    texts: {
      "juggernaut": "Borrowed Time + Shallow Grave-статус — Juggernaut не умирает, пока лечит Abaddon.",
      "wisp": "Tether + Overcharge усиливают Abaddon, он танкует и лечит всех.",
      "dazzle": "Aphotic Shield + Shallow Grave — двойная защита от смерти.",
      "huskar": "Aphotic Shield защищает Huskar, Mist Coil лечит его.",
      "slardar": "Corrosive Haze снимает броню, Abaddon добивает голую цель."
    }
  },
  elder_titan: {
    partners: ["windrunner", "templar_assassin", "phantom_assassin", "sven", "magnataur"],
    texts: {
      "windrunner": "Natural Order срезает сопротивление и броню, Focus Fire бьёт по голой цели.",
      "templar_assassin": "Natural Order убирает броню — Meld TA бьёт по полностью голой цели.",
      "phantom_assassin": "Natural Order срезает броню, криты PA становятся разрушительнее.",
      "sven": "Natural Order убирает сопротивление, God's Strength разрывает голую толпу.",
      "magnataur": "Earth Splitter + Reverse Polarity — двойной контроль по толпе."
    }
  },
  legion_commander: {
    partners: ["skywrath_mage", "dazzle", "riki", "silencer", "magnataur"],
    texts: {
      "skywrath_mage": "Классика: Duel держит цель, Mystic Flare наносит весь урон по ней.",
      "dazzle": "Grave спасает LC под Duel, Weave усиливает её урон.",
      "riki": "Smoke Screen + Duel — цель без реакций под контролем LC.",
      "silencer": "Global Silence + Duel — враги не могут ответить на Duel.",
      "magnataur": "Reverse Polarity держит толпу, Duel добивает главную цель."
    }
  },
  techies: {
    partners: ["pudge", "dark_seer", "keeper_of_the_light", "magnataur", "faceless_void"],
    texts: {
      "pudge": "Hook затягивает врага прямо на кучу мин Techies — мгновенный урон.",
      "dark_seer": "Vacuum затягивает врагов на мины Techies — мгновенная смерть.",
      "keeper_of_the_light": "Illuminate освещает мины и отбрасывает, Techies ставит ловушки.",
      "magnataur": "Reverse Polarity стягивает толпу на мины — мгновенный вайп.",
      "faceless_void": "Chronosphere фиксирует врагов на минах — они не могут уйти."
    }
  },
  ember_spirit: {
    partners: ["magnataur", "faceless_void", "dark_seer", "keeper_of_the_light", "enigma"],
    texts: {
      "magnataur": "Reverse Polarity держит толпу, Sleight of Fist и Flame Guard добивают.",
      "faceless_void": "Chronosphere фиксирует толпу, Sleight of Fist бьёт по всем внутри.",
      "dark_seer": "Surge разгоняет Ember, Vacuum стягивает врагов под него.",
      "keeper_of_the_light": "Chakra Magic подпитывает Ember на постоянные Sleight of Fist и Flame Guard.",
      "enigma": "Black Hole держит врагов, Sleight of Fist бьёт по всей толпе."
    }
  },
  earth_spirit: {
    partners: ["magnataur", "enigma", "tidehunter", "batrider", "centaur"],
    texts: {
      "magnataur": "Reverse Polarity держит толпу, Rolling Boulder и Magnetize добивают.",
      "enigma": "Black Hole держит врагов, Magnetize разрывает всех.",
      "tidehunter": "Ravage станит толпу, Earth Spirit бьёт по всем застаненым.",
      "batrider": "Stone Remnant + Lasso — контроль, из которого не выбраться.",
      "centaur": "Rolling Boulder + Hoof Stomp — двойной контроль по цели."
    }
  },
  abyssal_underlord: {
    partners: ["magnataur", "enigma", "tidehunter", "dark_seer", "wisp"],
    texts: {
      "magnataur": "Reverse Polarity держит толпу, Firestorm жжёт всех.",
      "enigma": "Black Hole держит врагов, Firestorm и Pit of Malice добивают.",
      "tidehunter": "Ravage станит толпу, Firestorm жжёт всех застаненых.",
      "dark_seer": "Vacuum стягивает врагов, Firestorm добивает всех.",
      "wisp": "Tether + Overcharge усиливают Abyssal Underlord, он танкует вечность."
    }
  },
  terrorblade: {
    partners: ["dark_seer", "magnataur", "enigma", "tidehunter", "dazzle"],
    texts: {
      "dark_seer": "Wall of Replica удваивает иллюзии Terrorblade — армия непобедима.",
      "magnataur": "Reverse Polarity держит толпу, Sunder и иллюзии добивают.",
      "enigma": "Black Hole держит врагов, армия иллюзий TB рвёт всех.",
      "tidehunter": "Ravage станит толпу, Metamorphosis добивает всех.",
      "dazzle": "Shallow Grave спасает TB, пока Sunder не обменяет HP."
    }
  },
  phoenix: {
    partners: ["undying", "necrolyte", "warlock", "venomancer", "bristleback"],
    texts: {
      "undying": "Tombstone + Supernova — два объекта, которые надо убить.",
      "necrolyte": "Phoenix лечит всех вокруг, Necrolyte режет HP аурами — двойное давление.",
      "warlock": "Fatal Bonds связывает толпу, Fire Spirits и Supernova добивают.",
      "venomancer": "Яды + огонь Phoenix — двойной DoT на линии.",
      "bristleback": "Двойной DoT — яды Quill Spray и огонь Phoenix жгут толпу."
    }
  },
  oracle: {
    partners: ["huskar", "bristleback", "skeleton_king", "spectre", "dazzle"],
    texts: {
      "huskar": "False Promise держит Huskar на нуле, лечение поднимает его снова и снова.",
      "bristleback": "False Promise держит Bristleback на нуле, лечение поднимает его.",
      "skeleton_king": "False Promise держит Skeleton King до реинкарнации — он не умирает вообще.",
      "spectre": "False Promise держит Spectre на нуле, Haunt добивает врагов.",
      "dazzle": "False Promise + Shallow Grave — герой не умирает вообще."
    }
  },
  winter_wyvern: {
    partners: ["antimage", "juggernaut", "wisp", "dazzle", "huskar"],
    texts: {
      "antimage": "Cold Embrace делает AM неуязвимым в момент фокуса, и он не тратит Blink.",
      "juggernaut": "Cold Embrace защищает Juggernaut, Winter's Curse добивает толпу.",
      "wisp": "Cold Embrace + Tether — двойная защита от смерти.",
      "dazzle": "Cold Embrace + Shallow Grave — двойная защита от смерти.",
      "huskar": "Cold Embrace защищает Huskar на нулевом HP, пока тот бурстит."
    }
  },
  arc_warden: {
    partners: ["magnataur", "enigma", "dark_seer", "keeper_of_the_light", "techies"],
    texts: {
      "magnataur": "Reverse Polarity держит толпу, Flux и Tempest Double добивают.",
      "enigma": "Black Hole держит врагов, Tempest Double бьёт по всем.",
      "dark_seer": "Surge разгоняет Arc Warden, Vacuum стягивает врагов под него.",
      "keeper_of_the_light": "Chakra Magic подпитывает Arc Warden на постоянные Flux и Spark Wraith.",
      "techies": "Tempest Double ставит мины и пыль, Techies добивает с полей."
    }
  },
  monkey_king: {
    partners: ["magnataur", "enigma", "dark_seer", "tidehunter", "wisp"],
    texts: {
      "magnataur": "Reverse Polarity держит толпу, Wukong's Command бьёт по всем.",
      "enigma": "Black Hole держит врагов, Wukong's Command разрывает всех.",
      "dark_seer": "Surge разгоняет MK, Vacuum стягивает врагов под армию обезьян.",
      "tidehunter": "Ravage станит толпу, Wukong's Command добивает всех.",
      "wisp": "Tether + Overcharge усиливают MK, Relocate доставляет его к цели."
    }
  },
  dark_willow: {
    partners: ["magnataur", "enigma", "tidehunter", "skywrath_mage", "faceless_void"],
    texts: {
      "magnataur": "Reverse Polarity держит толпу, Terrorize добивает всех.",
      "enigma": "Black Hole держит врагов, Terrorize и Shadow Realm добивают.",
      "tidehunter": "Ravage станит толпу, Terrorize разрывает всех.",
      "skywrath_mage": "Cursed Crown + Mystic Flare — контроль и бурст по цели.",
      "faceless_void": "Chronosphere фиксирует толпу, Terrorize бьёт по всем внутри."
    }
  },
  pangolier: {
    partners: ["magnataur", "enigma", "dark_seer", "tidehunter", "keeper_of_the_light"],
    texts: {
      "magnataur": "Reverse Polarity держит толпу, Rolling Thunder добивает всех.",
      "enigma": "Black Hole держит врагов, Rolling Thunder бьёт по всем.",
      "dark_seer": "Surge разгоняет Pango, Vacuum стягивает врагов под него.",
      "tidehunter": "Ravage станит толпу, Rolling Thunder разрывает всех.",
      "keeper_of_the_light": "Chakra Magic подпитывает Pango на постоянные Swashbuckle и Rolling Thunder."
    }
  },
  grimstroke: {
    partners: ["lina", "lion", "lich", "skywrath_mage", "luna"],
    texts: {
      "lina": "Soulbind удваивает Laguna Blade — две молнии по двум целям.",
      "lion": "Soulbind удваивает Finger of Death — два мгновенных убийства.",
      "lich": "Soulbind дублирует Chain Frost — ледяной урон по двум целям сразу.",
      "skywrath_mage": "Soulbind удваивает Mystic Flare — два ульты по двум целям.",
      "luna": "Soulbind дублирует Eclipse — лунный урон по двум целям."
    }
  },
  hoodwink: {
    partners: ["magnataur", "dark_seer", "tidehunter", "enigma", "keeper_of_the_light"],
    texts: {
      "magnataur": "Reverse Polarity держит толпу, Sharpshooter пробивает всех.",
      "dark_seer": "Surge разгоняет Hoodwink, Vacuum стягивает врагов под неё.",
      "tidehunter": "Ravage станит толпу, Sharpshooter добивает главную цель.",
      "enigma": "Black Hole держит врагов, Acorn Shot бьёт по всем.",
      "keeper_of_the_light": "Chakra Magic подпитывает Hoodwink на постоянные Bushwhack и Sharpshooter."
    }
  },
  void_spirit: {
    partners: ["magnataur", "enigma", "tidehunter", "dark_seer", "keeper_of_the_light"],
    texts: {
      "magnataur": "Reverse Polarity держит толпу, Dissimilate и Astrals Step добивают.",
      "enigma": "Black Hole держит врагов, Astrals Step бьёт по всей толпе.",
      "tidehunter": "Ravage станит толпу, Astrals Step разрывает всех.",
      "dark_seer": "Surge разгоняет Void Spirit, Vacuum стягивает врагов под него.",
      "keeper_of_the_light": "Chakra Magic подпитывает Void Spirit на постоянные Astrals Step."
    }
  },
  snapfire: {
    partners: ["magnataur", "enigma", "tidehunter", "faceless_void", "luna"],
    texts: {
      "magnataur": "Reverse Polarity держит толпу, Mortimer Kisses добивает всех.",
      "enigma": "Black Hole держит врагов, Mortimer Kisses разрывает всех.",
      "tidehunter": "Ravage станит толпу, Mortimer Kisses жгут всех застаненых.",
      "faceless_void": "Chronosphere фиксирует толпу, Mortimer Kisses бьют по всем внутри.",
      "luna": "Обе бьют по толпе — Mortimer Kisses и Eclipse добивают всех."
    }
  },
  mars: {
    partners: ["magnataur", "enigma", "tidehunter", "skywrath_mage", "faceless_void"],
    texts: {
      "magnataur": "Reverse Polarity держит толпу в Arena, Spear добивает.",
      "enigma": "Black Hole держит врагов в Arena, Spear пробивает всех.",
      "tidehunter": "Ravage станит толпу в Arena, Spear добивает всех.",
      "skywrath_mage": "Arena держит цель, Mystic Flare наносит весь урон по ней.",
      "faceless_void": "Chronosphere + Arena — контроль, из которого не выбраться."
    }
  },
  ringmaster: {
    partners: ["magnataur", "enigma", "tidehunter", "skywrath_mage", "pudge"],
    texts: {
      "magnataur": "Reverse Polarity держит толпу, Impalement Arts добивает всех.",
      "enigma": "Black Hole держит врагов, Impalement Arts бьёт по всем.",
      "tidehunter": "Ravage станит толпу, Impalement Arts добивает всех.",
      "skywrath_mage": "Impalement Arts + Mystic Flare — контроль и бурст по цели.",
      "pudge": "Impalement Arts держит цель, Pudge вешает Hook."
    }
  },
  dawnbreaker: {
    partners: ["magnataur", "enigma", "tidehunter", "wisp", "dazzle"],
    texts: {
      "magnataur": "Reverse Polarity держит толпу, Solar Guardian добивает всех.",
      "enigma": "Black Hole держит врагов, Solar Guardian разрывает всех.",
      "tidehunter": "Ravage станит толпу, Fire Wreath добивает всех застаненых.",
      "wisp": "Tether + Overcharge усиливают Dawnbreaker, она танкует вечность.",
      "dazzle": "Shallow Grave спасает Dawnbreaker, пока она лечит команду."
    }
  },
  marci: {
    partners: ["magnataur", "enigma", "tidehunter", "legion_commander", "wisp"],
    texts: {
      "magnataur": "Reverse Polarity держит толпу, Dispose и Unleash добивают всех.",
      "enigma": "Black Hole держит врагов, Unleash бьёт по всей толпе.",
      "tidehunter": "Ravage станит толпу, Dispose швыряет врагов.",
      "legion_commander": "Dispose кидает цель в Duel — двойной контроль.",
      "wisp": "Tether + Overcharge усиливают Marci, она бьёт и танкует."
    }
  },
  primal_beast: {
    partners: ["magnataur", "enigma", "tidehunter", "dark_seer", "keeper_of_the_light"],
    texts: {
      "magnataur": "Reverse Polarity держит толпу, Pulverize добивает всех.",
      "enigma": "Black Hole держит врагов, Pulverize разрывает всех.",
      "tidehunter": "Ravage станит толпу, Pulverize добивает всех застаненых.",
      "dark_seer": "Surge разгоняет Primal Beast, Vacuum стягивает врагов под него.",
      "keeper_of_the_light": "Chakra Magic подпитывает Primal Beast на постоянные Onslaught."
    }
  },
  muerta: {
    partners: ["magnataur", "enigma", "tidehunter", "slardar", "dazzle"],
    texts: {
      "magnataur": "Reverse Polarity держит толпу, Pierce the Veil добивает всех.",
      "enigma": "Black Hole держит врагов, Pierce the Veil разрывает всех.",
      "tidehunter": "Ravage станит толпу, Muerta расстреливает всех застаненых.",
      "slardar": "Corrosive Haze снимает броню, Muerta разрывает голую цель.",
      "dazzle": "Shallow Grave спасает Muerta под фокусом, пока она стреляет."
    }
  },
  kez: {
    partners: ["magnataur", "enigma", "tidehunter", "slardar", "wisp"],
    texts: {
      "magnataur": "Reverse Polarity держит толпу, Kazurai и Sai дополняют ульту.",
      "enigma": "Black Hole держит врагов, Kez бьёт по всей толпе.",
      "tidehunter": "Ravage станит толпу, Kez добивает всех застаненых.",
      "slardar": "Corrosive Haze снимает броню, Kez разрывает голую цель.",
      "wisp": "Tether + Overcharge усиливают Kez, Relocate доставляет его к цели."
    }
  },
  largo: {
    partners: ["magnataur", "enigma", "tidehunter", "slardar", "keeper_of_the_light"],
    texts: {
      "magnataur": "Reverse Polarity держит толпу, Largo добивает всех.",
      "enigma": "Black Hole держит врагов, Largo бьёт по всей толпе.",
      "tidehunter": "Ravage станит толпу, Largo добивает всех застаненых.",
      "slardar": "Corrosive Haze снимает броню, Largo разрывает голую цель.",
      "keeper_of_the_light": "Chakra Magic подпитывает Largo на постоянные заклинания."
    }
  }
};