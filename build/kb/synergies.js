// build/kb/synergies.js — база знаний: синергии героев (связки).
// Для каждого героя перечислены партнёры, с которыми он силён в одной команде,
// и объяснение, почему связка работает. Ключи — hero.name.
module.exports = {
  antimage: {
    partners: ["magnataur", "enigma", "magnataur", "zuus", "ancient_apparition", "tidehunter"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, и Mana Void добивает всех, кто потратил ману в драке.",
      "enigma": "Black Hole держит врагов без маны, после чего Mana Void карает их всех разом.",
      "zuus": "Nimbus и Lightning Bolt давят врагов по всей карте, пока Anti-Mage фармит в стороне.",
      "ancient_apparition": "Ice Blast запрещает лечение, Mana Void добивает — комбо по всей карте.",
      "tidehunter": "Ravage фиксирует толпу, Mana Void добивает обезманенных врагов."
    }
  },
  axe: {
    partners: ["dark_seer", "enigma", "magnataur", "zuus", "shredder", "necrolyte"],
    texts: {
      "dark_seer": "Vacuum стягивает толпу прямо в Call — Counter Helix даёт максимум срабатываний.",
      "enigma": "Black Hole держит врагов в Call, урон Counter Helix бьёт всех собранных.",
      "magnataur": "Reverse Polarity + Call — два стягивания подряд, враги не успевают разбежаться.",
      "zuus": "Global урон добивает тех, кого Axe не успел дожать в Call.",
      "shredder": "Flamethrower жжёт всех, кого Axe собрал в Call.",
      "necrolyte": "Reaper's Scythe казнит цель с низким HP после урона Axe."
    }
  },
  bane: {
    partners: ["mirana", "pudge", "skywrath_mage", "zuus", "crystal_maiden", "puck"],
    texts: {
      "mirana": "Fiend's Grip держит цель, пока Mirana целится Sacred Arrow.",
      "pudge": "Grip фиксирует, и Pudge без промаха вешает Hook.",
      "skywrath_mage": "Grip + Mystic Flare — мгновенный бурст по одной цели.",
      "zuus": "Глобальный урон добивает цель под Fiend's Grip.",
      "crystal_maiden": "Grip + Freezing Field — цель под контролем весь урон ульты.",
      "puck": "Dream Coil держит цель после снятия Grip."
    }
  },
  bloodseeker: {
    partners: ["pudge", "crystal_maiden", "storm_spirit", "zuus", "warlock", "lion"],
    texts: {
      "pudge": "Blood Rite молчит и накладывает Rupture-кровь, пока Pudge тянет.",
      "crystal_maiden": "Замедление Crystal Nova не даёт цели убежать из Rupture.",
      "storm_spirit": "Ранение не даёт цели телепортироваться, пока Storm догоняет.",
      "zuus": "Глобальный урон не даёт цели уйти на низком HP из-под Rupture.",
      "warlock": "Upheaval замедляет, и Rupture наказывает за движение.",
      "lion": "Hex держит цель, чтобы Rupture сработал на все тики."
    }
  },
  crystal_maiden: {
    partners: ["axe", "enigma", "magnataur", "sand_king", "earthshaker", "tidehunter"],
    texts: {
      "axe": "Call стягивает толпу в Freezing Field — урон ульты бьёт по всем.",
      "enigma": "Black Hole держит врагов, и Freezing Field добивает собранных.",
      "magnataur": "Reverse Polarity фиксирует толпу под Freezing Field.",
      "sand_king": "Epicenter после Freezing Field не даёт врагам разбежаться.",
      "earthshaker": "Echo Slam по собранной Freezing Field толпе — двойной урон.",
      "tidehunter": "Ravage станит толпу под Freezing Field."
    }
  },
  drow_ranger: {
    partners: ["vengefulspirit", "luna", "terrorblade", "medusa", "sniper", "windrunner"],
    texts: {
      "vengefulspirit": "Aura даёт урон всей дальнострелковой команде, а Command Aura разгоняет Drow.",
      "luna": "Обе героини с аурой дальнего урона — Marksmanship усиливает обоих.",
      "terrorblade": "Две ауры дальнего урона — террор-иллюзии разрывают толпу.",
      "medusa": "Split Shot давит толпу, пока Drow фокусит одну цель.",
      "sniper": "Два дальних керри дополняют друг друга — один фокусит, другой чистит толпу.",
      "windrunner": "Windrun отвлекает на себя, пока Drow расстреливает."
    }
  },
  earthshaker: {
    partners: ["magnataur", "dark_seer", "enigma", "keeper_of_the_light", "tidehunter", "luna"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Echo Slam.",
      "dark_seer": "Vacuum собирает всех в кучу, и Echo Slam бьёт по максимуму врагов.",
      "enigma": "Black Hole держит толпу — Echo Slam добивает собранных.",
      "keeper_of_the_light": "Иллюзии крипов дают жертв для бурста Echo Slam.",
      "tidehunter": "Ravage станит, Echo Slam добивает.",
      "luna": "Eclipse бьёт по толпе, собранной Fissure."
    }
  },
  juggernaut: {
    partners: ["magnataur", "dark_seer", "enigma", "keeper_of_the_light", "mirana", "crystal_maiden"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Omnislash.",
      "dark_seer": "Vacuum собирает врагов, и Omnislash прыгает по всем.",
      "enigma": "Black Hole держит толпу под Omnislash.",
      "keeper_of_the_light": "Иллюзии дают больше прыжков для Omnislash.",
      "mirana": "Sacred Arrow станит — и Juggernaut гарантированно заносит Omnislash.",
      "crystal_maiden": "Freezing Field и Blade Fury не дают врагам разбежаться."
    }
  },
  mirana: {
    partners: ["bane", "lina", "crystal_maiden", "legion_commander", "sand_king", "pudge"],
    texts: {
      "bane": "Fiend's Grip держит цель — Sacred Arrow не промахивается.",
      "lina": "Light Strike Array станит, и Arrow бьёт по застывшей цели.",
      "crystal_maiden": "Замедление не даёт цели уйти от Arrow.",
      "legion_commander": "Duel фиксирует цель — Arrow попадает гарантированно.",
      "sand_king": "Burrowstrike станит, Arrow добивает.",
      "pudge": "Два хукоподобных контроля добивают цель из кустов."
    }
  },
  morphling: {
    partners: ["magnataur", "enigma", "tidehunter", "sand_king", "shredder", "keeper_of_the_light"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Waveform + Adaptive Strike.",
      "enigma": "Black Hole держит врагов, Morphling добивает бурстом.",
      "tidehunter": "Ravage станит толпу под его комбо.",
      "sand_king": "Burrowstrike фиксирует, Morphling дожимает.",
      "shredder": "Whirling Death режет атрибуты, усиливаю бурст Morphling.",
      "keeper_of_the_light": "Иллюзии дают урон, пока Morphling держит позицию."
    }
  },
  nevermore: {
    partners: ["magnataur", "dark_seer", "enigma", "tidehunter", "vengefulspirit", "sand_king"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Requiem of Souls.",
      "dark_seer": "Vacuum собирает всех, и Requiem бьёт по всей толпе.",
      "enigma": "Black Hole держит толпу под Requiem.",
      "tidehunter": "Ravage станит — Requiem попадает на 100%.",
      "vengefulspirit": "Nether Swap подтаскивает цель под Requiem.",
      "sand_king": "Burrowstrike станит, Shadowraze добивает."
    }
  },
  phantom_lancer: {
    partners: ["keeper_of_the_light", "magnataur", "enigma", "necrolyte", "witch_doctor", "dark_seer"],
    texts: {
      "keeper_of_the_light": "Иллюзии крипов разгоняют фарм и дают иллюзии Phantom Lancer.",
      "magnataur": "Reverse Polarity собирает толпу — иллюзии бьют по всем.",
      "enigma": "Midnight Pulse ослабляет толпу, иллюзии добивают.",
      "necrolyte": "Death Pulse лечит иллюзии и давит толпу.",
      "witch_doctor": "Paralyzing Cask держит толпу, иллюзии окружают.",
      "dark_seer": "Ion Shell на иллюзиях наносит урон по всей толпе."
    }
  },
  puck: {
    partners: ["magnataur", "enigma", "crystal_maiden", "luna", "warlock", "disruptor"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Dream Coil.",
      "enigma": "Black Hole держит толпу в Dream Coil.",
      "crystal_maiden": "Freezing Field бьёт по цели, удерживаемой Dream Coil.",
      "luna": "Eclipse бьёт по толпе, собранной Coil.",
      "warlock": "Upheaval замедляет врагов в Coil.",
      "disruptor": "Static Storm и Coil — двойной сайленс толпы."
    }
  },
  pudge: {
    partners: ["bane", "mirana", "crystal_maiden", "lina", "rubick", "disruptor"],
    texts: {
      "bane": "Fiend's Grip держит цель — Hook не промахивается.",
      "mirana": "Sacred Arrow станит, и Pudge добирает Hook.",
      "crystal_maiden": "Замедление не даёт цели уйти после Hook.",
      "lina": "Light Strike Array после Hook станит цель второй раз.",
      "rubick": "Телекинез держит цель для Hook.",
      "disruptor": "Kinetic Field ловит цель, Hook добирает."
    }
  },
  razor: {
    partners: ["magnataur", "enigma", "sand_king", "dark_seer", "luna", "windrunner"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Eye of the Storm бьёт по всем.",
      "enigma": "Black Hole держит толпу под Eye of the Storm.",
      "sand_king": "Epicenter и Eye of the Storm — двойной AOE-урон.",
      "dark_seer": "Vacuum собирает толпу под его ульту.",
      "luna": "Eclipse и Eye of the Storm чистят толпу.",
      "windrunner": "Фокус на одной цели, пока Razor бьёт толпу."
    }
  },
  sand_king: {
    partners: ["magnataur", "dark_seer", "enigma", "crystal_maiden", "luna", "tidehunter"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Epicenter.",
      "dark_seer": "Vacuum собирает врагов под Epicenter.",
      "enigma": "Black Hole держит толпу, Epicenter бьёт по всем.",
      "crystal_maiden": "Freezing Field и Epicenter — два урона по толпе.",
      "luna": "Eclipse бьёт по толпе, собранной Burrowstrike.",
      "tidehunter": "Ravage станит толпу под Epicenter."
    }
  },
  storm_spirit: {
    partners: ["bloodseeker", "zuus", "magnataur", "enigma", "disruptor", "tidehunter"],
    texts: {
      "bloodseeker": "Rupture не даёт цели убежать от Ball Lightning.",
      "zuus": "Глобальный урон добивает то, что Storm не дожал.",
      "magnataur": "Reverse Polarity стягивает толпу под его комбо.",
      "enigma": "Black Hole держит врагов, Storm догоняет.",
      "disruptor": "Glimpse возвращает цель на позицию после прыжка Storm.",
      "tidehunter": "Ravage станит, Storm бурстит."
    }
  },
  sven: {
    partners: ["magnataur", "dark_seer", "keeper_of_the_light", "enigma", "wisp", "vengefulspirit"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под God's Strength.",
      "dark_seer": "Vacuum собирает врагов, Sven бьёт по всей толпе.",
      "keeper_of_the_light": "Иллюзии крипов разгоняют фарм, Sven закупается быстрее.",
      "enigma": "Black Hole держит толпу под удар Sven.",
      "wisp": "Relocate доставляет Sven в бой, Tether усиливает его урон.",
      "vengefulspirit": "Aura усиливает урон Sven, Swap спасает."
    }
  },
  tiny: {
    partners: ["wisp", "magnataur", "enigma", "tidehunter", "crystal_maiden", "windrunner"],
    texts: {
      "wisp": "Tether даёт скорость атаки и реген — Tiny с Avalanche добивает всё.",
      "magnataur": "Reverse Polarity стягивает толпу под Avalanche + Toss.",
      "enigma": "Black Hole держит толпу, Tiny бурстит.",
      "tidehunter": "Ravage станит толпу под его комбо.",
      "crystal_maiden": "Замедление не даёт врагам разбежаться после Toss.",
      "windrunner": "Фокус Windrun на одной цели, Tiny добивает толпу."
    }
  },
  vengefulspirit: {
    partners: ["drow_ranger", "luna", "terrorblade", "sven", "medusa", "snapfire"],
    texts: {
      "drow_ranger": "Aura и Command Aura усиливают дальний урон Drow.",
      "luna": "Две ауры дальнего урона усиливают Eclipse.",
      "terrorblade": "Aura усиливает иллюзии Terrorblade.",
      "sven": "Aura усиливает урон Sven, Swap ловит цель.",
      "medusa": "Aura усиливает Split Shot Medusa.",
      "snapfire": "Aura усиливает дальний урон Snapfire."
    }
  },
  windrunner: {
    partners: ["magnataur", "enigma", "crystal_maiden", "luna", "shredder", "drow_ranger"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Focus Fire.",
      "enigma": "Black Hole держит цель под Focus Fire.",
      "crystal_maiden": "Замедление не даёт цели убежать от Focus Fire.",
      "luna": "Eclipse и Focus Fire добивают толпу.",
      "shredder": "Whirling Death режет броню, усиливаю Focus Fire.",
      "drow_ranger": "Два дальних керри дополняют друг друга."
    }
  },
  zuus: {
    partners: ["ancient_apparition", "axe", "bloodseeker", "crystal_maiden", "sand_king", "spirit_breaker"],
    texts: {
      "ancient_apparition": "Ice Blast и Nimbus — глобальный запрет лечения.",
      "axe": "Call собирает толпу, Lightning Bolt бьёт по всем.",
      "bloodseeker": "Rupture и глобальный урон добивают всех на низком HP.",
      "crystal_maiden": "Freezing Field и Nimbus чистят толпу.",
      "sand_king": "Epicenter и глобальный урон по толпе.",
      "spirit_breaker": "Charge выбивает цель, Lightning Bolt добивает."
    }
  },
  kunkka: {
    partners: ["magnataur", "enigma", "dark_seer", "luna", "sand_king", "tidehunter"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Ghostship.",
      "enigma": "Black Hole держит толпу под Ghostship.",
      "dark_seer": "Vacuum собирает врагов под корабль.",
      "luna": "Eclipse бьёт по толпе после Ghostship.",
      "sand_king": "Epicenter и Ghostship — двойной урон по толпе.",
      "tidehunter": "Ravage станит толпу под Ghostship."
    }
  },
  lina: {
    partners: ["mirana", "bane", "crystal_maiden", "sand_king", "legion_commander", "tidehunter"],
    texts: {
      "mirana": "Light Strike Array станит — Arrow попадает гарантированно.",
      "bane": "Fiend's Grip держит цель под Laguna Blade.",
      "crystal_maiden": "Замедление не даёт уйти от LSA + Laguna.",
      "sand_king": "Burrowstrike станит цель для бурста Lina.",
      "legion_commander": "Duel фиксирует цель под Laguna Blade.",
      "tidehunter": "Ravage станит толпу под LSA."
    }
  },
  lion: {
    partners: ["magnataur", "enigma", "crystal_maiden", "luna", "sand_king", "pudge"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Finger of Death.",
      "enigma": "Black Hole держит толпу, Finger добивает.",
      "crystal_maiden": "Замедление и Hex не дают цели уйти.",
      "luna": "Eclipse бьёт по толпе, собранной Hex.",
      "sand_king": "Burrowstrike станит цель для Finger.",
      "pudge": "Hex держит цель для Hook."
    }
  },
  shadow_shaman: {
    partners: ["magnataur", "enigma", "crystal_maiden", "luna", "tidehunter", "pudge"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Mass Serpent Ward.",
      "enigma": "Black Hole держит толпу, Serpent Ward бьёт по всем.",
      "crystal_maiden": "Freezing Field и Serpent Ward чистят толпу.",
      "luna": "Eclipse и Serpent Ward дают колоссальный урон по толпе.",
      "tidehunter": "Ravage станит толпу под Serpent Ward.",
      "pudge": "Hex держит цель для Hook."
    }
  },
  slardar: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "drow_ranger", "phantom_assassin"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Slithereen Crush.",
      "enigma": "Black Hole держит толпу, Slardar бурстит.",
      "luna": "Corrosive Haze уменьшает броню — Eclipse бьёт сильнее.",
      "tidehunter": "Ravage станит толпу под Crush.",
      "drow_ranger": "Corrosive Haze уменьшает броню для Frost Arrows.",
      "phantom_assassin": "Corrosive Haze делает крити PA ещё больнее."
    }
  },
  tidehunter: {
    partners: ["magnataur", "enigma", "luna", "crystal_maiden", "sand_king", "shredder"],
    texts: {
      "magnataur": "Reverse Polarity + Ravage — двойной станящий ульт.",
      "enigma": "Black Hole держит толпу, Ravage добивает.",
      "luna": "Eclipse бьёт по толпе, собранной Ravage.",
      "crystal_maiden": "Freezing Field бьёт по толпе после Ravage.",
      "sand_king": "Epicenter после Ravage — непрерывный AOE.",
      "shredder": "Flamethrower жжёт толпу после Ravage."
    }
  },
  witch_doctor: {
    partners: ["magnataur", "enigma", "crystal_maiden", "luna", "tidehunter", "sand_king"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Death Ward.",
      "enigma": "Black Hole держит толпу, Death Ward бьёт по всем.",
      "crystal_maiden": "Замедление не даёт цели уйти от Death Ward.",
      "luna": "Eclipse и Death Ward — два урона по толпе.",
      "tidehunter": "Ravage станит толпу под Death Ward.",
      "sand_king": "Burrowstrike станит цель под Death Ward."
    }
  },
  lich: {
    partners: ["magnataur", "enigma", "crystal_maiden", "tidehunter", "sand_king", "warlock"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Chain Frost.",
      "enigma": "Black Hole держит толпу, Chain Frost прыгает по всем.",
      "crystal_maiden": "Два ледяных урона по толпе.",
      "tidehunter": "Ravage станит толпу под Chain Frost.",
      "sand_king": "Burrowstrike станит, Chain Frost добивает.",
      "warlock": "Upheaval замедляет толпу под Chain Frost."
    }
  },
  riki: {
    partners: ["slardar", "bounty_hunter", "zuus", "skywrath_mage", "spectre", "spirit_breaker"],
    texts: {
      "slardar": "Corrosive Haze раскрывает невидимок, урон по ним бьёт.",
      "bounty_hunter": "Track раскрывает цели, Riki добивает из невидимости.",
      "zuus": "Глобальный урон добивает то, что Riki не дожал.",
      "skywrath_mage": "Сайленс держит цель, Riki бьёт из тени.",
      "spectre": "Haunt раскрывает толпу, Riki выбирает цель.",
      "spirit_breaker": "Charge выбивает цель из позиции, Riki добивает."
    }
  },
  enigma: {
    partners: ["magnataur", "dark_seer", "luna", "crystal_maiden", "earthshaker", "tidehunter"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Black Hole.",
      "dark_seer": "Vacuum собирает толпу, Black Hole держит всех.",
      "luna": "Eclipse бьёт по толпе внутри Black Hole.",
      "crystal_maiden": "Freezing Field бьёт по всем в Black Hole.",
      "earthshaker": "Echo Slam по толпе внутри Black Hole — сокрушительный урон.",
      "tidehunter": "Ravage после Black Hole продлевает контроль."
    }
  },
  tinker: {
    partners: ["magnataur", "enigma", "sand_king", "crystal_maiden", "luna", "warlock"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Tinker бурстит Laser + Missiles.",
      "enigma": "Black Hole держит толпу, Tinker добивает.",
      "sand_king": "Epicenter и ракеты Tinker — двойной AOE.",
      "crystal_maiden": "Замедление не даёт цели уйти от March of Machines.",
      "luna": "Eclipse и Missiles чистят толпу.",
      "warlock": "Upheaval замедляет, March бьёт по толпе."
    }
  },
  sniper: {
    partners: ["magnataur", "enigma", "crystal_maiden", "luna", "tidehunter", "legion_commander"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Assassinate.",
      "enigma": "Black Hole держит толпу, Sniper расстреливает.",
      "crystal_maiden": "Замедление не даёт цели добраться до Sniper.",
      "luna": "Eclipse и Sniper — два дальних урона по толпе.",
      "tidehunter": "Ravage станит толпу, Sniper добивает.",
      "legion_commander": "Duel отвлекает фокус, Sniper стреляет издалека."
    }
  },
  necrolyte: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "shredder", "warlock"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Reaper's Scythe.",
      "enigma": "Black Hole держит толпу, Heartstopper плавит всех.",
      "luna": "Eclipse бьёт по толпе, Necro добивает Scythe.",
      "tidehunter": "Ravage станит толпу, Death Pulse бьёт по всем.",
      "shredder": "Flamethrower и Heartstopper — двойной AOE.",
      "warlock": "Upheaval замедляет толпу, Death Pulse лечит."
    }
  },
  warlock: {
    partners: ["magnataur", "enigma", "luna", "crystal_maiden", "lich", "tidehunter"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Chaotic Offering.",
      "enigma": "Два голема/Black Hole — толпа в стане.",
      "luna": "Eclipse бьёт по толпе, Golem бьёт по всем.",
      "crystal_maiden": "Freezing Field и Golem — двойной урон.",
      "lich": "Chain Frost и Golem — двойной AOE.",
      "tidehunter": "Ravage станит толпу, Golem добивает."
    }
  },
  beastmaster: {
    partners: ["magnataur", "enigma", "tidehunter", "sven", "luna", "drow_ranger"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Primal Roar.",
      "enigma": "Black Hole держит толпу, Hawk даёт обзор.",
      "tidehunter": "Ravage станит толпу, Boar замедляет.",
      "sven": "Aura Beastmaster усиливает урон Sven.",
      "luna": "Aura усиливает урон Luna, Hawk даёт обзор.",
      "drow_ranger": "Aura и Marksmanship — двойной дальний урон."
    }
  },
  queenofpain: {
    partners: ["magnataur", "enigma", "crystal_maiden", "tidehunter", "luna", "sand_king"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Sonic Wave.",
      "enigma": "Black Hole держит толпу, Sonic Wave бьёт по всем.",
      "crystal_maiden": "Замедление не даёт уйти от Sonic Wave.",
      "tidehunter": "Ravage станит толпу под Sonic Wave.",
      "luna": "Eclipse и Sonic Wave — двойной урон по толпе.",
      "sand_king": "Burrowstrike станит цель для бурста."
    }
  },
  venomancer: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "shredder", "zuus"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Poison Nova.",
      "enigma": "Black Hole держит толпу, яды разъедают всех.",
      "luna": "Eclipse бьёт по толпе, яды добивают.",
      "tidehunter": "Ravage станит толпу под Poison Nova.",
      "shredder": "Flamethrower и яды — двойной DoT.",
      "zuus": "Глобальный урон добивает отравленных."
    }
  },
  faceless_void: {
    partners: ["magnataur", "enigma", "crystal_maiden", "luna", "tidehunter", "sand_king"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Chronosphere ловит всех.",
      "enigma": "Black Hole внутри Chronosphere — два ульты по толпе.",
      "crystal_maiden": "Freezing Field бьёт по всем внутри Chronosphere.",
      "luna": "Eclipse бьёт по толпе внутри Chronosphere.",
      "tidehunter": "Ravage после Chronosphere продлевает контроль.",
      "sand_king": "Epicenter бьёт по толпе внутри Chronosphere."
    }
  },
  skeleton_king: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "dazzle", "warlock"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Hellfire Blast.",
      "enigma": "Black Hole держит толпу, Skeleton King бурстит.",
      "luna": "Eclipse и Crit бьют по толпе.",
      "tidehunter": "Ravage станит толпу, Skeleton King добивает.",
      "dazzle": "Shallow Grave спасает Skeleton King до реинкарнации.",
      "warlock": "Golem и Skeleton King — два живучих фронта."
    }
  },
  death_prophet: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "shredder", "warlock"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Exorcism.",
      "enigma": "Black Hole держит толпу, духи бьют по всем.",
      "luna": "Eclipse и духи — двойной AOE.",
      "tidehunter": "Ravage станит толпу, Exorcism добивает.",
      "shredder": "Flamethrower и духи — двойной урон по толпе.",
      "warlock": "Upheaval замедляет толпу под Exorcism."
    }
  },
  phantom_assassin: {
    partners: ["magnataur", "enigma", "slardar", "vengefulspirit", "tidehunter", "keeper_of_the_light"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Coup de Grace.",
      "enigma": "Black Hole держит толпу, PA бурстит критами.",
      "slardar": "Corrosive Haze уменьшает броню — криты ещё больнее.",
      "vengefulspirit": "Aura усиливает урон PA, Swap ловит цель.",
      "tidehunter": "Ravage станит толпу, PA добивает.",
      "keeper_of_the_light": "Иллюзии крипов разгоняют фарм PA."
    }
  },
  pugna: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "sand_king", "warlock"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Life Drain.",
      "enigma": "Black Hole держит толпу, Nether Ward молчит всех.",
      "luna": "Eclipse бьёт по толпе, Life Drain добивает.",
      "tidehunter": "Ravage станит толпу, Pugna сосёт.",
      "sand_king": "Burrowstrike станит цель под Life Drain.",
      "warlock": "Golem бьёт толпу, Nether Ward молчит."
    }
  },
  templar_assassin: {
    partners: ["magnataur", "enigma", "slardar", "vengefulspirit", "tidehunter", "crystal_maiden"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Psionic Traps.",
      "enigma": "Black Hole держит толпу, TA бурстит.",
      "slardar": "Corrosive Haze уменьшает броню под Meld.",
      "vengefulspirit": "Aura усиливает урон TA.",
      "tidehunter": "Ravage станит толпу, TA добивает.",
      "crystal_maiden": "Замедление не даёт цели уйти от Refraction."
    }
  },
  viper: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "shredder", "zuus"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Viper Strike.",
      "enigma": "Black Hole держит толпу, Viper жрёт цель.",
      "luna": "Eclipse бьёт по толпе, Viper фокусит.",
      "tidehunter": "Ravage станит толпу, Viper добивает.",
      "shredder": "Flamethrower и яды — двойной DoT.",
      "zuus": "Глобальный урон добивает отравленных."
    }
  },
  luna: {
    partners: ["magnataur", "enigma", "crystal_maiden", "earthshaker", "tidehunter", "vengefulspirit"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Eclipse.",
      "enigma": "Black Hole держит толпу, Eclipse бьёт по всем.",
      "crystal_maiden": "Freezing Field и Eclipse — двойной урон по толпе.",
      "earthshaker": "Echo Slam и Eclipse чистят толпу.",
      "tidehunter": "Ravage станит толпу, Eclipse добивает.",
      "vengefulspirit": "Aura усиливает урон Luna."
    }
  },
  dragon_knight: {
    partners: ["magnataur", "enigma", "tidehunter", "sand_king", "luna", "warlock"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Dragon Tail станит.",
      "enigma": "Black Hole держит толпу, DK бурстит.",
      "tidehunter": "Ravage станит толпу, DK добивает.",
      "sand_king": "Burrowstrike + Dragon Tail — двойной стан.",
      "luna": "Eclipse бьёт по толпе, DK танкует.",
      "warlock": "Golem и DK — два живучих фронта."
    }
  },
  dazzle: {
    partners: ["skeleton_king", "huskar", "medusa", "spectre", "troll_warlord", "legion_commander"],
    texts: {
      "skeleton_king": "Shallow Grave спасает до реинкарнации, Poison Touch замедляет.",
      "huskar": "Shallow Grave держит Huskar на низком HP, пока тот бурстит.",
      "medusa": "Shallow Grave спасает Medusa под фокусом.",
      "spectre": "Shallow Grave спасает Spectre, пока Haunt добивает.",
      "troll_warlord": "Weave усиливает броню, Grave спасает от фокуса.",
      "legion_commander": "Grave спасает LC под Duel."
    }
  },
  rattletrap: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "sand_king", "disruptor"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Rocket Flare + Battery Assault.",
      "enigma": "Black Hole держит толпу, Rattletrap бурстит.",
      "luna": "Eclipse бьёт по толпе, Clock бьёт по одной.",
      "tidehunter": "Ravage станит толпу, Power Cogs ловят.",
      "sand_king": "Burrowstrike станит, Hookshot добивает.",
      "disruptor": "Glimpse возвращает цель в Power Cogs."
    }
  },
  leshrac: {
    partners: ["magnataur", "enigma", "crystal_maiden", "luna", "tidehunter", "dark_seer"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Pulse Nova.",
      "enigma": "Black Hole держит толпу, Pulse Nova бьёт по всем.",
      "crystal_maiden": "Freezing Field и Pulse Nova — двойной AOE.",
      "luna": "Eclipse и Pulse Nova чистят толпу.",
      "tidehunter": "Ravage станит толпу, Lesh бьёт по всем.",
      "dark_seer": "Vacuum собирает толпу под Pulse Nova."
    }
  },
  furion: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "treant", "keeper_of_the_light"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, треанты бьют по всем.",
      "enigma": "Black Hole держит толпу, дерево добивает.",
      "luna": "Eclipse бьёт по толпе, Furion пушит.",
      "tidehunter": "Ravage станит толпу, треанты добивают.",
      "treant": "Два пушера с призывами давят здания.",
      "keeper_of_the_light": "Иллюзии крипов и треанты — огромный пул."
    }
  },
  life_stealer: {
    partners: ["magnataur", "enigma", "wisp", "tidehunter", "keeper_of_the_light", "dark_seer"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Lifestealer врывается в Rage.",
      "enigma": "Black Hole держит толпу, Lifestealer бурстит.",
      "wisp": "Relocate доставляет Lifestealer в бой, Tether усиливает.",
      "tidehunter": "Ravage станит толпу, Lifestealer добивает.",
      "keeper_of_the_light": "Иллюзии крипов дают жертв для Feast.",
      "dark_seer": "Surge разгоняет Lifestealer в бой."
    }
  },
  dark_seer: {
    partners: ["axe", "magnataur", "enigma", "earthshaker", "luna", "sven"],
    texts: {
      "axe": "Vacuum стягивает толпу в Call — Counter Helix работает на полную.",
      "magnataur": "Vacuum + Reverse Polarity — два стягивания.",
      "enigma": "Vacuum собирает толпу под Black Hole.",
      "earthshaker": "Vacuum собирает толпу под Echo Slam.",
      "luna": "Vacuum собирает толпу под Eclipse.",
      "sven": "Vacuum собирает толпу, Sven бьёт по всей толпе."
    }
  },
  clinkz: {
    partners: ["magnataur", "enigma", "slardar", "vengefulspirit", "tidehunter", "drow_ranger"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Strafe разрывает.",
      "enigma": "Black Hole держит толпу, Clinkz бурстит.",
      "slardar": "Corrosive Haze уменьшает броню, Searing Arrows больнее.",
      "vengefulspirit": "Aura усиливает урон Clinkz.",
      "tidehunter": "Ravage станит толпу, Clinkz добивает.",
      "drow_ranger": "Два дальних керри, ауры усиливают друг друга."
    }
  },
  omniknight: {
    partners: ["sven", "drow_ranger", "medusa", "luna", "terrorblade", "arc_warden"],
    texts: {
      "sven": "Guardian Angel делает Sven неуязвимым к физике, Repel от контроля.",
      "drow_ranger": "Heavenly Grace усиливает Drow, Guardian Angel спасает от фокуса.",
      "medusa": "Guardian Angel спасает Medusa от физического бурста.",
      "luna": "Repel убирает контроль с Luna перед Eclipse.",
      "terrorblade": "Guardian Angel защищает иллюзии от физики.",
      "arc_warden": "Repel снимает контроль с обоих копий."
    }
  },
  enchantress: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "drow_ranger", "keeper_of_the_light"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Impetus.",
      "enigma": "Black Hole держит толпу, Enchantress бурстит.",
      "luna": "Eclipse бьёт по толпе, Impetus по одной.",
      "tidehunter": "Ravage станит толпу, Impetus добивает.",
      "drow_ranger": "Две дальних героини, двойной урон с дистанции.",
      "keeper_of_the_light": "Иллюзии крипов разгоняют фарм."
    }
  },
  huskar: {
    partners: ["dazzle", "omniknight", "magnataur", "enigma", "warlock", "wisp"],
    texts: {
      "dazzle": "Shallow Grave держит Huskar на низком HP, пока тот бурстит.",
      "omniknight": "Heavenly Grace усиливает реген Huskar, Repel от контроля.",
      "magnataur": "Reverse Polarity стягивает толпу под Life Break.",
      "enigma": "Black Hole держит толпу, Huskar врывается.",
      "warlock": "Golem танкует, Huskar бурстит на низком HP.",
      "wisp": "Tether усиливает реген и скорость атаки Huskar."
    }
  },
  night_stalker: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "slardar", "bounty_hunter"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Night Stalker давит ночью.",
      "enigma": "Black Hole держит толпу, NS бурстит.",
      "luna": "Eclipse бьёт по толпе, NS ловит жертву.",
      "tidehunter": "Ravage станит толпу, NS добивает.",
      "slardar": "Corrosive Haze уменьшает броню под Void.",
      "bounty_hunter": "Track раскрывает цели, NS ночью давит."
    }
  },
  broodmother: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "dazzle", "warlock"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, пауки разрывают.",
      "enigma": "Black Hole держит толпу, пауки съедают.",
      "luna": "Eclipse бьёт по толпе, пауки давят.",
      "tidehunter": "Ravage станит толпу, пауки добивают.",
      "dazzle": "Weave усиливает броню пауков.",
      "warlock": "Golem и пауки — огромный пул призывов."
    }
  },
  bounty_hunter: {
    partners: ["slardar", "riki", "zuus", "spectre", "spirit_breaker", "skywrath_mage"],
    texts: {
      "slardar": "Corrosive Haze + Track — цель раскрыта и ослаблена.",
      "riki": "Track раскрывает цели, Riki добивает из тени.",
      "zuus": "Глобальный урон добивает трекнутого.",
      "spectre": "Track раскрывает цель для Haunt.",
      "spirit_breaker": "Charge выбивает цель, Track даёт золото.",
      "skywrath_mage": "Сайленс держит трекнутую цель."
    }
  },
  weaver: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "dazzle", "warlock"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Germinate Attack бьёт.",
      "enigma": "Black Hole держит толпу, Weaver бурстит.",
      "luna": "Eclipse бьёт по толпе, Weaver жужжит.",
      "tidehunter": "Ravage станит толпу, Weaver добивает.",
      "dazzle": "Weave режет броню, Time Lapse откатывает урон.",
      "warlock": "Golem танкует, Weaver бьёт из укрытия."
    }
  },
  jakiro: {
    partners: ["magnataur", "enigma", "crystal_maiden", "luna", "tidehunter", "sand_king"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Macropyre.",
      "enigma": "Black Hole держит толпу, огонь жжёт всех.",
      "crystal_maiden": "Freezing Field и Macropyre — двойной AOE.",
      "luna": "Eclipse бьёт по толпе, огонь добивает.",
      "tidehunter": "Ravage станит толпу, Macropyre жжёт.",
      "sand_king": "Epicenter и Macropyre — двойной урон."
    }
  },
  batrider: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "drow_ranger", "sniper"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Lasso утаскивает цель.",
      "enigma": "Black Hole держит толпу, Bat жжёт.",
      "luna": "Eclipse бьёт по толпе, Bat ловит цель.",
      "tidehunter": "Ravage станит толпу, Bat добивает.",
      "drow_ranger": "Lasso утаскивает цель под Frost Arrows.",
      "sniper": "Lasso утаскивает цель под Assassinate."
    }
  },
  chen: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "dazzle", "keeper_of_the_light"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, призывы Chen бьют.",
      "enigma": "Black Hole держит толпу, крипы добивают.",
      "luna": "Eclipse бьёт по толпе, призывы давят.",
      "tidehunter": "Ravage станит толпу, призывы добивают.",
      "dazzle": "Test of Faith спасает союзника, Weave ослабляет.",
      "keeper_of_the_light": "Два пушера с призывами."
    }
  },
  spectre: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "dazzle", "warlock"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Haunt бьёт по всем.",
      "enigma": "Black Hole держит толпу, Dispersion отражает.",
      "luna": "Eclipse бьёт по толпе, Spectre фармит.",
      "tidehunter": "Ravage станит толпу, Spectre добивает.",
      "dazzle": "Shallow Grave спасает Spectre, Weave ослабляет.",
      "warlock": "Golem танкует, Spectre догоняет по карте."
    }
  },
  ancient_apparition: {
    partners: ["zuus", "magnataur", "enigma", "necrolyte", "luna", "tidehunter"],
    texts: {
      "zuus": "Ice Blast и глобальный урон — запрет лечения по всей карте.",
      "magnataur": "Reverse Polarity стягивает толпу под Ice Blast.",
      "enigma": "Black Hole держит толпу, Ice Blast не даёт лечиться.",
      "necrolyte": "Ice Blast + Reaper's Scythe — цель умирает мгновенно.",
      "luna": "Eclipse бьёт по толпе, Ice Blast запрещает лечение.",
      "tidehunter": "Ravage станит толпу под Ice Blast."
    }
  },
  doom_bringer: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "necrolyte", "warlock"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Doom.",
      "enigma": "Black Hole держит толпу, Doom выключает цель.",
      "luna": "Eclipse бьёт по толпе, Doom казнит цель.",
      "tidehunter": "Ravage станит толпу, Doom добивает.",
      "necrolyte": "Doom + Reaper's Scythe — цель не переживает.",
      "warlock": "Golem танкует, Doom выключает ключевую цель."
    }
  },
  ursa: {
    partners: ["magnataur", "enigma", "wisp", "slardar", "tidehunter", "dazzle"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Ursa разрывает.",
      "enigma": "Black Hole держит толпу, Overpower бурстит.",
      "wisp": "Relocate доставляет Ursa к цели, Tether усиливает.",
      "slardar": "Corrosive Haze уменьшает броню — Fury Swipes больнее.",
      "tidehunter": "Ravage станит толпу, Ursa добивает.",
      "dazzle": "Shallow Grave спасает Ursa на низком HP."
    }
  },
  spirit_breaker: {
    partners: ["magnataur", "enigma", "slardar", "bounty_hunter", "zuus", "luna"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Charge выбивает цель.",
      "enigma": "Black Hole держит толпу, Great Bash бьёт.",
      "slardar": "Corrosive Haze уменьшает броню под Charge.",
      "bounty_hunter": "Track раскрывает цель, Charge выбивает.",
      "zuus": "Глобальный урон добивает выбитую цель.",
      "luna": "Eclipse бьёт по толпе, SB давит по карте."
    }
  },
  gyrocopter: {
    partners: ["magnataur", "enigma", "crystal_maiden", "luna", "tidehunter", "earthshaker"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Call Down.",
      "enigma": "Black Hole держит толпу, ракеты бьют по всем.",
      "crystal_maiden": "Freezing Field и Call Down — двойной AOE.",
      "luna": "Eclipse и Call Down чистят толпу.",
      "tidehunter": "Ravage станит толпу, Call Down добивает.",
      "earthshaker": "Echo Slam и Call Down — сокрушительный урон."
    }
  },
  alchemist: {
    partners: ["magnataur", "enigma", "keeper_of_the_light", "wisp", "luna", "tidehunter"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Alch бурстит.",
      "enigma": "Black Hole держит толпу, Chemical Rage рвёт.",
      "keeper_of_the_light": "Иллюзии крипов разгоняют фарм Alch.",
      "wisp": "Tether усиливает скорость атаки Alch в Chemical Rage.",
      "luna": "Eclipse бьёт по толпе, Alch танкует.",
      "tidehunter": "Ravage станит толпу, Alch добивает."
    }
  },
  invoker: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "crystal_maiden", "sand_king"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Deafening Blast.",
      "enigma": "Black Hole держит толпу, Invoker кастует.",
      "luna": "Eclipse бьёт по толпе, Invoker добивает.",
      "tidehunter": "Ravage станит толпу под Sunstrike.",
      "crystal_maiden": "Freezing Field и Chaos Meteor — двойной AOE.",
      "sand_king": "Burrowstrike станит, Invoker кастует комбо."
    }
  },
  silencer: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "crystal_maiden", "drow_ranger"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Global Silence.",
      "enigma": "Black Hole держит толпу, сайленс не даёт кастовать.",
      "luna": "Eclipse бьёт по толпе, сайленс мешает контролю.",
      "tidehunter": "Ravage станит толпу, сайленс добивает.",
      "crystal_maiden": "Freezing Field и сайленс — толпа без кастов.",
      "drow_ranger": "Сайленс не даёт врагам подойти к Drow."
    }
  },
  obsidian_destroyer: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "vengefulspirit", "sand_king"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Sanity's Eclipse.",
      "enigma": "Black Hole держит толпу, Arcane Orb бьёт.",
      "luna": "Eclipse бьёт по толпе, OD добивает.",
      "tidehunter": "Ravage станит толпу, Astral Imprisonment держит.",
      "vengefulspirit": "Aura усиливает урон OD.",
      "sand_king": "Burrowstrike станит цель под Sanity's Eclipse."
    }
  },
  lycan: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "keeper_of_the_light", "dazzle"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, волки разрывают.",
      "enigma": "Black Hole держит толпу, Lycan врывается.",
      "luna": "Eclipse бьёт по толпе, волки давят.",
      "tidehunter": "Ravage станит толпу, Howl усиливает.",
      "keeper_of_the_light": "Иллюзии крипов разгоняют фарм.",
      "dazzle": "Weave усиливает броню волков."
    }
  },
  brewmaster: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "warlock", "dazzle"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Primal Split давит.",
      "enigma": "Black Hole держит толпу, три панды бьют.",
      "luna": "Eclipse бьёт по толпе, панды добивают.",
      "tidehunter": "Ravage станит толпу, панды давят.",
      "warlock": "Два набора призывов — толпа в ужасе.",
      "dazzle": "Shallow Grave спасает Brewmaster в Split."
    }
  },
  shadow_demon: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "necrolyte", "warlock"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Disruption даёт бурст.",
      "enigma": "Black Hole держит толпу, Shadow Poison бьёт.",
      "luna": "Eclipse бьёт по толпе, Illusion копии усиливают.",
      "tidehunter": "Ravage станит толпу, Purge добивает.",
      "necrolyte": "Disruption + Reaper's Scythe — цель умирает.",
      "warlock": "Двойной контрль толпы."
    }
  },
  lone_druid: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "keeper_of_the_light", "dazzle"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, медведь рвёт.",
      "enigma": "Black Hole держит толпу, Spirit Bear бьёт.",
      "luna": "Eclipse бьёт по толпе, медведь добивает.",
      "tidehunter": "Ravage станит толпу, медведь разрывает.",
      "keeper_of_the_light": "Иллюзии крипов разгоняют фарм.",
      "dazzle": "Weave усиливает броню медведя."
    }
  },
  chaos_knight: {
    partners: ["magnataur", "enigma", "wisp", "keeper_of_the_light", "luna", "dazzle"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, иллюзии разрывают.",
      "enigma": "Black Hole держит толпу, Chaos Bolt станит.",
      "wisp": "Tether усиливает, Relocate доставляет CK в бой.",
      "keeper_of_the_light": "Иллюзии крипов разгоняют фарм.",
      "luna": "Два керри с иллюзиями/аурами.",
      "dazzle": "Shallow Grave спасает CK на низком HP."
    }
  },
  meepo: {
    partners: ["magnataur", "enigma", "slardar", "dazzle", "keeper_of_the_light", "tidehunter"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, все Meepo бьют.",
      "enigma": "Black Hole держит толпу, все клоны разрывают.",
      "slardar": "Corrosive Haze уменьшает броню — клоны больнее.",
      "dazzle": "Shallow Grave спасает Meepo, Weave ослабляет.",
      "keeper_of_the_light": "Иллюзии крипов разгоняют фарм.",
      "tidehunter": "Ravage станит толпу, клоны добивают."
    }
  },
  treant: {
    partners: ["furion", "magnataur", "enigma", "luna", "tidehunter", "warlock"],
    texts: {
      "furion": "Два пушера с призывами давят здания.",
      "magnataur": "Reverse Polarity стягивает толпу, Nature's Guise прячет.",
      "enigma": "Black Hole держит толпу, Overgrowth фиксирует.",
      "luna": "Eclipse бьёт по толпе, Overgrowth держит.",
      "tidehunter": "Ravage станит толпу, Overgrowth добивает.",
      "warlock": "Два контроля толпы."
    }
  },
  ogre_magi: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "slardar", "sand_king"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Fireblast станит.",
      "enigma": "Black Hole держит толпу, Bloodlust ускоряет.",
      "luna": "Bloodlust усиливает скорость атаки Luna.",
      "tidehunter": "Ravage станит толпу, Fireblast добивает.",
      "slardar": "Bloodlust усиливает Slardar под Crush.",
      "sand_king": "Bloodlust ускоряет Sand King под Epicenter."
    }
  },
  undying: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "warlock", "dazzle"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, зомби разрывают.",
      "enigma": "Black Hole держит толпу, зомби бьют.",
      "luna": "Eclipse бьёт по толпе, зомби добивают.",
      "tidehunter": "Ravage станит толпу, Decay ослабляет.",
      "warlock": "Два набора призывов.",
      "dazzle": "Weave усиливает броню зомби."
    }
  },
  rubick: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "sand_king", "pudge"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Rubick крадёт ульт.",
      "enigma": "Black Hole держит толпу, Rubick может украсть его.",
      "luna": "Eclipse бьёт по толпе, Telekinesis держит.",
      "tidehunter": "Ravage станит толпу, Rubick украдывает.",
      "sand_king": "Burrowstrike станит, Rubick крадёт Epicenter.",
      "pudge": "Телекинез держит цель для Hook."
    }
  },
  disruptor: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "pudge", "sand_king"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Static Storm.",
      "enigma": "Black Hole держит толпу, Static Storm молчит всех.",
      "luna": "Eclipse бьёт по толпе, Kinetic Field ловит.",
      "tidehunter": "Ravage станит толпу, Static Storm добивает.",
      "pudge": "Glimpse возвращает цель на Hook.",
      "sand_king": "Kinetic Field ловит, Burrowstrike станит."
    }
  },
  nyx_assassin: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "zuus", "sand_king"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Impale станит.",
      "enigma": "Black Hole держит толпу, Mana Burn жжёт.",
      "luna": "Eclipse бьёт по толпе, Vendetta добивает.",
      "tidehunter": "Ravage станит толпу, Impale добивает.",
      "zuus": "Глобальный урон добивает то, что Nyx не дожал.",
      "sand_king": "Два стана из-под земли."
    }
  },
  naga_siren: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "keeper_of_the_light", "dazzle"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, иллюзии разрывают.",
      "enigma": "Black Hole держит толпу, иллюзии бьют.",
      "luna": "Eclipse бьёт по толпе, иллюзии добивают.",
      "tidehunter": "Ravage станит толпу, Song спасает.",
      "keeper_of_the_light": "Иллюзии крипов разгоняют фарм.",
      "dazzle": "Shallow Grave спасает Naga в Song."
    }
  },
  keeper_of_the_light: {
    partners: ["phantom_lancer", "sven", "tinker", "alchemist", "luna", "magnataur"],
    texts: {
      "phantom_lancer": "Иллюзии крипов разгоняют фарм, Illuminate давит толпу.",
      "sven": "Иллюзии дают урон, Sven быстро закупается.",
      "tinker": "Illuminate и March — двойной AOE-пуш.",
      "alchemist": "Иллюзии крипов разгоняют фарм Alch.",
      "luna": "Иллюзии дают урон, Eclipse бьёт по толпе.",
      "magnataur": "Chakra Magic даёт ману для Reverse Polarity."
    }
  },
  wisp: {
    partners: ["tiny", "sven", "chaos_knight", "ursa", "life_stealer", "alchemist"],
    texts: {
      "tiny": "Tether + Relocate — Tiny появляется в драке и сносит всё.",
      "sven": "Relocate доставляет Sven с God's Strength в бой.",
      "chaos_knight": "Tether усиливает CK, Relocate доставляет иллюзии.",
      "ursa": "Relocate доставляет Ursa к жертве.",
      "life_stealer": "Tether усиливает реген Lifestealer.",
      "alchemist": "Tether усиливает скорость атаки Alch."
    }
  },
  visage: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "dazzle", "warlock"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, гаргульи бьют.",
      "enigma": "Black Hole держит толпу, гаргульи разрывают.",
      "luna": "Eclipse бьёт по толпе, гаргульи добивают.",
      "tidehunter": "Ravage станит толпу, гаргульи давят.",
      "dazzle": "Weave усиливает броню гаргулий.",
      "warlock": "Два набора призывов."
    }
  },
  slark: {
    partners: ["magnataur", "enigma", "slardar", "luna", "tidehunter", "dazzle"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Slark врывается.",
      "enigma": "Black Hole держит толпу, Slark бурстит.",
      "slardar": "Corrosive Haze уменьшает броню под Essence Shift.",
      "luna": "Eclipse бьёт по толпе, Slark догоняет.",
      "tidehunter": "Ravage станит толпу, Slark добивает.",
      "dazzle": "Shallow Grave спасает Slark на низком HP."
    }
  },
  medusa: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "dazzle", "vengefulspirit"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Stone Gaze.",
      "enigma": "Black Hole держит толпу, Split Shot бьёт по всем.",
      "luna": "Два керри, две ауры дальнего урона.",
      "tidehunter": "Ravage станит толпу, Stone Gaze каменеет.",
      "dazzle": "Shallow Grave спасает Medusa под фокусом.",
      "vengefulspirit": "Aura усиливает урон Medusa."
    }
  },
  troll_warlord: {
    partners: ["magnataur", "enigma", "slardar", "luna", "tidehunter", "dazzle"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Battle Trance ускоряет.",
      "enigma": "Black Hole держит толпу, Troll бурстит.",
      "slardar": "Corrosive Haze уменьшает броню под Whirling Axes.",
      "luna": "Eclipse бьёт по толпе, Troll добивает.",
      "tidehunter": "Ravage станит толпу, Troll добивает.",
      "dazzle": "Shallow Grave спасает Troll на низком HP."
    }
  },
  centaur: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "warlock", "dazzle"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Hoof Stomp станит.",
      "enigma": "Black Hole держит толпу, Double Edge бьёт.",
      "luna": "Eclipse бьёт по толпе, Centaur танкует.",
      "tidehunter": "Ravage станит толпу, Centaur добивает.",
      "warlock": "Два живучих фронта.",
      "dazzle": "Shallow Grave спасает Centaur."
    }
  },
  magnataur: {
    partners: ["axe", "crystal_maiden", "enigma", "earthshaker", "luna", "sven"],
    texts: {
      "axe": "Reverse Polarity стягивает толпу в Call.",
      "crystal_maiden": "Reverse Polarity фиксирует толпу под Freezing Field.",
      "enigma": "Reverse Polarity стягивает толпу под Black Hole.",
      "earthshaker": "Reverse Polarity собирает толпу под Echo Slam.",
      "luna": "Reverse Polarity стягивает толпу под Eclipse.",
      "sven": "Reverse Polarity стягивает толпу под God's Strength."
    }
  },
  shredder: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "slardar", "dazzle"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Flamethrower жжёт всех.",
      "enigma": "Black Hole держит толпу, Whirling Death бьёт.",
      "luna": "Eclipse бьёт по толпе, Shredder добивает.",
      "tidehunter": "Ravage станит толпу, Flamethrower жжёт.",
      "slardar": "Corrosive Haze уменьшает броню под Whirling Death.",
      "dazzle": "Shallow Grave спасает Shredder."
    }
  },
  bristleback: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "dazzle", "warlock"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Quill Spray бьёт по всем.",
      "enigma": "Black Hole держит толпу, Quill Spray разрывает.",
      "luna": "Eclipse бьёт по толпе, Bristle танкует.",
      "tidehunter": "Ravage станит толпу, Quill добивает.",
      "dazzle": "Shallow Grave спасает Bristleback.",
      "warlock": "Два живучих фронта."
    }
  },
  tusk: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "sand_king", "dazzle"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Walrus Punch бьёт.",
      "enigma": "Black Hole держит толпу, Tusk бурстит.",
      "luna": "Eclipse бьёт по толпе, Tusk добивает.",
      "tidehunter": "Ravage станит толпу, Snowball давит.",
      "sand_king": "Burrowstrike станит, Walrus Punch добивает.",
      "dazzle": "Shallow Grave спасает Tusk."
    }
  },
  skywrath_mage: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "sand_king", "legion_commander"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Mystic Flare бурстит.",
      "enigma": "Black Hole держит толпу, Concussive Shot замедляет.",
      "luna": "Eclipse бьёт по толпе, Sky добивает.",
      "tidehunter": "Ravage станит толпу, Mystic Flare бьёт.",
      "sand_king": "Burrowstrike станит цель под Mystic Flare.",
      "legion_commander": "Duel фиксирует цель под Mystic Flare."
    }
  },
  abaddon: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "dazzle", "warlock"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Aphotic Shield защищает.",
      "enigma": "Black Hole держит толпу, Abaddon танкует.",
      "luna": "Eclipse бьёт по толпе, Mist Coil лечит.",
      "tidehunter": "Ravage станит толпу, Curse of Avernus замедляет.",
      "dazzle": "Два сейва, Shallow Grave + Aphotic Shield.",
      "warlock": "Два живучих фронта."
    }
  },
  elder_titan: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "slardar", "drow_ranger"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Earth Splitter.",
      "enigma": "Black Hole держит толпу, Natural Order ослабляет.",
      "luna": "Eclipse бьёт по толпе, Earth Splitter добивает.",
      "tidehunter": "Ravage станит толпу, Astral Spirit бьёт.",
      "slardar": "Natural Order + Corrosive Haze — броня в ноль.",
      "drow_ranger": "Natural Order усиливает урон Drow."
    }
  },
  legion_commander: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "dazzle", "skywrath_mage"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Duel выхватывает цель.",
      "enigma": "Black Hole держит толпу, LC добивает.",
      "luna": "Eclipse бьёт по толпе, LC танкует.",
      "tidehunter": "Ravage станит толпу, LC бурстит.",
      "dazzle": "Shallow Grave спасает LC под Duel.",
      "skywrath_mage": "Mystic Flare бьёт цель под Duel."
    }
  },
  techies: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "pudge", "windrunner"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу в мины.",
      "enigma": "Black Hole держит толпу, мины взрывают.",
      "luna": "Eclipse бьёт по толпе, мины добивают.",
      "tidehunter": "Ravage станит толпу в мины.",
      "pudge": "Hook вытаскивает цель в мины.",
      "windrunner": "Focus Fire подтягивает цель к минам."
    }
  },
  ember_spirit: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "crystal_maiden", "sand_king"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Sleight of Fist бьёт всех.",
      "enigma": "Black Hole держит толпу, Flame Guard жжёт.",
      "luna": "Eclipse бьёт по толпе, Ember добивает.",
      "tidehunter": "Ravage станит толпу, Ember бурстит.",
      "crystal_maiden": "Freezing Field и Sleight — двойной AOE.",
      "sand_king": "Burrowstrike станит, Chains фиксирует."
    }
  },
  earth_spirit: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "sand_king", "warlock"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Rolling Boulder бьёт.",
      "enigma": "Black Hole держит толпу, Stone Remnant давит.",
      "luna": "Eclipse бьёт по толпе, Earth Spirit бурстит.",
      "tidehunter": "Ravage станит толпу, Magnetize цепляется.",
      "sand_king": "Два героя из-под земли.",
      "warlock": "Golem танкует, Magnetize добивает."
    }
  },
  abyssal_underlord: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "furion", "dazzle"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Firestorm жжёт.",
      "enigma": "Black Hole держит толпу, Firestorm бьёт по всем.",
      "luna": "Eclipse бьёт по толпе, Underlord танкует.",
      "tidehunter": "Ravage станит толпу, Pit of Malice ловит.",
      "furion": "Два глобальных героя — Dark Rift и Teleport.",
      "dazzle": "Shallow Grave спасает Underlord."
    }
  },
  terrorblade: {
    partners: ["magnataur", "enigma", "vengefulspirit", "keeper_of_the_light", "luna", "drow_ranger"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Sunder переворачивает.",
      "enigma": "Black Hole держит толпу, Metamorphosis разрывает.",
      "vengefulspirit": "Aura усиливает иллюзии Terrorblade.",
      "keeper_of_the_light": "Иллюзии крипов разгоняют фарм.",
      "luna": "Две ауры дальнего урона.",
      "drow_ranger": "Marksmanship и Metamorphosis — двойной дальний урон."
    }
  },
  phoenix: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "warlock", "dazzle"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Supernova.",
      "enigma": "Black Hole держит толпу, Fire Spirits жгут.",
      "luna": "Eclipse бьёт по толпе, Sun Ray добивает.",
      "tidehunter": "Ravage станит толпу, Supernova перезапускается.",
      "warlock": "Golem танкует, Supernova бьёт по толпе.",
      "dazzle": "Shallow Grave спасает Phoenix до яйца."
    }
  },
  oracle: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "medusa", "dazzle"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Fate's Edict защищает.",
      "enigma": "Black Hole держит толпу, Oracle лечит.",
      "luna": "Fortune's End прерывает, False Promise спасает.",
      "tidehunter": "Ravage станит толпу, Oracle добивает.",
      "medusa": "False Promise спасает Medusa от фокуса.",
      "dazzle": "Два сейва-саппорта."
    }
  },
  winter_wyvern: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "juggernaut", "medusa"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Winter's Curse.",
      "enigma": "Black Hole держит толпу, Arctic Burn жжёт.",
      "luna": "Eclipse бьёт по толпе, Cold Embrace спасает.",
      "tidehunter": "Ravage станит толпу, Curse добивает.",
      "juggernaut": "Cold Embrace спасает Juggernaut под Omnislash.",
      "medusa": "Cold Embrace спасает Medusa от фокуса."
    }
  },
  arc_warden: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "keeper_of_the_light", "drow_ranger"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Flux ловит.",
      "enigma": "Black Hole держит толпу, Tempest Double бьёт.",
      "luna": "Eclipse бьёт по толпе, Arc бурстит.",
      "tidehunter": "Ravage станит толпу, двойник добивает.",
      "keeper_of_the_light": "Иллюзии крипов разгоняют фарм.",
      "drow_ranger": "Два дальних керри, ауры усиливают."
    }
  },
  monkey_king: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "crystal_maiden", "slardar"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Wukong's Command бьёт.",
      "enigma": "Black Hole держит толпу, Boundless Strike станит.",
      "luna": "Eclipse бьёт по толпе, MK добивает.",
      "tidehunter": "Ravage станит толпу, Wukong добивает.",
      "crystal_maiden": "Freezing Field и Wukong — двойной AOE.",
      "slardar": "Corrosive Haze уменьшает броню под Jingu."
    }
  },
  dark_willow: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "crystal_maiden", "sand_king"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Terrorize страшит.",
      "enigma": "Black Hole держит толпу, Bramble Maze ловит.",
      "luna": "Eclipse бьёт по толпе, Shadow Realm прячет.",
      "tidehunter": "Ravage станит толпу, Terrorize добивает.",
      "crystal_maiden": "Freezing Field и Terrorize — двойной контроль.",
      "sand_king": "Burrowstrike станит, Bedlam добивает."
    }
  },
  pangolier: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "slardar", "crystal_maiden"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Rolling Thunder бьёт.",
      "enigma": "Black Hole держит толпу, Pango бурстит.",
      "luna": "Eclipse бьёт по толпе, Pango катается.",
      "tidehunter": "Ravage станит толпу, Pango добивает.",
      "slardar": "Corrosive Haze уменьшает броню под Swift Blink.",
      "crystal_maiden": "Freezing Field и Rolling Thunder — двойной AOE."
    }
  },
  grimstroke: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "skywrath_mage", "warlock"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Soulbind связывает.",
      "enigma": "Black Hole держит толпу, Ink Swell станит.",
      "luna": "Eclipse бьёт по толпе, Soulbind связывает двух.",
      "tidehunter": "Ravage станит толпу, Soulbind добивает.",
      "skywrath_mage": "Soulbind связывает, Mystic Flare бьёт двух.",
      "warlock": "Двойной контроль толпы."
    }
  },
  hoodwink: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "slardar", "sand_king"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Bushwhack станит.",
      "enigma": "Black Hole держит толпу, Acorn Shot бьёт.",
      "luna": "Eclipse бьёт по толпе, Hoodwink добивает.",
      "tidehunter": "Ravage станит толпу, Bushwhack держит.",
      "slardar": "Corrosive Haze уменьшает броню под Scurry.",
      "sand_king": "Burrowstrike станит, Bushwhack добивает."
    }
  },
  void_spirit: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "crystal_maiden", "slardar"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Dissimilate бьёт.",
      "enigma": "Black Hole держит толпу, Aether Remnant станит.",
      "luna": "Eclipse бьёт по толпе, Void Spirit бурстит.",
      "tidehunter": "Ravage станит толпу, Void добивает.",
      "crystal_maiden": "Freezing Field и Dissimilate — двойной AOE.",
      "slardar": "Corrosive Haze уменьшает броню под Resonant Pulse."
    }
  },
  snapfire: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "drow_ranger", "sand_king"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Mortimer Kiss бьёт.",
      "enigma": "Black Hole держит толпу, Lil' Shredder жжёт.",
      "luna": "Eclipse бьёт по толпе, Snap добивает.",
      "tidehunter": "Ravage станит толпу, Mortimer добивает.",
      "drow_ranger": "Aura усиливает урон Snapfire.",
      "sand_king": "Burrowstrike станит, Mortimer бьёт."
    }
  },
  mars: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "crystal_maiden", "dazzle"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Arena of Blood ловит.",
      "enigma": "Black Hole держит толпу, Mars танкует.",
      "luna": "Eclipse бьёт по толпе в арене.",
      "tidehunter": "Ravage станит толпу, Spear добивает.",
      "crystal_maiden": "Freezing Field бьёт по толпе в арене.",
      "dazzle": "Shallow Grave спасает Mars."
    }
  },
  ringmaster: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "sand_king", "warlock"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Box ловит.",
      "enigma": "Black Hole держит толпу, Ringmaster бурстит.",
      "luna": "Eclipse бьёт по толпе, Ring добивает.",
      "tidehunter": "Ravage станит толпу, Box держит.",
      "sand_king": "Burrowstrike станит, Ringmaster добивает.",
      "warlock": "Двойной контроль толпы."
    }
  },
  dawnbreaker: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "dazzle", "warlock"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Solar Guardian прыгает.",
      "enigma": "Black Hole держит толпу, Dawnbreaker бурстит.",
      "luna": "Eclipse бьёт по толпе, Dawn добивает.",
      "tidehunter": "Ravage станит толпу, Solar Guardian добивает.",
      "dazzle": "Shallow Grave спасает Dawnbreaker.",
      "warlock": "Два живучих фронта."
    }
  },
  marci: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "dazzle", "sand_king"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Dispose кидает.",
      "enigma": "Black Hole держит толпу, Marci бурстит.",
      "luna": "Eclipse бьёт по толпе, Marci добивает.",
      "tidehunter": "Ravage станит толпу, Marci бьёт.",
      "dazzle": "Shallow Grave спасает Marci.",
      "sand_king": "Burrowstrike станит, Marci добивает."
    }
  },
  primal_beast: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "dazzle", "warlock"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Onslaught сносит.",
      "enigma": "Black Hole держит толпу, Primal Beast бурстит.",
      "luna": "Eclipse бьёт по толпе, Beast танкует.",
      "tidehunter": "Ravage станит толпу, Beast добивает.",
      "dazzle": "Shallow Grave спасает Beast.",
      "warlock": "Два живучих фронта."
    }
  },
  muerta: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "dazzle", "slardar"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу под Pierce the Veil.",
      "enigma": "Black Hole держит толпу, Muerta бурстит.",
      "luna": "Eclipse бьёт по толпе, Muerta бьёт чисто.",
      "tidehunter": "Ravage станит толпу, Muerta добивает.",
      "dazzle": "Shallow Grave спасает Muerta.",
      "slardar": "Corrosive Haze уменьшает броню под её урон."
    }
  },
  kez: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "slardar", "dazzle"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Kez бурстит.",
      "enigma": "Black Hole держит толпу, Kez добивает.",
      "luna": "Eclipse бьёт по толпе, Kez фокусит.",
      "tidehunter": "Ravage станит толпу, Kez добивает.",
      "slardar": "Corrosive Haze уменьшает броню под Falcon Rush.",
      "dazzle": "Shallow Grave спасает Kez."
    }
  },
  largo: {
    partners: ["magnataur", "enigma", "luna", "tidehunter", "dazzle", "warlock"],
    texts: {
      "magnataur": "Reverse Polarity стягивает толпу, Largo держит контроль.",
      "enigma": "Black Hole держит толпу, Largo добивает.",
      "luna": "Eclipse бьёт по толпе, Largo танкует.",
      "tidehunter": "Ravage станит толпу, Largo бьёт.",
      "dazzle": "Shallow Grave спасает Largo.",
      "warlock": "Два живучих фронта."
    }
  }
};
