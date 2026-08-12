module.exports = {
 "antimage": {
  "ln": "Anti-Mage",
  "attr": "agi",
  "atk": "Melee",
  "roles": [
   "Carry",
   "Escape",
   "Nuker"
  ],
  "spells": [
   {
    "id": "antimage_mana_break",
    "name": "Mana Break",
    "type": "Passive",
    "dmg": "Physical",
    "desc": "Burns an opponent's mana on each attack and deals damage equal to a percentage of the mana burnt."
   },
   {
    "id": "antimage_blink",
    "name": "Blink",
    "type": "Point Target",
    "dmg": "",
    "desc": "Short distance teleportation that allows Anti-Mage to move in and out of combat."
   },
   {
    "id": "antimage_counterspell",
    "name": "Counterspell",
    "type": "No Target+Instant Cast",
    "dmg": "",
    "desc": "Passively grants magic resistance. Counterspell may be activated to create an anti-magic shell around Anti-Mage that blocks and reflects any targeted spells."
   },
   {
    "id": "antimage_persectur",
    "name": "Persecutor",
    "type": "Passive",
    "dmg": "",
    "desc": "Attacks slow enemies based on how much mana they are missing. Min slow at 50% mana, up to max slow at 0% mana. No effect if enemy is above 50% mana."
   },
   {
    "id": "antimage_mana_void",
    "name": "Mana Void",
    "type": "Unit Target+AOE",
    "dmg": "Magical",
    "desc": "For each point of mana missing by the target unit, damage is dealt to it and surrounding enemies. The main target is also mini-stunned."
   }
  ]
 },
 "axe": {
  "ln": "Axe",
  "attr": "str",
  "atk": "Melee",
  "roles": [
   "Initiator",
   "Durable",
   "Disabler",
   "Carry"
  ],
  "spells": [
   {
    "id": "axe_berserkers_call",
    "name": "Berserker's Call",
    "type": "No Target",
    "dmg": "",
    "desc": "Axe taunts nearby enemy units, forcing them to attack him while he gains bonus armor during the duration."
   },
   {
    "id": "axe_battle_hunger",
    "name": "Battle Hunger",
    "type": "Unit Target",
    "dmg": "Pure",
    "desc": "Enrages an enemy unit, causing it to take damage over time until it kills another unit or the duration ends. The enemy is slowed as long as they are facing away from Axe."
   },
   {
    "id": "axe_counter_helix",
    "name": "Counter Helix",
    "type": "Passive",
    "dmg": "Pure",
    "desc": "After a set number of attacks, Axe will perform a helix counter attack, dealing pure damage to all nearby enemies."
   },
   {
    "id": "axe_culling_blade",
    "name": "Culling Blade",
    "type": "Unit Target",
    "dmg": "Pure",
    "desc": "Axe spots a weakness and strikes, dealing pure damage. When an enemy hero is killed with Culling Blade, its cooldown is reset, and all nearby allied units gain bonus movement speed and armor. Axe permanently drenches his blade every time he kills an enemy Hero with Culling Blade, gaining bonus armor for each stack."
   },
   {
    "id": "axe_one_man_army",
    "name": "One Man Army",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "Axe gains Strength based on 50% of his Armor as long as there are no allied heroes within 700 distance from Axe. The effect fades over 3s after approaching an ally."
   }
  ]
 },
 "bane": {
  "ln": "Bane",
  "attr": "all",
  "atk": "Ranged",
  "roles": [
   "Support",
   "Disabler",
   "Nuker",
   "Durable"
  ],
  "spells": [
   {
    "id": "bane_enfeeble",
    "name": "Enfeeble",
    "type": "Unit Target",
    "dmg": "Pure",
    "desc": "Deals damage every second and lowers the enemy's total attack damage and cast range."
   },
   {
    "id": "bane_brain_sap",
    "name": "Brain Sap",
    "type": "Unit Target",
    "dmg": "Pure",
    "desc": "Feasts on the vital energies of an enemy unit, healing Bane and dealing damage."
   },
   {
    "id": "bane_nightmare",
    "name": "Nightmare",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Puts the target enemy or friendly Hero to sleep. Sleeping units walk in Bane's chosen direction and are awakened when damaged. If the target was directly attacked, the Nightmare passes to the attacking unit. Bane can attack and damage Nightmared targets freely. Can be put on alt-cast to have the target stand still."
   },
   {
    "id": "bane_fiends_grip",
    "name": "Fiend's Grip",
    "type": "Unit Target+Channeled",
    "dmg": "Pure",
    "desc": "CHANNELED - Grips an enemy unit, disabling it and causing heavy damage over time, while stealing mana every 0.5 seconds based on the unit's maximum mana."
   },
   {
    "id": "bane_nightmare_end",
    "name": "Nightmare End",
    "type": "Hidden+No Target",
    "dmg": "",
    "desc": "Ends all ongoing Nightmares."
   },
   {
    "id": "bane_ichor_of_nyctasha",
    "name": "Ichor of Nyctasha",
    "type": "Passive",
    "dmg": "Pure",
    "desc": "Every time Bane kills an enemy hero or they die under the effect of Bane's debuff, they receive a Terror for the rest of the game that decreases their status resistance to Bane's subsequent debuffs."
   }
  ]
 },
 "bloodseeker": {
  "ln": "Bloodseeker",
  "attr": "agi",
  "atk": "Melee",
  "roles": [
   "Carry",
   "Disabler",
   "Nuker",
   "Initiator"
  ],
  "spells": [
   {
    "id": "bloodseeker_bloodrage",
    "name": "Bloodrage",
    "type": "No Target+Instant Cast",
    "dmg": "Pure",
    "desc": "Drives Bloodseeker into a bloodthirsty rage which causes him to attack faster and deal more spell damage at the cost of a percentage of his health per second."
   },
   {
    "id": "bloodseeker_blood_bath",
    "name": "Blood Rite",
    "type": "AOE+Point Target",
    "dmg": "Pure",
    "desc": "Bloodseeker baptizes an area in sacred blood. After 2.9 seconds the ritual completes, causing any enemies caught in the area to take damage and become silenced."
   },
   {
    "id": "bloodseeker_thirst",
    "name": "Thirst",
    "type": "Passive",
    "dmg": "",
    "desc": "Bloodseeker is invigorated by the wounds of his enemies, gaining bonus movement speed when an enemy hero's health falls below 100%, with the bonuses increasing as their health falls further. If an enemy hero's health falls below 25%, he will also gain vision and True Sight of that hero. Bonuses stack per hero. Unlocks max movement speed for Bloodseeker."
   },
   {
    "id": "bloodseeker_sanguivore",
    "name": "Sanguivore",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "Bloodseeker restores some life when he kills a unit, equal to 30 health plus a percentage of the units max health. Restores for half values if an ally kills a nearby enemy hero."
   },
   {
    "id": "bloodseeker_rupture",
    "name": "Rupture",
    "type": "Unit Target",
    "dmg": "Pure",
    "desc": "Causes an enemy unit's skin to rupture, dealing initial damage based on its current health. If the unit moves, it takes damage based on the distance moved."
   }
  ]
 },
 "crystal_maiden": {
  "ln": "Crystal Maiden",
  "attr": "int",
  "atk": "Ranged",
  "roles": [
   "Support",
   "Disabler",
   "Nuker"
  ],
  "spells": [
   {
    "id": "crystal_maiden_crystal_nova",
    "name": "Crystal Nova",
    "type": "Point Target+AOE",
    "dmg": "Magical",
    "desc": "A burst of damaging frost slows enemy movement in the targeted area."
   },
   {
    "id": "crystal_maiden_frostbite",
    "name": "Frostbite",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Encases an enemy unit in ice, prohibiting movement and attack, while dealing damage over time. Deals 4x damage to non-ancient creeps."
   },
   {
    "id": "crystal_maiden_brilliance_aura",
    "name": "Arcane Aura",
    "type": "Passive",
    "dmg": "",
    "desc": "Gives mana regeneration to all friendly units on the map. Allies within a 1200 radius of Crystal Maiden receive more mana regeneration. Crystal Maiden passively gains mana regen amplification."
   },
   {
    "id": "crystal_maiden_crystal_clone",
    "name": "Crystal Clone",
    "type": "Point Target+Hidden+Instant Cast",
    "dmg": "",
    "desc": "Slides in a direction, creating a crystal clone of herself in her place and disjointing incoming projectiles. If the clone takes enough damage or times out, it shatters, Frostbiting enemies in a 450 AoE around its place. The Clone can also be destroyed by Crystal Maiden's own spells."
   },
   {
    "id": "crystal_maiden_glacial_guard",
    "name": "Glacial Guard",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "A portion of the mana Crystal Maiden spends on her abilities is converted into a physical barrier."
   },
   {
    "id": "crystal_maiden_freezing_field",
    "name": "Freezing Field",
    "type": "No Target+Channeled",
    "dmg": "Magical",
    "desc": "CHANNELED - Surrounds Crystal Maiden with 100 random icy explosions that slow enemies and deal massive damage. Lasts 10 seconds."
   },
   {
    "id": "crystal_maiden_freezing_field_stop",
    "name": "Stop Freezing Field",
    "type": "No Target+Hidden+Instant Cast",
    "dmg": "",
    "desc": "Immediately stops the Freezing Field"
   }
  ]
 },
 "drow_ranger": {
  "ln": "Drow Ranger",
  "attr": "agi",
  "atk": "Ranged",
  "roles": [
   "Carry",
   "Disabler",
   "Pusher"
  ],
  "spells": [
   {
    "id": "drow_ranger_frost_arrows",
    "name": "Frost Arrows",
    "type": "Unit Target+Autocast+Attack Modifier",
    "dmg": "Physical",
    "desc": "Adds a freezing effect to Drow's attacks, slowing enemy movement and dealing bonus damage. Slow lasts 1.5 seconds."
   },
   {
    "id": "drow_ranger_wave_of_silence",
    "name": "Gust",
    "type": "Point Target",
    "dmg": "",
    "desc": "Releases a wave that silences and knocks back and reveals invisible enemy units. Knockback distance is relative to how close they are to Drow."
   },
   {
    "id": "drow_ranger_multishot",
    "name": "Multishot",
    "type": "Point Target+Channeled",
    "dmg": "Physical",
    "desc": "CHANNELED - Drow releases a flurry of arrows in continuous salvos, hitting enemies for extra damage and applying Frost Arrows. Lasts up to 1.75 seconds. Drow can move slowly and use items while casting Multishot."
   },
   {
    "id": "drow_ranger_glacier",
    "name": "Glacier",
    "type": "No Target",
    "dmg": "Magical",
    "desc": "Drow creates a hill of ice beneath her, knocking away nearby enemies. Units on the hill gain flying vision and Drow and her ranged allies gain bonus attack range. Drow gains additional damage while on the Glacier and attacking targets below her. The front of the hill obscures vision and cannot be moved through except by Drow. Does not interrupt Multishot when cast."
   },
   {
    "id": "drow_ranger_trueshot",
    "name": "Precision Aura",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "Grants Drow bonus agility based on Drow's current agility and level. Nearby ranged heroes received 50% of the bonus agility."
   },
   {
    "id": "drow_ranger_marksmanship",
    "name": "Marksmanship",
    "type": "Passive",
    "dmg": "Physical",
    "desc": "Drow's experiences in battle grant her a chance to launch arrows with incredible accuracy and effectiveness. Pierces through the enemy's defenses, ignoring their base armor. This ability is disabled if there is an enemy hero within 325 range."
   }
  ]
 },
 "earthshaker": {
  "ln": "Earthshaker",
  "attr": "str",
  "atk": "Melee",
  "roles": [
   "Support",
   "Initiator",
   "Disabler",
   "Nuker"
  ],
  "spells": [
   {
    "id": "earthshaker_fissure",
    "name": "Fissure",
    "type": "Point Target",
    "dmg": "Magical",
    "desc": "Slams the ground with a mighty totem, creating an impassable ridge of stone while stunning and damaging enemy units along its line."
   },
   {
    "id": "earthshaker_enchant_totem",
    "name": "Enchant Totem",
    "type": "No Target",
    "dmg": "",
    "desc": "Empowers Earthshaker's totem, causing it to deal extra damage and have 100 bonus attack range on the next attack."
   },
   {
    "id": "earthshaker_aftershock",
    "name": "Aftershock",
    "type": "Passive",
    "dmg": "Magical",
    "desc": "Causes the earth to shake underfoot, adding additional damage and stuns to nearby enemy units when Earthshaker casts his abilities."
   },
   {
    "id": "earthshaker_echo_slam",
    "name": "Echo Slam",
    "type": "No Target",
    "dmg": "Magical",
    "desc": "Shockwaves travel through the ground, damaging enemy units. Each enemy hit causes an echo to damage nearby units. Real heroes cause two echoes."
   },
   {
    "id": "earthshaker_slugger",
    "name": "Slugger",
    "type": "Passive",
    "dmg": "",
    "desc": "Enemies killed with Enchant Totem or Earthshaker's other abilities are sent flying, dealing damage to enemies they hit."
   }
  ]
 },
 "juggernaut": {
  "ln": "Juggernaut",
  "attr": "agi",
  "atk": "Melee",
  "roles": [
   "Carry",
   "Pusher",
   "Escape"
  ],
  "spells": [
   {
    "id": "juggernaut_blade_fury",
    "name": "Blade Fury",
    "type": "No Target+Instant Cast",
    "dmg": "Magical",
    "desc": "Causes a bladestorm of destructive force around Juggernaut, rendering him debuff immune with 80% magic resistance and dealing damage every 0.2s to nearby enemy units. Applies a strong dispel at the end of the spin."
   },
   {
    "id": "juggernaut_healing_ward",
    "name": "Healing Ward",
    "type": "AOE+Point Target",
    "dmg": "",
    "desc": "Summons a Healing Ward which heals all nearby allied units, based on their max health. The Healing Ward moves at 325 movement speed after being summoned. Lasts 18 seconds."
   },
   {
    "id": "juggernaut_blade_dance",
    "name": "Blade Dance",
    "type": "Passive",
    "dmg": "",
    "desc": "Gives Juggernaut a chance to deal critical damage with Blade Fury and on each attack."
   },
   {
    "id": "juggernaut_swift_slash",
    "name": "Swiftslash",
    "type": "Unit Target",
    "dmg": "Physical",
    "desc": "Performs a short Omnislash for 1 seconds."
   },
   {
    "id": "juggernaut_bladeform",
    "name": "Bladeform",
    "type": "Passive",
    "dmg": "",
    "desc": "Juggernaut gains a stack of Bladeform every 2s that Juggernaut does not take damage. Each stack grants bonus base Agility and Movement Speed. Stacks fade after 2s upon taking any damage."
   },
   {
    "id": "juggernaut_omni_slash",
    "name": "Omnislash",
    "type": "Unit Target",
    "dmg": "Physical",
    "desc": "Juggernaut leaps towards the target enemy units, and then slashes the target and other nearby enemy units at an increased attack rate. Juggernaut is invulnerable for the duration. DISPEL TYPE: Basic Dispel"
   }
  ]
 },
 "mirana": {
  "ln": "Mirana",
  "attr": "agi",
  "atk": "Ranged",
  "roles": [
   "Carry",
   "Support",
   "Escape",
   "Nuker",
   "Disabler"
  ],
  "spells": [
   {
    "id": "mirana_starfall",
    "name": "Starstorm",
    "type": "No Target",
    "dmg": "Magical",
    "desc": "Calls down a wave of meteors to damage nearby enemy units. The closest enemy unit to Mirana in a 675 radius will be struck a second time."
   },
   {
    "id": "mirana_arrow",
    "name": "Sacred Arrow",
    "type": "Point Target",
    "dmg": "Magical",
    "desc": "Fires a long-range arrow with deadly precision, which stuns and damages the first enemy unit it strikes. The stun duration ranges from 0.01 to 2.6 seconds, with bonus damage up to 180 added, based on the distance the arrow travels to its target. Instantly kills the first non-ancient creep it hits."
   },
   {
    "id": "mirana_leap",
    "name": "Leap",
    "type": "No Target",
    "dmg": "",
    "desc": "Mirana leaps forward into battle, empowering herself with a ferocious roar that grants bonus attack and movement speed. Speed bonus lasts 5 seconds."
   },
   {
    "id": "mirana_celestial_quiver",
    "name": "Celestial Quiver",
    "type": "Unit Target+Autocast+Attack Modifier",
    "dmg": "Magical",
    "desc": "When a charge is available, Mirana's next attack will deal bonus magic damage. Gains a charge every 7 hero levels."
   },
   {
    "id": "mirana_invis",
    "name": "Moonlight Shadow",
    "type": "No Target",
    "dmg": "",
    "desc": "Turns Mirana and all allied heroes invisible and grants bonus movement speed. Mirana gains bonus outgoing damage during the duration. If a hero is revealed, invisibility will restore after the fade delay as long as Moonlight Shadow's duration has not expired."
   }
  ]
 },
 "morphling": {
  "ln": "Morphling",
  "attr": "agi",
  "atk": "Ranged",
  "roles": [
   "Carry",
   "Escape",
   "Durable",
   "Nuker",
   "Disabler"
  ],
  "spells": [
   {
    "id": "morphling_waveform",
    "name": "Waveform",
    "type": "Point Target",
    "dmg": "Magical",
    "desc": "Morphling dissolves into liquid and surges forward, damaging enemy units in his path. Morphling is invulnerable during Waveform."
   },
   {
    "id": "morphling_adaptive_strike_agi",
    "name": "Adaptive Strike",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Launches a surge of water toward an enemy unit, stunning them, knocking them back, and dealing base damage plus additional damage based on Morphling's agility times a multiplier. If Morphling's agility is 50% higher than strength, the maximum agility multiplier is used. Knockback distance and stun duration are based on Morphling's strength. If his strength is 50% higher than his agility, the maximum knockback distance and stun duration is used."
   },
   {
    "id": "morphling_ebb_and_flow",
    "name": "Ebb and Flow",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "Morphling receives bonus cast range and slow resistance based on his current Strength, and attack range and movement speed based on his current Agility. These bonuses persist if he is morphed into another hero."
   },
   {
    "id": "morphling_morph_agi",
    "name": "Attribute Shift (Agility Gain)",
    "type": "No Target",
    "dmg": "",
    "desc": "Morphling shifts its form, pulling points from Strength and pouring them into Agility at a rate of 4. The process is reversible."
   },
   {
    "id": "morphling_morph_str",
    "name": "Attribute Shift (Strength Gain)",
    "type": "No Target",
    "dmg": "",
    "desc": "Morphling shifts its form, pulling points from Agility and pouring them into Strength at a rate of 4. The process is reversible."
   },
   {
    "id": "morphling_replicate",
    "name": "Morph",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Morphling changes his form to match the targeted enemy, gaining their basic abilities. Can be toggled for the duration of the ability."
   },
   {
    "id": "morphling_morph_replicate",
    "name": "Morph Replicate",
    "type": "No Target+Hidden+Instant Cast",
    "dmg": "",
    "desc": "Toggles Morphling's form between his own and the replicated enemy."
   }
  ]
 },
 "nevermore": {
  "ln": "Shadow Fiend",
  "attr": "agi",
  "atk": "Ranged",
  "roles": [
   "Carry",
   "Nuker"
  ],
  "spells": [
   {
    "id": "nevermore_shadowraze1",
    "name": "Shadowraze",
    "type": "No Target",
    "dmg": "Magical",
    "desc": "Shadow Fiend razes the ground directly in front of him, dealing damage to enemy units in the area, dealing bonus damage based on his current Necromastery Soul amount. Adds a stacking damage amplifier on the target that causes the enemy to take bonus Shadowraze damage per stack."
   },
   {
    "id": "nevermore_shadowraze2",
    "name": "Shadowraze",
    "type": "No Target",
    "dmg": "Magical",
    "desc": "Shadow Fiend razes the ground a short distance away from him, dealing damage to enemy units in the area, dealing bonus damage based on his current Necromastery Soul amount. Adds a stacking damage amplifier on the target that causes the enemy to take bonus Shadowraze damage per stack."
   },
   {
    "id": "nevermore_shadowraze3",
    "name": "Shadowraze",
    "type": "No Target",
    "dmg": "Magical",
    "desc": "Shadow Fiend razes the ground a longer distance away from him, dealing damage to enemy units in the area, dealing bonus damage based on his current Necromastery Soul amount. Adds a stacking damage amplifier on the target that causes the enemy to take bonus Shadowraze damage per stack."
   },
   {
    "id": "nevermore_frenzy",
    "name": "Feast of Souls",
    "type": "No Target+Instant Cast",
    "dmg": "",
    "desc": "Shadow Fiend gains Bonus Movement and Attack Speed for 8 seconds. For the duration of the effect, every 0.5s he collects souls from 2 enemies in a 600 radius. After the effect is over, he loses the souls whose owners are still alive, retaining the rest for 8s, after which souls that are over the Necromastery max stack count are also lost. Can only collect souls once from each individual enemy."
   },
   {
    "id": "nevermore_dark_lord",
    "name": "Presence of the Dark Lord",
    "type": "Passive",
    "dmg": "",
    "desc": "Shadow Fiend's presence reduces the armor of nearby enemies."
   },
   {
    "id": "nevermore_requiem",
    "name": "Requiem of Souls",
    "type": "No Target",
    "dmg": "Magical",
    "desc": "Shadow Fiend gathers up to 20 of his captured souls to release them as lines of demonic energy. Units near Shadow Fiend when the souls are released can be damaged by several lines of energy. Any unit damaged by Requiem of Souls will be feared and have its movement speed and magic resistance reduced for 0.6 seconds for each line hit up to a maximum of 2.15. Lines of energy are created for every soul captured through Necromastery. Requiem of Souls is automatically cast whenever Shadow Fiend dies, regardless of its cooldown."
   },
   {
    "id": "nevermore_necromastery",
    "name": "Necromastery",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "Shadow Fiend steals the soul from units he kills, gaining 1.35 bonus damage per soul. Hero kills grant 4 souls. On death, he releases 30% of them from bondage."
   }
  ]
 },
 "phantom_lancer": {
  "ln": "Phantom Lancer",
  "attr": "agi",
  "atk": "Melee",
  "roles": [
   "Carry",
   "Escape",
   "Pusher",
   "Nuker"
  ],
  "spells": [
   {
    "id": "phantom_lancer_spirit_lance",
    "name": "Spirit Lance",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Sends a magical spirit lance to a target enemy unit that damages and slows, while summoning an illusory phantom to attack the unit."
   },
   {
    "id": "phantom_lancer_doppelwalk",
    "name": "Doppelganger",
    "type": "Point Target+AOE",
    "dmg": "",
    "desc": "Phantom Lancer briefly vanishes from the battlefield. After 1 second, Phantom Lancer and any of his nearby illusions reappear at a random position within the targeted location, along with two additional doppelgangers. Extends duration of all illusions. The two added doppelgangers have different properties: one takes normal damage and deals none, while the other takes 500% bonus damage and deals -80% less damage. DISPEL TYPE: Basic Dispel"
   },
   {
    "id": "phantom_lancer_phantom_edge",
    "name": "Phantom Rush",
    "type": "Instant Cast+No Target",
    "dmg": "Physical",
    "desc": "When targeting an enemy for an attack, Phantom Lancer quickly charges into range, gaining increased movement speed and evasion."
   },
   {
    "id": "phantom_lancer_illusory_armaments",
    "name": "Illusory Armaments",
    "type": "Hidden+Passive",
    "dmg": "",
    "desc": "Whenever an illusion of Phantom Lancer is created, its outgoing damage cannot go below a fixed value for 3 seconds."
   },
   {
    "id": "phantom_lancer_juxtapose",
    "name": "Juxtapose",
    "type": "Passive",
    "dmg": "",
    "desc": "Phantom Lancer has a chance to fracture his presence on an attack, creating an illusion of himself. Illusions also have a chance to fracture further. Illusions created from Phantom Lancer last for 8 seconds, while illusions created from other illusions last 4 seconds."
   }
  ]
 },
 "puck": {
  "ln": "Puck",
  "attr": "int",
  "atk": "Ranged",
  "roles": [
   "Initiator",
   "Disabler",
   "Escape",
   "Nuker"
  ],
  "spells": [
   {
    "id": "puck_illusory_orb",
    "name": "Illusory Orb",
    "type": "Point Target",
    "dmg": "Magical",
    "desc": "Vector Targeted. Puck launches a magic orb that travels along the path, damaging enemy units along the way. The orb deals an additional 3% of its impact damage every 0.5s in its area of effect, but if it exceeds the max cast range it will be destroyed. At any point, Puck may teleport to the orb's location using Ethereal Jaunt. Can be put on alt-cast to launch the Orb straight ahead."
   },
   {
    "id": "puck_waning_rift",
    "name": "Waning Rift",
    "type": "Point Target+AOE",
    "dmg": "Magical",
    "desc": "Puck teleports to the target location and releases a burst of faerie dust that deals damage and silences enemy units nearby."
   },
   {
    "id": "puck_phase_shift",
    "name": "Phase Shift",
    "type": "No Target+Channeled",
    "dmg": "",
    "desc": "CHANNELED - Puck briefly shifts into another dimension where it is immune from harm."
   },
   {
    "id": "puck_ethereal_jaunt",
    "name": "Ethereal Jaunt",
    "type": "No Target",
    "dmg": "",
    "desc": "Teleports Puck to a flying Illusory Orb."
   },
   {
    "id": "puck_puckish",
    "name": "Puckish",
    "type": "Passive",
    "dmg": "",
    "desc": "Whenever Puck disjoints an attack, it restores 3% of its max health and mana. Dodging a targeted spell projectile restores 3x that amount. Does not apply to attacks by Towers."
   },
   {
    "id": "puck_dream_coil",
    "name": "Dream Coil",
    "type": "AOE+Point Target",
    "dmg": "Magical",
    "desc": "Creates a coil of volatile magic that latches onto enemy Heroes, damaging and leashing them. If the enemy hero stretches the coil by moving too far away, it snaps, stunning and dealing additional damage."
   }
  ]
 },
 "pudge": {
  "ln": "Pudge",
  "attr": "str",
  "atk": "Melee",
  "roles": [
   "Disabler",
   "Initiator",
   "Durable",
   "Nuker"
  ],
  "spells": [
   {
    "id": "pudge_meat_hook",
    "name": "Meat Hook",
    "type": "Point Target",
    "dmg": "Pure",
    "desc": "Launches a bloody hook toward a unit or location. The hook will snag the first unit it encounters, dragging the unit back to Pudge, killing it if it's a non-ancient creep and dealing damage if it is an enemy otherwise."
   },
   {
    "id": "pudge_rot",
    "name": "Rot",
    "type": "No Target",
    "dmg": "Magical",
    "desc": "A toxic cloud that deals intense damage and slows movement--harming not only enemy units but Pudge himself."
   },
   {
    "id": "pudge_flesh_heap",
    "name": "Meat Shield",
    "type": "No Target+Instant Cast",
    "dmg": "",
    "desc": "Pudge covers himself with a layer of flesh that blocks damage of any type taken from any source."
   },
   {
    "id": "pudge_innate_graft_flesh",
    "name": "Flesh Heap",
    "type": "Hidden+Passive",
    "dmg": "",
    "desc": "Pudge's skin thickens permanently every time he kills an enemy Hero, gaining 1.6 bonus Strength for each stack."
   },
   {
    "id": "pudge_dismember",
    "name": "Dismember",
    "type": "Unit Target+Channeled",
    "dmg": "Magical",
    "desc": "CHANNELED - Pudge chows down on an enemy unit, disabling it and dealing damage over time. Damage is increased by Pudge's Strength and heals him for the total amount. Pudge pulls the unit at a rate of 75 units, up to a minimum of 125 range."
   }
  ]
 },
 "razor": {
  "ln": "Razor",
  "attr": "agi",
  "atk": "Ranged",
  "roles": [
   "Carry",
   "Durable",
   "Nuker",
   "Pusher"
  ],
  "spells": [
   {
    "id": "razor_plasma_field",
    "name": "Plasma Field",
    "type": "No Target+Instant Cast",
    "dmg": "Magical",
    "desc": "Releases a wave of energetic plasma that grows in power as it expands, but also zaps on contraction, slowing and dealing damage to enemy units caught in its path. Damage and slow increases with distance from Razor. The Plasma Field hits each unit twice, once each direction."
   },
   {
    "id": "razor_static_link",
    "name": "Static Link",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Creates a charged link between Razor and an enemy Hero, stealing damage from the target and giving it to Razor. Allows Razor to attack while moving with the link active."
   },
   {
    "id": "razor_storm_surge",
    "name": "Storm Surge",
    "type": "Passive",
    "dmg": "Magical",
    "desc": "There's a chance when attacked, and always when targeted with a spell, to release a forked lightning that strikes the target and other nearby enemies, prioritizing the unit type of the attacker, dealing damage and slowing movement speed."
   },
   {
    "id": "razor_unstable_current",
    "name": "Unstable Current",
    "type": "Passive",
    "dmg": "",
    "desc": ""
   },
   {
    "id": "razor_eye_of_the_storm",
    "name": "Eye of the Storm",
    "type": "No Target+Instant Cast",
    "dmg": "Physical",
    "desc": "A powerful lightning storm strikes out at the enemy unit with the lowest health, dealing damage and reducing armor."
   }
  ]
 },
 "sand_king": {
  "ln": "Sand King",
  "attr": "all",
  "atk": "Melee",
  "roles": [
   "Initiator",
   "Disabler",
   "Support",
   "Nuker",
   "Escape"
  ],
  "spells": [
   {
    "id": "sandking_burrowstrike",
    "name": "Burrowstrike",
    "type": "Point Target",
    "dmg": "Magical",
    "desc": "Sand King burrows into the ground and tunnels forward, damaging and stunning enemy units above him as he resurfaces. Adds Caustic Finale poison to heroes hit Can be put on alt-cast to immediately cast in the desired direction, without walking towards the targeted location."
   },
   {
    "id": "sandking_sand_storm",
    "name": "Sand Storm",
    "type": "No Target",
    "dmg": "Magical",
    "desc": "Sand King creates a fearsome sandstorm that damages enemy units and grants Sand King Invisibility while he is in it. The effect ends when Sand King leaves the area."
   },
   {
    "id": "sandking_scorpion_strike",
    "name": "Stinger",
    "type": "Point Target+AOE",
    "dmg": "Physical",
    "desc": "Sand King strikes an area, performing an attack on all enemies in the area of effect, dealing extra damage to each. Enemies within an innermost radius of 125 take 40% extra damage. Applies Caustic Finale and a slow to all enemies hit."
   },
   {
    "id": "sandking_caustic_finale",
    "name": "Caustic Finale",
    "type": "Passive+Hidden",
    "dmg": "Magical",
    "desc": "Sand King's attacks inject a venom that causes enemy units to violently explode when they die that does a flat amount of damage and an additional amount based on the dying units max health."
   },
   {
    "id": "sandking_epicenter",
    "name": "Epicenter",
    "type": "No Target",
    "dmg": "Magical",
    "desc": "After a cast point of 2 seconds, Sand King sends a disturbance into the earth, causing it to shudder violently. All enemies caught within range will take damage and become slowed. Each subsequent pulse increases the radius of damage dealt."
   }
  ]
 },
 "storm_spirit": {
  "ln": "Storm Spirit",
  "attr": "int",
  "atk": "Ranged",
  "roles": [
   "Carry",
   "Escape",
   "Nuker",
   "Initiator",
   "Disabler"
  ],
  "spells": [
   {
    "id": "storm_spirit_static_remnant",
    "name": "Static Remnant",
    "type": "No Target",
    "dmg": "Magical",
    "desc": "Creates an explosively charged image of Storm Spirit that walks to the target position and lasts for 12 seconds. Will detonate and deal damage if an enemy unit comes near it."
   },
   {
    "id": "storm_spirit_electric_vortex",
    "name": "Electric Vortex",
    "type": "Unit Target",
    "dmg": "",
    "desc": "A vortex that pulls an enemy unit to Storm Spirit's location."
   },
   {
    "id": "storm_spirit_overload",
    "name": "Overload",
    "type": "Passive",
    "dmg": "Magical",
    "desc": "Casting a spell creates an electrical charge, which is released in a burst on Storm's next attack, dealing damage and slowing nearby enemies."
   },
   {
    "id": "storm_spirit_ball_lightning",
    "name": "Ball Lightning",
    "type": "Point Target",
    "dmg": "Magical",
    "desc": "Storm Spirit becomes volatile electricity, charging across the battlefield until he depletes his mana or reaches his target. The activation mana cost is 25+7.5% of his total mana pool, and the cost per 100 units traveled is 10+0.65% of his total mana pool. Damage is expressed in damage per 100 units traveled."
   },
   {
    "id": "storm_spirit_galvanized",
    "name": "Galvanized",
    "type": "Passive",
    "dmg": "",
    "desc": "Storm Spirit gains a charge of 0.2 mana regeneration per kill. Loses 2 charges per death. Additionally every time he gains a charge he also gains 0.1 Mana Regen permanently."
   }
  ]
 },
 "sven": {
  "ln": "Sven",
  "attr": "str",
  "atk": "Melee",
  "roles": [
   "Carry",
   "Disabler",
   "Initiator",
   "Durable",
   "Nuker"
  ],
  "spells": [
   {
    "id": "sven_storm_bolt",
    "name": "Storm Hammer",
    "type": "Unit Target+AOE",
    "dmg": "Magical",
    "desc": "Sven unleashes his magical gauntlet that deals damage and stuns enemy units in a small area around the target."
   },
   {
    "id": "sven_great_cleave",
    "name": "Great Cleave",
    "type": "Passive",
    "dmg": "",
    "desc": "Sven strikes with great force, cleaving all nearby enemy units with his attack."
   },
   {
    "id": "sven_warcry",
    "name": "Warcry",
    "type": "No Target+Instant Cast",
    "dmg": "",
    "desc": "Sven's Warcry heartens his allied heroes for battle, increasing their armor and movement speed. Lasts 8 seconds."
   },
   {
    "id": "sven_gods_strength",
    "name": "God's Strength",
    "type": "No Target",
    "dmg": "",
    "desc": "Sven channels his rogue strength, granting bonus damage and slow resistance for 30 seconds."
   },
   {
    "id": "sven_wrath_of_god",
    "name": "Wrath of God",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "Sven gains additional attack damage from Strength."
   }
  ]
 },
 "tiny": {
  "ln": "Tiny",
  "attr": "str",
  "atk": "Melee",
  "roles": [
   "Carry",
   "Nuker",
   "Pusher",
   "Initiator",
   "Durable",
   "Disabler"
  ],
  "spells": [
   {
    "id": "tiny_avalanche",
    "name": "Avalanche",
    "type": "AOE+Point Target",
    "dmg": "Magical",
    "desc": "Bombards an area with rocks, continously doing small intervals of damage and stun to enemy units."
   },
   {
    "id": "tiny_toss",
    "name": "Toss",
    "type": "Unit Target+AOE",
    "dmg": "Magical",
    "desc": "Grabs the nearest unit in a 300 radius around Tiny, ally or enemy, and launches it at the target unit or rune to deal damage where they land."
   },
   {
    "id": "tiny_tree_grab",
    "name": "Tree Grab",
    "type": "Unit Target",
    "dmg": "Physical",
    "desc": "Grabs a tree and causes Tiny to have bonus range, damage, and a splashing attack for a limited number of attacks. The tree can be thrown, to deal your attack to a unit at a distance."
   },
   {
    "id": "tiny_tree_channel",
    "name": "Tree Volley",
    "type": "Channeled+Point Target+AOE+Hidden",
    "dmg": "Physical",
    "desc": "CHANNELED - Tiny channels to throw random trees within range towards the targeted area. Deals Tiny's attack with Tree Throw bonuses."
   },
   {
    "id": "tiny_insurmountable",
    "name": "Insurmountable",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "Tiny gains Status and Slow Resistance from Strength. Slow Resistance also reduces the impact of Attack Speed slows."
   },
   {
    "id": "tiny_grow",
    "name": "Grow",
    "type": "Passive",
    "dmg": "Physical",
    "desc": "Tiny gains craggy mass, increasing his attack damage, movement speed and armor, and toss power while slowing his attack speed."
   },
   {
    "id": "tiny_toss_tree",
    "name": "Tree Throw",
    "type": "Unit Target+Point Target+Hidden",
    "dmg": "Physical",
    "desc": "Throws the tree at the target unit, proccing your attack on it and splashing damage around the target."
   }
  ]
 },
 "vengefulspirit": {
  "ln": "Vengeful Spirit",
  "attr": "agi",
  "atk": "Ranged",
  "roles": [
   "Support",
   "Initiator",
   "Disabler",
   "Nuker",
   "Escape"
  ],
  "spells": [
   {
    "id": "vengefulspirit_magic_missile",
    "name": "Magic Missile",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Fires a magic missile at an enemy unit, stunning and dealing damage."
   },
   {
    "id": "vengefulspirit_wave_of_terror",
    "name": "Wave of Terror",
    "type": "Point Target",
    "dmg": "Magical",
    "desc": "Vengeful Spirit lets loose a wicked cry, weakening the total attack damage and armor of enemies, and giving vision of the path ahead."
   },
   {
    "id": "vengefulspirit_command_aura",
    "name": "Vengeance Aura",
    "type": "Passive",
    "dmg": "",
    "desc": "Vengeful Spirit's presence increases the damage of nearby friendly heroes. Vengeful Spirit herself receives 20% extra bonus."
   },
   {
    "id": "vengefulspirit_retribution",
    "name": "Retribution",
    "type": "Passive",
    "dmg": "",
    "desc": "Vengeful Spirit is considered both a ranged and a melee attacker to gain the respective bonuses. When killed by an enemy hero, Vengeful Spirit deals 20% bonus damage to her killer until their next death. Only one debuff can exist at a time."
   },
   {
    "id": "vengefulspirit_nether_swap",
    "name": "Nether Swap",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Instantaneously swaps positions with a target Hero, friend or enemy. Nether Swap interrupts channeling abilities on the target. Enemy Swapped units take damage. Vengeful Spirit and allied swapped units gain a barrier equal to the damage dealt."
   }
  ]
 },
 "windrunner": {
  "ln": "Windranger",
  "attr": "all",
  "atk": "Ranged",
  "roles": [
   "Carry",
   "Support",
   "Disabler",
   "Escape",
   "Nuker"
  ],
  "spells": [
   {
    "id": "windrunner_shackleshot",
    "name": "Shackleshot",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Shackles the target to an enemy unit or tree in a line directly behind it. If no unit or tree is present, the stun duration is reduced to 0.6."
   },
   {
    "id": "windrunner_powershot",
    "name": "Powershot",
    "type": "Point Target+Channeled",
    "dmg": "Magical",
    "desc": "CHANNELED - Windranger charges her bow for up to 1 second for a single powerful shot, which deals more damage the longer it is charged. The arrow damages and slows enemies' movement speed along its path. For each enemy that Powershot hits, its damage and slow is reduced."
   },
   {
    "id": "windrunner_windrun",
    "name": "Windrun",
    "type": "No Target+Instant Cast",
    "dmg": "",
    "desc": "Increases movement speed and adds evasion from all physical attacks."
   },
   {
    "id": "windrunner_gale_force",
    "name": "Gale Force",
    "type": "Point Target+Hidden",
    "dmg": "",
    "desc": "Vector Targeted. Summons a strong wind that pushes all enemies in the target area towards the target direction."
   },
   {
    "id": "windrunner_focusfire_cancel",
    "name": "Focus Fire Cancel",
    "type": "Hidden+No Target",
    "dmg": "",
    "desc": "End your Focus Fire early."
   },
   {
    "id": "windrunner_focusfire",
    "name": "Focus Fire",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Windranger channels the wind to gain 0 additional attack speed against a single enemy unit or structure, though with a reduction to her attack damage. Extra damage from secondary item effects is not reduced."
   },
   {
    "id": "windrunner_tailwind",
    "name": "Tailwind",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "Using an ability conjures a stacking Tailwind that gives Windranger a brief burst of movement speed. Movement speed bonus gradually starts fading halfway through the Tailwind duration. Passively increases Windranger's max movement speed."
   }
  ]
 },
 "zuus": {
  "ln": "Zeus",
  "attr": "int",
  "atk": "Ranged",
  "roles": [
   "Nuker",
   "Carry"
  ],
  "spells": [
   {
    "id": "zuus_arc_lightning",
    "name": "Arc Lightning",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Hurls a bolt of lightning that leaps through nearby enemy units that deal damage."
   },
   {
    "id": "zuus_lightning_bolt",
    "name": "Lightning Bolt",
    "type": "Unit Target+Point Target",
    "dmg": "Magical",
    "desc": "Calls down a bolt of lightning to strike an enemy unit, causing damage and a mini-stun. When cast, Lightning Bolt briefly provides unobstructed vision and True Sight around the target in a 600 radius. Can be cast on the ground, affecting the closest enemy hero in 325 range."
   },
   {
    "id": "zuus_heavenly_jump",
    "name": "Heavenly Jump",
    "type": "No Target+Instant Cast",
    "dmg": "Magical",
    "desc": "Zeus performs a Heavenly Jump, leaping forward and shocking the closest visible nearby enemy (prioritizing heroes), dealing damage as well as reducing their movement and attack speed. Zeus gets 900 unobstructed vision around him for 3 seconds."
   },
   {
    "id": "zuus_cloud",
    "name": "Nimbus",
    "type": "Point Target+AOE+Hidden",
    "dmg": "Magical",
    "desc": "Creates a storm cloud anywhere on the map that automatically casts Lightning Bolt on nearby enemies."
   },
   {
    "id": "zuus_lightning_hands",
    "name": "Lightning Hands",
    "type": "Attack Modifier",
    "dmg": "Magical",
    "desc": "Zeus gains bonus attack speed and his attacks create Arc Lightnings that deal a percentage of its damage. Can be toggled off to stop this effect."
   },
   {
    "id": "zuus_thundergods_wrath",
    "name": "Thundergod's Wrath",
    "type": "No Target",
    "dmg": "Magical",
    "desc": "Strikes all enemy heroes with a bolt of lightning, dealing damage no matter where they may be. Provides True Sight around each hero before they are struck."
   },
   {
    "id": "zuus_static_field",
    "name": "Static Field",
    "type": "Passive+Hidden",
    "dmg": "Magical",
    "desc": "Zeus shocks any enemy that he attacks or is hit by his abilities, causing damage equal to a percentage of their current health."
   }
  ]
 },
 "kunkka": {
  "ln": "Kunkka",
  "attr": "str",
  "atk": "Melee",
  "roles": [
   "Carry",
   "Support",
   "Disabler",
   "Initiator",
   "Durable",
   "Nuker"
  ],
  "spells": [
   {
    "id": "kunkka_torrent",
    "name": "Torrent",
    "type": "AOE+Point Target",
    "dmg": "Magical",
    "desc": "Summons a rising torrent that, after a short delay, hurls enemy units into the sky, stunning, dealing damage and slowing movement speed."
   },
   {
    "id": "kunkka_tidebringer",
    "name": "Tidebringer",
    "type": "Unit Target+Autocast+Attack Modifier",
    "dmg": "Physical",
    "desc": "Kunkka's legendary sword grants increased damage and cleaves a large area of effect in front of him for a single strike."
   },
   {
    "id": "kunkka_x_marks_the_spot",
    "name": "X Marks the Spot",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Targets a friendly or enemy Hero, marks their position with an X, and returns them to it after several seconds. Kunkka can trigger the return at any time during the duration. Lasts twice as long on allied heroes."
   },
   {
    "id": "kunkka_admirals_rum",
    "name": "Admiral's Rum",
    "type": "Passive",
    "dmg": "",
    "desc": ""
   },
   {
    "id": "kunkka_tidal_wave",
    "name": "Tidal Wave",
    "type": "Point Target+Hidden",
    "dmg": "Magical",
    "desc": "Releases a Tidal Wave that spawns behind Kunkka. Deals damage and drags enemies along it. Enemies cannot attack while being dragged."
   },
   {
    "id": "kunkka_ghostship",
    "name": "Ghostship",
    "type": "Point Target",
    "dmg": "Magical",
    "desc": "Summons a ghostly ship that sails through the battle before smashing apart, damaging and stunning all enemies caught near the wreckage. Allied heroes touched by the Ghostship are given a 2x strong swig of The Admiral's Rum."
   },
   {
    "id": "kunkka_return",
    "name": "Return",
    "type": "Hidden+No Target",
    "dmg": "",
    "desc": "Returns the marked hero to the X."
   }
  ]
 },
 "lina": {
  "ln": "Lina",
  "attr": "int",
  "atk": "Ranged",
  "roles": [
   "Support",
   "Carry",
   "Nuker",
   "Disabler"
  ],
  "spells": [
   {
    "id": "lina_dragon_slave",
    "name": "Dragon Slave",
    "type": "Unit Target+Point Target",
    "dmg": "Magical",
    "desc": "Lina channels the breath of a dragon, sending out a wave of fire that scorches every enemy in its path."
   },
   {
    "id": "lina_light_strike_array",
    "name": "Light Strike Array",
    "type": "Point Target+AOE",
    "dmg": "Magical",
    "desc": "Summons a column of flames that damages and stuns enemies."
   },
   {
    "id": "lina_fiery_soul",
    "name": "Fiery Soul",
    "type": "Passive",
    "dmg": "",
    "desc": "Grants bonus attack and movement speed each time Lina hits an enemy with a spell. Stacks with itself. Lasts 18 seconds."
   },
   {
    "id": "lina_flame_cloak",
    "name": "Flame Cloak",
    "type": "Instant Cast+No Target",
    "dmg": "",
    "desc": "Grants Lina unobstructed movement and increases her spell damage and magic resistance. Grants max fiery soul stacks on activation."
   },
   {
    "id": "lina_slow_burn",
    "name": "Slow Burn",
    "type": "Passive",
    "dmg": "Magical",
    "desc": "Lina's abilities deal an additional 64% damage as burn damage over 4s."
   },
   {
    "id": "lina_laguna_blade",
    "name": "Laguna Blade",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Fires off a bolt of lightning at a single enemy unit, dealing massive damage."
   }
  ]
 },
 "lion": {
  "ln": "Lion",
  "attr": "int",
  "atk": "Ranged",
  "roles": [
   "Support",
   "Disabler",
   "Nuker",
   "Initiator"
  ],
  "spells": [
   {
    "id": "lion_impale",
    "name": "Earth Spike",
    "type": "Point Target+Unit Target",
    "dmg": "Magical",
    "desc": "Rock spikes burst from the earth along a straight path. Enemy units are hurled into the air, then are stunned and take damage when they fall."
   },
   {
    "id": "lion_voodoo",
    "name": "Hex",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Transforms an enemy unit into a harmless beast, with all special abilities disabled."
   },
   {
    "id": "lion_mana_drain",
    "name": "Mana Drain",
    "type": "Unit Target+Channeled",
    "dmg": "",
    "desc": "CHANNELED - Channels magical energy, taking mana and slowing enemies over time. If the enemy has no mana remaining, the slow is increased by 15%. Can target allies to give them mana and movement speed at a 50% rate."
   },
   {
    "id": "lion_to_hell_and_back",
    "name": "To Hell and Back",
    "type": "Passive",
    "dmg": "",
    "desc": "Lion gains 20% debuff duration after killing or assisting in a Hero kill while that Hero is dead. Lion gains 20% spell amplification for 90s after respawning or resurrecting or until he gets a kill or assist."
   },
   {
    "id": "lion_finger_of_death",
    "name": "Finger of Death",
    "type": "Unit Target+AOE",
    "dmg": "Magical",
    "desc": "Rips at an enemy unit, trying to turn it inside-out, dealing massive damage to the target. After using Finger of Death, Lion's hand becomes empowered, allowing him to use a cleaving melee attack with 250 range with bonus movement speed. Finger of Death gains permanent bonus damage for it and the fist for each enemy Hero it or the fist kills. The melee attack may be disabled by setting the ability to Alt Cast."
   }
  ]
 },
 "shadow_shaman": {
  "ln": "Shadow Shaman",
  "attr": "int",
  "atk": "Ranged",
  "roles": [
   "Support",
   "Pusher",
   "Disabler",
   "Nuker",
   "Initiator"
  ],
  "spells": [
   {
    "id": "shadow_shaman_ether_shock",
    "name": "Ether Shock",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Creates a cone of ethereal energy that strikes multiple enemy units."
   },
   {
    "id": "shadow_shaman_voodoo",
    "name": "Hex",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Transforms an enemy unit into a harmless creature, disabling their attacks and abilities."
   },
   {
    "id": "shadow_shaman_shackles",
    "name": "Shackles",
    "type": "Unit Target+Channeled",
    "dmg": "Magical",
    "desc": "CHANNELED - Magically binds an enemy unit so that it cannot move or attack, absorbing their life energy over time."
   },
   {
    "id": "shadow_shaman_fowl_play",
    "name": "Fowl Play",
    "type": "Passive",
    "dmg": "",
    "desc": "When taking lethal damage, Shadow Shaman receives a strong dispel and survives as a 1 HP chicken with increased movement speed. Incoming damage is reduced to zero for a short duration and additional chickens are created to confuse the enemy. Cooldown resets when Shadow Shaman respawns. DISPEL TYPE: Strong Dispel"
   },
   {
    "id": "shadow_shaman_urnaconda",
    "name": "Urnaconda",
    "type": "Point Target+AOE",
    "dmg": "",
    "desc": "Throw a snake jar at the target location, damaging all enemies in the AoE and creating a Massive Serpent Ward that has 4x the base Serpent Ward damage and health there that lasts 15s."
   },
   {
    "id": "shadow_shaman_mass_serpent_ward",
    "name": "Mass Serpent Ward",
    "type": "Point Target+AOE",
    "dmg": "Physical",
    "desc": "Summons 10 Serpent Wards to attack enemy units and structures. The Wards are immune to magic. Creeps deal half damage to the Serpent Ward."
   }
  ]
 },
 "slardar": {
  "ln": "Slardar",
  "attr": "str",
  "atk": "Melee",
  "roles": [
   "Carry",
   "Durable",
   "Initiator",
   "Disabler",
   "Escape"
  ],
  "spells": [
   {
    "id": "slardar_sprint",
    "name": "Guardian Sprint",
    "type": "No Target+Instant Cast",
    "dmg": "",
    "desc": "Slardar slithers ahead, moving significantly faster and passing through units. Slardar has 100% slow resistance for the first 2.5s. The slow resistance gradually fades over the remaining sprint duration."
   },
   {
    "id": "slardar_slithereen_crush",
    "name": "Slithereen Crush",
    "type": "No Target",
    "dmg": "Physical",
    "desc": "Slams the ground, leaving a puddle of water, and stunning and damaging nearby enemy units. After the stun, the affected units are slowed."
   },
   {
    "id": "slardar_bash",
    "name": "Bash of the Deep",
    "type": "Passive",
    "dmg": "Physical",
    "desc": "After 3 attacks, your next attack will bash the target."
   },
   {
    "id": "slardar_seaborn_sentinel",
    "name": "Seaborn Sentinel",
    "type": "Passive",
    "dmg": "",
    "desc": "Slardar gains bonus movement speed, health regeneration, attack damage, and armor while in a puddle, trail, or river."
   },
   {
    "id": "slardar_amplify_damage",
    "name": "Corrosive Haze",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Reduces enemy armor to amplify physical damage and provides True Sight and vision of the targeted unit, revealing invisibility. The enemy unit leaves a trail of water behind it."
   }
  ]
 },
 "tidehunter": {
  "ln": "Tidehunter",
  "attr": "str",
  "atk": "Melee",
  "roles": [
   "Initiator",
   "Durable",
   "Disabler",
   "Nuker",
   "Carry"
  ],
  "spells": [
   {
    "id": "tidehunter_gush",
    "name": "Gush",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Summons a gush of water to damage an enemy unit, reducing their movement speed and armor."
   },
   {
    "id": "tidehunter_kraken_shell",
    "name": "Kraken Shell",
    "type": "No Target+Instant Cast",
    "dmg": "",
    "desc": "Thickens Tidehunter's hide to passively block a portion of any incoming physical attack damage. Reduced block amount versus creeps. The hide also removes negative status effects if the damage taken crosses a threshold. Can be activated to double the block amount at the cost of 40% movement speed. Lasts 4s. DISPEL TYPE: Strong Dispel"
   },
   {
    "id": "tidehunter_anchor_smash",
    "name": "Anchor Smash",
    "type": "No Target",
    "dmg": "Physical",
    "desc": "Tidehunter swings his mighty anchor to attack and deal bonus damage to nearby enemies and reduce their attack damage. The radius of Anchor Smash is Tidehunter's attack range plus 225 units."
   },
   {
    "id": "tidehunter_dead_in_the_water",
    "name": "Dead in the Water",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Tidehunter attaches a heavy anchor to an enemy hero. The hero is leashed while attached to the anchor. Attempting to move more than 350 units away from the anchor forces the hero to 100 move speed, dragging the anchor behind them. The anchor can be destroyed with 4 hero attacks."
   },
   {
    "id": "tidehunter_ravage",
    "name": "Ravage",
    "type": "No Target",
    "dmg": "Magical",
    "desc": "Slams the ground, causing tentacles to erupt in all directions, damaging and stunning all nearby enemy units."
   },
   {
    "id": "tidehunter_krill_eater",
    "name": "Leviathan's Catch",
    "type": "Passive",
    "dmg": "",
    "desc": ""
   }
  ]
 },
 "witch_doctor": {
  "ln": "Witch Doctor",
  "attr": "int",
  "atk": "Ranged",
  "roles": [
   "Support",
   "Nuker",
   "Disabler"
  ],
  "spells": [
   {
    "id": "witch_doctor_paralyzing_cask",
    "name": "Paralyzing Cask",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Launches a cask of paralyzing powder that ricochets between enemy units, stunning and damaging those it hits. Damage increases each bounce."
   },
   {
    "id": "witch_doctor_voodoo_restoration",
    "name": "Voodoo Restoration",
    "type": "No Target",
    "dmg": "Magical",
    "desc": "Witch Doctor focuses his magic to heal nearby allied units, costing Witch Doctor mana every second Voodoo Restoration is active."
   },
   {
    "id": "witch_doctor_maledict",
    "name": "Maledict",
    "type": "AOE+Point Target",
    "dmg": "Magical",
    "desc": "Curses all enemy Heroes and player-controlled units in a small area, causing them to take a set amount of damage each second, as well as bursts of damage every 4 seconds based on how much health they have lost since the curse began."
   },
   {
    "id": "witch_doctor_voodoo_switcheroo",
    "name": "Voodoo Switcheroo",
    "type": "No Target+Hidden",
    "dmg": "",
    "desc": "Turns Witch Doctor into a Death Ward briefly with reduced attack speed. He is hidden during this time."
   },
   {
    "id": "witch_doctor_gris_gris",
    "name": "Gris-Gris",
    "type": "Passive",
    "dmg": "",
    "desc": "Witch Doctor gets a Gris-Gris, an item that cannot be dropped or placed in the backpack. When the owner dies, 100% of the gold lost from death is added to the item, and will be refunded when the item is consumed. The value of the Gris-Gris is increased by 1 every 3s. Right-click to consume and permanently remove the item."
   },
   {
    "id": "witch_doctor_death_ward",
    "name": "Death Ward",
    "type": "Point Target+Channeled",
    "dmg": "Pure",
    "desc": "CHANNELED - Summons a deadly ward to attack enemy heroes within its attack range. Lasts a maximum of 8 seconds. Death Ward has 50% bonus accuracy."
   }
  ]
 },
 "lich": {
  "ln": "Lich",
  "attr": "int",
  "atk": "Ranged",
  "roles": [
   "Support",
   "Nuker"
  ],
  "spells": [
   {
    "id": "lich_frost_nova",
    "name": "Frost Blast",
    "type": "Unit Target+AOE",
    "dmg": "Magical",
    "desc": "Blasts the target enemy unit with damaging frost, dealing area damage and slowing movement and attack rates for 4 seconds. The primary target receives both base and area damage."
   },
   {
    "id": "lich_frost_shield",
    "name": "Frost Shield",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Applies a magical frost shield around the target, reducing damage from attacks against it. While the shield is active, ice magic will affect nearby enemy units every 1 seconds, dealing minor damage and slowing them."
   },
   {
    "id": "lich_sinister_gaze",
    "name": "Sinister Gaze",
    "type": "Unit Target+Channeled",
    "dmg": "",
    "desc": "CHANNELED - Hypnotizes an enemy unit, causing it to move towards a point between the two of you and drains a percentage of its current mana."
   },
   {
    "id": "lich_ice_spire",
    "name": "Ice Spire",
    "type": "Point Target+AOE+Hidden",
    "dmg": "",
    "desc": "Creates an Ice Spire at the target spot, slowing enemies around it. Can take 4 hero hits or 8 creep hits and when destroyed it will create a Frost Blast around it. Chain Frost can be cast on the Spire and can bounce to the Spire and damage the spire by 1 hero attack if there are no other enemies in range. Lich can cast Frost Shield on the Spire. Each Frost Shield tick will heal the spire by 1 hero attack."
   },
   {
    "id": "lich_death_charge",
    "name": "Sacrifice",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Sacrifice an allied creep to convert its current health into mana for Lich and give Lich its experience bounty. Begins the game on cooldown and with no charges."
   },
   {
    "id": "lich_chain_frost",
    "name": "Chain Frost",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Releases an orb of frost that bounces between nearby enemy units up to 10 times, slowing and damaging each time it hits. Each bounce increases the damage for the subsequent bounces. Chain Frost lingers on its last target if it fails to bounce and can bounce again if new targets become available."
   }
  ]
 },
 "riki": {
  "ln": "Riki",
  "attr": "agi",
  "atk": "Melee",
  "roles": [
   "Carry",
   "Escape",
   "Disabler"
  ],
  "spells": [
   {
    "id": "riki_smoke_screen",
    "name": "Smoke Screen",
    "type": "AOE+Point Target",
    "dmg": "",
    "desc": "Throws down a smoke bomb, silencing enemies and causing them to miss attacks."
   },
   {
    "id": "riki_blink_strike",
    "name": "Blink Strike",
    "type": "Unit Target",
    "dmg": "Physical",
    "desc": "Teleports behind the target unit, momentarily slowing them by 100% and attacking them with bonus damage if it is an enemy."
   },
   {
    "id": "riki_tricks_of_the_trade",
    "name": "Tricks of the Trade",
    "type": "Point Target+AOE+Channeled",
    "dmg": "Physical",
    "desc": "CHANNELED - Riki phases out of the world and periodically strikes 2 random enemy units from behind in an area around him. He has fixed attack damage while phased out."
   },
   {
    "id": "riki_innate_backstab",
    "name": "Backstab",
    "type": "Passive+Hidden",
    "dmg": "Physical",
    "desc": "Every time Riki strikes his enemy from behind, he deals additional bonus damage equal to a multiple of his Agility."
   },
   {
    "id": "riki_backstab",
    "name": "Cloak and Dagger",
    "type": "Passive",
    "dmg": "",
    "desc": "Riki fades into the shadows, becoming invisible until he attacks. Hero kills and assists grant additional experience."
   }
  ]
 },
 "enigma": {
  "ln": "Enigma",
  "attr": "all",
  "atk": "Ranged",
  "roles": [
   "Disabler",
   "Initiator",
   "Pusher"
  ],
  "spells": [
   {
    "id": "enigma_malefice",
    "name": "Malefice",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Focuses Enigma's power on a target, causing it to take damage and become repeatedly stunned for multiple instances. An instance strikes every 2 seconds."
   },
   {
    "id": "enigma_demonic_conversion",
    "name": "Demonic Summoning",
    "type": "Point Target",
    "dmg": "Physical",
    "desc": "Summons three fragments of Enigma himself at the cost of health. The eidolons health is increased by 3% of Enigma's current health. These eidolons are all under Enigma's control, and repeated successful attacks cause them to multiply. When this happens, the eidolons have their health restored."
   },
   {
    "id": "enigma_midnight_pulse",
    "name": "Midnight Pulse",
    "type": "AOE+Point Target",
    "dmg": "Magical",
    "desc": "Steeps an area in dark resonance, dealing 5 + a percentage of the enemies current HP as damage."
   },
   {
    "id": "enigma_event_horizon",
    "name": "Event Horizon",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "Units in a 600 radius moving away from Enigma have a movespeed penalty."
   },
   {
    "id": "enigma_black_hole",
    "name": "Black Hole",
    "type": "AOE+Point Target+Channeled",
    "dmg": "Pure",
    "desc": "CHANNELED - Summons a vortex that sucks in nearby enemy units. Enemies affected by Black Hole cannot move, attack, or cast spells."
   }
  ]
 },
 "tinker": {
  "ln": "Tinker",
  "attr": "int",
  "atk": "Ranged",
  "roles": [
   "Carry",
   "Nuker",
   "Pusher"
  ],
  "spells": [
   {
    "id": "tinker_laser",
    "name": "Laser",
    "type": "Unit Target",
    "dmg": "Pure",
    "desc": "Fires an intense energy beam, damaging and blinding the target. Blinded targets miss all physical attacks."
   },
   {
    "id": "tinker_march_of_the_machines",
    "name": "March of the Machines",
    "type": "AOE+Point Target",
    "dmg": "Magical",
    "desc": "Enlists an army of robotic minions to destroy enemy units in an area around Tinker."
   },
   {
    "id": "tinker_deploy_turrets",
    "name": "Deploy Turrets",
    "type": "Point Target+AOE",
    "dmg": "Magical",
    "desc": ""
   },
   {
    "id": "tinker_warp_grenade",
    "name": "Warp Flare",
    "type": "Unit Target+Hidden",
    "dmg": "Magical",
    "desc": "Throws a flare towards an enemy, dealing damage, teleporting them away, rooting them and reducing their Cast and Attack Range for 2 seconds. The target is teleported further the closer they are to Tinker."
   },
   {
    "id": "tinker_keen_teleport",
    "name": "Keen Conveyance",
    "type": "Point Target+Channeled",
    "dmg": "",
    "desc": "CHANNELED - Teleport to a target friendly structure. Level 2 allows teleporting to friendly units and Level 3 to friendly heroes."
   },
   {
    "id": "tinker_rearm",
    "name": "Rearm",
    "type": "No Target+Channeled",
    "dmg": "",
    "desc": "CHANNELED - Resets the cooldown on Tinker's abilities."
   },
   {
    "id": "tinker_eureka",
    "name": "Eureka!",
    "type": "Passive",
    "dmg": "",
    "desc": "Tinker gains 1% item cooldown reduction per 3 Intelligence, up to a maximum of 60%."
   }
  ]
 },
 "sniper": {
  "ln": "Sniper",
  "attr": "agi",
  "atk": "Ranged",
  "roles": [
   "Carry",
   "Nuker"
  ],
  "spells": [
   {
    "id": "sniper_shrapnel",
    "name": "Shrapnel",
    "type": "AOE+Point Target",
    "dmg": "Magical",
    "desc": "Consumes a charge to launch a ball of shrapnel that showers the target area in explosive pellets. Enemies are subject to damage and slowed movement. Reveals the targeted area. Shrapnel charges restore every 35 seconds."
   },
   {
    "id": "sniper_headshot",
    "name": "Headshot",
    "type": "Passive",
    "dmg": "Physical",
    "desc": "Sniper increases his accuracy, giving him a chance to deal 20 extra damage and knock back his enemies. Knockback distance increases based on how close the enemy is to Sniper. Headshots briefly slow enemy movement and attack speed by -100%."
   },
   {
    "id": "sniper_take_aim",
    "name": "Take Aim",
    "type": "No Target",
    "dmg": "",
    "desc": "Passively increases Sniper's attack range by 160. On cast, Sniper gains increased vision, Headshot chance, and attack range. Slows you by 65% for the duration and restricts your vision to a frontal cone."
   },
   {
    "id": "sniper_concussive_grenade",
    "name": "Concussive Grenade",
    "type": "Point Target+AOE",
    "dmg": "Magical",
    "desc": "Launches a grenade at the target area, dealing damage to enemies and knocking them and Sniper back. Enemies affected are disarmed and have their movement slowed after the knockback."
   },
   {
    "id": "sniper_keen_scope",
    "name": "Keen Scope",
    "type": "Passive",
    "dmg": "",
    "desc": "Sniper’s attacks deal bonus damage for every 100 units of distance Sniper is from the target."
   },
   {
    "id": "sniper_assassinate",
    "name": "Assassinate",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Sniper locks onto a target enemy unit and, after a short aiming duration, fires a devastating shot that deals Sniper's attack damage plus bonus damage at long range and mini-stuns the target. Whenever Sniper kills an enemy hero, Assassinate is refreshed."
   }
  ]
 },
 "necrolyte": {
  "ln": "Necrophos",
  "attr": "int",
  "atk": "Ranged",
  "roles": [
   "Carry",
   "Nuker",
   "Durable",
   "Disabler"
  ],
  "spells": [
   {
    "id": "necrolyte_death_pulse",
    "name": "Death Pulse",
    "type": "No Target",
    "dmg": "Magical",
    "desc": "Necrophos releases a wave of death around him, dealing damage to enemy units and healing allied units."
   },
   {
    "id": "necrolyte_ghost_shroud",
    "name": "Ghost Shroud",
    "type": "No Target+Instant Cast",
    "dmg": "",
    "desc": "Necrophos slips into the realm that separates the living from the dead. Unable to attack or be attacked, he emits an aura that slows enemies around him. He takes additional magic damage in this form, but his restorative powers are amplified."
   },
   {
    "id": "necrolyte_heartstopper_aura",
    "name": "Heartstopper Aura",
    "type": "Passive",
    "dmg": "Magical",
    "desc": "Necrophos stills the hearts of his opponents, causing nearby enemy units to lose a percentage of their max health over time."
   },
   {
    "id": "necrolyte_death_seeker",
    "name": "Death Seeker",
    "type": "Unit Target+Hidden",
    "dmg": "Magical",
    "desc": "Necrophos turns into a large Death Pulse towards the target unit's position. Once it arrives to the location, the Death Pulse spreads towards nearby enemies and allies."
   },
   {
    "id": "necrolyte_sadist",
    "name": "Sadist",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "Necrophos gains stacking regen for 8 seconds for each unit he kills. Hero kills multiply the effect."
   },
   {
    "id": "necrolyte_reapers_scythe",
    "name": "Reaper's Scythe",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Stuns the target enemy hero, then deals damage based on how much life it is missing. If Necrophos kills an enemy this way, he'll permanently gain Health and Mana Regen. Any kill under this effect is credited to Necrophos."
   }
  ]
 },
 "warlock": {
  "ln": "Warlock",
  "attr": "int",
  "atk": "Ranged",
  "roles": [
   "Support",
   "Initiator",
   "Disabler"
  ],
  "spells": [
   {
    "id": "warlock_fatal_bonds",
    "name": "Fatal Bonds",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Binds several visible enemy units together, causing a percentage of the damage dealt to one of them to be felt by the others."
   },
   {
    "id": "warlock_shadow_word",
    "name": "Shadow Word",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Warlock whispers an incantation, casting a spell on a unit that makes it deal damage to nearby enemy units and heal nearby ally units. Target Unit will also heal or be damaged depending on whether they are ally or enemy."
   },
   {
    "id": "warlock_upheaval",
    "name": "Upheaval",
    "type": "Point Target+Channeled+AOE",
    "dmg": "Magical",
    "desc": "CHANNELED - A powerful slowing and damaging current that grows stronger as it's channeled. Lasts up to 10 seconds. Enemies are slowed for 1 second after leaving the area or the spell ends."
   },
   {
    "id": "warlock_eldritch_summoning",
    "name": "Eldritch Summoning",
    "type": "Passive",
    "dmg": "Magical",
    "desc": "Whenever an enemy unit dies while afflicted by one or more of Warlock's abilities, a minor imp is summoned that lasts for 15 seconds and explodes on death. Imps will automatically seek out nearby units, favoring fatally bonded heroes, and will explode when reaching their prey."
   },
   {
    "id": "warlock_rain_of_chaos",
    "name": "Chaotic Offering",
    "type": "Point Target+AOE",
    "dmg": "",
    "desc": "Summons a Golem from the depths, stunning enemies for 0.8 seconds. The Golem lives 60 seconds, takes reduced damage from spells, has increased Slow Resistance, has Permanent Immolation and Flaming Fists on attack."
   }
  ]
 },
 "beastmaster": {
  "ln": "Beastmaster",
  "attr": "all",
  "atk": "Melee",
  "roles": [
   "Initiator",
   "Disabler",
   "Durable",
   "Nuker"
  ],
  "spells": [
   {
    "id": "beastmaster_wild_axes",
    "name": "Wild Axes",
    "type": "Point Target",
    "dmg": "Magical",
    "desc": "Beastmaster sends his axes flying and calls them home again, slicing through enemy units and trees along their path. Each axe can hit an enemy once, and amplifies subsequent damage from Beastmaster and his units."
   },
   {
    "id": "beastmaster_summon_razorback",
    "name": "Summon Razorback",
    "type": "No Target",
    "dmg": "Physical",
    "desc": "Beastmaster calls forth a Boar to aid in the battlefield. The Boar has a passive poison attack that slows attack and movement speeds."
   },
   {
    "id": "beastmaster_summon_raptor",
    "name": "Summon Raptors",
    "type": "No Target",
    "dmg": "Magical",
    "desc": "Beastmaster summons 2 hawks that circle around Beastmaster and dive-bombs at enemies with a base attack rate of every 4s, damaging and rooting them. Attack rate increases with the Hawk's attack speed. Prioritizes heroes."
   },
   {
    "id": "beastmaster_inner_beast",
    "name": "Inner Beast",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "Untaps the inner fury of Beastmaster and units he controls, passively increasing their attack speed."
   },
   {
    "id": "beastmaster_drums_of_slom",
    "name": "Drums of Slom",
    "type": "Passive",
    "dmg": "Magical",
    "desc": "Attacks from Beastmaster or a nearby unit he controls will cause him bang his drum, dealing damage to nearby units and healing Beastmaster and units under his control for a portion of the damage dealt. Every attack decreases the interval between drum hits down to a minimum of 0.5s between hits after 20 attacks. If no attacks are made, the intervals gradually increase. Using Primal Roar counts as 10 attacks."
   },
   {
    "id": "beastmaster_primal_roar",
    "name": "Primal Roar",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Beastmaster lets loose a deafening roar that stuns, and shoves open a path to its target. All units in the path of the roar are damaged, while units shoved aside by the roar have their movement and attack speed slowed. Additionally, Beastmaster and his units gain 40% movement speed for 2 seconds."
   }
  ]
 },
 "queenofpain": {
  "ln": "Queen of Pain",
  "attr": "int",
  "atk": "Ranged",
  "roles": [
   "Carry",
   "Nuker",
   "Escape"
  ],
  "spells": [
   {
    "id": "queenofpain_shadow_strike",
    "name": "Shadow Strike",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Hurls a poisoned dagger which deals large initial damage, and then deals damage over time. The poisoned unit has its movement speed slowed for 16 seconds. An instance of damage is dealt every 3 seconds."
   },
   {
    "id": "queenofpain_blink",
    "name": "Blink",
    "type": "Point Target",
    "dmg": "",
    "desc": "Short distance teleportation that allows Queen of Pain to move in and out of combat."
   },
   {
    "id": "queenofpain_scream_of_pain",
    "name": "Scream Of Pain",
    "type": "No Target",
    "dmg": "Magical",
    "desc": "The Queen of Pain lets loose a piercing scream around her, damaging nearby enemies. 25% of the damage dealt to heroes is reflected back to her."
   },
   {
    "id": "queenofpain_succubus",
    "name": "Succubus",
    "type": "Passive",
    "dmg": "",
    "desc": "All sources of Spell Lifesteal also apply to Pure Damage. Queen of Pain gains Spell Lifesteal that increases with proximity to her enemies. Lifesteal is at its maximum when the enemy is 150 units or closer to her and at its minimum when the enemy is 800 units or further from her."
   },
   {
    "id": "queenofpain_sonic_wave",
    "name": "Sonic Wave",
    "type": "Point Target",
    "dmg": "Pure",
    "desc": "Creates a gigantic wave of sound in front of Queen of Pain, dealing heavy damage to all enemy units in its wake and pushing them back."
   }
  ]
 },
 "venomancer": {
  "ln": "Venomancer",
  "attr": "all",
  "atk": "Ranged",
  "roles": [
   "Support",
   "Nuker",
   "Initiator",
   "Pusher",
   "Disabler"
  ],
  "spells": [
   {
    "id": "venomancer_venomous_gale",
    "name": "Venomous Gale",
    "type": "AOE+Point Target",
    "dmg": "Magical",
    "desc": "Launches a ball of venom in a line, poisoning enemy units so that they take both initial damage and damage over time, as well as suffering slowed movement. Venomous Gale deals damage every 3 seconds over its duration."
   },
   {
    "id": "venomancer_snakebite",
    "name": "Snakebite",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Venomancer summons a Spawn of Aktok to sink its fangs into a target, dealing magic damage and applying a toxin that does damage every second. When the target attacks while infected, they take the initial damage again."
   },
   {
    "id": "venomancer_plague_ward",
    "name": "Plague Ward",
    "type": "Point Target",
    "dmg": "Physical",
    "desc": "Summons a plague ward to attack enemy units and structures. The ward is immune to magic. Wards gain the Poison Sting level from Venomancer, dealing 50% of the full damage."
   },
   {
    "id": "venomancer_poison_sting",
    "name": "Poison Sting",
    "type": "Passive+Hidden",
    "dmg": "Magical",
    "desc": "Venomancer's attacks slow enemies and deal damage over time."
   },
   {
    "id": "venomancer_noxious_plague",
    "name": "Noxious Plague",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Infects an enemy with a plague that does damage on application then slows the target and deals damage over time based on their maximum health. When the debuff ends for any reason, all debuffs from Venomancer on the initial target and the plague are spread to nearby targets. Additional spreads beyond the first do not deal impact damage."
   }
  ]
 },
 "faceless_void": {
  "ln": "Faceless Void",
  "attr": "agi",
  "atk": "Melee",
  "roles": [
   "Carry",
   "Initiator",
   "Disabler",
   "Escape",
   "Durable"
  ],
  "spells": [
   {
    "id": "faceless_void_time_walk",
    "name": "Time Walk",
    "type": "Point Target",
    "dmg": "",
    "desc": "Rushes to a target location while backtracking any damage taken the last 2 seconds."
   },
   {
    "id": "faceless_void_time_dilation",
    "name": "Time Dilation",
    "type": "No Target",
    "dmg": "Magical",
    "desc": "Faceless Void envelops nearby enemies with time dilating fields to slow cooldown progression of their abilities. Each enveloped enemy gains one Time Dilation stack when applied, and one stack per ability they have on cooldown. Each stack deals damage per second and slows movement and attack speed. The duration is paused while affected by Chronosphere."
   },
   {
    "id": "faceless_void_time_lock",
    "name": "Time Lock",
    "type": "Passive",
    "dmg": "Magical",
    "desc": "Adds the chance for an attack to lock an enemy unit in time while attacking it a second time."
   },
   {
    "id": "faceless_void_time_walk_reverse",
    "name": "Reverse Time Walk",
    "type": "No Target+Hidden",
    "dmg": "",
    "desc": "Available for 1.5 seconds after landing Time Walk. If used in this period, you will reverse your time walk back to your previous cast location. Does not affect health or proc scepter hits."
   },
   {
    "id": "faceless_void_distortion_field",
    "name": "Distortion Field",
    "type": "Passive",
    "dmg": "",
    "desc": "Enemy Attack Projectiles targetting Faceless Void or allied heroes within a 1200 radius of him get slowed by 40%, when they get within 500 distance of their target."
   },
   {
    "id": "faceless_void_chronosphere",
    "name": "Chronosphere",
    "type": "AOE+Point Target",
    "dmg": "",
    "desc": "Creates a blister in spacetime, trapping all units caught in its sphere of influence and causes you to move very quickly inside it. Only Faceless Void and any units he controls are unaffected. Invisible enemies in the sphere will be revealed."
   }
  ]
 },
 "skeleton_king": {
  "ln": "Wraith King",
  "attr": "str",
  "atk": "Melee",
  "roles": [
   "Carry",
   "Support",
   "Durable",
   "Disabler",
   "Initiator"
  ],
  "spells": [
   {
    "id": "skeleton_king_hellfire_blast",
    "name": "Wraithfire Blast",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Wraith King sears an enemy unit with spectral fire, dealing damage and stunning, then dealing damage over time and slowing the target."
   },
   {
    "id": "skeleton_king_bone_guard",
    "name": "Bone Guard",
    "type": "No Target",
    "dmg": "Physical",
    "desc": "Gains a Charge for every 2 creeps killed and 2 charges per hero killed. Activate to spend all charges, summoning skeletons that respawn once when killed. Skeletons benefit from Vampiric Spirit's lifesteal."
   },
   {
    "id": "skeleton_king_mortal_strike",
    "name": "Mortal Strike",
    "type": "Passive",
    "dmg": "",
    "desc": "Wraith King passively deals bonus damage on an attack with a cooldown."
   },
   {
    "id": "skeleton_king_vampiric_spirit",
    "name": "Vampiric Spirit",
    "type": "Passive",
    "dmg": "",
    "desc": "Grants Wraith King Lifesteal. When slain Wraith King turns into a free pathing Wraith with Bonus Attack and Movement Speed for a short duration, delaying his death. Wraith King cannot reincarnate after being a Wraith."
   },
   {
    "id": "skeleton_king_reincarnation",
    "name": "Reincarnation",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Wraith King's form regroups after death, allowing him to resurrect when killed in battle. Upon death, enemy units in a 600 radius are slowed. Skeletons spawn and attack each nearby enemy hero. Can be self-cast to kill Wraith King instantly."
   }
  ]
 },
 "death_prophet": {
  "ln": "Death Prophet",
  "attr": "all",
  "atk": "Ranged",
  "roles": [
   "Carry",
   "Pusher",
   "Nuker",
   "Disabler"
  ],
  "spells": [
   {
    "id": "death_prophet_carrion_swarm",
    "name": "Crypt Swarm",
    "type": "Unit Target+Point Target",
    "dmg": "Magical",
    "desc": "Sends a swarm of winged beasts to savage enemy units in front of Death Prophet."
   },
   {
    "id": "death_prophet_silence",
    "name": "Silence",
    "type": "AOE+Point Target",
    "dmg": "",
    "desc": "Fires a projectile that prevents enemy units in a target area from casting spells."
   },
   {
    "id": "death_prophet_spirit_siphon",
    "name": "Spirit Siphon",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Creates a spirit link between Death Prophet and an enemy unit, draining health from the enemy."
   },
   {
    "id": "death_prophet_witchcraft",
    "name": "Witchcraft",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": ""
   },
   {
    "id": "death_prophet_exorcism",
    "name": "Exorcism",
    "type": "No Target",
    "dmg": "Physical",
    "desc": "Unleashes evil spirits to drain the life of nearby enemy units and structures. Spirits need to return back to Death Prophet in order to attack again. At the end of the spell's duration, Death Prophet is healed in proportion to the damage dealt. Deals 50% damage to buildings. Lasts 40 seconds."
   }
  ]
 },
 "phantom_assassin": {
  "ln": "Phantom Assassin",
  "attr": "agi",
  "atk": "Melee",
  "roles": [
   "Carry",
   "Escape"
  ],
  "spells": [
   {
    "id": "phantom_assassin_stifling_dagger",
    "name": "Stifling Dagger",
    "type": "Unit Target",
    "dmg": "Physical",
    "desc": "Throws a dagger slowing the enemy unit's movement speed, dealing 65+30% of Phantom Assassin's attack damage as physical damage and applying attack effects from items and abilities."
   },
   {
    "id": "phantom_assassin_phantom_strike",
    "name": "Phantom Strike",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Teleports to a unit, friendly or enemy, and grants bonus attack speed while attacking if it's an enemy unit."
   },
   {
    "id": "phantom_assassin_blur",
    "name": "Blur",
    "type": "No Target",
    "dmg": "",
    "desc": "Phantom Assassin blurs her body, disjointing incoming projectiles, increasing her movement speed, causing her to be impossible to see until she comes near enemy heroes or towers."
   },
   {
    "id": "phantom_assassin_fan_of_knives",
    "name": "Fan of Knives",
    "type": "No Target+Hidden",
    "dmg": "Physical",
    "desc": "Phantom Assassin releases sharp blades around her, dealing a percentage of each victim's max health on impact and applying Break."
   },
   {
    "id": "phantom_assassin_immaterial",
    "name": "Immaterial",
    "type": "Passive",
    "dmg": "",
    "desc": "Phantom Assassin focuses inward, increasing her ability to evade enemy attacks. Evasion improves with Phantom Assassin's levels. Stacks diminishingly with other sources of Evasion."
   },
   {
    "id": "phantom_assassin_coup_de_grace",
    "name": "Coup de Grace",
    "type": "Passive",
    "dmg": "",
    "desc": "Phantom Assassin refines her combat abilities, acquiring a chance of gaining Deadly Focus with each attack. When attacking with Deadly Focus, Phantom Assassin will consume the buff and guarantee a critical hit. Stifling Dagger has a bonus chance to cause Deadly Focus."
   }
  ]
 },
 "pugna": {
  "ln": "Pugna",
  "attr": "int",
  "atk": "Ranged",
  "roles": [
   "Nuker",
   "Pusher"
  ],
  "spells": [
   {
    "id": "pugna_nether_blast",
    "name": "Nether Blast",
    "type": "AOE+Point Target",
    "dmg": "Magical",
    "desc": "An exploding pulse deals damage to enemies and structures in the area. Deals 65% damage to structures."
   },
   {
    "id": "pugna_decrepify",
    "name": "Decrepify",
    "type": "Unit Target",
    "dmg": "",
    "desc": "A powerful banishing spell that slows a unit and renders it unable to attack or be attacked. Healing on affected allies is increased, while afflicted enemies take extra magic damage instead."
   },
   {
    "id": "pugna_nether_ward",
    "name": "Nether Ward",
    "type": "Point Target",
    "dmg": "Magical",
    "desc": "Pugna places a Nether Ward at the target location. The ward will fire at any enemy hero who casts a spell dealing base damage plus the damage multiplier of the mana spent by the enemy hero."
   },
   {
    "id": "pugna_oblivion_savant",
    "name": "Oblivion Savant",
    "type": "Passive",
    "dmg": "",
    "desc": "Pugna can cast spells and use items while channeling. Pugna receives 1.5% spell amplification per destroyed tower."
   },
   {
    "id": "pugna_life_drain",
    "name": "Life Drain",
    "type": "Unit Target+Channeled",
    "dmg": "Magical",
    "desc": "CHANNELED - When cast on an enemy, Pugna drains health from the target enemy unit to heal himself and granting vision over the target. When cast on an ally, Pugna will drain his own health into his ally."
   }
  ]
 },
 "templar_assassin": {
  "ln": "Templar Assassin",
  "attr": "agi",
  "atk": "Ranged",
  "roles": [
   "Carry",
   "Escape"
  ],
  "spells": [
   {
    "id": "templar_assassin_refraction",
    "name": "Refraction",
    "type": "No Target+Instant Cast",
    "dmg": "Physical",
    "desc": "Templar Assassin becomes highly elusive, gaining a small barrier and bonus to her damage. The damage and avoidance effects are separate, and have a limited number of instances. If a barrier is consumed, a new one is created as long as there are charges left. If an instance of damage would deal more damage than the remaining barrier, all of the damage is absorbed."
   },
   {
    "id": "templar_assassin_meld",
    "name": "Meld",
    "type": "No Target",
    "dmg": "Physical",
    "desc": "Templar Assassin conceals herself, becoming invisible as long as she remains still. If Meld's invisibility is broken by attacking an enemy, Lanaya's attack will deal bonus damage to the enemy and reduce their armor for 6 seconds. Bonus damage and armor reductions are applied to all enemies in the Psi Blades split range."
   },
   {
    "id": "templar_assassin_psi_blades",
    "name": "Psi Blades",
    "type": "Passive",
    "dmg": "Pure",
    "desc": "Templar Assassin's psi blades slice through the attacked unit, splitting and damaging enemy units directly behind it, while gaining bonus attack range. For each unit it damages, the split damage is reduced by a percentage."
   },
   {
    "id": "templar_assassin_trap",
    "name": "Trap",
    "type": "No Target+Instant Cast",
    "dmg": "",
    "desc": "Springs the trap nearest to Templar Assassin, slowing nearby enemies. If the ability is in alt-cast state, springs the trap that is closest to the mouse cursor."
   },
   {
    "id": "templar_assassin_trap_teleport",
    "name": "Psionic Projection",
    "type": "Point Target+Hidden+Channeled",
    "dmg": "",
    "desc": "CHANNELED - Allows Templar Assassin to teleport to any Psionic Trap after channeling for 2 seconds, detonating it upon arrival as if it was fully charged and instantly dealing 400 bonus damage. Channeling Psionic Projection does not break Meld."
   },
   {
    "id": "templar_assassin_psionic_trap",
    "name": "Psionic Trap",
    "type": "Point Target",
    "dmg": "Magical",
    "desc": "Templar Assassin places mystical traps that invisibly monitor enemy movement. When sprung at her command, they exert a slowing influence of 20% in a 400 radius. Trap movement slow charges up to 50% after 3.5 seconds. Deals damage after 3.5s."
   },
   {
    "id": "templar_assassin_inner_peace",
    "name": "Inner Peace",
    "type": "Passive",
    "dmg": "",
    "desc": "When remaining stationary and not taking damage for 0.25s, Templar Assassin begins meditating, gaining health and mana regeneration, reaching the maximum bonus after 2.05s of meditating."
   }
  ]
 },
 "viper": {
  "ln": "Viper",
  "attr": "agi",
  "atk": "Ranged",
  "roles": [
   "Carry",
   "Durable",
   "Initiator",
   "Disabler"
  ],
  "spells": [
   {
    "id": "viper_poison_attack",
    "name": "Poison Attack",
    "type": "Unit Target+Autocast+Attack Modifier",
    "dmg": "Magical",
    "desc": "Intensifies Viper's venom, adding an effect to his normal attack that applies a stacking movement speed slow and magic resistance deduction while dealing damage over time. Stacks up to 6 times."
   },
   {
    "id": "viper_nethertoxin",
    "name": "Nethertoxin",
    "type": "Point Target+AOE",
    "dmg": "Magical",
    "desc": "Viper releases a Nethertoxin at the targeted area. Units in that area take an increasing damage over time based on how long they remain in it. Units in it have their attack speed slowed."
   },
   {
    "id": "viper_corrosive_skin",
    "name": "Corrosive Skin",
    "type": "Passive",
    "dmg": "Magical",
    "desc": "Viper exudes an infectious toxin that damages and slows the attack speed of any enemy that damages it in a 1200 radius. The acid exudate also increases Viper's resistance to magic."
   },
   {
    "id": "viper_nose_dive",
    "name": "Nosedive",
    "type": "Point Target+AOE",
    "dmg": "Magical",
    "desc": "Viper slams into the ground, releasing a Nethertoxin and splattering each enemy in a 500 AoE for 4 seconds with the effect of Corrosive Skin."
   },
   {
    "id": "viper_predator",
    "name": "Predator",
    "type": "Passive",
    "dmg": "Physical",
    "desc": ""
   },
   {
    "id": "viper_viper_strike",
    "name": "Viper Strike",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Viper slows the targeted enemy unit's movement and attack speed while also disabling their passives and dealing poison damage over time. The slowing effect reduces over the duration of the poison."
   }
  ]
 },
 "luna": {
  "ln": "Luna",
  "attr": "agi",
  "atk": "Ranged",
  "roles": [
   "Carry",
   "Nuker",
   "Pusher"
  ],
  "spells": [
   {
    "id": "luna_lucent_beam",
    "name": "Lucent Beam",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Calls a beam of lunar energy down upon an enemy, damaging and briefly stunning them."
   },
   {
    "id": "luna_lunar_orbit",
    "name": "Lunar Orbit",
    "type": "No Target+Instant Cast",
    "dmg": "Physical",
    "desc": "Creates 4 glaives that rotate 225 radius around Luna. Any enemy unit that collides with a glaive will take a percentage of Luna's Attack Damage."
   },
   {
    "id": "luna_moon_glaive",
    "name": "Moon Glaives",
    "type": "Passive",
    "dmg": "",
    "desc": "Empowers Luna's glaives, causing her attacks to bounce between enemy units. Deals less damage with each bounce."
   },
   {
    "id": "luna_lunar_blessing",
    "name": "Lunar Blessing",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "Grants attack damage to Luna and nearby allied heroes within 1200 range, with Luna receiving double the attack damage bonuses. At night, Lunar Blessing is global, and Luna is blessed with bonus night vision."
   },
   {
    "id": "luna_eclipse",
    "name": "Eclipse",
    "type": "No Target",
    "dmg": "Magical",
    "desc": "Showers random nearby enemies with strikes from Luna's current level of Lucent Beam. These beams do not stun their targets, and there is a maximum number of times that a single target can be struck. Also turns day into night for a short time."
   }
  ]
 },
 "dragon_knight": {
  "ln": "Dragon Knight",
  "attr": "str",
  "atk": "Melee",
  "roles": [
   "Carry",
   "Pusher",
   "Durable",
   "Disabler",
   "Initiator",
   "Nuker"
  ],
  "spells": [
   {
    "id": "dragon_knight_breathe_fire",
    "name": "Breathe Fire",
    "type": "Point Target+Unit Target",
    "dmg": "Magical",
    "desc": "Unleashes a breath of fire in front of Dragon Knight that burns enemies and reduces the damage their attacks deal."
   },
   {
    "id": "dragon_knight_dragon_tail",
    "name": "Dragon Tail",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Dragon Knight smites an enemy unit with his shield, stunning and damaging it and units close to it."
   },
   {
    "id": "dragon_knight_wyrms_wrath",
    "name": "Wyrm's Wrath",
    "type": "Passive",
    "dmg": "Magical",
    "desc": "The life blood of the Dragon improves Dragon Knight's abilities and items to have increased AoE and causes his attacks to deal additional magic damage to enemy units."
   },
   {
    "id": "dragon_knight_fireball",
    "name": "Fireball",
    "type": "Point Target+AOE+Hidden",
    "dmg": "Magical",
    "desc": "Ignites an area, dealing damage over time that lingers on enemies in it. Has reduced cast range when melee."
   },
   {
    "id": "dragon_knight_dragon_blood",
    "name": "Dragon Blood",
    "type": "Passive",
    "dmg": "",
    "desc": "The life blood of the Dragon improves Dragon Knight's health regeneration and armor. Regen and armor are increased by 50% during Elder Dragon Form."
   },
   {
    "id": "dragon_knight_elder_dragon_form",
    "name": "Elder Dragon Form",
    "type": "No Target",
    "dmg": "Magical",
    "desc": "Dragon Knight assumes the form of the Elder Dragon, increasing the range of his abilities, gaining bonus movement speed, and a ranged attack with various properties. The Dragon evolves per level. The bonuses are cumulative. Level 1 Green: Grants a corrosive damage over time that can also damage buildings. Level 2 Red: Grants splash damage to the dragon's attacks. Level 3 Blue: Grants a debuff immunity piercing movement and attack frost slow on attack."
   }
  ]
 },
 "dazzle": {
  "ln": "Dazzle",
  "attr": "all",
  "atk": "Ranged",
  "roles": [
   "Support",
   "Nuker",
   "Disabler"
  ],
  "spells": [
   {
    "id": "dazzle_poison_touch",
    "name": "Poison Touch",
    "type": "Unit Target",
    "dmg": "Physical",
    "desc": "Releases a cone of poison that strikes multiple enemy units. Deals damage over time and slows the targets. Anytime the targets get attacked by Dazzle, the debuff duration is refreshed and slow is increased."
   },
   {
    "id": "dazzle_shallow_grave",
    "name": "Shallow Grave",
    "type": "Unit Target",
    "dmg": "",
    "desc": "An ally blessed with Shallow Grave, no matter how close to death, cannot die while under its protection. Healing on that ally is also amplified for the duration based on the hero's HP."
   },
   {
    "id": "dazzle_shadow_wave",
    "name": "Shadow Wave",
    "type": "Unit Target",
    "dmg": "Physical",
    "desc": "Sends out a bolt of power that arcs between allies, healing them while damaging any enemy units standing nearby. Dazzle is always healed by Shadow Wave."
   },
   {
    "id": "dazzle_innate_weave",
    "name": "Weave",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "Dazzle's abilities apply Weave to both allies and enemies they affect, increasing allied armor and reducing enemy armor. Multiple instances of this effect stack."
   },
   {
    "id": "dazzle_nothl_projection",
    "name": "Nothl Projection",
    "type": "Point Target",
    "dmg": "",
    "desc": "Dazzle departs his body, traveling through the Nothl Realm as an invulnerable spirit that can cast spells, attack, and use items, leaving his body behind in the world with a visible tether. While active, Dazzle's basic abilities are empowered: Poison Touch hexes enemies, Shallow Grave heals upon expiration, and Shadow Wave has a shorter cooldown. The effect can be ended early, and Dazzle returns to the body at the end."
   },
   {
    "id": "dazzle_nothl_projection_end",
    "name": "End Projection",
    "type": "No Target+Hidden",
    "dmg": "",
    "desc": "Ends Dazzle's sojourn in the Nothl Realm and returns his spirit to his body."
   }
  ]
 },
 "rattletrap": {
  "ln": "Clockwerk",
  "attr": "str",
  "atk": "Melee",
  "roles": [
   "Initiator",
   "Disabler",
   "Durable",
   "Nuker"
  ],
  "spells": [
   {
    "id": "rattletrap_battery_assault",
    "name": "Battery Assault",
    "type": "No Target+Instant Cast",
    "dmg": "Magical",
    "desc": "Discharges high-powered shrapnel at random nearby enemy units, dealing minor magical damage and ministun."
   },
   {
    "id": "rattletrap_power_cogs",
    "name": "Power Cogs",
    "type": "No Target",
    "dmg": "Magical",
    "desc": "Forms a ring of energized cogs around Clockwerk, trapping any units that are near. Enemies outside the trap that touch a cog are knocked back, losing health and mana. Once a cog has delivered a shock, it will power down. Damage is increased by 50% of the mana burned. Cogs can be destroyed by enemy attacks, but Clockwerk can push them up to 1000 distance away with one hit. Clockwerk can move through the cogs freely, disabling them as he passes over."
   },
   {
    "id": "rattletrap_rocket_flare",
    "name": "Rocket Flare",
    "type": "Point Target+AOE",
    "dmg": "Magical",
    "desc": "Fires a global range flare that explodes over a given area. Upon impact, enemies in the area take damage and are briefly slowed. Rocket flare provides vision over the impact area for 6 seconds."
   },
   {
    "id": "rattletrap_overclocking",
    "name": "Overclocking",
    "type": "No Target+Instant Cast+Hidden",
    "dmg": "",
    "desc": "Supercharges Clockwerks abilities: Battery Assault: Increased radius and affects all enemies in its range. Power Cogs: Radius increased, and Clockwerk's armor while near Power Cogs is increased. Rocket Flares: Increased damage, vision and slow duration, and fire additional rockets to either side of the target. Hookshot: Stun radius and duration increased. Jetpack Moves faster. Clockwerk's movement and attack speed becomes slowed to a crawl after the duration runs out."
   },
   {
    "id": "rattletrap_jetpack",
    "name": "Jetpack",
    "type": "No Target+Hidden",
    "dmg": "",
    "desc": "Clockwerk activates a jetpack, gaining flying movement, flying vision, and bonus movement speed. Clockwerk has a severely-limited turn rate during this time and cannot attack. Jetpack can be toggled on and off for the duration of the buff."
   },
   {
    "id": "rattletrap_hookshot",
    "name": "Hookshot",
    "type": "Point Target",
    "dmg": "Magical",
    "desc": "Fires a grappling device rapidly at the target location. If the hook hits a unit, Clockwerk launches himself into the target, stunning and dealing damage to everyone in a 175 radius around the hit target. Any enemies Clockwerk collides with along the way are damaged and stunned."
   },
   {
    "id": "rattletrap_armor_power",
    "name": "Armor Power",
    "type": "Passive",
    "dmg": "",
    "desc": "Clockwerk's outgoing damage increases by 0.25% per point of armor. Clockwerk can consume Chainmails to permanently gain +4 armor per Chainmail consumed. Can stack. Self-cast to consume."
   },
   {
    "id": "rattletrap_jetpack_toggle",
    "name": "Jetpack Toggle",
    "type": "",
    "dmg": "",
    "desc": "Toggles Jetpack on and off."
   }
  ]
 },
 "leshrac": {
  "ln": "Leshrac",
  "attr": "int",
  "atk": "Ranged",
  "roles": [
   "Carry",
   "Support",
   "Nuker",
   "Pusher",
   "Disabler"
  ],
  "spells": [
   {
    "id": "leshrac_split_earth",
    "name": "Split Earth",
    "type": "Point Target+AOE",
    "dmg": "Magical",
    "desc": "Splits the earth under enemies. Deals damage and stuns for a short duration."
   },
   {
    "id": "leshrac_diabolic_edict",
    "name": "Diabolic Edict",
    "type": "No Target",
    "dmg": "Pure",
    "desc": "Saturates the area around Leshrac with magical explosions that deal pure damage to enemy units and buildings. The fewer units available to attack, the more damage those units will take."
   },
   {
    "id": "leshrac_lightning_storm",
    "name": "Lightning Storm",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Summons a lightning storm that blasts the target enemy unit, then strikes any nearby enemy units. Struck enemies have their move speed slowed."
   },
   {
    "id": "leshrac_greater_lightning_storm",
    "name": "Nihilism",
    "type": "No Target",
    "dmg": "",
    "desc": "Causes Leshrac and all nearby enemies to turn ethereal, preventing them from attacking, slowing them, and making them take more magic damage. Increases Leshrac's speed rather than reducing it. Does not cause Leshrac to take amplified damage."
   },
   {
    "id": "leshrac_defilement",
    "name": "Defilement",
    "type": "Passive",
    "dmg": "",
    "desc": ""
   },
   {
    "id": "leshrac_pulse_nova",
    "name": "Pulse Nova",
    "type": "No Target",
    "dmg": "Magical",
    "desc": "Creates waves of damaging energy around Leshrac, one per second, to damage nearby enemy units. Drains Leshrac's mana with each pulse."
   }
  ]
 },
 "furion": {
  "ln": "Nature's Prophet",
  "attr": "all",
  "atk": "Ranged",
  "roles": [
   "Carry",
   "Pusher",
   "Escape",
   "Nuker"
  ],
  "spells": [
   {
    "id": "furion_sprout",
    "name": "Sprout",
    "type": "Unit Target+Point Target",
    "dmg": "Magical",
    "desc": "Sprouts a ring of trees around a unit, damaging and trapping it in place and providing vision in a 400 radius."
   },
   {
    "id": "furion_teleportation",
    "name": "Teleportation",
    "type": "Point Target+AOE",
    "dmg": "Physical",
    "desc": "Teleports to any point on the map. Gains a barrier after arriving to its destination."
   },
   {
    "id": "furion_force_of_nature",
    "name": "Nature's Call",
    "type": "Point Target+AOE",
    "dmg": "",
    "desc": "Converts an area of trees into Treants under the command of Nature's Prophet."
   },
   {
    "id": "furion_curse_of_the_forest",
    "name": "Curse of the Oldgrowth",
    "type": "No Target",
    "dmg": "Magical",
    "desc": "Applies a curse on all enemy heroes within 900 range, displaying them in fog, slowing them, and dealing damage over time based on the number of trees within 250 radius. Treants count as trees for this purpose."
   },
   {
    "id": "furion_spirit_of_the_forest",
    "name": "Spirit of the Forest",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "Nature's Prophet gains 2% bonus damage for each nearby tree. Treants also provide this bonus with multiplied values and with larger radius. Treants also possess this ability."
   },
   {
    "id": "furion_wrath_of_nature",
    "name": "Wrath of Nature",
    "type": "Unit Target+Point Target",
    "dmg": "Magical",
    "desc": "Damaging energy bounces around the map, striking enemies that are in vision starting with those closest to the cast point. Each enemy hit beyond the first adds damage, up to the maximum after 16 are hit."
   }
  ]
 },
 "life_stealer": {
  "ln": "Lifestealer",
  "attr": "str",
  "atk": "Melee",
  "roles": [
   "Carry",
   "Durable",
   "Escape",
   "Disabler"
  ],
  "spells": [
   {
    "id": "life_stealer_rage",
    "name": "Rage",
    "type": "No Target+Instant Cast",
    "dmg": "",
    "desc": "Launch into a maddened rage, becoming Debuff Immune, increasing magic resistance and gaining movement speed. DISPEL TYPE: Basic Dispel"
   },
   {
    "id": "life_stealer_open_wounds",
    "name": "Open Wounds",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Lifestealer rends an enemy unit, slowing the victim's movement speed and allowing all allies to regain health for a percentage of the damage they deal to that unit. The victim recovers movement speed over the duration."
   },
   {
    "id": "life_stealer_feast",
    "name": "Feast",
    "type": "Passive",
    "dmg": "Physical",
    "desc": "Lifestealer's attacks deal damage and provide heal for a percentage of his target's max health. He gains permanent max HP whenever he kills a unit."
   },
   {
    "id": "life_stealer_ghoul_frenzy",
    "name": "Ghoul Frenzy",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "Passively grants Lifestealer Attack Speed."
   },
   {
    "id": "life_stealer_infest",
    "name": "Infest",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Lifestealer infests the body of a target unit, becoming undetectable, and healing for a portion of his max hitpoints every second while inside. He can then explode from the host body, dealing damage to nearby enemies. If the infested unit is an enemy creep or a neutral creep, he can take control of the unit's ability to move and attack, and the creep loses a portion of their max hitpoints over time. Does not work on enemy heroes. DISPEL TYPE: Basic Dispel"
   },
   {
    "id": "life_stealer_consume",
    "name": "Consume",
    "type": "Hidden+No Target+Instant Cast",
    "dmg": "",
    "desc": "Lifestealer eats the host body from the inside out, exploding from within."
   }
  ]
 },
 "dark_seer": {
  "ln": "Dark Seer",
  "attr": "int",
  "atk": "Melee",
  "roles": [
   "Initiator",
   "Escape",
   "Disabler"
  ],
  "spells": [
   {
    "id": "dark_seer_vacuum",
    "name": "Vacuum",
    "type": "Point Target+AOE",
    "dmg": "Magical",
    "desc": "Dark Seer creates a vacuum over the target area that sucks in enemy units, disrupting them and dealing damage."
   },
   {
    "id": "dark_seer_ion_shell",
    "name": "Ion Shell",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Surrounds the target unit with a bristling shield that damages enemy units in an area around it."
   },
   {
    "id": "dark_seer_surge",
    "name": "Surge",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Charges a target friendly unit with power, giving it a brief burst of phased movement speed. Allows the unit to reach maximum movement speed and cannot be slowed."
   },
   {
    "id": "dark_seer_normal_punch",
    "name": "Normal Punch",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "Passive ability. Causes Dark Seer's next attack on a hero to have True Strike, knock a replica out of the victim, damaging and stunning them based on how far Dark Seer has moved in the past 3 seconds. Max power is reached after 1100 distance moved."
   },
   {
    "id": "dark_seer_aggrandize",
    "name": "Quick Wit",
    "type": "Passive",
    "dmg": [],
    "desc": "Dark Seer gains 1 Attack Speed from each point of Intelligence. When Dark Seer levels up, he restores a percentage of his max health and mana."
   },
   {
    "id": "dark_seer_wall_of_replica",
    "name": "Wall of Replica",
    "type": "Point Target",
    "dmg": "",
    "desc": "Raises a wall of warping light that slows, damages, and creates replicas of any enemy hero who crosses it. Enemy replicas serve at the Dark Seer's will. Replicas last until they are destroyed, or until the wall's duration ends."
   }
  ]
 },
 "clinkz": {
  "ln": "Clinkz",
  "attr": "agi",
  "atk": "Ranged",
  "roles": [
   "Carry",
   "Escape",
   "Pusher"
  ],
  "spells": [
   {
    "id": "clinkz_strafe",
    "name": "Strafe",
    "type": "No Target+Instant Cast",
    "dmg": "",
    "desc": "Clinkz gains attack speed and has bonus attack range. Any current Skeleton Archers within a 1200 radius of Clinkz also gain bonus attack range and 40% of the attack speed bonus. Casting Strafe does not break Skeleton Walk invisibility."
   },
   {
    "id": "clinkz_searing_arrows",
    "name": "Searing Arrows",
    "type": "Unit Target+Autocast+Attack Modifier",
    "dmg": "Physical",
    "desc": "Imbues Clinkz's arrows with fire for extra damage. Skeleton Archers will fire Searing Arrows at targets Clinkz attacks for 50% damage."
   },
   {
    "id": "clinkz_death_pact",
    "name": "Death Pact",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Clinkz consumes the target enemy creep or friendly Skeleton Archer, healing and gaining max health. Does not take Clinkz out of Skeleton Walk."
   },
   {
    "id": "clinkz_burning_barrage",
    "name": "Burning Barrage",
    "type": "Point Target+Channeled",
    "dmg": "Physical",
    "desc": "CHANNELED - Clinkz channels and shoots multiple piercing arrows in the target direction that hit all enemy units dealing a percentage of Clinkz' attack damage and applying attack modifiers."
   },
   {
    "id": "clinkz_burning_army",
    "name": "Burning Army",
    "type": "Point Target",
    "dmg": "Physical",
    "desc": "Summons a row of Burning Skeleton Archers in the target location."
   },
   {
    "id": "clinkz_wind_walk",
    "name": "Skeleton Walk",
    "type": "No Target+Instant Cast",
    "dmg": "",
    "desc": "Clinkz moves invisibly through units until the moment he attacks or uses items. Leaving Skeleton Walk creates Skeleton Archers. Skeleton Archers are immobile and die within multiple attacks from a hero or tower. Skeleton Archers deal a percentage of Clinkz' damage, and deal 75% less damage to buildings. Attack range is equal to Clinkz' attack range."
   },
   {
    "id": "clinkz_infernal_shred",
    "name": "Infernal Shred",
    "type": "Passive",
    "dmg": "",
    "desc": "Clinkz and his skeletons apply a stacking debuff that causes their attacks to pierce up to 20% of the target's total physical armor (does not reduce their armor). Clinkz applies 3% per attack, and skeletons apply 1%. Lasts 5 seconds."
   }
  ]
 },
 "omniknight": {
  "ln": "Omniknight",
  "attr": "str",
  "atk": "Melee",
  "roles": [
   "Support",
   "Durable",
   "Nuker"
  ],
  "spells": [
   {
    "id": "omniknight_purification",
    "name": "Purification",
    "type": "Unit Target+AOE",
    "dmg": "Pure",
    "desc": "Instantly heals a friendly unit and damages all nearby enemy units."
   },
   {
    "id": "omniknight_martyr",
    "name": "Repel",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Grants Debuff Immunity with 60% magic resistance, as well as bonus HP Regen."
   },
   {
    "id": "omniknight_hammer_of_purity",
    "name": "Hammer of Purity",
    "type": "Unit Target+Autocast+Attack Modifier",
    "dmg": "Pure",
    "desc": "Omniknight imbues his hammer with holy power, causing his attack to have increased range, deal pure damage based on a percentage of his base damage and slow his target for a short duration. Omniknight heals for 30% of the damage dealt over 5s."
   },
   {
    "id": "omniknight_degen_aura",
    "name": "Degen Aura",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "Degenerates the movement capabilities of enemy units that stray too near, slowing their movement speed."
   },
   {
    "id": "omniknight_guardian_angel",
    "name": "Guardian Angel",
    "type": "No Target",
    "dmg": "",
    "desc": "Omniknight calls upon a Guardian Angel that grants immunity from physical damage to all allied units near Omniknight."
   }
  ]
 },
 "enchantress": {
  "ln": "Enchantress",
  "attr": "int",
  "atk": "Ranged",
  "roles": [
   "Support",
   "Pusher",
   "Durable",
   "Disabler"
  ],
  "spells": [
   {
    "id": "enchantress_impetus",
    "name": "Impetus",
    "type": "Unit Target+Autocast+Attack Modifier",
    "dmg": "Pure",
    "desc": "Places an enchantment on each attack while activated, causing it to deal additional damage based on how far away the target is. The farther the target, the greater the damage dealt. Deals double damage to illusions."
   },
   {
    "id": "enchantress_enchant",
    "name": "Enchant",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Enchantress charms an enemy. If the enemy is a hero, they are dispelled and slowed for 3.5s, and Enchantress and her units gain bonus attack range against the target. If the enemy is a creep, she brings it under her control and receives 40% of their experience bounty. Enchantress can control creeps for up to 30s. DISPEL TYPE: Basic Dispel"
   },
   {
    "id": "enchantress_natures_attendants",
    "name": "Nature's Attendants",
    "type": "No Target",
    "dmg": "",
    "desc": "A cloud of wisps heals Enchantress and any friendly units nearby."
   },
   {
    "id": "enchantress_bunny_hop",
    "name": "Sproink",
    "type": "No Target+Instant Cast+Hidden",
    "dmg": "",
    "desc": "Leaps backward, dodges incoming projectiles, and launches an Impetus attack on the 2 furthest enemy units within Enchantress' attack range + 100."
   },
   {
    "id": "enchantress_little_friends",
    "name": "Little Friends",
    "type": "Unit Target+AOE",
    "dmg": "",
    "desc": "Enchantress roots an enemy unit. All creeps, ally, enemy and neutral within a radius will gain bonus movement and attack speed and attack the chosen target for 6 seconds."
   },
   {
    "id": "enchantress_untouchable",
    "name": "Untouchable",
    "type": "Passive",
    "dmg": "",
    "desc": "Enchantress beguiles her enemies, slowing their attacks when she is attacked."
   },
   {
    "id": "enchantress_rabblerouser",
    "name": "Rabble-Rouser",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "Enchantress causes neutral creeps or any unit under her control to deal additional damage to enemy Heroes."
   }
  ]
 },
 "huskar": {
  "ln": "Huskar",
  "attr": "str",
  "atk": "Ranged",
  "roles": [
   "Carry",
   "Durable",
   "Initiator"
  ],
  "spells": [
   {
    "id": "huskar_inner_fire",
    "name": "Inner Fire",
    "type": "No Target",
    "dmg": "Magical",
    "desc": "In a fiery rage, knocks all nearby enemies away from you to a fixed distance, dealing damage and silencing them."
   },
   {
    "id": "huskar_burning_spear",
    "name": "Burning Spear",
    "type": "Unit Target+Autocast+Attack Modifier",
    "dmg": "Magical",
    "desc": "Huskar sets his spears aflame, dealing damage over time with his regular attack. Multiple attacks will stack additional damage. Each attack drains some of Huskar's health."
   },
   {
    "id": "huskar_berserkers_blood",
    "name": "Berserker's Blood",
    "type": "Passive",
    "dmg": "",
    "desc": "Huskar's injuries feed his power, giving increased attack speed, magic resistance and health regen based on missing health. Health regen is a percentage of your strength."
   },
   {
    "id": "huskar_blood_magic",
    "name": "Blood Magic",
    "type": "Passive",
    "dmg": [],
    "desc": "Huskar does not have mana. Mana costs of items are converted into health costs.Huskar's Health Costs are Magical Damage and can be reduced by Magic Resist."
   },
   {
    "id": "huskar_life_break",
    "name": "Life Break",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Huskar draws upon his health to break an enemy's life, leaping at a target to shatter a percentage of that hero's current health and slow both their movement and attack speed. While leaping, Huskar is Debuff Immune with 60% magic resistance. DISPEL TYPE: Basic Dispel"
   }
  ]
 },
 "night_stalker": {
  "ln": "Night Stalker",
  "attr": "str",
  "atk": "Melee",
  "roles": [
   "Carry",
   "Initiator",
   "Durable",
   "Disabler",
   "Nuker"
  ],
  "spells": [
   {
    "id": "night_stalker_void",
    "name": "Void",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Creates a damaging void that slows an enemy unit and deals damage. At night, Void also mini-stuns, interrupting channeling abilities, and its effects lasts longer."
   },
   {
    "id": "night_stalker_crippling_fear",
    "name": "Crippling Fear",
    "type": "No Target+Instant Cast",
    "dmg": "Magical",
    "desc": "Night Stalker horrifies all nearby enemies, causing them to become silenced and take damage over time while near him. The effect lasts longer at night."
   },
   {
    "id": "night_stalker_midnight_feast",
    "name": "Midnight Feast",
    "type": "Passive",
    "dmg": "",
    "desc": ""
   },
   {
    "id": "night_stalker_hunter_in_the_night",
    "name": "Hunter in the Night",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "Night Stalker is in his element at night, attacking and moving with great swiftness."
   },
   {
    "id": "night_stalker_darkness",
    "name": "Dark Ascension",
    "type": "No Target",
    "dmg": "Physical",
    "desc": "Night Stalker smothers the sun and summons instant darkness, so that he might use his powers at their fullest. Night Stalker gains flight and bonus damage during this time. Has unobstructed vision."
   }
  ]
 },
 "broodmother": {
  "ln": "Broodmother",
  "attr": "agi",
  "atk": "Melee",
  "roles": [
   "Carry",
   "Pusher",
   "Escape",
   "Nuker"
  ],
  "spells": [
   {
    "id": "broodmother_insatiable_hunger",
    "name": "Insatiable Hunger",
    "type": "No Target",
    "dmg": "Physical",
    "desc": "A violent lust for vital fluids increases Broodmother's attack damage and gives her and her Spiderlings a vampiric attack."
   },
   {
    "id": "broodmother_spin_web",
    "name": "Spin Web",
    "type": "Point Target+AOE",
    "dmg": "",
    "desc": "Spins a large web that grants Broodmother a passive movement speed increase and increases her Turn Rate, while in its vicinity, as well as giving free movement. Spin Web can be cast from anywhere as long as the new web touches an existing web. Webs never expire, and can be manually destroyed. When the maximum limit of webs is exceeded, the oldest web disappears."
   },
   {
    "id": "broodmother_incapacitating_bite",
    "name": "Incapacitating Bite",
    "type": "Passive",
    "dmg": "",
    "desc": "Broodmother's venom cripples enemy units, causing her attacks to slow and giving the affected unit a chance to miss its attacks and extra damage from attacks."
   },
   {
    "id": "broodmother_sticky_snare",
    "name": "Spinner's Snare",
    "type": "Point Target+Hidden+Channeled",
    "dmg": "Magical",
    "desc": ""
   },
   {
    "id": "broodmother_spiders_milk",
    "name": "Spider's Milk",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "Whenever Broodmother kills a unit, she and all units under her control in a 600 radius receive a buff for 3s that heals them for a percentage of the victim's health every 0.5 seconds. Healing from creeps is reduced by 40%."
   },
   {
    "id": "broodmother_spawn_spiderlings",
    "name": "Spawn Spiderlings",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Broodmother injects her young into an enemy unit, dealing damage and slowing them for 4 seconds. The spiderlings will hatch if the target is killed while under this influence."
   }
  ]
 },
 "bounty_hunter": {
  "ln": "Bounty Hunter",
  "attr": "agi",
  "atk": "Melee",
  "roles": [
   "Escape",
   "Nuker"
  ],
  "spells": [
   {
    "id": "bounty_hunter_shuriken_toss",
    "name": "Shuriken Toss",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Hurls a deadly shuriken at an enemy unit, dealing damage and slowing the target's movement speed. The shuriken will bounce to any Tracked units who are within a 1200 radius of each other."
   },
   {
    "id": "bounty_hunter_jinada",
    "name": "Jinada",
    "type": "Unit Target+Autocast+Attack Modifier",
    "dmg": "Physical",
    "desc": "Bounty Hunter plans his next hit, dealing bonus damage and stealing some unreliable gold."
   },
   {
    "id": "bounty_hunter_wind_walk",
    "name": "Shadow Walk",
    "type": "No Target+Instant Cast",
    "dmg": "",
    "desc": "Bounty Hunter becomes invisible and gains bonus movement speed and the ability to move through other units until he attacks or casts a spell. If he breaks the invisibility with an attack, that attack will stun the target for a short duration."
   },
   {
    "id": "bounty_hunter_wind_walk_ally",
    "name": "Friendly Shadow",
    "type": "Unit Target+Instant Cast",
    "dmg": "",
    "desc": "Applies Shadow Walk and all of its bonuses to the target ally. Allied fade time is 0.5s. Does not break Bounty Hunter's invisibility when cast."
   },
   {
    "id": "bounty_hunter_big_game_hunter",
    "name": "Big Game Hunter",
    "type": "Passive",
    "dmg": "",
    "desc": "Bounty Hunter receives 15% more kill and assist gold if the dying enemy hero is Big Game. An enemy hero is considered Big Game if they are one of the top 3 net worth heroes on the enemy team."
   },
   {
    "id": "bounty_hunter_track",
    "name": "Track",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Tracks an enemy hero, granting True Sight of the target, increasing the damage they take and providing information on how much gold it is carrying. If the target dies, Bounty Hunter and nearby heroes collect a bonus bounty of gold. Casting Track does not take you out of invisibility."
   }
  ]
 },
 "weaver": {
  "ln": "Weaver",
  "attr": "agi",
  "atk": "Ranged",
  "roles": [
   "Carry",
   "Escape"
  ],
  "spells": [
   {
    "id": "weaver_the_swarm",
    "name": "The Swarm",
    "type": "Point Target",
    "dmg": "Physical",
    "desc": "Weaver launches a swarm of 12 young Weavers that latch on any enemy unit in their path, attacking and reducing armor until it is killed."
   },
   {
    "id": "weaver_shukuchi",
    "name": "Shukuchi",
    "type": "No Target+Instant Cast",
    "dmg": "Magical",
    "desc": "Weaver shifts out of visibility, gaining max movement speed and doing harm to any enemies it passes through."
   },
   {
    "id": "weaver_geminate_attack",
    "name": "Geminate Attack",
    "type": "Unit Target+Autocast+Attack Modifier",
    "dmg": "Physical",
    "desc": "Allows Weaver to dispatch two attacks at once."
   },
   {
    "id": "weaver_time_lapse",
    "name": "Time Lapse",
    "type": "No Target",
    "dmg": "",
    "desc": "Weaver warps backward to whatever position it was in five seconds earlier--regaining the HP and mana from that time. No effect on cooldown, gold or experience. DISPEL TYPE: Strong Dispel"
   },
   {
    "id": "weaver_threads_of_fate",
    "name": "Threads of Fate",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "Whenever Weaver deals damage to an enemy hero with an attack or ability, if he remains within 700 range of them for 1.5s, he establishes a Thread of Fate that briefly slows the enemy and ties Weaver and the enemy together. Each established thread of fate grants bonus damage to Weaver."
   }
  ]
 },
 "jakiro": {
  "ln": "Jakiro",
  "attr": "int",
  "atk": "Ranged",
  "roles": [
   "Support",
   "Nuker",
   "Pusher",
   "Disabler"
  ],
  "spells": [
   {
    "id": "jakiro_dual_breath",
    "name": "Dual Breath",
    "type": "Point Target+Unit Target",
    "dmg": "Magical",
    "desc": "An icy blast followed by a wave of fire launches out in a path in front of Jakiro. The ice slows enemies, while the fire delivers damage over time."
   },
   {
    "id": "jakiro_ice_path",
    "name": "Ice Path",
    "type": "Point Target",
    "dmg": "Magical",
    "desc": "Creates a path of ice that stuns and damages enemies that touch it."
   },
   {
    "id": "jakiro_liquid_fire",
    "name": "Liquid Fire",
    "type": "Unit Target+Autocast+Attack Modifier",
    "dmg": "Magical",
    "desc": "Jakiro burns his enemies in an area of effect with fire added to his attack, while slowing their attacks. Shares a cooldown with Liquid Frost."
   },
   {
    "id": "jakiro_liquid_ice",
    "name": "Liquid Frost",
    "type": "Unit Target+Autocast+Attack Modifier",
    "dmg": "Magical",
    "desc": "Jakiro chill his enemies with ice added to his attack, slowing movement for 5 seconds and increasing damage taken from Jakiro's attacks and abilities. This effect does not apply to buildings. Shares a cooldown with Liquid Fire."
   },
   {
    "id": "jakiro_double_trouble",
    "name": "Double Trouble",
    "type": "Passive",
    "dmg": "",
    "desc": "Jakiro's attacks launch an attack from each head, but deal less damage each."
   },
   {
    "id": "jakiro_macropyre",
    "name": "Macropyre",
    "type": "Point Target",
    "dmg": "Magical",
    "desc": "Jakiro exhales a wide line of lasting flames, which deals damage per second to any enemy units caught in the fire."
   }
  ]
 },
 "batrider": {
  "ln": "Batrider",
  "attr": "all",
  "atk": "Ranged",
  "roles": [
   "Initiator",
   "Disabler",
   "Escape"
  ],
  "spells": [
   {
    "id": "batrider_sticky_napalm",
    "name": "Sticky Napalm",
    "type": "AOE+Point Target",
    "dmg": "Magical",
    "desc": "Drenches an area in sticky oil, amplifying damage from Batrider's attacks and abilities and slowing the movement speed and turn rate of enemies. Additional casts of Sticky Napalm continue to increase damage, up to 20 stacks. Applies a small amount of damage with each cast."
   },
   {
    "id": "batrider_flamebreak",
    "name": "Flamebreak",
    "type": "AOE+Point Target",
    "dmg": "Magical",
    "desc": "Hurls an explosive cocktail that explodes when it reaches the target location, knocking back, slowing and dealing damage over time to enemies in the area."
   },
   {
    "id": "batrider_firefly",
    "name": "Firefly",
    "type": "No Target+Instant Cast",
    "dmg": "Magical",
    "desc": "Batrider takes to the skies, moving increasingly fast and laying down a trail of flames from the air. The fire damages any enemies it touches and destroys trees below Batrider. Maximum movement speed bonus is reached at the end of Firefly's duration."
   },
   {
    "id": "batrider_smoldering_resin",
    "name": "Smoldering Resin",
    "type": "Passive",
    "dmg": "",
    "desc": "Batrider's attacks apply a debuff that deals 20% of the attack damage every 1s for 2s."
   },
   {
    "id": "batrider_flaming_lasso",
    "name": "Flaming Lasso",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Lassoes an enemy and drags them in Batrider's wake. Dragged units cannot move, attack, or use abilities. Teleporting or blinking will break the lasso."
   }
  ]
 },
 "chen": {
  "ln": "Chen",
  "attr": "int",
  "atk": "Ranged",
  "roles": [
   "Support",
   "Pusher"
  ],
  "spells": [
   {
    "id": "chen_penitence",
    "name": "Penitence",
    "type": "Unit Target",
    "dmg": "Pure",
    "desc": "Damages enemy unit, forces it to move slower and lets allies attack it more quickly."
   },
   {
    "id": "chen_holy_persuasion",
    "name": "Holy Persuasion",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Chen takes control of an enemy or neutral creep and receives a percentage of its bounty. Its maximum health is set to 400. Converted creeps will have increased movement speed and bonus damage. Chen may globally target his own creep if it has not taken damage in the last 3 seconds to unsummon it."
   },
   {
    "id": "chen_divine_favor",
    "name": "Divine Favor",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Passively provides an aura that grants increased health regeneration. Can be cast on allies to provide them with bonus armor and increasing the healing and health regeneration they receive. If cast on Chen, all units controlled by Chen receive the buff."
   },
   {
    "id": "chen_zealot",
    "name": "Zealot",
    "type": "Unit Target",
    "dmg": "",
    "desc": ""
   },
   {
    "id": "chen_hand_of_god",
    "name": "Hand of God",
    "type": "No Target",
    "dmg": "",
    "desc": "Heals all allied heroes on the map as well as all units under Chen's control. A large heal is applied at first and a slow heal over time is applied for 10 seconds afterwards."
   }
  ]
 },
 "spectre": {
  "ln": "Spectre",
  "attr": "agi",
  "atk": "Melee",
  "roles": [
   "Carry",
   "Durable",
   "Escape"
  ],
  "spells": [
   {
    "id": "spectre_spectral_dagger",
    "name": "Spectral Dagger",
    "type": "Point Target+Unit Target",
    "dmg": "Magical",
    "desc": "Spectre flings a dagger to draw a Shadow Path, dealing damage and slowing the movement speed of any enemies along the trail. Units hit by the dagger also trail a Shadow Path. While treading the path, Spectre moves faster and phases through otherwise impassable terrain."
   },
   {
    "id": "spectre_shadow_step",
    "name": "Shadow Step",
    "type": "Unit Target+AOE",
    "dmg": "",
    "desc": "Sends an uncontrollable illusion at a target that follows and attacks the target. The Reality sub-ability may be used to teleport to the illusion, destroying it."
   },
   {
    "id": "spectre_dispersion",
    "name": "Dispersion",
    "type": "Passive",
    "dmg": "",
    "desc": "Spectre disperses part of the damage dealt to her, reflecting it to all nearby enemies. The effect lessens with distance."
   },
   {
    "id": "spectre_reality",
    "name": "Reality",
    "type": "Point Target",
    "dmg": "",
    "desc": "Spectre assumes the target Shadow Step or Haunt illusion, destroying it."
   },
   {
    "id": "spectre_desolate",
    "name": "Desolate",
    "type": "Passive+Hidden",
    "dmg": "Pure",
    "desc": "Spectre and her illusions deal bonus Pure damage if attacking an enemy that does not have any allied units within a 350 radius around them."
   },
   {
    "id": "spectre_haunt",
    "name": "Haunt",
    "type": "No Target",
    "dmg": "",
    "desc": "Creates a spectral nemesis to haunt all enemy Heroes. Haunt illusions are uncontrollable, take extra damage, and deal less damage than Spectre herself. They ignore terrain. The Reality sub-ability may be used to teleport to the illusion, destroying it."
   }
  ]
 },
 "ancient_apparition": {
  "ln": "Ancient Apparition",
  "attr": "int",
  "atk": "Ranged",
  "roles": [
   "Support",
   "Disabler",
   "Nuker"
  ],
  "spells": [
   {
    "id": "ancient_apparition_cold_feet",
    "name": "Cold Feet",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Places a curse on an enemy, dealing damage over time. If the enemy unit doesn't move outside of the given range from the initial location, it will be stunned and frozen in place after 4 seconds."
   },
   {
    "id": "ancient_apparition_ice_vortex",
    "name": "Ice Vortex",
    "type": "AOE+Point Target",
    "dmg": "Magical",
    "desc": "Creates a vortex of icy energy that slows, deals damage, and increases magic damage done to enemies in its range."
   },
   {
    "id": "ancient_apparition_chilling_touch",
    "name": "Chilling Touch",
    "type": "Unit Target+Autocast+Attack Modifier",
    "dmg": "Magical",
    "desc": "Enhances Ancient Apparition's attack with increased range and a burst of magical damage and slow."
   },
   {
    "id": "ancient_apparition_bone_chill",
    "name": "Bone Chill",
    "type": "Passive+Hidden",
    "dmg": "Magical",
    "desc": "When Ancient Apparition deals Magic damage to an enemy with his abilities, it is slowed for a short duration. If the target is a Hero, its Strength is also reduced. Multiple instances of this effect stack and have independent durations."
   },
   {
    "id": "ancient_apparition_ice_blast",
    "name": "Ice Blast",
    "type": "Point Target+AOE",
    "dmg": "Magical",
    "desc": "Launches a tracer toward any location on the battlefield, which must be triggered again to mark the area to be blasted by a damaging explosion of hail. The further the tracer travels, the larger the explosion will be. Enemies caught in the explosion, or who touch the icy ball of hail as it travels, are Frostbitten, taking damage over time and prevented from regenerating or healing. If a Frostbitten unit's health drops below a certain percentage, they will instantly shatter."
   },
   {
    "id": "ancient_apparition_ice_blast_release",
    "name": "Release",
    "type": "Hidden+No Target",
    "dmg": "",
    "desc": "Releases the ice blast to explode at the tracer's current location. Can be cast while silenced."
   }
  ]
 },
 "doom_bringer": {
  "ln": "Doom",
  "attr": "str",
  "atk": "Melee",
  "roles": [
   "Carry",
   "Disabler",
   "Initiator",
   "Durable",
   "Nuker"
  ],
  "spells": [
   {
    "id": "doom_bringer_devour",
    "name": "Devour",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Consumes an enemy or neutral creep, acquiring any special abilities that it possessed. If alt-cast is activated, Doom will not acquire the creep's abilities. Duration is equal to the cooldown."
   },
   {
    "id": "doom_bringer_scorched_earth",
    "name": "Scorched Earth",
    "type": "No Target",
    "dmg": "Magical",
    "desc": "Carpets the nearby earth in flames which damage enemies, while also granting Doom increased movement speed and health regeneration."
   },
   {
    "id": "doom_bringer_infernal_blade",
    "name": "Infernal Blade",
    "type": "Unit Target+Autocast+Attack Modifier",
    "dmg": "Magical",
    "desc": "Doom swings his burning sword, igniting the enemy. Stuns for 0.66 seconds and applies a 4 second burn that deals a base damage plus a percentage of the target's Max HP as damage per second."
   },
   {
    "id": "doom_bringer_empty1",
    "name": "Devoured Ability",
    "type": "Passive",
    "dmg": "",
    "desc": "This slot will be replaced with abilities acquired using Devour."
   },
   {
    "id": "doom_bringer_empty2",
    "name": "Devoured Ability",
    "type": "Passive",
    "dmg": "",
    "desc": "This slot will be replaced with abilities acquired using Devour."
   },
   {
    "id": "doom_bringer_doom",
    "name": "Doom",
    "type": "Unit Target",
    "dmg": "Pure",
    "desc": "Inflicts a curse that dispels an enemy and prevents them from casting spells or healing in any way, while taking damage over time. DISPEL TYPE: Basic Dispel"
   },
   {
    "id": "doom_bringer_lvl_pain",
    "name": "Lvl ? Pain",
    "type": "Passive+Hidden",
    "dmg": [],
    "desc": "Doom's attacks curse enemy heroes. After 2.5s, the cursed hero bursts with a pillar of fire, damaging itself and all units in a 66 AoE for 15% of the damage taken from Doom during the curse. The damage and radius of the curse is 66% stronger if the enemy's level is a multiple of 6."
   }
  ]
 },
 "ursa": {
  "ln": "Ursa",
  "attr": "agi",
  "atk": "Melee",
  "roles": [
   "Carry",
   "Durable",
   "Disabler"
  ],
  "spells": [
   {
    "id": "ursa_earthshock",
    "name": "Earthshock",
    "type": "No Target+Instant Cast",
    "dmg": "Magical",
    "desc": "Ursa leaps forward 250 units and slams the earth, causing a powerful shock to damage and slow all enemy units in a nearby area for 4 seconds."
   },
   {
    "id": "ursa_overpower",
    "name": "Overpower",
    "type": "No Target",
    "dmg": "",
    "desc": "Using his skill in combat, Ursa gains increased attack speed and slow resistance for a number of subsequent attacks."
   },
   {
    "id": "ursa_fury_swipes",
    "name": "Fury Swipes",
    "type": "Passive",
    "dmg": "Physical",
    "desc": "Ursa's claws dig deeper wounds in the enemy, causing consecutive attacks to the same enemy to deal more damage. If the same target is not attacked after 8 seconds, the bonus damage is lost."
   },
   {
    "id": "ursa_maul",
    "name": "Maul",
    "type": "Passive",
    "dmg": "",
    "desc": "Ursa gains bonus damage equal to a percentage of his Current HP."
   },
   {
    "id": "ursa_enrage",
    "name": "Enrage",
    "type": "No Target+Instant Cast",
    "dmg": "",
    "desc": "Ursa goes into a frenzy, providing damage reduction and status resistance. Removes any existing debuffs. DISPEL TYPE: Strong Dispel"
   }
  ]
 },
 "spirit_breaker": {
  "ln": "Spirit Breaker",
  "attr": "str",
  "atk": "Melee",
  "roles": [
   "Carry",
   "Initiator",
   "Disabler",
   "Durable",
   "Escape"
  ],
  "spells": [
   {
    "id": "spirit_breaker_charge_of_darkness",
    "name": "Charge of Darkness",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Spirit Breaker fixes his sight on an enemy unit and starts charging through all objects, starting at 25% of the bonus speed and reaching his max speed after 1.5s. All enemy units passed through and the targeted unit will be hit by a Greater Bash. If the targeted unit dies, Spirit Breaker will change his target to the nearest enemy unit to that location."
   },
   {
    "id": "spirit_breaker_bulldoze",
    "name": "Bulldoze",
    "type": "No Target+Instant Cast",
    "dmg": "",
    "desc": "Spirit Breaker gains movement speed and status resistance to ram through enemies. Can be used while charging."
   },
   {
    "id": "spirit_breaker_greater_bash",
    "name": "Greater Bash",
    "type": "Passive",
    "dmg": "Magical",
    "desc": "Gives a chance to stun and knockback an enemy unit on an attack. Deals a percentage of movement speed as damage."
   },
   {
    "id": "spirit_breaker_planar_pocket",
    "name": "Planar Pocket",
    "type": "Unit Target+Instant Cast",
    "dmg": "",
    "desc": "Barathrum gains magic resistance and distorts reality around the selected hero, making any unit-targeted spells cast by enemy heroes get redirected towards Spirit Breaker. Can be cast on both allied and enemy heroes, but only spells cast by enemies of Spirit Breaker will be redirected."
   },
   {
    "id": "spirit_breaker_bull_rush",
    "name": "Empowering Haste",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "Spirit Breaker gains bonus Movement Speed for a duration whenever he stuns an enemy. Effects from multiple stuns stack and have independent durations. Duration pauses during Charge of Darkness."
   },
   {
    "id": "spirit_breaker_nether_strike",
    "name": "Nether Strike",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Spirit Breaker slips into the nether realm, reappearing next to his hapless victim. Upon reappearing, a Greater Bash of the current level occurs and deals bonus damage. Knocks back for double the normal distance."
   }
  ]
 },
 "gyrocopter": {
  "ln": "Gyrocopter",
  "attr": "agi",
  "atk": "Ranged",
  "roles": [
   "Carry",
   "Nuker",
   "Disabler"
  ],
  "spells": [
   {
    "id": "gyrocopter_rocket_barrage",
    "name": "Rocket Barrage",
    "type": "No Target+Instant Cast",
    "dmg": "Magical",
    "desc": "Launches a salvo of rockets at nearby enemy units in a radius around the Gyrocopter. Lasts 3 seconds."
   },
   {
    "id": "gyrocopter_homing_missile",
    "name": "Homing Missile",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Fires a homing missile to seek the targeted enemy unit. The missile gains speed over time, dealing damage and stunning when it impacts the target. Enemy units can destroy the missile before it reaches its target."
   },
   {
    "id": "gyrocopter_flak_cannon",
    "name": "Flak Cannon",
    "type": "No Target+Instant Cast",
    "dmg": "Physical",
    "desc": "Gyrocopter's attacks hit all enemy units in an area around it for a limited number of attacks. Only the main target of attacks will receive attack bonuses such as Critical Strike. Lasts 12 seconds or until the attacks are used."
   },
   {
    "id": "gyrocopter_afterburner",
    "name": "Afterburner",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "Gyrocopter gains movement speed for a short duration after damaging an enemy with his attacks or abilities."
   },
   {
    "id": "gyrocopter_side_gunner_spawn_ability",
    "name": "Side Gunner",
    "type": "Passive",
    "dmg": "Physical",
    "desc": ""
   },
   {
    "id": "gyrocopter_call_down",
    "name": "Call Down",
    "type": "Point Target+AOE",
    "dmg": "Magical",
    "desc": "Call down 3 aerial missile strikes that slow and damage enemy units in a target area. Each strike is 500 distance from the previous one."
   }
  ]
 },
 "alchemist": {
  "ln": "Alchemist",
  "attr": "str",
  "atk": "Melee",
  "roles": [
   "Carry",
   "Support",
   "Durable",
   "Disabler",
   "Initiator",
   "Nuker"
  ],
  "spells": [
   {
    "id": "alchemist_acid_spray",
    "name": "Acid Spray",
    "type": "Point Target+AOE",
    "dmg": "Physical",
    "desc": "Sprays high-pressure acid across a target area. Enemy units who step across the contaminated terrain take damage per second and have their armor reduced."
   },
   {
    "id": "alchemist_unstable_concoction",
    "name": "Unstable Concoction",
    "type": "No Target+Instant Cast",
    "dmg": "Physical",
    "desc": "Alchemist brews up an unstable concoction that he can throw at an enemy hero, to stun and deal damage in an area around the explosion. The longer the concoction brews, the more damage it deals and the longer the stun. Alchemist is faster while charging the concoction. After 5 seconds, the brew reaches its maximum damage and stun time. However, after 5.5 seconds, the concoction will explode on Alchemist himself if not thrown."
   },
   {
    "id": "alchemist_corrosive_weaponry",
    "name": "Corrosive Weaponry",
    "type": "Passive",
    "dmg": "",
    "desc": "Alchemist coats his weapons and empowers his spells with an acid that applies a stacking slow and base attack damage reduction to enemies hit. Attacks apply 2 stacks. Unstable Concoction applies 1 stack per second of brew time."
   },
   {
    "id": "alchemist_berserk_potion",
    "name": "Berserk Potion",
    "type": "Unit Target+Hidden",
    "dmg": "",
    "desc": "Alchemist throws a potion at an ally, applying a basic dispel and giving them attack speed, movement speed and HP regen. DISPEL TYPE: Basic Dispel"
   },
   {
    "id": "alchemist_goblins_greed",
    "name": "Greevil's Greed",
    "type": "Hidden+Passive",
    "dmg": "",
    "desc": "Alchemist synthesizes additional gold from his enemies and bounty runes. With each kill, Alchemist earns base bonus gold and extra bonus gold. If Alchemist kills another unit which yields gold within the next 40 seconds, an additional instance of Extra Bonus Gold is added to the total. Additionally, causes bounty runes to yield more gold."
   },
   {
    "id": "alchemist_chemical_rage",
    "name": "Chemical Rage",
    "type": "No Target",
    "dmg": "",
    "desc": "Alchemist causes his Ogre to enter a chemically induced rage, reducing base attack cooldown and increasing movement speed and health regeneration. DISPEL TYPE: Basic Dispel"
   },
   {
    "id": "alchemist_unstable_concoction_throw",
    "name": "Unstable Concoction Throw",
    "type": "Unit Target+AOE+Hidden",
    "dmg": "",
    "desc": "Throw it before it blows up!"
   }
  ]
 },
 "invoker": {
  "ln": "Invoker",
  "attr": "int",
  "atk": "Ranged",
  "roles": [
   "Carry",
   "Nuker",
   "Disabler",
   "Escape",
   "Pusher"
  ],
  "spells": [
   {
    "id": "invoker_quas",
    "name": "Quas",
    "type": "No Target+Instant Cast",
    "dmg": "",
    "desc": "Allows manipulation of ice elements. Active Quas instances imbue Invoker with bonus hp regeneration. Passively grants bonus strength per level of Quas."
   },
   {
    "id": "invoker_wex",
    "name": "Wex",
    "type": "No Target+Instant Cast",
    "dmg": "",
    "desc": "Allows manipulation of storm elements. Active Wex instances imbue Invoker with bonus movement and attack speed. Passively grants bonus agility per level of Wex."
   },
   {
    "id": "invoker_exort",
    "name": "Exort",
    "type": "No Target+Instant Cast",
    "dmg": "",
    "desc": "Allows manipulation of fire elements. Active Exort instances imbue Invoker with bonus attack damage. Passively grants bonus intelligence per level of Exort."
   },
   {
    "id": "invoker_empty1",
    "name": "Invoked Spell",
    "type": "Passive",
    "dmg": "",
    "desc": "Casting Invoke will replace this slot with one of ten unique spells based on Invoker's currently active Quas, Wex, and Exort buffs."
   },
   {
    "id": "invoker_empty2",
    "name": "Invoked Spell",
    "type": "Passive",
    "dmg": "",
    "desc": "Casting Invoke will replace this slot with one of ten unique spells based on Invoker's currently active Quas, Wex, and Exort buffs."
   },
   {
    "id": "invoker_invoke",
    "name": "Invoke",
    "type": "No Target+Instant Cast",
    "dmg": "",
    "desc": "Combines the properties of the elements currently being manipulated to create a new spell for Invoker to use. Invoke cooldown is reduced by 0.3 seconds for each orb level. Invoker's vast knowledge of magic allows him to choose from Multiple Aghanim's Scepter and Shard options. The items must be activated before they can be used, and cannot be changed after they are chosen. Click the help button to see the list of possible spells."
   },
   {
    "id": "invoker_cold_snap",
    "name": "Cold Snap",
    "type": "Unit Target+Hidden",
    "dmg": "Magical",
    "desc": "Invoker draws the heat from an enemy, chilling them to their very core for a duration based on the level of Quas. The enemy will take damage and be briefly frozen. Further damage taken in this state will freeze the enemy again, dealing bonus damage. The enemy can only be frozen so often, but the freeze cooldown decreases based on the level of Quas."
   },
   {
    "id": "invoker_ghost_walk",
    "name": "Ghost Walk",
    "type": "No Target+Instant Cast+Hidden",
    "dmg": "",
    "desc": "Invoker manipulates the ice and electrical energies around him, rendering his body invisible and gaining health and mana regen. The elemental imbalance created as a consequence slows nearby enemies based on the level of Quas, and slows Invoker as well based on the level of Wex."
   },
   {
    "id": "invoker_tornado",
    "name": "Tornado",
    "type": "Point Target+Hidden",
    "dmg": "Magical",
    "desc": "Unleashes a fast moving tornado that picks up enemy units in its path, suspending them helplessly in the air shortly before allowing them to plummet to their doom. Travels further based on the level of Wex. Holds enemies in the air for a duration based on the level of Quas. Deals base damage plus added damage based on levels in Wex. DISPEL TYPE: Basic Dispel"
   },
   {
    "id": "invoker_emp",
    "name": "E.M.P.",
    "type": "Point Target+Hidden+AOE",
    "dmg": "Magical",
    "desc": "Invoker builds up a charge of electromagnetic energy at a targeted location which automatically detonates after 2.9 seconds. The detonation covers an area, draining mana based on the level of Wex. Deals damage for each point of mana drained. If EMP drains mana from an enemy hero, Invoker gains 25% of the mana drained."
   },
   {
    "id": "invoker_alacrity",
    "name": "Alacrity",
    "type": "Unit Target+Hidden",
    "dmg": "Physical",
    "desc": "Invoker infuses an ally with an immense surge of energy, increasing their attack speed based on the level of Wex and their damage based on the level of Exort."
   },
   {
    "id": "invoker_chaos_meteor",
    "name": "Chaos Meteor",
    "type": "Point Target+Hidden",
    "dmg": "Magical",
    "desc": "Invoker pulls a flaming meteor from space onto the targeted location. Upon landing, the meteor rolls forward, constantly dealing damage based on the level of Exort, and rolling further based on the level of Wex. Units hit by the meteor will also be set on fire for a short time, receiving additional damage based on the level of Exort."
   },
   {
    "id": "invoker_sun_strike",
    "name": "Sun Strike",
    "type": "Point Target+Hidden+AOE",
    "dmg": "Pure",
    "desc": "Sends a catastrophic ray of fierce energy from the sun at any targeted location, incinerating all enemies standing beneath it once it reaches the earth. Deals damage based on the level of Exort, however this damage is spread evenly over all enemies hit."
   },
   {
    "id": "invoker_forge_spirit",
    "name": "Forge Spirit",
    "type": "No Target+Hidden",
    "dmg": "",
    "desc": "Invoker forges a spirit embodying the strength of fire and fortitude of ice. Damage and armor are based on the level of Exort while attack range, health, and duration are based on the level of Quas. The elemental's scorching attack is capable of melting the armor of enemy heroes. The number of spirits spawned is determined by the lower level of Quas and Exort."
   },
   {
    "id": "invoker_ice_wall",
    "name": "Ice Wall",
    "type": "No Target+Hidden",
    "dmg": "Magical",
    "desc": "Generates a wall of solid ice directly in front of Invoker for a duration based on the level of Quas. The bitter cold emanating from it greatly slows nearby enemies based on the level of Quas and deals damage each second based on the level of Exort."
   },
   {
    "id": "invoker_deafening_blast",
    "name": "Deafening Blast",
    "type": "Point Target+Hidden",
    "dmg": "Magical",
    "desc": "Invoker unleashes a mighty sonic wave in front of him, dealing damage to any enemy unit it collides with based on the level of Exort. The sheer impact from the blast is enough to knock those enemy units back for a duration based on the level of Quas, then disarm their attacks for a duration based on the level of Wex."
   }
  ]
 },
 "silencer": {
  "ln": "Silencer",
  "attr": "int",
  "atk": "Ranged",
  "roles": [
   "Carry",
   "Support",
   "Disabler",
   "Initiator",
   "Nuker"
  ],
  "spells": [
   {
    "id": "silencer_curse_of_the_silent",
    "name": "Arcane Curse",
    "type": "Point Target+AOE",
    "dmg": "Magical",
    "desc": "Curses the target area, dealing damage and causing enemies to take damage over time and slowing their movement speed. Anytime affected enemies cast a spell, the duration is increased. The duration is paused as long as the target is silenced."
   },
   {
    "id": "silencer_glaives_of_wisdom",
    "name": "Glaives of Wisdom",
    "type": "Unit Target+Autocast+Attack Modifier",
    "dmg": "Magical",
    "desc": "Silencer enchants his glaives with his wisdom, stealing his target's Intelligence with each hit and dealing additional damage based on his Intelligence."
   },
   {
    "id": "silencer_last_word",
    "name": "Last Word",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Enchants a target, providing vision of them and causing them to be damaged and silenced if they cast a spell or if the enchantment timer expires. Deals extra damage based on the difference in intelligence between Silencer and the target."
   },
   {
    "id": "silencer_brain_drain",
    "name": "Suffer In Silence",
    "type": "Passive",
    "dmg": "",
    "desc": "Silencer takes less damage from and deals more damage to silenced targets. If an enemy Hero dies within 925 range of Silencer or was debuffed by Silencer at the time of death, Silencer permanently steals 1 Intelligence from them. If the victim was silenced, steal an extra 1 Intelligence."
   },
   {
    "id": "silencer_global_silence",
    "name": "Global Silence",
    "type": "No Target",
    "dmg": "",
    "desc": "Silencer stops all sound, preventing enemy heroes and units on the map from casting spells."
   },
   {
    "id": "silencer_oppressive_silence",
    "name": "Suffer In Silence",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "Silencer takes less damage from and deals more damage to silenced targets."
   }
  ]
 },
 "obsidian_destroyer": {
  "ln": "Outworld Devourer",
  "attr": "int",
  "atk": "Ranged",
  "roles": [
   "Carry",
   "Nuker",
   "Disabler"
  ],
  "spells": [
   {
    "id": "obsidian_destroyer_arcane_orb",
    "name": "Arcane Orb",
    "type": "Unit Target+Autocast+Attack Modifier",
    "dmg": "Pure",
    "desc": "Adds extra pure damage to Outworld Destroyer's attacks, based on his remaining mana pool."
   },
   {
    "id": "obsidian_destroyer_astral_imprisonment",
    "name": "Astral Imprisonment",
    "type": "Unit Target+AOE",
    "dmg": "Magical",
    "desc": "Steals a percentage of the target's max mana and places them into an astral prison. The hidden unit is invulnerable and disabled. When the astral prison implodes, it deals damage to the target."
   },
   {
    "id": "obsidian_destroyer_objurgation",
    "name": "Objurgation",
    "type": "No Target",
    "dmg": "",
    "desc": "Increases Outworld Destroyer's maximum mana. When cast, protects Outworld Destroyer with an all damage barrier equal to a flat amount and a percentage of his maximum mana."
   },
   {
    "id": "obsidian_destroyer_equilibrium",
    "name": "Essence Flux",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "Passively grants a chance to restore a percentage of your max mana each time you cast an ability. Restores less mana from spells that modify attacks."
   },
   {
    "id": "obsidian_destroyer_sanity_eclipse",
    "name": "Sanity's Eclipse",
    "type": "Point Target+AOE",
    "dmg": "Magical",
    "desc": "Unleashes a psychic blast that deals damage to enemies based on the difference between your mana and the target's mana. Sanity's Eclipse can hit units trapped by Astral Imprisonment."
   }
  ]
 },
 "lycan": {
  "ln": "Lycan",
  "attr": "str",
  "atk": "Melee",
  "roles": [
   "Carry",
   "Pusher",
   "Durable",
   "Escape"
  ],
  "spells": [
   {
    "id": "lycan_summon_wolves",
    "name": "Summon Wolves",
    "type": "No Target",
    "dmg": "",
    "desc": "Summons 2 wolves to aid Lycan in battle. At level 3, wolves gain Permanent Invisibility, and at level 4 wolves gain Cripple that gives 20% chance to cripple the target, causing 8 damage per second and lose 60 attack speed for 4 seconds."
   },
   {
    "id": "lycan_howl",
    "name": "Howl",
    "type": "No Target",
    "dmg": "",
    "desc": "Strikes fear into enemies, reducing armor and attack damage of all enemies within 2000 range of Lycan and his wolves. At night, Howl's armor and attack damage reductions are global."
   },
   {
    "id": "lycan_feral_impulse",
    "name": "Feral Impulse",
    "type": "Passive",
    "dmg": "",
    "desc": "Increases the HP regeneration and damage of Lycan and all units under his control."
   },
   {
    "id": "lycan_wolf_bite",
    "name": "Wolf Bite",
    "type": "Unit Target+Hidden",
    "dmg": "",
    "desc": "Lycan bites an allied hero or creep-hero, granting them Shapeshift properties. Lycan and the bitten target gain 40% Lifesteal and share the healing effect of Lifesteal with each other as long as they are within 1200 range of each other."
   },
   {
    "id": "lycan_apex_predator",
    "name": "Apex Predator",
    "type": "Passive",
    "dmg": "",
    "desc": "Lycan and units he controls deal extra damage to neutral creeps."
   },
   {
    "id": "lycan_shapeshift",
    "name": "Shapeshift",
    "type": "No Target",
    "dmg": "",
    "desc": "Lycan assumes his lupine form, granting him critical strikes and added vision at night. During Shapeshift, Lycan moves at increased speed and cannot be slowed. Movement and critical strike bonuses are also applied to all units under Lycan's control."
   }
  ]
 },
 "brewmaster": {
  "ln": "Brewmaster",
  "attr": "all",
  "atk": "Melee",
  "roles": [
   "Carry",
   "Initiator",
   "Durable",
   "Disabler",
   "Nuker"
  ],
  "spells": [
   {
    "id": "brewmaster_thunder_clap",
    "name": "Thunder Clap",
    "type": "No Target",
    "dmg": "Magical",
    "desc": "Slams the ground, dealing damage and slowing the movement speed and attack rate of nearby enemy units."
   },
   {
    "id": "brewmaster_cinder_brew",
    "name": "Cinder Brew",
    "type": "Point Target+AOE",
    "dmg": "Magical",
    "desc": "Rolls a barrel of ale at enemies that damages enemies along its path and spills out at the target location. Any enemy in the path or the spill area is drenched in cinder brew, becoming slowed. If the enemy receives Magic or Pure damage, they will be ignited, extending the duration by 3s and causing them to take damage over time."
   },
   {
    "id": "brewmaster_drunken_brawler",
    "name": "Drunken Brawler",
    "type": "No Target+Instant Cast",
    "dmg": "",
    "desc": "Brewmaster can switch stances based on the elements he controls. Whenever Brewmaster casts an ability, he becomes Brewed Up, increasing his stance power by 150% for 5s. If he casts another ability while Brewed Up, the duration is extended by 2s. After Brewed Up expires, he is hungover and cannot Brew Up again for 9s. Earth Brawler gains bonus Magic Resistance and Armor. Storm Brawler gains bonus Evasion and Movement Speed. Fire Brawler gains bonus Attack Speed and chance to critical strike."
   },
   {
    "id": "brewmaster_liquid_courage",
    "name": "Liquid Courage",
    "type": "Passive+Hidden",
    "dmg": [],
    "desc": "When Brewmaster drops below 50% Health he gains a Status Resistance buff and his movement speed alternates every 1s between being faster and being slower. The effect becomes stronger at lower health, scaling from 0 up to max values at 20% Health."
   },
   {
    "id": "brewmaster_primal_split",
    "name": "Primal Split",
    "type": "No Target",
    "dmg": "",
    "desc": "Splits Brewmaster into elements, forming 3 specialized warriors, adept at survival, each with their own abilities. If any of them survive until the end of their summoned timer, the Brewmaster is reborn. Each Warrior gains its respective Drunken Brawler stance."
   }
  ]
 },
 "shadow_demon": {
  "ln": "Shadow Demon",
  "attr": "int",
  "atk": "Ranged",
  "roles": [
   "Support",
   "Disabler",
   "Initiator",
   "Nuker"
  ],
  "spells": [
   {
    "id": "shadow_demon_disruption",
    "name": "Disruption",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Banishes the targeted unit from the battlefield for a short duration. Upon returning, two illusions of the banished unit with bonus base damage are created under Shadow Demon's control."
   },
   {
    "id": "shadow_demon_disseminate",
    "name": "Disseminate",
    "type": "Unit Target+AOE",
    "dmg": "",
    "desc": "Whenever the target takes damage, all enemies, including the target itself if it is an enemy, within 675 range of the target also receive a portion of that damage. Can target enemy and allied units. Effect is paused if the target is hidden by Disruption."
   },
   {
    "id": "shadow_demon_shadow_poison",
    "name": "Shadow Poison",
    "type": "AOE+Point Target",
    "dmg": "Magical",
    "desc": "Deals damage in a line, and afflicts enemy units with a poison effect. The poison deals 1/2/4/8/16 times the stack damage based on the number of stacks on the target, up to 5 stacks. Additional stacks cause 50 damage each. This deferred damage is dealt when Shadow Poison's duration is expired, or the Release sub-ability is used."
   },
   {
    "id": "shadow_demon_shadow_poison_release",
    "name": "Shadow Poison Release",
    "type": "No Target",
    "dmg": "",
    "desc": "Releases the poison to do damage on all affected enemies. Units under the effect of Disruption can still be affected by Shadow Poison."
   },
   {
    "id": "shadow_demon_demonic_cleanse",
    "name": "Demonic Cleanse",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Cleanses the target allied unit, removing negative buffs for the duration. At the end of the duration, the unit is healed. Units under the effect of Disruption can still be affected by Demonic Cleanse. DISPEL TYPE: Basic Dispel"
   },
   {
    "id": "shadow_demon_demonic_purge",
    "name": "Demonic Purge",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Purges the target enemy unit, removing positive buffs, and slowing the target for the duration. The unit slowly regains its speed until the end of the duration, upon which damage is dealt. Units under the effect of Disruption can still be affected by Demonic Purge. DISPEL TYPE: Basic Dispel"
   },
   {
    "id": "shadow_demon_menace",
    "name": "Menace",
    "type": "Hidden+Passive",
    "dmg": "",
    "desc": "Shadow Demon's Attacks apply a stacking debuff to the enemy for 8 seconds that increases their damage taken."
   }
  ]
 },
 "lone_druid": {
  "ln": "Lone Druid",
  "attr": "agi",
  "atk": "Ranged",
  "roles": [
   "Carry",
   "Pusher",
   "Durable"
  ],
  "spells": [
   {
    "id": "lone_druid_entangle",
    "name": "Entangle",
    "type": "Point Target+AOE",
    "dmg": "Magical",
    "desc": "Allows Lone Druid to Entangle enemies once they gain 5 stacks. Entangled enemies are rooted and take damage over time. When cast, applies 2 stacks to each enemy hero in the area and 5 stacks to enemy creeps. Also empowers Lone Druid for 10s, making him apply 1 stack with each attack on enemy heroes. Enemies cannot gain stacks while Entangled. Leveling this ability also levels Spirit Bear's Entangling Claws ability."
   },
   {
    "id": "lone_druid_spirit_link",
    "name": "Spirit Link",
    "type": "Passive",
    "dmg": "",
    "desc": "Links Lone Druid and the Spirit Bear, increasing their movement speed as well as sharing a percentage of their lifesteal with each other."
   },
   {
    "id": "lone_druid_savage_roar",
    "name": "Savage Roar",
    "type": "No Target",
    "dmg": "",
    "desc": "Lone Druid and the Spirit Bear roar fiercely causing nearby enemies to flee towards their base in terror. Their movement speed is increased by 20%."
   },
   {
    "id": "lone_druid_spirit_bear",
    "name": "Summon Spirit Bear",
    "type": "No Target",
    "dmg": "",
    "desc": "Summons a powerful Spirit Bear companion that can equip items. If the bear moves 1100 distance away from the Lone Druid, it cannot attack. Lone Druid suffers 20% of his max health as backlash damage if the Spirit Bear dies. Spirit Bear has Demolish, Return, Entangling Claws, Savage Roar, and Spirit Link abilities."
   },
   {
    "id": "lone_druid_true_form",
    "name": "True Form",
    "type": "No Target",
    "dmg": "",
    "desc": "Lone Druid morphs himself into a raging bear, losing his ranged advantage, but gaining bonus armor, bonus health, and bonus attack damage."
   }
  ]
 },
 "chaos_knight": {
  "ln": "Chaos Knight",
  "attr": "str",
  "atk": "Melee",
  "roles": [
   "Carry",
   "Disabler",
   "Durable",
   "Pusher",
   "Initiator"
  ],
  "spells": [
   {
    "id": "chaos_knight_chaos_bolt",
    "name": "Chaos Bolt",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Throws a mysterious bolt of energy at the target unit. It stuns for a random duration and deals random damage."
   },
   {
    "id": "chaos_knight_reality_rift",
    "name": "Reality Rift",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Teleports Chaos Knight, any illusions he has, and the target unit to a point along the line between him and the target. The enemy unit has their armor reduced for 6s."
   },
   {
    "id": "chaos_knight_chaos_strike",
    "name": "Chaos Strike",
    "type": "Passive",
    "dmg": "",
    "desc": "Chaos Knight and his illusions' attacks have a chance to deal a critical strike of varying strength with bonus lifesteal. Lifesteal from creeps is reduced."
   },
   {
    "id": "chaos_knight_fundamental_forging",
    "name": "Fundamental Forging",
    "type": "Passive",
    "dmg": "",
    "desc": ""
   },
   {
    "id": "chaos_knight_phantasm",
    "name": "Phantasm",
    "type": "No Target",
    "dmg": "",
    "desc": "Summons several phantasmal copies of the Chaos Knight from alternate dimensions. The phantasms are illusions that deal 100% damage, but take 350% damage. DISPEL TYPE: Basic Dispel"
   }
  ]
 },
 "meepo": {
  "ln": "Meepo",
  "attr": "agi",
  "atk": "Melee",
  "roles": [
   "Carry",
   "Escape",
   "Nuker",
   "Disabler",
   "Initiator",
   "Pusher"
  ],
  "spells": [
   {
    "id": "meepo_earthbind",
    "name": "Earthbind",
    "type": "AOE+Point Target",
    "dmg": "",
    "desc": "Tosses a net at the target point, rooting down all enemy units in an area around it."
   },
   {
    "id": "meepo_poof",
    "name": "Poof",
    "type": "Point Target",
    "dmg": "Magical",
    "desc": "Drawing mystical energies from the earth, a Meepo can teleport to another Meepo or itself after channeling for 1.5 seconds, damaging the enemy in both the departure and arrival locations. If the ability is in alt-cast state, all Meepos will also cast Poof to the target. When cast on the ground, all Meepos except the selected one will Poof to the closest location."
   },
   {
    "id": "meepo_ransack",
    "name": "Ransack",
    "type": "Passive",
    "dmg": "Pure",
    "desc": "Steals health from the enemy with each strike and heals all other Meepos for that amount. Reduced to 60% against creeps."
   },
   {
    "id": "meepo_petrify",
    "name": "Dig",
    "type": "No Target+Hidden",
    "dmg": "",
    "desc": "Digs into the ground for a short duration, dispelling Meepo and causing him to become invulnerable and untargetable for 3s. Restores 25% of his max health over that duration. DISPEL TYPE: Basic Dispel"
   },
   {
    "id": "meepo_megameepo",
    "name": "MegaMeepo",
    "type": "Instant Cast+No Target",
    "dmg": "",
    "desc": "Primary Meepo mounts all other Meepos in a 600 radius around him on top of his shoulders. While in this form, he gains 40% of the other Meepo stats and can Fling them at enemies, dealing damage and slowing them. When cast, Earthbind generates additional nets and Poof deals 50% more damage for each Meepo on top."
   },
   {
    "id": "meepo_divided_we_stand",
    "name": "Divided We Stand",
    "type": "Passive",
    "dmg": "",
    "desc": "Meepo summons another Meepo, which levels up and shares items with the main Meepo. Ability cooldowns are independent, but items share cooldowns between Meepos. Damage, attack speed, health / mana regeneration, mana burn, and proc chance bonuses from items are distributed equally among the amount of Meepos. If any Meepo dies, they all die."
   },
   {
    "id": "meepo_geomancy",
    "name": "Geomancy",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "Meepo grants stacking bonuses to himself and his clones based on their terrain. Each Meepo grants his bonus to the other Meepos. If there is a tree within 250 range, he receives 1 HP regen. If he is standing on dirt, he receives 2% bonus movement speed. If he is in the water, his attacks slow the target by 2% for 2 seconds."
   },
   {
    "id": "meepo_megameepo_fling",
    "name": "MegaMeepo Fling",
    "type": "Unit Target+Hidden",
    "dmg": "Magical",
    "desc": ""
   }
  ]
 },
 "treant": {
  "ln": "Treant Protector",
  "attr": "str",
  "atk": "Melee",
  "roles": [
   "Support",
   "Initiator",
   "Durable",
   "Disabler",
   "Escape"
  ],
  "spells": [
   {
    "id": "treant_natures_grasp",
    "name": "Nature's Grasp",
    "type": "Point Target",
    "dmg": "Magical",
    "desc": "Creates vines towards the target location. Vines slow down and deal damage to enemies that walk through. Does 35% less damage to creeps."
   },
   {
    "id": "treant_leech_seed",
    "name": "Leech Seed",
    "type": "Unit Target+Autocast+Attack Modifier",
    "dmg": "Magical",
    "desc": "Treant's attack plants a life-sapping seed in an enemy unit. That unit takes additional magic damage, is rooted and disarmed for a short duration, and emits 2 healing pulses to up to 5 nearby allies of Treant Protector based on the damage dealt by the attack."
   },
   {
    "id": "treant_living_armor",
    "name": "Living Armor",
    "type": "Unit Target+Point Target",
    "dmg": "",
    "desc": "Infuses the target hero or structure with a protective coating which heals the target and blocks damage from player-controlled sources. Each time this spell blocks damage, the block amount is decreased. If the damage block is decreased to 0, the buff is removed early."
   },
   {
    "id": "treant_eyes_in_the_forest",
    "name": "Eyes In The Forest",
    "type": "Unit Target+Hidden",
    "dmg": "",
    "desc": "Treant Protector enchants a tree, which grants him unobstructed vision in that location. The eyes last for 360 seconds and are invisible, but are destroyed if their host tree is destroyed or if they are attacked directly."
   },
   {
    "id": "treant_natures_guise",
    "name": "Nature's Guise",
    "type": "Passive",
    "dmg": "",
    "desc": "Grants bonus movement speed when near trees. Treant Protector additionally has Tree Walking if he has not taken damage for 2.75 seconds. While Tree Walking, Nature's Guise can be activated to grant Treant invisibility until he attacks or is no longer near a tree."
   },
   {
    "id": "treant_overgrowth",
    "name": "Overgrowth",
    "type": "No Target",
    "dmg": "Magical",
    "desc": "Summons an overgrowth of vines and branches around Treant that deal damage to afflicted enemies and prevent them from moving, blinking, going invisible, or attacking."
   }
  ]
 },
 "ogre_magi": {
  "ln": "Ogre Magi",
  "attr": "str",
  "atk": "Melee",
  "roles": [
   "Support",
   "Nuker",
   "Disabler",
   "Durable",
   "Initiator"
  ],
  "spells": [
   {
    "id": "ogre_magi_fireblast",
    "name": "Fireblast",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Blasts an enemy unit with a wave of fire, dealing damage and stunning the target."
   },
   {
    "id": "ogre_magi_ignite",
    "name": "Ignite",
    "type": "Unit Target+AOE",
    "dmg": "Magical",
    "desc": "Drenches the target and another random unit in volatile chemicals, causing it to burst into flames. The target is in immense pain, taking damage and moving more slowly."
   },
   {
    "id": "ogre_magi_bloodlust",
    "name": "Bloodlust",
    "type": "Unit Target+Autocast",
    "dmg": "",
    "desc": "Incites a frenzy in a friendly unit, increasing its movement speed and attack speed. Gives bonus attack speed if cast on Ogre himself. Can be cast on towers."
   },
   {
    "id": "ogre_magi_unrefined_fireblast",
    "name": "Unrefined Fireblast",
    "type": "Unit Target+Hidden",
    "dmg": "Magical",
    "desc": "Blasts an enemy unit with a wave of fire, dealing 150 + 1.5x Ogre's Strength in damage and stunning the target. Its mana cost is 35% of Ogre Magi's current mana."
   },
   {
    "id": "ogre_magi_smash",
    "name": "Fire Shield",
    "type": "Unit Target+Hidden",
    "dmg": "Magical",
    "desc": "Creates a shield around the target ally, absorbing a percentage of the damage of next 3 attacks from enemy heroes. When damage is absorbed, a fireball is launched at the attacker. Can be cast on towers."
   },
   {
    "id": "ogre_magi_dumb_luck",
    "name": "Dumb Luck",
    "type": "Passive+Hidden",
    "dmg": [],
    "desc": ""
   },
   {
    "id": "ogre_magi_multicast",
    "name": "Multicast",
    "type": "Passive",
    "dmg": "",
    "desc": "Enables Ogre Magi to cast his abilities and items multiple times with each use. Each point of Strength adds to Multicast chance. Every 16 Strength adds 1%."
   }
  ]
 },
 "undying": {
  "ln": "Undying",
  "attr": "str",
  "atk": "Melee",
  "roles": [
   "Support",
   "Durable",
   "Disabler",
   "Nuker"
  ],
  "spells": [
   {
    "id": "undying_decay",
    "name": "Decay",
    "type": "AOE+Point Target",
    "dmg": "Magical",
    "desc": "Undying steals strength from all enemy heroes in an area, dealing base damage as he claims the enemy's strength for himself. Deals 2x damage to creeps."
   },
   {
    "id": "undying_soul_rip",
    "name": "Soul Rip",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Undying rips health away from all nearby units and uses it to heal an ally, or damage an enemy. Soul Rip can also be used to heal Tombstone."
   },
   {
    "id": "undying_tombstone",
    "name": "Tombstone",
    "type": "Point Target",
    "dmg": "Physical",
    "desc": "Summons a tombstone at the target point. Zombies will frequently spawn next to every enemy unit in the area around the Tombstone, and attack them. Zombies have the Deathlust ability, which causes their attacks to slow the target, and if the target reaches below a certain amount of health, increases the attack and movement speed of the zombie."
   },
   {
    "id": "undying_ceaseless_dirge",
    "name": "Ceaseless Dirge",
    "type": "Passive",
    "dmg": "",
    "desc": ""
   },
   {
    "id": "undying_flesh_golem",
    "name": "Flesh Golem",
    "type": "No Target+Instant Cast",
    "dmg": "Magical",
    "desc": "Undying transforms into a horrifying flesh golem. While in this state, he gains a percentage increase to strength, bonus movement speed, and causes attacks to slow, apply damage amplification, and spawn Tombstone zombies."
   }
  ]
 },
 "rubick": {
  "ln": "Rubick",
  "attr": "int",
  "atk": "Ranged",
  "roles": [
   "Support",
   "Disabler",
   "Nuker"
  ],
  "spells": [
   {
    "id": "rubick_telekinesis",
    "name": "Telekinesis",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Rubick uses his telekinetic powers to lift the enemy into the air briefly and then hurls them back at the ground. The unit lands on the ground with such force that it stuns nearby enemies."
   },
   {
    "id": "rubick_fade_bolt",
    "name": "Fade Bolt",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Rubick creates a powerful stream of arcane energy that travels between enemy units, dealing damage and reducing their attack and spell damage. Each jump deals less damage."
   },
   {
    "id": "rubick_arcane_supremacy",
    "name": "Arcane Supremacy",
    "type": "Passive",
    "dmg": "",
    "desc": "Rubick's mastery of the arcane allows him to have a larger cast range and bonus spell amplification."
   },
   {
    "id": "rubick_empty1",
    "name": "Stolen Spell",
    "type": "Passive",
    "dmg": "",
    "desc": "Spells acquired with Spell Steal will replace this slot."
   },
   {
    "id": "rubick_empty2",
    "name": "Stolen Spell",
    "type": "Passive",
    "dmg": "",
    "desc": "Spells acquired with Spell Steal will replace this slot."
   },
   {
    "id": "rubick_spell_steal",
    "name": "Spell Steal",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Rubick studies the trace magical essence of one enemy hero, learning the secrets of the last spell the hero cast. Rubick can use this spell as his own for several minutes or until he dies."
   },
   {
    "id": "rubick_telekinesis_land",
    "name": "Telekinesis Land",
    "type": "Point Target+Hidden+Instant Cast+AOE",
    "dmg": "",
    "desc": "Chooses the location the target will land when Telekinesis finishes."
   },
   {
    "id": "rubick_curiosity",
    "name": "Curiosity",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "Rubick gains 1 stack of Curiosity per level that grants him 1 base damage, 0.3% Buff/Debuff Duration, and 2 AOE Bonus. If Rubick sees an enemy Hero cast an ability within 1200 distance of him, he gains 2 Curiosity for 20 seconds. If an enemy Hero dies while Rubick has Curiosity from them and he damaged them in the last 3 seconds, he gains 1 Curiosity permanently."
   },
   {
    "id": "rubick_telekinesis_land_self",
    "name": "Telekinesis Land",
    "type": "Point Target+Hidden+AOE+Instant Cast",
    "dmg": "",
    "desc": "Chooses the location you will land when Telekinesis finishes."
   }
  ]
 },
 "disruptor": {
  "ln": "Disruptor",
  "attr": "int",
  "atk": "Ranged",
  "roles": [
   "Support",
   "Disabler",
   "Nuker",
   "Initiator"
  ],
  "spells": [
   {
    "id": "disruptor_thunder_strike",
    "name": "Thunder Strike",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Repeatedly strikes the targeted unit with lightning. Each strike damages nearby enemy units in a small radius and slows enemy movement and attack speed by 100% for x1.75 seconds. Provides vision of its target."
   },
   {
    "id": "disruptor_glimpse",
    "name": "Glimpse",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Teleports the target hero back to where it was 4 seconds ago. Instantly kills illusions. Deals damage equal to a percentage of the distance glimpsed, that cannot go over a damage maximum."
   },
   {
    "id": "disruptor_kinetic_field",
    "name": "Kinetic Field",
    "type": "Point Target+AOE",
    "dmg": "",
    "desc": "After a short formation time, creates a circular barrier of kinetic energy that enemies can't pass."
   },
   {
    "id": "disruptor_kinetic_fence",
    "name": "Kinetic Fence",
    "type": "Point Target+Hidden",
    "dmg": "",
    "desc": "After a short formation time, creates a wall out of kinetic energy that enemies cannot pass."
   },
   {
    "id": "disruptor_electromagnetic_repulsion",
    "name": "Electromagnetic Repulsion",
    "type": "Passive",
    "dmg": "",
    "desc": "Whenever Disruptor takes more than 250 damage from any source within 400 radius, all nearby enemies within take damage equal to 1.5x of Disruptor's Intelligence, and are pushed back up to a 400 distance away."
   },
   {
    "id": "disruptor_static_storm",
    "name": "Static Storm",
    "type": "Point Target+AOE",
    "dmg": "Magical",
    "desc": "Creates a damaging static storm that also silences all enemy units in the area for the duration. The damage starts off weak, but increases in power over the duration."
   }
  ]
 },
 "nyx_assassin": {
  "ln": "Nyx Assassin",
  "attr": "all",
  "atk": "Melee",
  "roles": [
   "Disabler",
   "Nuker",
   "Initiator",
   "Escape"
  ],
  "spells": [
   {
    "id": "nyx_assassin_impale",
    "name": "Impale",
    "type": "Point Target",
    "dmg": "Magical",
    "desc": "Rock spikes burst from the earth along a straight path. Enemy units take damage, then are hurled into the air and stunned."
   },
   {
    "id": "nyx_assassin_jolt",
    "name": "Mind Flare",
    "type": "Unit Target+AOE",
    "dmg": "Magical",
    "desc": "Deals damage equal to a percentage of the target's Max Mana and burns part of it away. Deals additional damage equal to a percentage of the damage the target has taken from Nyx Assassin in the last 15s. Resets accumulated damage before applying damage."
   },
   {
    "id": "nyx_assassin_spiked_carapace",
    "name": "Spiked Carapace",
    "type": "No Target+Instant Cast",
    "dmg": "",
    "desc": "When activated while above ground, Spiked Carapace reflects and negates damage dealt to Nyx Assassin (max once from each source), as well as stunning the source of the damage. Activating Spiked Carapace will not break Vendetta invisibility. While Burrowed, Spiked Carapace instantly stuns nearby enemies when cast."
   },
   {
    "id": "nyx_assassin_burrow",
    "name": "Burrow",
    "type": "No Target+Hidden",
    "dmg": "",
    "desc": "Nyx Assassin buries himself beneath the battlefield over a short duration. Once burrowed, Spiked Carapace instantly stuns nearby enemies when cast, the range of Mind Flare and Impale is increased, and Impale's cooldown is decreased. While burrowed, Nyx Assassin is stationary, unable to attack, and invisible. Nyx Assassin gains damage reduction from all damage sources."
   },
   {
    "id": "nyx_assassin_neuro_sting",
    "name": "Mana Burn",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "Nyx Assassin's damage on enemies also burns mana as a percentage of the damage dealt."
   },
   {
    "id": "nyx_assassin_vendetta",
    "name": "Vendetta",
    "type": "Instant Cast+No Target",
    "dmg": "Pure",
    "desc": "Nyx Assassin becomes invisible and gains a speed bonus. If Nyx Assassin attacks to break the invisibility, massive bonus damage is dealt with the attack that applies a break to the target. Nyx Assassin has 75 additional attack range and a 70% faster attack animation for this attack."
   },
   {
    "id": "nyx_assassin_unburrow",
    "name": "Unburrow",
    "type": "Hidden+No Target",
    "dmg": "",
    "desc": "Emerge from the burrow."
   }
  ]
 },
 "naga_siren": {
  "ln": "Naga Siren",
  "attr": "agi",
  "atk": "Melee",
  "roles": [
   "Carry",
   "Support",
   "Pusher",
   "Disabler",
   "Initiator",
   "Escape"
  ],
  "spells": [
   {
    "id": "naga_siren_mirror_image",
    "name": "Mirror Image",
    "type": "No Target",
    "dmg": "",
    "desc": "Creates multiple images of Naga Siren under her control. DISPEL TYPE: Basic Dispel"
   },
   {
    "id": "naga_siren_ensnare",
    "name": "Ensnare",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Interrupts the target and traps them in place, preventing movement or blinking. Can target units affected by Song of the Siren."
   },
   {
    "id": "naga_siren_rip_tide",
    "name": "Rip Tide",
    "type": "Passive",
    "dmg": "Magical",
    "desc": "Naga Siren and her illusions deal bonus damage to enemies and reduce their armor for 4 seconds every 6 attacks."
   },
   {
    "id": "naga_siren_reel_in",
    "name": "Reel In",
    "type": "No Target+Channeled",
    "dmg": "",
    "desc": "CHANNELED - Naga Siren channels for up to 5 seconds, pulling all units affected by Naga's Ensnare in a 1600 range towards her at a speed of 200. Channeling ends when the Ensnared unit is 100 distance away."
   },
   {
    "id": "naga_siren_eelskin",
    "name": "Eelskin",
    "type": "Passive",
    "dmg": [],
    "desc": "Naga Siren has bonus evasion, increased per every other Naga Siren within 900 radius."
   },
   {
    "id": "naga_siren_song_of_the_siren",
    "name": "Song of the Siren",
    "type": "No Target",
    "dmg": "",
    "desc": "All enemies in range of the Naga Siren are put into a magical stasis where they cannot act or be attacked. Using Song of the Siren again will end the duration early."
   },
   {
    "id": "naga_siren_song_of_the_siren_cancel",
    "name": "Song of the Siren End",
    "type": "Hidden+No Target",
    "dmg": "",
    "desc": "Release enemy units from your song so they can be targeted again."
   }
  ]
 },
 "keeper_of_the_light": {
  "ln": "Keeper of the Light",
  "attr": "int",
  "atk": "Ranged",
  "roles": [
   "Support",
   "Nuker",
   "Disabler"
  ],
  "spells": [
   {
    "id": "keeper_of_the_light_illuminate",
    "name": "Illuminate",
    "type": "Point Target+Channeled",
    "dmg": "Magical",
    "desc": "CHANNELED - Channels light energy, building power the longer it's channeled. Once released, a wave is sent forth that deals damage and gives vision in its path. The longer it is channeled, the more damage is dealt."
   },
   {
    "id": "keeper_of_the_light_blinding_light",
    "name": "Blinding Light",
    "type": "AOE+Point Target",
    "dmg": "Magical",
    "desc": "A blinding light flashes over the targeted area, knocking back units to the edge of the area and blinding them, causing them to miss some attacks. Minimum knockback distance is 175 range over 0.6 seconds."
   },
   {
    "id": "keeper_of_the_light_chakra_magic",
    "name": "Chakra Magic",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Restores mana to the target unit and reduces cooldowns of all basic abilities currently on cooldown by a fixed amount. Is 30% more effective when used on himself."
   },
   {
    "id": "keeper_of_the_light_radiant_bind",
    "name": "Solar Bind",
    "type": "Unit Target+Hidden",
    "dmg": "",
    "desc": "Weakens an enemy's magical resistance, and applies a slow that increases in strength the more the target moves."
   },
   {
    "id": "keeper_of_the_light_will_o_wisp",
    "name": "Will-O-Wisp",
    "type": "Point Target+AOE+Hidden",
    "dmg": "Magical",
    "desc": "Summons Ignis Fatuus at the targeted area. Alternates on and off, drawing enemies closer with its mesmerising flicker."
   },
   {
    "id": "keeper_of_the_light_spirit_form",
    "name": "Spirit Form",
    "type": "No Target",
    "dmg": "",
    "desc": "Ezalor temporarily turns his body luminescent, gaining cast range, increasing the speed bonus from Bright Speed, and allows Illuminate to be channeled by a separate spirit and heal allies."
   },
   {
    "id": "keeper_of_the_light_illuminate_end",
    "name": "Release Illuminate",
    "type": "No Target+Hidden",
    "dmg": "",
    "desc": "Release the channel early."
   },
   {
    "id": "keeper_of_the_light_bright_speed",
    "name": "Bright Speed",
    "type": "Passive",
    "dmg": "",
    "desc": "Keeper of the Light gains 1 movement speed for every 2.5 Intelligence. Whenever Keeper of the Light moves 300 distance, he leaves behind light that allows him to see 400 range for 3 seconds."
   }
  ]
 },
 "wisp": {
  "ln": "Io",
  "attr": "all",
  "atk": "Ranged",
  "roles": [
   "Support",
   "Escape",
   "Nuker"
  ],
  "spells": [
   {
    "id": "wisp_tether",
    "name": "Tether",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Tethers Io to an allied unit, granting bonus movement speed to both. When Io restores health or mana, the tethered unit gains a portion of that amount. The tether breaks when the allied unit moves too far away, or Io cancels the tether. Tether slows enemies touching it."
   },
   {
    "id": "wisp_spirits",
    "name": "Spirits",
    "type": "No Target+Instant Cast",
    "dmg": "Magical",
    "desc": "Summon five particle spirits that dance in a circle around Io. If a particle collides with an enemy hero, it explodes, damaging all enemy units in an area around it. Creeps take minor damage from touching a particle spirit, but do not cause them to explode. When its duration ends, any remaining Spirits explode."
   },
   {
    "id": "wisp_overcharge",
    "name": "Overcharge",
    "type": "No Target+Instant Cast",
    "dmg": "",
    "desc": "Io gains attack speed, spell amplification, and health regeneration based on max health. If Io is Tethered to an ally, that unit also gains any bonuses granted by Overcharge."
   },
   {
    "id": "wisp_spirits_in",
    "name": "Spirits In",
    "type": "Instant Cast+Hidden",
    "dmg": "",
    "desc": "Sends the spirits closer to you. Can be toggled on and off."
   },
   {
    "id": "wisp_spirits_out",
    "name": "Spirits Out",
    "type": "Instant Cast+Hidden",
    "dmg": "",
    "desc": "Sends the spirits farther away from you. Can be toggled on and off."
   },
   {
    "id": "wisp_relocate",
    "name": "Relocate",
    "type": "Point Target",
    "dmg": "",
    "desc": "Teleports Io and a tethered ally to any location. After the spell expires, Io and the tethered ally will return to their original location. Double-click to teleport to your team's base fountain."
   },
   {
    "id": "wisp_tether_break",
    "name": "Break Tether",
    "type": "Hidden+No Target",
    "dmg": "",
    "desc": "Break the link to the tethered unit."
   },
   {
    "id": "wisp_equilibrium",
    "name": "Equilibrium",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "Io gains outgoing damage amplification the closer it is to full health, and Health Restoration and Healing Amplification the closer it is to zero health."
   }
  ]
 },
 "visage": {
  "ln": "Visage",
  "attr": "all",
  "atk": "Ranged",
  "roles": [
   "Support",
   "Nuker",
   "Durable",
   "Disabler",
   "Pusher"
  ],
  "spells": [
   {
    "id": "visage_grave_chill",
    "name": "Grave Chill",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Visage drains the movement and attack speed of the targeted unit, gaining the drained speed for itself and nearby Familiars."
   },
   {
    "id": "visage_soul_assumption",
    "name": "Soul Assumption",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Visage gathers charges of soul essence each time nearby heroes take more than 100 damage. When the essence is released, it deals base damage as well as damage for each gathered soul charge."
   },
   {
    "id": "visage_gravekeepers_cloak",
    "name": "Gravekeeper's Cloak",
    "type": "Passive",
    "dmg": "",
    "desc": "Visage generates a layered barrier that protects him from damage. If he receives damage from a player, one layer is removed, and takes time to recover. Visage's Familiars are protected by his cloak when within 900 range of him, based on the number of layers Visage has."
   },
   {
    "id": "visage_stone_form_self_cast",
    "name": "Stone Form",
    "type": "No Target+Instant Cast",
    "dmg": "",
    "desc": "Orders the Familiar closest to Visage to cast Stone Form in its current location, turning into stone and smashing into the ground, stunning and damaging all targets in the area. The Familiar becomes invulnerable, and will regain its health very rapidly. After 6 seconds, the Familiar will automatically leave Stone Form. Can be alt-cast to order the closest Familiar to the target location to move there and cast Stone Form."
   },
   {
    "id": "visage_silent_as_the_grave",
    "name": "Silent as the Grave",
    "type": "No Target+Instant Cast",
    "dmg": "",
    "desc": "Visage gains flying movement and bonus movement speed. Upon attacking or casting, the speed and flying movement are lost and Visage and his familiars deal additional attack damage for 2s."
   },
   {
    "id": "visage_summon_familiars",
    "name": "Summon Familiars",
    "type": "No Target+Instant Cast",
    "dmg": "Physical",
    "desc": "Conjures 2 blind Familiars to fight for Visage. Familiars possess the Stone Form ability, that allows them to turn into stone, stunning enemies upon landing. While in Stone Form, Familiars are invulnerable, and rapidly regenerate their health. Familiars grant high bounty when killed. The ability can be cast in the alt-cast state to recall Visages familiars after 4s, during which they cannot attack or act."
   },
   {
    "id": "visage_summon_familiars_stone_form",
    "name": "Stone Form",
    "type": "No Target+Instant Cast",
    "dmg": "Magical",
    "desc": "After a short delay, the Familiar turns into stone and smashes into the ground, stunning and damaging all targets in the area. The Familiar becomes invulnerable, and will regain its health very rapidly. After 6 seconds, the Familiar will automatically leave Stone Form. Can be alt-cast to order the Familiar to move to the target location and cast Stone Form."
   }
  ]
 },
 "slark": {
  "ln": "Slark",
  "attr": "agi",
  "atk": "Melee",
  "roles": [
   "Carry",
   "Escape",
   "Disabler",
   "Nuker"
  ],
  "spells": [
   {
    "id": "slark_dark_pact",
    "name": "Dark Pact",
    "type": "No Target+Instant Cast",
    "dmg": "Magical",
    "desc": "After a short delay, Slark sacrifices some of his life blood, purging most negative debuffs and dealing damage to enemy units around him and to himself. Slark only takes 30% of the damage. DISPEL TYPE: Strong Dispel"
   },
   {
    "id": "slark_pounce",
    "name": "Pounce",
    "type": "No Target",
    "dmg": "Magical",
    "desc": "Slark leaps forward, leashing and applying Essence Shift stacks to the first hero he connects. That unit can only move a limited distance away from Slark's landing position."
   },
   {
    "id": "slark_saltwater_shiv",
    "name": "Saltwater Shiv",
    "type": "Unit Target+Attack Modifier+Autocast",
    "dmg": "Physical",
    "desc": "Slark slices the target with his salty shiv, stealing a portion of the target's movement speed, Health Regen and Health Restoration. These effects stack independently."
   },
   {
    "id": "slark_depth_shroud",
    "name": "Depth Shroud",
    "type": "Point Target+AOE+Hidden",
    "dmg": "",
    "desc": "Creates a cloud at the target location. All allies inside the radius are hidden and affected by Shadow Dance."
   },
   {
    "id": "slark_essence_shift",
    "name": "Essence Shift",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "Slark steals the life essence of enemy heroes with his attacks, draining 1 of each of their attributes and converting them to bonus 3 Agility. If Slark kills an affected enemy hero, he permanently steals 1 Agility."
   },
   {
    "id": "slark_shadow_dance",
    "name": "Shadow Dance",
    "type": "Instant Cast+No Target",
    "dmg": "",
    "desc": "When not visible to the enemy team, Slark passively gains bonus movement speed and health regeneration. If Slark is damaged by a neutral unit, the passive movement and health regeneration bonuses are lost for 2 seconds. When activated, Slark hides himself in a cloud of shadows, becoming immune to detection. Attacking, casting spells, and using items will not reveal Slark, but enemies can see the cloud itself."
   }
  ]
 },
 "medusa": {
  "ln": "Medusa",
  "attr": "agi",
  "atk": "Ranged",
  "roles": [
   "Carry",
   "Disabler",
   "Durable"
  ],
  "spells": [
   {
    "id": "medusa_split_shot",
    "name": "Split Shot",
    "type": "No Target+Instant Cast",
    "dmg": "",
    "desc": "Medusa magically splits her shot into several arrows. These arrows deal a lower percent of her normal damage.The extra targets will not receive other attack effects (such as critical strike)."
   },
   {
    "id": "medusa_mystic_snake",
    "name": "Mystic Snake",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "A mystic snake made of energy jumps from target to target dealing damage. Damage and speed increases with each jump. After it reaches its last target, it returns to Medusa to replenish her with mana. The snake returns a percentage of the targets' total mana."
   },
   {
    "id": "medusa_gorgon_grasp",
    "name": "Gorgon's Grasp",
    "type": "AOE+Point Target",
    "dmg": "Physical",
    "desc": "Medusa fires arrows in a line that land in 3 groups, with each grouping larger than the previous. Enemies struck by a volley of arrows take an initial burst of damage and then are rooted, cannot turn, are revealed to the enemy, and take damage per second."
   },
   {
    "id": "medusa_cold_blooded",
    "name": "Cold Blooded",
    "type": "Passive+Hidden",
    "dmg": "Magical",
    "desc": "When Medusa is targeted with a spell, a single-target Mystic Snake is sent back towards the enemy that turns them into stone for 1s."
   },
   {
    "id": "medusa_mana_shield",
    "name": "Mana Shield",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "Creates a shield that absorbs 98% of incoming damage in exchange for Medusa's mana. Illusions absorb 60% less damage per point of mana."
   },
   {
    "id": "medusa_stone_gaze",
    "name": "Stone Gaze",
    "type": "No Target",
    "dmg": "",
    "desc": "Any enemy units looking at Medusa will have their movement and attack speed slowed. If 2 seconds of total time is accumulated looking at Medusa while Stone Gaze is active, that unit will turn to stone. Petrified units are stunned, and take bonus physical attack damage."
   }
  ]
 },
 "troll_warlord": {
  "ln": "Troll Warlord",
  "attr": "agi",
  "atk": "Ranged",
  "roles": [
   "Carry",
   "Pusher",
   "Disabler",
   "Durable"
  ],
  "spells": [
   {
    "id": "troll_warlord_switch_stance",
    "name": "Battle Stance",
    "type": "No Target+Instant Cast",
    "dmg": "",
    "desc": "Troll Warlord swaps from using ranged to melee attacks. While melee, Troll Warlord's base attack time is improved to 1.4. Troll Warlord gains 1 armor per 30 bonus attack speed."
   },
   {
    "id": "troll_warlord_whirling_axes_ranged",
    "name": "Whirling Axes (Ranged)",
    "type": "Unit Target+Point Target",
    "dmg": "Magical",
    "desc": "Troll hurls a fistful of five axes in a cone shape over 950 range, slowing and damaging enemy units."
   },
   {
    "id": "troll_warlord_whirling_axes_melee",
    "name": "Whirling Axes (Melee)",
    "type": "No Target+Instant Cast",
    "dmg": "Magical",
    "desc": "Troll hurls two axes around him in a close range area of effect, damaging enemy units and causing them to miss some attacks."
   },
   {
    "id": "troll_warlord_fervor",
    "name": "Fervor",
    "type": "Passive",
    "dmg": "",
    "desc": "With each continuous blow on the same target, Troll gains increased attack speed. If Troll changes targets, the stacks drop to zero."
   },
   {
    "id": "troll_warlord_berserkers_rage",
    "name": "Berserker's Rage",
    "type": "Passive",
    "dmg": "Physical",
    "desc": "While in melee form, Troll Warlord's attacks have a chance to ensnare, preventing the target from moving or using mobility spells and has additional movement speed. When in ranged form, Troll Warlord's attacks have a chance to Maim the target, dealing bonus damage, and slowing the target's movement and attack speed."
   },
   {
    "id": "troll_warlord_battle_trance",
    "name": "Battle Trance",
    "type": "",
    "dmg": "",
    "desc": "Troll unleashes a powerful battle trance, that forces you to continuously attack the closest enemy unit within 900 range, prioritizing heroes. Damage does not kill you during this mode. Grants you bonus lifesteal, attack speed and movement speed. Applies a Basic Dispel. DISPEL TYPE: Basic Dispel"
   }
  ]
 },
 "centaur": {
  "ln": "Centaur Warrunner",
  "attr": "str",
  "atk": "Melee",
  "roles": [
   "Durable",
   "Initiator",
   "Disabler",
   "Nuker",
   "Escape"
  ],
  "spells": [
   {
    "id": "centaur_hoof_stomp",
    "name": "Hoof Stomp",
    "type": "No Target+Instant Cast",
    "dmg": "Magical",
    "desc": "After a brief windup, Centaur Warrunner slams the ground, stunning and damaging nearby enemy units. During the delay, he is disarmed but can move."
   },
   {
    "id": "centaur_double_edge",
    "name": "Double Edge",
    "type": "Unit Target+AOE",
    "dmg": "Magical",
    "desc": "Centaur strikes a mighty blow at melee range, damaging both himself and a small area around the target. Deals extra damage based on your strength. Centaur cannot die from Double Edge."
   },
   {
    "id": "centaur_return",
    "name": "Retaliate",
    "type": "Passive",
    "dmg": "Physical",
    "desc": "Centaur counters all attacks, dealing damage back to the attacker. Returns a fixed amount plus a percentage of your strength. Deals half damage to towers."
   },
   {
    "id": "centaur_work_horse",
    "name": "Work Horse",
    "type": "No Target",
    "dmg": "",
    "desc": "Centaur hitches a cart behind him. While active, Centaur gains the benefit of Stampede for the current level of Stampede, and can cast Hitch a Ride on a target ally."
   },
   {
    "id": "centaur_mount",
    "name": "Hitch A Ride",
    "type": "Unit Target+Hidden",
    "dmg": "",
    "desc": "Centaur tosses an ally into a cart hitched behind him. While in the cart, the ally is invulnerable and can still cast and attack normally, but cannot move independently or be targeted by opponents. Increases the attack range of melee heroes by 200."
   },
   {
    "id": "centaur_stampede",
    "name": "Stampede",
    "type": "No Target+Instant Cast",
    "dmg": "Magical",
    "desc": "Centaur leads all allies into a vicious charge causing them to move through units at max speed and slow any enemy units they trample. Trampled enemies take damage based on Centaur Warrunner's strength. Each enemy can be trampled once."
   },
   {
    "id": "centaur_horsepower",
    "name": "Horsepower",
    "type": "Passive",
    "dmg": "",
    "desc": "Centaur Warrunner gains 30% of his strength as bonus movement speed. This Movement speed bonus does not stack with bonuses from boots."
   }
  ]
 },
 "magnataur": {
  "ln": "Magnus",
  "attr": "all",
  "atk": "Melee",
  "roles": [
   "Initiator",
   "Disabler",
   "Nuker",
   "Escape"
  ],
  "spells": [
   {
    "id": "magnataur_shockwave",
    "name": "Shockwave",
    "type": "Unit Target+Point Target",
    "dmg": "Magical",
    "desc": "Magnus sends out a wave of force, damaging enemy units in a line, pulling them towards him, and slowing them for a brief period."
   },
   {
    "id": "magnataur_empower",
    "name": "Empower",
    "type": "Unit Target",
    "dmg": "",
    "desc": "When cast on an ally, grants them bonus damage and cleave on attack. Empower is always on Magnus with 30% larger bonus."
   },
   {
    "id": "magnataur_skewer",
    "name": "Skewer",
    "type": "Point Target",
    "dmg": "Magical",
    "desc": "Magnus rushes forward, goring enemy units on his massive tusk. Heroes hit on the way will be dragged to the destination, then damaged and affected by slowed movement speed. The damage is increased based on distance traveled."
   },
   {
    "id": "magnataur_horn_toss",
    "name": "Horn Toss",
    "type": "No Target+Hidden",
    "dmg": "Magical",
    "desc": "Magnus tosses any enemies in front of him, launching them to his rear. Enemies take damage, spend 0.6 seconds in the air, and are stunned while in the air and an additional amount of time after landing."
   },
   {
    "id": "magnataur_solid_core",
    "name": "Solid Core",
    "type": "Passive+Hidden",
    "dmg": [],
    "desc": "Magnus has increased slow resistance and suffers less knockback from enemy's abilities and items."
   },
   {
    "id": "magnataur_reverse_polarity",
    "name": "Reverse Polarity",
    "type": "No Target",
    "dmg": "Magical",
    "desc": ""
   }
  ]
 },
 "shredder": {
  "ln": "Timbersaw",
  "attr": "str",
  "atk": "Melee",
  "roles": [
   "Nuker",
   "Durable",
   "Escape"
  ],
  "spells": [
   {
    "id": "shredder_whirling_death",
    "name": "Whirling Death",
    "type": "No Target+Instant Cast",
    "dmg": "Pure",
    "desc": "Timbersaw whirls extremely sharp edges, damaging enemies and destroying trees around him in an area. If an enemy hero is affected, it loses some of its primary attribute for a short duration. Whirling Death will deal bonus damage per tree destroyed."
   },
   {
    "id": "shredder_timber_chain",
    "name": "Timber Chain",
    "type": "Point Target",
    "dmg": "Pure",
    "desc": "Timbersaw fires a chain that embeds itself in the first tree it hits, pulling him towards it. Any enemy in the path takes damage."
   },
   {
    "id": "shredder_reactive_armor",
    "name": "Reactive Armor",
    "type": "Passive",
    "dmg": "Magical",
    "desc": "Each time Timbersaw is attacked, he gains increased health regen and armor. Hero attacks are counted as 4x the amount."
   },
   {
    "id": "shredder_flamethrower",
    "name": "Flamethrower",
    "type": "No Target+Instant Cast+Hidden",
    "dmg": "Magical",
    "desc": "Releases a flame in the direction Timbersaw is facing. Applies a debuff that deals damage per second and slows enemy movement speed. Affects buildings for reduced damage."
   },
   {
    "id": "shredder_chakram",
    "name": "Chakram",
    "type": "Point Target+AOE",
    "dmg": "Pure",
    "desc": "Fires Timbersaw's main saw blade at the target location where it will spin in place, dealing damage in an area around it. Enemies caught in the saw blade will move more slowly for every 5% of health missing. The blade deals damage and cuts down trees in its path when fired and retracted. While active the ability costs mana, and Timbersaw loses the ability to attack."
   },
   {
    "id": "shredder_return_chakram",
    "name": "Return Chakram",
    "type": "No Target+Instant Cast+Hidden",
    "dmg": "",
    "desc": "Returns the Chakram to Timbersaw."
   },
   {
    "id": "shredder_exposure_therapy",
    "name": "Exposure Therapy",
    "type": "Passive",
    "dmg": "",
    "desc": "Whenever Timbersaw destroys a tree, he gains mana."
   }
  ]
 },
 "bristleback": {
  "ln": "Bristleback",
  "attr": "str",
  "atk": "Melee",
  "roles": [
   "Carry",
   "Durable",
   "Initiator",
   "Nuker"
  ],
  "spells": [
   {
    "id": "bristleback_viscous_nasal_goo",
    "name": "Viscous Nasal Goo",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Covers a target in snot, causing it to have reduced armor and movement speed for 5 seconds. Multiple casts stack and refresh the duration."
   },
   {
    "id": "bristleback_quill_spray",
    "name": "Quill Spray",
    "type": "No Target+Instant Cast+Autocast",
    "dmg": "Physical",
    "desc": "Sprays enemy units with quills dealing damage in an area of effect around Bristleback. Deals bonus damage for every time a unit was hit by Quill Spray in the last 14 seconds."
   },
   {
    "id": "bristleback_bristleback",
    "name": "Bristleback",
    "type": "Passive",
    "dmg": "",
    "desc": "Bristleback takes less damage if hit on the sides or rear. If Bristleback takes enough damage from the rear, he releases a Quill Spray of the current level."
   },
   {
    "id": "bristleback_hairball",
    "name": "Hairball",
    "type": "Point Target+AOE+Hidden",
    "dmg": "",
    "desc": "Coughs a quill-packed hairball towards the target location. Erupts at the location, hitting enemies with Viscous Nasal Goo stacks and Quill Spray."
   },
   {
    "id": "bristleback_warpath",
    "name": "Warpath",
    "type": "Passive",
    "dmg": "",
    "desc": "Bristleback works himself up into a fury every time he casts a spell, increasing his movement speed and damage."
   },
   {
    "id": "bristleback_prickly",
    "name": "Prickly",
    "type": "Passive",
    "dmg": "Physical",
    "desc": "Bristleback has bonus damage and debuff duration amp against enemy heroes that are behind him."
   }
  ]
 },
 "tusk": {
  "ln": "Tusk",
  "attr": "str",
  "atk": "Melee",
  "roles": [
   "Initiator",
   "Disabler",
   "Nuker"
  ],
  "spells": [
   {
    "id": "tusk_ice_shards",
    "name": "Ice Shards",
    "type": "Point Target",
    "dmg": "Magical",
    "desc": "Tusk compresses shards of ice into a ball of frozen energy that damages all enemies it comes in contact with. When the ball reaches its target destination the shards are released, creating a barrier that lasts for 4 seconds."
   },
   {
    "id": "tusk_snowball",
    "name": "Snowball",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Tusk begins rolling into a snowball. Allies within a 325 radius can also be added to the snowball by right-clicking on them, even while the snowball is moving. Once launched, any enemies caught in the snowball's path will be stunned and take damage. Each allied Hero in the snowball will add to its damage and stun duration."
   },
   {
    "id": "tusk_tag_team",
    "name": "Tag Team",
    "type": "No Target+Instant Cast",
    "dmg": "Physical",
    "desc": "Activate to temporarily apply a negative debuff aura around you, causing enemies that are attacked under it to take bonus physical damage and reduced movement speed. Lasts 6 seconds."
   },
   {
    "id": "tusk_drinking_buddies",
    "name": "Drinking Buddies",
    "type": "",
    "dmg": "",
    "desc": "Tusk reaches out to tag an allied unit, pulling them closer. Once tagged, both Tusk and his tagged ally gain movement speed and armor. Can be put on alt-cast to only pull Tusk towards his ally with 50% reduced cast range."
   },
   {
    "id": "tusk_walrus_kick",
    "name": "Walrus Kick",
    "type": "Unit Target+Hidden",
    "dmg": "Magical",
    "desc": "Kicks the closest enemy unit in the drawn direction, stunning, damaging, and slowing them. Also deals damage to all heroes within 250 radius of its landing area. Cooldown is reduced by 50% if kicking a creep."
   },
   {
    "id": "tusk_walrus_punch",
    "name": "Walrus PUNCH!",
    "type": "Unit Target+Autocast+Attack Modifier",
    "dmg": "",
    "desc": "Tusk connects with his mighty Walrus Punch, a critical strike with bonus damage so powerful it launches its victim into the air."
   },
   {
    "id": "tusk_launch_snowball",
    "name": "Launch Snowball",
    "type": "Hidden+No Target+Instant Cast",
    "dmg": "",
    "desc": "Launch the snowball toward the target."
   },
   {
    "id": "tusk_bitter_chill",
    "name": "Bitter Chill",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "Passively slows the attack speed of all enemy heroes within a 350 unit radius."
   }
  ]
 },
 "skywrath_mage": {
  "ln": "Skywrath Mage",
  "attr": "int",
  "atk": "Ranged",
  "roles": [
   "Support",
   "Nuker",
   "Disabler"
  ],
  "spells": [
   {
    "id": "skywrath_mage_arcane_bolt",
    "name": "Arcane Bolt",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Skywrath Mage launches a slow-moving bolt of arcane magic, dealing damage to an enemy unit based on Skywrath Mage's intelligence."
   },
   {
    "id": "skywrath_mage_concussive_shot",
    "name": "Concussive Shot",
    "type": "No Target",
    "dmg": "Magical",
    "desc": "Skywrath Mage sets off a long range shot that hits the closest hero within a long range. Upon impact, it deals damage and slows in an area of effect."
   },
   {
    "id": "skywrath_mage_ancient_seal",
    "name": "Ancient Seal",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Skywrath Mage seals the targeted unit with an ancient rune, silencing it and causing it to take additional damage from spells."
   },
   {
    "id": "skywrath_mage_shield_of_the_scion",
    "name": "Shield of the Scion",
    "type": "Hidden+Passive",
    "dmg": "",
    "desc": "Every time Skywrath Mage deals magical damage to an enemy hero with his abilities, he gains a small magic damage barrier. Each buff stacks independently."
   },
   {
    "id": "skywrath_mage_mystic_flare",
    "name": "Mystic Flare",
    "type": "Point Target+AOE",
    "dmg": "Magical",
    "desc": "Skywrath Mage uses his ultimate magical ability to conjure a precise and violent mystical field that lays waste to his adversaries. Deals massive damage distributed evenly among any Heroes in the area over 2 seconds."
   }
  ]
 },
 "abaddon": {
  "ln": "Abaddon",
  "attr": "all",
  "atk": "Melee",
  "roles": [
   "Support",
   "Carry",
   "Durable"
  ],
  "spells": [
   {
    "id": "abaddon_death_coil",
    "name": "Mist Coil",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Abaddon releases a coil of deathly mist that can damage an enemy unit or heal a friendly unit at the cost of some of Abaddon's health."
   },
   {
    "id": "abaddon_aphotic_shield",
    "name": "Aphotic Shield",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Summons dark energies around an ally unit, dispelling them and creating an all damage barrier that absorbs a set amount of damage before expiring. When the barrier is destroyed it will burst and deal damage equal to the amount it could absorb to an area around it. DISPEL TYPE: Strong Dispel"
   },
   {
    "id": "abaddon_frostmourne",
    "name": "Curse of Avernus",
    "type": "Passive",
    "dmg": "Magical",
    "desc": "Abaddon strikes an enemy, affecting them by a chilling curse, slowing them, causing them to take damage over time, and all attacks against them gain an attack speed boost. Damage over time component to buildings is reduced by 100%."
   },
   {
    "id": "abaddon_withering_mist",
    "name": "Withering Mist",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "Damaging enemies applies the Withering Mist debuff for 5s. Affected enemies have their Health Restoration reduced by 24.5% if they are below 40% HP."
   },
   {
    "id": "abaddon_borrowed_time",
    "name": "Borrowed Time",
    "type": "No Target+Instant Cast",
    "dmg": "",
    "desc": "When activated, dispels you and all damage dealt to you will heal instead of harm. If the ability is not on cooldown, it will automatically activate if your health falls below 400. DISPEL TYPE: Strong Dispel"
   }
  ]
 },
 "elder_titan": {
  "ln": "Elder Titan",
  "attr": "str",
  "atk": "Melee",
  "roles": [
   "Initiator",
   "Disabler",
   "Nuker",
   "Durable"
  ],
  "spells": [
   {
    "id": "elder_titan_echo_stomp",
    "name": "Echo Stomp",
    "type": "No Target+Channeled",
    "dmg": "Physical",
    "desc": "CHANNELED - Elder Titan and his Astral Spirit both stomp the ground, damaging and knocking nearby enemy units unconscious around their locations. The Elder Titan stomp deals physical damage, while the Spirit stomp deals magical damage."
   },
   {
    "id": "elder_titan_ancestral_spirit",
    "name": "Astral Spirit",
    "type": "Point Target+AOE",
    "dmg": "Magical",
    "desc": "Elder Titan sends forth his Astral Spirit, damaging any units it passes through. When the spirit rejoins the Titan, it grants bonus damage and movement speed for each unit it passed through. The Astral Spirit possesses the Echo Stomp, Return Spirit, and Natural Order abilities."
   },
   {
    "id": "elder_titan_natural_order",
    "name": "Natural Order",
    "type": "Passive",
    "dmg": "",
    "desc": "Reduces all elements to their basic levels, removing base armor and magic damage resistance from nearby enemy units. The armor reduction is centered around the hero, while the magic armor reduction is centered around Astral Spirit."
   },
   {
    "id": "elder_titan_move_spirit",
    "name": "Move Astral Spirit",
    "type": "Instant Cast+Point Target+Hidden",
    "dmg": "",
    "desc": "Moves the Astral Spirit to target location."
   },
   {
    "id": "elder_titan_momentum",
    "name": "Momentum",
    "type": "Passive",
    "dmg": "",
    "desc": "Elder Titan gains armor equal to a percentage of his bonus movement speed."
   },
   {
    "id": "elder_titan_earth_splitter",
    "name": "Earth Splitter",
    "type": "Point Target",
    "dmg": "Magical",
    "desc": "Sends forth a jagged crack in front of Elder Titan. After 3 seconds, the crack implodes, slowing movement while dealing damage to each enemy based on their maximum life. Half of the damage dealt is Magical damage, while the other half is Physical damage."
   },
   {
    "id": "elder_titan_return_spirit",
    "name": "Return Astral Spirit",
    "type": "Instant Cast+No Target+Hidden",
    "dmg": "",
    "desc": "Returns the Astral Spirit to Elder Titan."
   }
  ]
 },
 "legion_commander": {
  "ln": "Legion Commander",
  "attr": "str",
  "atk": "Melee",
  "roles": [
   "Carry",
   "Disabler",
   "Initiator",
   "Durable",
   "Nuker"
  ],
  "spells": [
   {
    "id": "legion_commander_overwhelming_odds",
    "name": "Overwhelming Odds",
    "type": "AOE+No Target",
    "dmg": "Magical",
    "desc": "Turns the foes' numbers against them, dealing a 100% impact slow for 0.3s and damage to all enemies in the area. Damage increases with each enemy unit or hero in the area, and grants Legion Commander bonus attack speed."
   },
   {
    "id": "legion_commander_press_the_attack",
    "name": "Press The Attack",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Removes debuffs and disables from the target friendly unit, and grants bonus movement speed and health regen for a short time. DISPEL TYPE: Strong Dispel"
   },
   {
    "id": "legion_commander_moment_of_courage",
    "name": "Moment of Courage",
    "type": "Passive",
    "dmg": "",
    "desc": "When attacked a number of times, Legion Commander will counter-attack her target with bonus lifesteal."
   },
   {
    "id": "legion_commander_outfight_them",
    "name": "Outfight Them!",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "Passively grants Legion Commander armor. If Legion or an allied Hero within 1200 range casts an ability, they gain bonus armor for 6s; allies gain 50% of the value. This bonus stacks independently."
   },
   {
    "id": "legion_commander_duel",
    "name": "Duel",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Legion Commander and the target enemy hero are forced to attack each other for a short duration. Neither hero can use items, and the target enemy hero cannot use abilities. If either hero dies during the duration, the hero winning the Duel gains permanent bonus damage."
   }
  ]
 },
 "techies": {
  "ln": "Techies",
  "attr": "all",
  "atk": "Ranged",
  "roles": [
   "Nuker",
   "Disabler"
  ],
  "spells": [
   {
    "id": "techies_sticky_bomb",
    "name": "Sticky Bomb",
    "type": "Point Target+AOE",
    "dmg": "Magical",
    "desc": "Lobs a Sticky Bomb towards the target area. If it lands next to an enemy hero, the bomb will stick to it, slowing its movement speed. After a few seconds the bomb will explode, dealing damage in an area around the detonation and applying a secondary slow for 3 seconds."
   },
   {
    "id": "techies_reactive_tazer",
    "name": "Reactive Tazer",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Techies trigger an electric charge on the target ally, giving them bonus movement speed for a short period of time. Enemies attacking the target take damage and are temporarily disarmed and get a Basic Dispel. At the end of the effect or if detonated early with the sub-ability, the charge explodes, disarming all enemies within the radius and dealing damage."
   },
   {
    "id": "techies_suicide",
    "name": "Blast Off!",
    "type": "Point Target+AOE",
    "dmg": "Magical",
    "desc": "Techies hurtle themselves into the enemy's midst, detonating charges upon impact which deal massive area of effect damage and stun enemies. Upon landing, the assault deals Techies non-lethal damage equal to a percentage of their current health."
   },
   {
    "id": "techies_mutually_assured_destruction",
    "name": "M.A.D.",
    "type": "Passive+Hidden",
    "dmg": "Magical",
    "desc": "Techies gain a percentage of their mana pool as bonus mana regeneration. When Techies die, they leave behind a barrel that explodes after 1.5s, damaging enemies in an area around it. Damage is based on Techies' max mana."
   },
   {
    "id": "techies_minefield_sign",
    "name": "Minefield Sign",
    "type": "Point Target+AOE+Hidden",
    "dmg": [],
    "desc": "Plant a warning sign, causing Proximity Mines within its radius to be invulnerable and deal 15% more damage. Only one sign can exist at a time. Lasts 240 seconds. When an enemy Hero walks within 200 units of a minefield sign, the 1000 units area around the sign will become a minefield for 10 seconds, dealing damage to enemy Heroes any time they move within its area. Minefield Sign is destroyed after this effect ends."
   },
   {
    "id": "techies_land_mines",
    "name": "Proximity Mines",
    "type": "Point Target+AOE",
    "dmg": "Magical",
    "desc": "Plant an invisible mine that cannot be detected by True Sight, but is visible if an enemy is within the active 500 AoE of the mine. Mines detonate if an enemy is standing within the active AoE for 1 seconds dealing damage and temporarily reducing the enemy's Magic Resistance. The explosion deals full damage if the target is within 150 radius and decreases up to 60% on the edge. Deals 30% damage to buildings."
   },
   {
    "id": "techies_reactive_tazer_stop",
    "name": "Detonate Tazer",
    "type": "No Target+Hidden+Instant Cast",
    "dmg": "",
    "desc": "Detonate Reactive Tazer immediately."
   },
   {
    "id": "techies_focused_detonate",
    "name": "Detonate M.A.D.",
    "type": "No Target+AOE+Instant Cast+Hidden",
    "dmg": "Magical",
    "desc": "Detonate your planted M.A.D."
   }
  ]
 },
 "ember_spirit": {
  "ln": "Ember Spirit",
  "attr": "agi",
  "atk": "Melee",
  "roles": [
   "Carry",
   "Escape",
   "Nuker",
   "Disabler",
   "Initiator"
  ],
  "spells": [
   {
    "id": "ember_spirit_searing_chains",
    "name": "Searing Chains",
    "type": "No Target",
    "dmg": "Magical",
    "desc": "Ember Spirit unleashes fiery bolas that wrap around nearby enemies, anchoring them in place and dealing damage each second."
   },
   {
    "id": "ember_spirit_sleight_of_fist",
    "name": "Sleight of Fist",
    "type": "Point Target+AOE",
    "dmg": "Physical",
    "desc": "Ember Spirit dashes around with blazing speed, attacking all enemies in the targeted area of effect, then returning to his start location. Deals bonus damage to heroes."
   },
   {
    "id": "ember_spirit_flame_guard",
    "name": "Flame Guard",
    "type": "No Target",
    "dmg": "Magical",
    "desc": "Ember Spirit surrounds himself with a ring of fire that consumes incoming magic damage, absorbing a percentage of the damage taken. Flame Guard deals damage per second in an area around Ember Spirit while Flame Guard is active. If the shield is broken, the damage is also lost."
   },
   {
    "id": "ember_spirit_activate_fire_remnant",
    "name": "Activate Fire Remnant",
    "type": "Point Target",
    "dmg": "Magical",
    "desc": "Select the Fire Remnant to arrive at."
   },
   {
    "id": "ember_spirit_immolation",
    "name": "Immolation",
    "type": "Passive",
    "dmg": "Magical",
    "desc": "Ember Spirit is continuously burning, dealing damage per second to all nearby enemies at all times."
   },
   {
    "id": "ember_spirit_fire_remnant",
    "name": "Fire Remnant",
    "type": "Point Target",
    "dmg": "Magical",
    "desc": "Sends a Fire Remnant that runs to the target location at 250% Ember Spirit's speed. Using Activate Fire Remnant, Ember Spirit will dash out to all active Fire Remnants, destroying them and dealing damage in an area and then moving to the nearest Remnant. Ember Spirit will end at the Remnant closest to the targeted location."
   }
  ]
 },
 "earth_spirit": {
  "ln": "Earth Spirit",
  "attr": "str",
  "atk": "Melee",
  "roles": [
   "Nuker",
   "Escape",
   "Disabler",
   "Initiator",
   "Durable"
  ],
  "spells": [
   {
    "id": "earth_spirit_boulder_smash",
    "name": "Boulder Smash",
    "type": "Point Target+Unit Target",
    "dmg": "Magical",
    "desc": "Earth Spirit smashes the target enemy or ally, sending them in the direction he is facing. If Earth Spirit targets an area, he will smash the nearest unit in a 200 radius, prioritizing Stone Remnants. The travelling unit or Remnant damages all enemy units it hits. If an enemy is hit by a Stone Remnant, they are also slowed. Stone Remnants travel further than other units."
   },
   {
    "id": "earth_spirit_rolling_boulder",
    "name": "Rolling Boulder",
    "type": "Point Target",
    "dmg": "Magical",
    "desc": "Earth Spirit gathers himself into a boulder and, after a 0.6s delay, rolls toward the target location, dealing 60 + 100% STR damage and stunning enemy units. He will stop if he collides with an enemy hero or is stunned. If he rolls over a Stone Remnant, he will travel further and faster, and stun enemies for longer."
   },
   {
    "id": "earth_spirit_geomagnetic_grip",
    "name": "Geomagnetic Grip",
    "type": "Point Target+Unit Target",
    "dmg": "Magical",
    "desc": "Earth Spirit pulls the target Stone Remnant or Allied Unit. Enemies struck by the gripped target will be silenced. Pulled Remnants also deal damage to struck enemies. Cast range is reduced when targeting an ally."
   },
   {
    "id": "earth_spirit_stone_caller",
    "name": "Stone Remnant",
    "type": "Point Target",
    "dmg": "",
    "desc": "Call a Stone Remnant to the target location. Stone Remnants have no vision and are invulnerable, and can be used with Earth Spirit's abilities. Calling a Stone Remnant consumes a charge, which recharge over time. Stone Remnant has 7 charges. Earth Spirit passively gains 2.5% bonus damage per unused Stone Remnant charge, and gains an additional 7.5% bonus damage for 10s when a Stone Remnant is targeted with an ability (does not stack)."
   },
   {
    "id": "earth_spirit_petrify",
    "name": "Enchant Remnant",
    "type": "Unit Target+Hidden",
    "dmg": "Magical",
    "desc": "Earth Spirit temporarily enchants a hero, granting them the properties of a Stone Remnant. After a short duration the remnant shatters, releasing the hero and damaging nearby enemies. Can be cast on Stone Remnants. Has a 5 second cooldown when used that way. Has a larger cast range when cast on an ally hero."
   },
   {
    "id": "earth_spirit_magnetize",
    "name": "Magnetize",
    "type": "No Target",
    "dmg": "Magical",
    "desc": "Magnetizes units in a small nearby area, causing them to take damage for a short duration. Magnetized heroes cause nearby Stone Remnants to explode, destroying the remnant and refreshing Magnetize's duration on all nearby enemies. This process can repeat multiple times. If an enemy hero is affected by Geomagnetic Grip or Boulder Smash, all magnetized heroes share the effects."
   }
  ]
 },
 "abyssal_underlord": {
  "ln": "Underlord",
  "attr": "str",
  "atk": "Melee",
  "roles": [
   "Support",
   "Nuker",
   "Disabler",
   "Durable",
   "Escape"
  ],
  "spells": [
   {
    "id": "abyssal_underlord_firestorm",
    "name": "Firestorm",
    "type": "Point Target+AOE",
    "dmg": "Magical",
    "desc": "Calls down waves of fire that damage enemy units in the target area, burning for additional damage over time."
   },
   {
    "id": "abyssal_underlord_pit_of_malice",
    "name": "Pit of Malice",
    "type": "Point Target+AOE",
    "dmg": "Magical",
    "desc": "A deadly pit is conjured at the target location; any unit that enters will be damaged and rooted. Each enemy unit within the pit are affected by the root only every 3.6 seconds."
   },
   {
    "id": "abyssal_underlord_atrophy_aura",
    "name": "Atrophy Aura",
    "type": "Passive",
    "dmg": "Physical",
    "desc": "Nearby enemy units are weakened, losing a portion of their base damage. If an enemy dies while under this effect, Underlord gains temporary bonus damage."
   },
   {
    "id": "abyssal_underlord_raid_boss",
    "name": "Invading Force",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "After an allied hero Teleports, they temporarily gain Damage Reduction and Movement Speed. Allies receive 2x bonuses if teleporting via Fiend's Gate."
   },
   {
    "id": "abyssal_underlord_dark_portal",
    "name": "Fiend's Gate",
    "type": "Point Target",
    "dmg": "",
    "desc": "Opens 2 portals, one next to Underlord and one in the target location. Heroes can channel a portal for 3.5 seconds to teleport to the other side. Portals have to be at least 1500 away from each other."
   }
  ]
 },
 "terrorblade": {
  "ln": "Terrorblade",
  "attr": "agi",
  "atk": "Melee",
  "roles": [
   "Carry",
   "Pusher",
   "Nuker"
  ],
  "spells": [
   {
    "id": "terrorblade_reflection",
    "name": "Reflection",
    "type": "Point Target+AOE",
    "dmg": "",
    "desc": "Terrorblade brings forth an invulnerable dark reflection of all enemy heroes in a target area. Affected enemy heroes have movement and attack speeds slowed and attacked by their reflection."
   },
   {
    "id": "terrorblade_conjure_image",
    "name": "Conjure Image",
    "type": "No Target",
    "dmg": "",
    "desc": "Creates an illusion of Terrorblade that deals damage."
   },
   {
    "id": "terrorblade_metamorphosis",
    "name": "Metamorphosis",
    "type": "No Target+Instant Cast",
    "dmg": "Physical",
    "desc": "Terrorblade transforms into a powerful demon with a ranged attack. Any of Terrorblade's illusions that are within 1200 range will also be transformed by Metamorphosis."
   },
   {
    "id": "terrorblade_demon_zeal",
    "name": "Demon Zeal",
    "type": "No Target+Hidden",
    "dmg": "",
    "desc": "Costs part of Terrorblade's current HP to cast, providing Terrorblade and nearby illusions bonus movement, HP Regen and attack speed. Does not affect Reflection illusions. Can't be cast while in Metamorphosis and Metamorphosis will remove Demon Zeal."
   },
   {
    "id": "terrorblade_terror_wave",
    "name": "Terror Wave",
    "type": "No Target+Instant Cast",
    "dmg": "Magical",
    "desc": "Causes a wave to travel outwards in all directions forcing enemy heroes to become Feared upon impact and dealing damage, and grants Terrorblade Metamorphosis for a short time."
   },
   {
    "id": "terrorblade_sunder",
    "name": "Sunder",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Severs the life from both Terrorblade and a target hero, exchanging a percentage of both units' current health. Some health points must remain."
   },
   {
    "id": "terrorblade_dark_unity",
    "name": "Dark Unity",
    "type": "Passive",
    "dmg": "",
    "desc": "Nearby Illusions created by Terrorblade have bonus attack damage."
   }
  ]
 },
 "phoenix": {
  "ln": "Phoenix",
  "attr": "str",
  "atk": "Ranged",
  "roles": [
   "Support",
   "Nuker",
   "Initiator",
   "Escape",
   "Disabler"
  ],
  "spells": [
   {
    "id": "phoenix_icarus_dive",
    "name": "Icarus Dive",
    "type": "Point Target",
    "dmg": "Magical",
    "desc": "Phoenix dives forward in an arc with a fixed distance in the targeted direction, dealing damage over time and slowing the movement speed of any units it comes into contact with, and then orbiting back to its original position. If Phoenix casts Supernova, the dive ends."
   },
   {
    "id": "phoenix_fire_spirits",
    "name": "Fire Spirits",
    "type": "No Target+Instant Cast",
    "dmg": "Magical",
    "desc": "Summons 4 fire spirits that circle around Phoenix. Each spirit can be launched independently at a targeted area of effect. Affected enemy units take damage over time and have their attack speed greatly reduced."
   },
   {
    "id": "phoenix_sun_ray",
    "name": "Sun Ray",
    "type": "Point Target",
    "dmg": "Magical",
    "desc": "Phoenix expels a beam of light at the cost of its own health. The beam damages enemies and heals allies for a base amount plus a percentage of their health. The percentage increases as the beam continues to fire."
   },
   {
    "id": "phoenix_sun_ray_toggle_move",
    "name": "Toggle Movement",
    "type": "No Target+Instant Cast",
    "dmg": "",
    "desc": "Toggles slow forward movement during Sun Ray firing."
   },
   {
    "id": "phoenix_dying_light",
    "name": "Dying Light",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "Phoenix deals 4% of its missing health as magic damage to all enemies in a 400 radius every second."
   },
   {
    "id": "phoenix_supernova",
    "name": "Supernova",
    "type": "No Target",
    "dmg": "Magical",
    "desc": "The Phoenix willingly ends its current life for the chance to be reborn. Transforms into a burning sun that scorches enemies in a huge area. The sun can be destroyed by attacks from enemy Heroes. After 6 seconds the sun explodes, stunning all nearby enemies while restoring Phoenix to full health and mana with refreshed abilities. DISPEL TYPE: Strong Dispel"
   },
   {
    "id": "phoenix_launch_fire_spirit",
    "name": "Launch Fire Spirit",
    "type": "Point Target+AOE+Hidden",
    "dmg": "Magical",
    "desc": "Each fire spirit can be launched independently at a targeted area of effect. Affected enemy units take damage over time and have their attack speed greatly reduced."
   },
   {
    "id": "phoenix_icarus_dive_stop",
    "name": "Stop Icarus Dive",
    "type": "Instant Cast+No Target+Hidden",
    "dmg": "",
    "desc": "Immediately cancels the dive."
   },
   {
    "id": "phoenix_sun_ray_stop",
    "name": "Stop Sun Ray",
    "type": "No Target+Hidden+Instant Cast",
    "dmg": "",
    "desc": "Immediately stops the Sun Ray."
   }
  ]
 },
 "oracle": {
  "ln": "Oracle",
  "attr": "int",
  "atk": "Ranged",
  "roles": [
   "Support",
   "Nuker",
   "Disabler",
   "Escape"
  ],
  "spells": [
   {
    "id": "oracle_fortunes_end",
    "name": "Fortune's End",
    "type": "Unit Target+AOE+Channeled",
    "dmg": "Magical",
    "desc": "CHANNELED - Gathers Oracle's power into a bolt of scouring energy that, when released, damages, roots, and dispels enemies of buffs in an area around the target. If target is an ally it will only dispel debuffs. The root duration increases with channeling time. DISPEL TYPE: Basic Dispel"
   },
   {
    "id": "oracle_fates_edict",
    "name": "Fate's Edict",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Oracle enraptures a target, disarming them and granting them 100% magic damage resistance."
   },
   {
    "id": "oracle_purifying_flames",
    "name": "Purifying Flames",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Burns away impurities, dealing heavy magic damage to the target before causing them to regenerate health over time. The amount of health regenerated over its duration exceeds the amount of initial damage. Can be cast on enemies and allies."
   },
   {
    "id": "oracle_rain_of_destiny",
    "name": "Rain of Destiny",
    "type": "Point Target+AOE",
    "dmg": "Magical",
    "desc": "Brings forth rain to the target area. Enemies standing in the area receive damage and have reduced Heal Amplification. Allies in the area heal and have increased incoming Heal Amplification."
   },
   {
    "id": "oracle_diviners_deck",
    "name": "Diviner's Deck",
    "type": "Passive",
    "dmg": "",
    "desc": ""
   },
   {
    "id": "oracle_false_promise",
    "name": "False Promise",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Temporarily alters an ally's destiny, delaying any healing or damage taken until False Promise ends. Any healing that is delayed by False Promise is amplified. Removes most negative status effects and disables on initial cast. DISPEL TYPE: Strong Dispel"
   },
   {
    "id": "oracle_prognosticate",
    "name": "Prognosticate",
    "type": "Passive",
    "dmg": "",
    "desc": ""
   }
  ]
 },
 "winter_wyvern": {
  "ln": "Winter Wyvern",
  "attr": "int",
  "atk": "Ranged",
  "roles": [
   "Support",
   "Disabler",
   "Nuker"
  ],
  "spells": [
   {
    "id": "winter_wyvern_arctic_burn",
    "name": "Arctic Burn",
    "type": "No Target+Instant Cast",
    "dmg": "Magical",
    "desc": "Winter Wyvern soars upon an arctic wind, granting her unobstructed movement and allowing her to exhale a blistering chill into each attack. While soaring, her attacks travel further and faster, and slow enemies with a magical freeze that strips them of 4% of their current health each second."
   },
   {
    "id": "winter_wyvern_splinter_blast",
    "name": "Splinter Blast",
    "type": "Unit Target+AOE",
    "dmg": "Magical",
    "desc": "Launches a ball of brittle ice toward a unit. The ice shatters on impact, leaving the primary target completely unaffected, while hurling damaging splinters into nearby enemies in a 500 base radius. Enemies struck by these splinters are slowed by 28%."
   },
   {
    "id": "winter_wyvern_cold_embrace",
    "name": "Cold Embrace",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Encases an ally in an icy cocoon, freezing them solid while healing a base amount as well as a percentage of their maximum health each second. The cocoon blocks all physical damage."
   },
   {
    "id": "winter_wyvern_eldwurms_edda",
    "name": "Eldwurm's Edda",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": ""
   },
   {
    "id": "winter_wyvern_winters_curse",
    "name": "Winter's Curse",
    "type": "Unit Target+AOE",
    "dmg": "",
    "desc": "Winter Wyvern dispells then freezes an enemy in place while striking those nearby with a maddening curse which causes them to attack their frozen ally with increased attack speed. The frozen ally and those cursed to attack their ally are immune to all damage from their enemies with the exception of damage from Winter Wyvern or her controlled units."
   }
  ]
 },
 "arc_warden": {
  "ln": "Arc Warden",
  "attr": "all",
  "atk": "Ranged",
  "roles": [
   "Carry",
   "Escape",
   "Nuker"
  ],
  "spells": [
   {
    "id": "arc_warden_flux",
    "name": "Flux",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Infuses a lone enemy unit with swirling, volatile energy, dealing damage over time and slowing the target. The damage is not applied if another enemy unit is near the target."
   },
   {
    "id": "arc_warden_magnetic_field",
    "name": "Magnetic Field",
    "type": "Point Target+AOE",
    "dmg": "",
    "desc": "Arc Warden generates a circular distortion field of magnetic energy. The Magnetic Field grants bonus attack speed and protects allied units within it by evading attacks coming from outside the field. The Magnetic Field pulls runes, and runes inside Magnetic Field automatically activate."
   },
   {
    "id": "arc_warden_spark_wraith",
    "name": "Spark Wraith",
    "type": "Point Target+AOE",
    "dmg": "Magical",
    "desc": "Summons a Spark Wraith that slowly materializes and patrols a targeted area until an enemy comes within its range. Once a target has been found the wraith fuses with them, dealing magical damage and slowing the unit."
   },
   {
    "id": "arc_warden_runic_infusion",
    "name": "Runic Infusion",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "Runes of Power fuse to the Self. Arc Warden gains +1.5 all attributes permanently whenever Arc Warden or the Tempest Double activates a Power Rune."
   },
   {
    "id": "arc_warden_tempest_double",
    "name": "Tempest Double",
    "type": "Point Target",
    "dmg": "",
    "desc": "Briefly refocusing its fractured elements into a single form, the Arc Warden is able to create a perfect electrical duplication of itself. The duplicate can use all of Arc Warden's current items and spells, except most consumables and items that drop on death. The duplicate has separate item and ability cooldowns. The Tempest Double loses its sense of self and fractures over time, becoming slower and less accurate."
   }
  ]
 },
 "monkey_king": {
  "ln": "Monkey King",
  "attr": "agi",
  "atk": "Melee",
  "roles": [
   "Carry",
   "Escape",
   "Disabler",
   "Initiator"
  ],
  "spells": [
   {
    "id": "monkey_king_boundless_strike",
    "name": "Boundless Strike",
    "type": "Point Target",
    "dmg": "Physical",
    "desc": "Monkey King enlarges his staff and slams it against the ground, stunning enemies in a line and damaging them with bonus damage and a critical hit based on his attack. Has True Strike."
   },
   {
    "id": "monkey_king_tree_dance",
    "name": "Tree Dance",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Monkey King jumps to a tree and perches atop it. While perched, he gains the Primal Spring ability-a channeled leap attack. If Monkey King's tree is destroyed, he falls and is stunned for 3s. Taking damage while on the ground puts Tree Dance on cooldown."
   },
   {
    "id": "monkey_king_primal_spring",
    "name": "Primal Spring",
    "type": "Point Target+AOE+Channeled",
    "dmg": "Magical",
    "desc": "CHANNELED - Monkey King springs out from his tree perch, damaging and slowing enemies in the area where he lands. Damage and slow amounts are in proportion to channel duration."
   },
   {
    "id": "monkey_king_jingu_mastery",
    "name": "Jingu Mastery",
    "type": "Passive",
    "dmg": "Physical",
    "desc": "Monkey King's attacks awaken the Jingu Bang's power. Upon the fourth hit on the same enemy hero, Monkey King earns 4 charged attacks that have bonus damage and lifesteal."
   },
   {
    "id": "monkey_king_mischief",
    "name": "Mischief",
    "type": "No Target",
    "dmg": "",
    "desc": "Changes Monkey King's shape to deceive opponents, using the environment nearby as inspiration for the disguise. Taking damage, attacking, or using any item or ability breaks Monkey King's disguise. Grants damage immunity for 0.1 seconds upon transforming."
   },
   {
    "id": "monkey_king_wukongs_command",
    "name": "Wukong's Command",
    "type": "Point Target+AOE",
    "dmg": "Physical",
    "desc": "Monkey King creates a circular formation of soldiers that spread out from his position. If Monkey King leaves the area his soldiers disperse. The soldiers have Monkey King's attack that attacks at a fixed rate of 1.1s, and only targets enemy Heroes. Monkey King is granted bonus armor for the spell's duration. Monkey King can transform into any one of his soldiers during Wukong's command, taking its place for a short duration, becoming indistinguishable from other soldiers, and leaving another soldier in his stead."
   },
   {
    "id": "monkey_king_primal_spring_early",
    "name": "Spring Early",
    "type": "Hidden+No Target+Instant Cast",
    "dmg": "",
    "desc": ""
   }
  ]
 },
 "dark_willow": {
  "ln": "Dark Willow",
  "attr": "int",
  "atk": "Ranged",
  "roles": [
   "Support",
   "Nuker",
   "Disabler",
   "Escape"
  ],
  "spells": [
   {
    "id": "dark_willow_bramble_maze",
    "name": "Bramble Maze",
    "type": "Point Target+AOE",
    "dmg": "Magical",
    "desc": "Dark Willow creates a 500 AoE maze of 8 brambles that grow in the target area after 0.3 seconds. Enemies that walk into a bramble are rooted and take damage over time. Lasts 12 seconds."
   },
   {
    "id": "dark_willow_shadow_realm",
    "name": "Shadow Realm",
    "type": "No Target+Instant Cast",
    "dmg": "Magical",
    "desc": "Dark Willow recedes into the shadows, becoming untargetable. Her next attack has 600 bonus attack range and deals bonus magic damage, and will end Shadow Realm. Damage scales based on how long she remains under the effects of Shadow Realm, the maximum being reached after 3 seconds."
   },
   {
    "id": "dark_willow_cursed_crown",
    "name": "Cursed Crown",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Dark Willow casts an ancient fae curse on the target. After a delay, the target and nearby enemies are stunned."
   },
   {
    "id": "dark_willow_bedlam",
    "name": "Bedlam",
    "type": "No Target+Instant Cast",
    "dmg": "Magical",
    "desc": "Dark Willow sends her pet wisp to roam around herself for the duration, rapidly attacking nearby enemies. Bedlam cannot be used while Terrorize is active."
   },
   {
    "id": "dark_willow_pixie_dust",
    "name": "Pixie Dust",
    "type": "Passive",
    "dmg": [],
    "desc": "Dark Willow gains 20% bonus Health and Mana Regeneration, increased to 100% while she is untargetable or invulnerable."
   },
   {
    "id": "dark_willow_terrorize",
    "name": "Terrorize",
    "type": "Point Target+AOE",
    "dmg": "Magical",
    "desc": "Dark Willow releases her pet wisp to terrorize her enemies. After a short delay, all enemies in the target area become fearful and run toward their home fountain. Terrorize cannot be used while Bedlam is active."
   }
  ]
 },
 "pangolier": {
  "ln": "Pangolier",
  "attr": "all",
  "atk": "Melee",
  "roles": [
   "Carry",
   "Nuker",
   "Disabler",
   "Durable",
   "Escape",
   "Initiator"
  ],
  "spells": [
   {
    "id": "pangolier_swashbuckle",
    "name": "Swashbuckle",
    "type": "Point Target",
    "dmg": "Physical",
    "desc": "Pangolier dashes along the target line, then slashes and briefly slows all enemies in the drawn direction with several quick swipes. Lucky Shot has a chance to activate from this damage."
   },
   {
    "id": "pangolier_shield_crash",
    "name": "Shield Crash",
    "type": "No Target+Instant Cast",
    "dmg": "Physical",
    "desc": "Pangolier jumps in the air and slams back to the ground in front of his current position damaging all enemies in a radius. Pangolier gains an all damage barrier for a short time if Shield Crash hits an enemy hero. Forward movement is maintained if Shield Crash is used while Rolling Thunder is active, and allows Rolling Thunder to clear walls or cliffs."
   },
   {
    "id": "pangolier_lucky_shot",
    "name": "Lucky Shot",
    "type": "Passive",
    "dmg": "",
    "desc": "Pangolier rolls the dice and lets fate decide the outcome for his enemies. Grants a chance to drastically slow their attack speed and reduce armor on any damage dealt by Pangolier's attacks or abilities."
   },
   {
    "id": "pangolier_rollup",
    "name": "Roll Up",
    "type": "No Target+Hidden",
    "dmg": "Magical",
    "desc": "Pangolier curls into an immobile protective ball, gaining debuff immunity, 80% magic resistance, and allowing him to turn. Can be cast during Rolling Thunder to temporarily hit the brakes. Can cast Rolling Thunder and Shield Crash during Roll Up. If enemies attack Pangolier during this, he will roll away from the attacker, applying Rolling Thunder damage/stun if there are enemies in the way."
   },
   {
    "id": "pangolier_gyroshell",
    "name": "Rolling Thunder",
    "type": "No Target",
    "dmg": "Physical",
    "desc": "Pangolier curls into a debuff immune ball with 80% magic resistance and rolls out. When rolling, he moves at an increased speed and can move through trees, but has a decreased ability to turn. Striking enemies knocks them back, inflicting damage proportional to his attack damage and stunning them when they land. Colliding with walls or cliffs will cause a temporary pause while Pangolier reverses in direction. DISPEL TYPE: Basic Dispel"
   },
   {
    "id": "pangolier_gyroshell_stop",
    "name": "Stop Rolling",
    "type": "No Target+Hidden+Instant Cast",
    "dmg": "",
    "desc": "Halt!"
   },
   {
    "id": "pangolier_rollup_stop",
    "name": "End Roll Up",
    "type": "No Target+Hidden+Instant Cast",
    "dmg": "",
    "desc": "Ends Pangolier's Roll Up early."
   },
   {
    "id": "pangolier_fortune_favors_the_bold",
    "name": "Fortune Favors the Bold",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "Random item and ability effects of enemies near Pangolier have a reduced chance to affect him."
   }
  ]
 },
 "grimstroke": {
  "ln": "Grimstroke",
  "attr": "int",
  "atk": "Ranged",
  "roles": [
   "Support",
   "Nuker",
   "Disabler",
   "Escape"
  ],
  "spells": [
   {
    "id": "grimstroke_dark_artistry",
    "name": "Stroke of Fate",
    "type": "Point Target",
    "dmg": "Magical",
    "desc": "Grimstroke paints a curved path of ink with his brush, damaging and slowing enemies. The damage is increased with each enemy the ink hits. Can be put on alt-cast to have the path be straight."
   },
   {
    "id": "grimstroke_ink_creature",
    "name": "Phantom's Embrace",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Summons a phantom that moves quickly towards the target, latching to it when she arrives. Once latched, the phantom damages and silences. If she survives the full latch duration she rends her victim for heavy damage and refreshes Phantom's Embrace's cooldown. Hero attacks against the phantom count as 3 attacks each."
   },
   {
    "id": "grimstroke_spirit_walk",
    "name": "Ink Swell",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Grimstroke shrouds an allied unit in ink, increasing its movement speed. Enemies in range of the allied unit are damaged with inky tendrils over time. After 3 seconds it applies damage and stun in an area around the unit in proportion to how long ink tendril was near any hero."
   },
   {
    "id": "grimstroke_dark_portrait",
    "name": "Dark Portrait",
    "type": "Unit Target+Hidden",
    "dmg": "",
    "desc": ""
   },
   {
    "id": "grimstroke_soul_chain",
    "name": "Soulbind",
    "type": "Unit Target+AOE",
    "dmg": "",
    "desc": "Binds a targeted enemy hero to its nearest allied hero within the bind radius, preventing both from moving away from each other. Any unit-targeted ability that either bound hero receives also gets cast on the other hero. If the bind is broken before the duration expires, the initial target will be bound to its nearest allied hero in the radius."
   },
   {
    "id": "grimstroke_ink_trail",
    "name": "Ink Trail",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "Grimstroke's attacks and spells cause affected enemy heroes to leave a trail of Ink behind them and deal less damage to Grimstroke for 4s."
   }
  ]
 },
 "hoodwink": {
  "ln": "Hoodwink",
  "attr": "agi",
  "atk": "Ranged",
  "roles": [
   "Support",
   "Nuker",
   "Escape",
   "Disabler"
  ],
  "spells": [
   {
    "id": "hoodwink_acorn_shot",
    "name": "Acorn Shot",
    "type": "Unit Target+Point Target",
    "dmg": "Physical",
    "desc": "Fires Hoodwink's attack with an acorn at the target unit. The acorn bounces to nearby targets, slowing them and dealing a percentage of Hoodwink's attack with bonus damage. If point targeted, a tree is created at the target position and the acorn will bounce to nearby targets. The ability may be placed on alt-cast to force this behavior."
   },
   {
    "id": "hoodwink_bushwhack",
    "name": "Bushwhack",
    "type": "Point Target+AOE",
    "dmg": "Magical",
    "desc": "Tosses a net trap that stuns enemies if they are near a tree in the area. Affected enemies take damage over time and are pulled towards the tree nearest to them within the target area, and have their vision reduced to 0 for the duration of the stun."
   },
   {
    "id": "hoodwink_scurry",
    "name": "Scurry",
    "type": "No Target+Instant Cast",
    "dmg": "",
    "desc": "Hoodwink gains bonus movement speed, phased movement, and tree-walking for a brief time. While active, the redirect chance of Mistwoods Wayfarer is multiplied by 2."
   },
   {
    "id": "hoodwink_decoy",
    "name": "Decoy",
    "type": "No Target+Instant Cast+Hidden",
    "dmg": "",
    "desc": "Hoodwink turns invisible, increasing her movement speed, and creates a decoy illusion that starts aiming a decreased damage Sharpshooter at the nearest enemy hero. If the illusion is attacked or hit by a targeted ability, it is destroyed and it throws a lesser bushwhack towards the enemy."
   },
   {
    "id": "hoodwink_hunters_boomerang",
    "name": "Hunter's Boomerang",
    "type": "Point Target+Unit Target+Hidden",
    "dmg": "Magical",
    "desc": "Tosses a boomerang in an arc. Upon contact, it returns to Hoodwink. The boomerang will deal damage as it passes through or hits enemies, and apply a debuff that causes affected enemies to be slowed and be more vulnerable to spell damage."
   },
   {
    "id": "hoodwink_sharpshooter",
    "name": "Sharpshooter",
    "type": "Point Target",
    "dmg": "Magical",
    "desc": "Hoodwink charges up and fires a deadly bolt from her crossbow, dealing heavy damage, break and slow to an enemy Hero. The damage and debuff duration scale up to max after x0.75 seconds, and the bolt is fired automatically after x0.75 seconds. Hoodwink is knocked backwards for a distance of 350 from the force of the shot. Creeps hit by the bolt are damaged for half the values."
   },
   {
    "id": "hoodwink_sharpshooter_release",
    "name": "End Sharpshooter",
    "type": "Instant Cast+No Target+Hidden",
    "dmg": "",
    "desc": "Release the charged up shot, regain ability to move and attack."
   },
   {
    "id": "hoodwink_mistwoods_wayfarer",
    "name": "Mistwoods Wayfarer",
    "type": "Passive",
    "dmg": "",
    "desc": ""
   }
  ]
 },
 "void_spirit": {
  "ln": "Void Spirit",
  "attr": "all",
  "atk": "Melee",
  "roles": [
   "Carry",
   "Escape",
   "Nuker",
   "Disabler"
  ],
  "spells": [
   {
    "id": "void_spirit_aether_remnant",
    "name": "Aether Remnant",
    "type": "Point Target",
    "dmg": "Magical",
    "desc": "Void Spirit dispatches a remnant to the target location. The remnant stands watch over the region, facing the direction of his vector. When a unit crosses its gaze, the remnant pulls it in and damages it."
   },
   {
    "id": "void_spirit_dissimilate",
    "name": "Dissimilate",
    "type": "No Target",
    "dmg": "Magical",
    "desc": "Void Spirit temporarily fades into the aether, creating a number of portals through which he can reassemble himself. Upon exiting a portal, he damages all enemies in the area."
   },
   {
    "id": "void_spirit_resonant_pulse",
    "name": "Resonant Pulse",
    "type": "No Target",
    "dmg": "Magical",
    "desc": "Void Spirit wraps himself in a protective shield that absorbs physical damage and emits a single damaging pulse around him. The shield gains increased damage absorption for each enemy hero the pulse hits."
   },
   {
    "id": "void_spirit_intrinsic_edge",
    "name": "Intrinsic Edge",
    "type": "Passive",
    "dmg": [],
    "desc": "Void Spirit gains 15% more attack damage per point of each attribute, and 30% more HP regen from Strength, attack speed from Agility, and mana regen from Intelligence."
   },
   {
    "id": "void_spirit_astral_step",
    "name": "Astral Step",
    "type": "Point Target",
    "dmg": "Magical",
    "desc": "Void Spirit tears a rift through the astral plane to appear at the target location, attacking all enemies along the path. This attack inflicts a void mark that slows for 1.25 seconds and then detonates."
   }
  ]
 },
 "snapfire": {
  "ln": "Snapfire",
  "attr": "all",
  "atk": "Ranged",
  "roles": [
   "Support",
   "Nuker",
   "Disabler",
   "Escape"
  ],
  "spells": [
   {
    "id": "snapfire_scatterblast",
    "name": "Scatterblast",
    "type": "Point Target",
    "dmg": "Magical",
    "desc": "Snapfire unloads with a wide blast that damages and slows enemies in a cone. Damage is increased by 30% and Movement Slow, Attack Slow and Slow Duration are increased by 50% for enemies caught at point-blank range."
   },
   {
    "id": "snapfire_firesnap_cookie",
    "name": "Firesnap Cookie",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Snapfire feeds a potent cookie to Mortimer or an ally, causing them to hop a short distance. The hopping unit stuns and damages enemies in the landing zone."
   },
   {
    "id": "snapfire_lil_shredder",
    "name": "Lil' Shredder",
    "type": "No Target",
    "dmg": "Physical",
    "desc": "Snapfire heats up her mounted turret to rapidly fire 5 attacks dealing fixed damage plus a percentage of her attack damage. Each attack reduces the enemy's armor. Provides bonus attack range for the duration."
   },
   {
    "id": "snapfire_gobble_up",
    "name": "Gobble Up",
    "type": "Unit Target+Hidden",
    "dmg": "",
    "desc": "Mortimer gobbles up a creep or an allied hero, which he can then spit towards enemies. The unit stays in his belly up to [object Object] seconds."
   },
   {
    "id": "snapfire_spit_creep",
    "name": "Spit Out",
    "type": "Point Target+AOE",
    "dmg": "Magical",
    "desc": "Mortimer spits out the unit that's in his mouth, causing impact damage and stun in a large area. The glob leaves a pool of firespit based on the current level of Mortimer Kisses, that slows and applies damage over time. Spit Out has a no minimum launch range."
   },
   {
    "id": "snapfire_mortimer_kisses",
    "name": "Mortimer Kisses",
    "type": "Point Target+AOE",
    "dmg": "Magical",
    "desc": "Snapfire's friend launches a barrage of firespit globs over 5.5 seconds. Globs cause impact damage and create pools of firespit, which slow and apply damage over time. Snapfire has a reduced turn rate for the duration and a minimum launch range of 600. Each glob can be targeted with a right click."
   },
   {
    "id": "snapfire_boomstick",
    "name": "Boomstick",
    "type": "Passive",
    "dmg": "",
    "desc": "Snapfire deals more damage to nearby enemies."
   }
  ]
 },
 "mars": {
  "ln": "Mars",
  "attr": "str",
  "atk": "Melee",
  "roles": [
   "Carry",
   "Initiator",
   "Disabler",
   "Durable"
  ],
  "spells": [
   {
    "id": "mars_spear",
    "name": "Spear of Mars",
    "type": "Point Target",
    "dmg": "Magical",
    "desc": "Mars throws his legendary Spear with deadly precision, damaging each enemy unit it strikes. The first enemy hero it hits is skewered on the spear, pushing it back. If a skewered hero hits a tree, building, or cliff, they will be impaled to it and stunned."
   },
   {
    "id": "mars_gods_rebuke",
    "name": "God's Rebuke",
    "type": "Point Target",
    "dmg": "Physical",
    "desc": "Mars smashes enemies in front of him with his shield, knocking them back and damaging them with a critical hit based on his attack. Bonus damage is added when hitting heroes. Has True Strike."
   },
   {
    "id": "mars_bulwark",
    "name": "Bulwark",
    "type": "Point Target+Instant Cast",
    "dmg": "",
    "desc": "Mars wields his massive shield to block a portion of each physical attack when hit from the front or sides. Can be toggled, granting phased movement, removing Mars's ability to attack, and locking the direction he is facing. When active, reduces movement speed and re-directs 70% of the attack projectiles aimed at allies towards himself."
   },
   {
    "id": "mars_dauntless",
    "name": "Dauntless",
    "type": "Passive",
    "dmg": "",
    "desc": "Mars gets more HP Regen the more he is outnumbered by enemy heroes in 700 radius."
   },
   {
    "id": "mars_arena_of_blood",
    "name": "Arena Of Blood",
    "type": "Point Target+AOE",
    "dmg": "Magical",
    "desc": "After a short formation time, Mars summons an arena lined with the undead warriors of the Ash Legion, who block enemy attacks and movement. Enemy heroes near the inside edge of the arena will be attacked by spears, dealing damage and knocking them back."
   }
  ]
 },
 "ringmaster": {
  "ln": "Ring Master",
  "attr": "int",
  "atk": "Ranged",
  "roles": [
   "Support",
   "Nuker",
   "Escape",
   "Disabler"
  ],
  "spells": [
   {
    "id": "ringmaster_tame_the_beasts",
    "name": "Tame the Beasts",
    "type": "Point Target+AOE+Channeled",
    "dmg": "Magical",
    "desc": "CHANNELED - Ringmaster twirls his whip for up to 1 second then cracks it. Whipped enemies are damaged and flee in fear from Ringmaster. Channel time exponentially increases damage and extends the fear duration, but reduces the radius."
   },
   {
    "id": "ringmaster_the_box",
    "name": "Escape Act",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Ringmaster packs himself or an allied hero into a mobile, extradimensional box. Boxed units gain phased movement, slow resistance, bonus magic resistance, and bonus movement speed. They are also untargetable, muted, silenced, and disarmed. The box will pop open after the effect expires or it moves out of the initial area."
   },
   {
    "id": "ringmaster_impalement",
    "name": "Impalement Arts",
    "type": "Point Target",
    "dmg": "Magical",
    "desc": "Ringmaster throws one of his daggers to a precise point of his choosing. If he strikes an enemy, the dagger deals impact damage, briefly slows the unit hit, and causes them to bleed. The bleeding deals a percentage of the victim's maximum health in damage every second to heroes and flat damage per second to creeps."
   },
   {
    "id": "ringmaster_empty_souvenir",
    "name": "Souvenir Slot",
    "type": "Passive",
    "dmg": "",
    "desc": "Gather souvenirs from kills and assists."
   },
   {
    "id": "ringmaster_spotlight",
    "name": "Spotlight",
    "type": "Point Target+AOE",
    "dmg": "Magical",
    "desc": "Ringmaster shines 3 spotlights that sweep over an area. Enemies in the light have a chance to miss their attacks and are revealed if invisible. Illusions hit by the beam fade away, losing a percentage of their maximum health each second. These effects linger for 0.3 seconds after leaving the light."
   },
   {
    "id": "ringmaster_wheel",
    "name": "Wheel of Wonder",
    "type": "Point Target+AOE",
    "dmg": "Magical",
    "desc": "Ringmaster rolls the Wheel of Wonder to the targeted location, knocking aside enemies along the way. After it reaches its target, enemies in range of the wheel take damage over time and are slowed by -50%. Enemy heroes who face the wheel for more than 0.5 seconds are mesmerized and drawn towards it. The first enemy to be mesmerized triggers a timer for the wheel to explode. If the timer is not triggered, it will automatically explode after 4 seconds."
   },
   {
    "id": "ringmaster_tame_the_beasts_crack",
    "name": "Crack",
    "type": "No Target+Instant Cast+Hidden",
    "dmg": "Magical",
    "desc": "*CRACK*"
   }
  ]
 },
 "dawnbreaker": {
  "ln": "Dawnbreaker",
  "attr": "str",
  "atk": "Melee",
  "roles": [
   "Carry",
   "Durable"
  ],
  "spells": [
   {
    "id": "dawnbreaker_fire_wreath",
    "name": "Starbreaker",
    "type": "Point Target",
    "dmg": "Physical",
    "desc": "Dawnbreaker whirls her hammer around 3 times, damaging enemies with her attack plus bonus damage. On the final strike, she smashes her hammer down, stunning and damaging enemies in front of her."
   },
   {
    "id": "dawnbreaker_celestial_hammer",
    "name": "Celestial Hammer",
    "type": "Point Target",
    "dmg": "Magical",
    "desc": "Dawnbreaker hurls her weapon at a target, damaging enemies struck along the way. The hammer pauses for 2 seconds at the destination before flying back to her, leaving a trail of fire that slows enemies. Dawnbreaker can recall the hammer at any time, pulling her towards it so they meet in the middle."
   },
   {
    "id": "dawnbreaker_luminosity",
    "name": "Luminosity",
    "type": "Passive",
    "dmg": "",
    "desc": ""
   },
   {
    "id": "dawnbreaker_converge",
    "name": "Converge",
    "type": "No Target+Hidden+Instant Cast",
    "dmg": "",
    "desc": "Dawnbreaker recalls her hammer, pulling them together so they meet in the middle."
   },
   {
    "id": "dawnbreaker_break_of_dawn",
    "name": "Break of Dawn",
    "type": "Passive",
    "dmg": "",
    "desc": "Whenever the sun comes out, Dawnbreaker gains bonus base damage and vision that decreases throughout the course of the day. If Dawnbreaker causes the day these bonuses are at full power for the entirety of that daytime."
   },
   {
    "id": "dawnbreaker_solar_guardian",
    "name": "Solar Guardian",
    "type": "Point Target+Channeled",
    "dmg": "Magical",
    "desc": "CHANNELED - Dawnbreaker creates a pulsing effect at a location within 350 units of an allied hero anywhere on the map and creates daylight for 6s. Each pulse damages enemies and heals allies. After a short duration, she flies to the target location and deals additional damage and stuns enemies upon landing. Once channeled, Dawnbreaker cannot stop the ability."
   },
   {
    "id": "dawnbreaker_land",
    "name": "dawnbreaker_land",
    "type": "No Target+Hidden+Instant Cast",
    "dmg": "",
    "desc": ""
   }
  ]
 },
 "marci": {
  "ln": "Marci",
  "attr": "all",
  "atk": "Melee",
  "roles": [
   "Support",
   "Carry",
   "Initiator",
   "Disabler",
   "Escape"
  ],
  "spells": [
   {
    "id": "marci_grapple",
    "name": "Dispose",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Marci grabs an allied or enemy target and throws it effortlessly behind her, damaging and slowing the unit if it's an enemy. Any enemy units in the landing area will also be damaged and slowed."
   },
   {
    "id": "marci_companion_run",
    "name": "Rebound",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Marci bounds to the targeted allied unit, choosing a direction and distance she will spring away from it. Upon reaching the unit, Marci lunges to her final destination, damaging and stunning enemies where she lands. When Rebound is set to alt-cast, Marci brings the target ally with her to her final destination. The ally receives 15% bonus movement speed for 4s."
   },
   {
    "id": "marci_bodyguard",
    "name": "Bodyguard",
    "type": "Unit Target",
    "dmg": "Physical",
    "desc": "Passively grants Marci lifesteal and bonus attack damage. When cast on an ally, she provides them with 75% of her passive lifesteal and attack damage bonus. Additionally Marci creates a shared all damage barrier for herself and her partner. As Marci attacks heroes, 30% of the damage dealt restores the barrier."
   },
   {
    "id": "marci_special_delivery",
    "name": "Special Delivery",
    "type": "No Target",
    "dmg": "",
    "desc": "Marci whistles to instantly summon her courier to her. If the courier started in the fountain, it will take items from Marci's stash. After teleporting it will transfer these items to Marci and head back to the fountain. Passively grants all allied couriers 3 bonus levels and 1 bonus health."
   },
   {
    "id": "marci_unleash",
    "name": "Unleash",
    "type": "No Target",
    "dmg": "Magical",
    "desc": "Marci taps a hidden power, gaining Fury charges that allow her to deliver a rapid sequence of strikes that slow movement and attack speed of the target for 2s. The last strike in every Fury combo creates a damaging pulse around the target. In between Fury combos, Marci is unable to attack for 1.5s. Marci gains 15% movement speed when Unleash is cast."
   }
  ]
 },
 "primal_beast": {
  "ln": "Primal Beast",
  "attr": "str",
  "atk": "Melee",
  "roles": [
   "Initiator",
   "Durable",
   "Disabler"
  ],
  "spells": [
   {
    "id": "primal_beast_onslaught",
    "name": "Onslaught",
    "type": "Point Target",
    "dmg": "Physical",
    "desc": "Primal Beast charges up and then runs in the chosen direction, knocking back enemies and allies alike. Enemy units are damaged and stunned on impact. The longer the charge duration, the farther Primal Beast's momentum will carry him. Can be cancelled at any time with the Stop command."
   },
   {
    "id": "primal_beast_trample",
    "name": "Trample",
    "type": "No Target+Instant Cast",
    "dmg": "Magical",
    "desc": "Primal Beast stomps over everything. For every 140 units traveled, all enemies around the Beast receive damage. Deals base damage plus a multiplier of Primal Beast's attack damage. Primal Beast is disarmed for the duration of the ability."
   },
   {
    "id": "primal_beast_uproar",
    "name": "Uproar",
    "type": "No Target+Instant Cast",
    "dmg": "",
    "desc": "The Beast's temper causes every instance of 50 hero damage or more to grant a stack of Uproar. When activated, Primal Beast releases a roar that slows surrounding enemies and grants the Beast additional attack damage and armor for 7 seconds based on his current stacks of Uproar."
   },
   {
    "id": "primal_beast_rock_throw",
    "name": "Rock Throw",
    "type": "Point Target+AOE+Hidden",
    "dmg": "Physical",
    "desc": "Primal Beast throws a rock at the target location that stuns and damages enemies. The rock cannot be thrown within a minimum range of Primal Beast. After landing, the rock splits into 3 additional fragments that land behind the initial target location. Rock Throw increases stacks of Uproar for each hero hit."
   },
   {
    "id": "primal_beast_onslaught_release",
    "name": "Begin Onslaught",
    "type": "Instant Cast+No Target+Hidden",
    "dmg": "",
    "desc": "Begins the rush to the specified location."
   },
   {
    "id": "primal_beast_pulverize",
    "name": "Pulverize",
    "type": "Channeled+Unit Target+AOE",
    "dmg": "Magical",
    "desc": "CHANNELED - Primal Beast channels his rage, grabbing the target enemy and slamming them into the ground repeatedly, damaging and mini-stunning any enemies caught in the AoE. Each consecutive hit deals bonus damage. Lasts 2.3 seconds."
   },
   {
    "id": "primal_beast_colossal",
    "name": "Colossal",
    "type": "Passive",
    "dmg": "",
    "desc": ""
   }
  ]
 },
 "muerta": {
  "ln": "Muerta",
  "attr": "int",
  "atk": "Ranged",
  "roles": [
   "Carry",
   "Nuker",
   "Disabler"
  ],
  "spells": [
   {
    "id": "muerta_dead_shot",
    "name": "Dead Shot",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": ""
   },
   {
    "id": "muerta_the_calling",
    "name": "The Calling",
    "type": "Point Target+AOE",
    "dmg": "Magical",
    "desc": ""
   },
   {
    "id": "muerta_gunslinger",
    "name": "Gunslinger",
    "type": "No Target+Instant Cast",
    "dmg": "",
    "desc": ""
   },
   {
    "id": "muerta_spectral_slug",
    "name": "Spectral Slug",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": ""
   },
   {
    "id": "muerta_pierce_the_veil",
    "name": "Pierce the Veil",
    "type": "No Target",
    "dmg": "Magical",
    "desc": ""
   },
   {
    "id": "muerta_supernatural",
    "name": "Supernatural",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": ""
   }
  ]
 },
 "kez": {
  "ln": "Kez",
  "attr": "agi",
  "atk": "Melee",
  "roles": [
   "Carry",
   "Escape",
   "Disabler"
  ],
  "spells": [
   {
    "id": "kez_echo_slash",
    "name": "Echo Slash",
    "type": "No Target",
    "dmg": "Physical",
    "desc": "Kez slashes forward in a 800 distance line with his Katana, attacking enemies in an area and applying a brief 100s impact slow. After a short delay, the area is attacked again. Heroes take bonus damage."
   },
   {
    "id": "kez_grappling_claw",
    "name": "Grappling Claw",
    "type": "Unit Target",
    "dmg": "",
    "desc": "Kez swings on a grappling hook towards the target unit or tree. When the grappling hook collides with the target, that unit has slowed movement speed. Upon reaching the enemy target, Kez lands an attack on them."
   },
   {
    "id": "kez_kazurai_katana",
    "name": "Kazurai Katana",
    "type": "Attack Modifier+Unit Target",
    "dmg": "Physical",
    "desc": "Katana attacks and abilities apply a stacking damage over time to enemies that deals a percentage of the original attack's damage as additional damage over time. Kez may activate the ability to impale the target with his attack, preventing them from moving or turning. The target's Katana debuff bursts, causing some of the stacks to deal damage instantly."
   },
   {
    "id": "kez_switch_weapons",
    "name": "Switch Discipline",
    "type": "No Target+Instant Cast",
    "dmg": "",
    "desc": "Kez switches between his Kazurai Katana and Shodo Sai. He gains different attack capabilities and abilities based on the weapon equipped. The abilities level up together, and when an ability is used, the associated alternate weapon ability also goes on cooldown. Kez deals extra damage on the first Katana hit or ability after switching to Katana, and gains bonus speed after switching to Sai."
   },
   {
    "id": "kez_raptor_dance",
    "name": "Raptor Dance",
    "type": "No Target+AOE",
    "dmg": "Pure",
    "desc": "Kez enters into an uncontrollable state for 1 second, becoming invulnerable for 0.2s and receiving a basic dispel. If the cast completes successfully, Kez performs a series of deadly radial slashes around him that deal damage based on the max health of the target and heal Kez for a percentage of all damage dealt."
   },
   {
    "id": "kez_falcon_rush",
    "name": "Falcon Rush",
    "type": "Hidden+No Target+Instant Cast",
    "dmg": "",
    "desc": "Kez gains the ability to rush towards enemy targets to deliver echoing secondary attacks. While in this state, Kez has phased collision and slow resistance."
   },
   {
    "id": "kez_talon_toss",
    "name": "Talon Toss",
    "type": "Hidden+Unit Target+AOE",
    "dmg": "Physical",
    "desc": "Kez throws a Sai at the target unit, applying a fixed damage attack and silence."
   },
   {
    "id": "kez_shodo_sai",
    "name": "Shodo Sai",
    "type": "Hidden+Point Target+Instant Cast",
    "dmg": "",
    "desc": "Kez has a chance to critically strike the target when attacking with Sais. Kez may activate the ability to disarm himself, lock his facing, and parry attacks and attack effects from the targeted direction for 2 seconds. If an attack is parried from an enemy Hero in this way, that Hero is stunned for 0.4s and gains a Mark. When a Marked target is attacked by Kez, it will guarantee a critical strike and stun the target. The sub-ability may be used to cancel the blocking early."
   },
   {
    "id": "kez_ravens_veil",
    "name": "Raven's Veil",
    "type": "Hidden+No Target",
    "dmg": "",
    "desc": "Kez releases a wave of smoke that applies his Mark to nearby enemies, briefly reducing their vision. Kez receives a basic dispel and gains bonus movement speed and invisibility until he attacks or casts a spell."
   },
   {
    "id": "kez_shodo_sai_parry_cancel",
    "name": "Cancel",
    "type": "No Target+Instant Cast+Hidden",
    "dmg": "",
    "desc": "Stop blocking physical attacks."
   }
  ]
 },
 "largo": {
  "ln": "Largo",
  "attr": "str",
  "atk": "Melee",
  "roles": [
   "Durable",
   "Disabler",
   "Support"
  ],
  "spells": [
   {
    "id": "largo_catchy_lick",
    "name": "Catchy Lick",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Largo licks the targeted unit with his tongue, pulling it back a short distance, applying a basic dispel, and dealing damage if it's an enemy. Killing or dispelling an effect from a target grants Largo temporary health regeneration. DISPEL TYPE: Basic Dispel"
   },
   {
    "id": "largo_frogstomp",
    "name": "Frogstomp",
    "type": "Point Target+AOE",
    "dmg": "Magical",
    "desc": "Largo tosses froglings to an area. They stomp the ground every 1 second, dealing damage and ministuns, and enemies in the area have reduced movement speed."
   },
   {
    "id": "largo_croak_of_genius",
    "name": "Croak of Genius",
    "type": "Unit Target",
    "dmg": "Magical",
    "desc": "Largo strums a tune to a friendly hero. The hero's items and abilities have reduced mana cost and a percentage of their damage reverberates over the following 5 seconds. When an affected hero spends mana, the remaining buff duration is reduced by 0.5s. Duration is not reduced for Largo himself."
   },
   {
    "id": "largo_encore",
    "name": "Encore",
    "type": "Passive+Hidden",
    "dmg": "",
    "desc": "Buffs that Largo applies to himself or his team have extended duration."
   },
   {
    "id": "largo_amphibian_rhapsody",
    "name": "Amphibian Rhapsody",
    "type": "No Target+Instant Cast",
    "dmg": "Magical",
    "desc": "Largo gets ready to groove. He is disarmed and his ability bar switches to 3 song abilities, each with different effects. Songs are only effective if strummed on the beat. Every time he strums successfully, he gains a stack of Groovin'. Each stack gives him bonus armor and reduces the mana cost of every song, but he loses a stack if he misses a beat. Stacks linger for a short duration when Largo's song ends."
   },
   {
    "id": "largo_song_fight_song",
    "name": "Bullbelly Blitz",
    "type": "No Target+Instant Cast+Hidden",
    "dmg": "Magical",
    "desc": "Largo plays a song that deals 20 magical damage to nearby enemies. The song also increases nearby allied heroes' spell amplification and grants their attacks additional magic damage."
   },
   {
    "id": "largo_song_double_time",
    "name": "Hotfeet Hustle",
    "type": "No Target+Instant Cast+Hidden",
    "dmg": "",
    "desc": "Largo plays a song that increases nearby friendly units' movement speed and grants a brief slow resistance."
   },
   {
    "id": "largo_song_good_vibrations",
    "name": "Island Elixir",
    "type": "No Target+Instant Cast+Hidden",
    "dmg": "",
    "desc": "Largo plays a song that heals nearby friendly heroes."
   }
  ]
 }
};
