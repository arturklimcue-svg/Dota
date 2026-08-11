// line_1.js — добавления по линии (часть 1)
module.exports = [
  // Bloodseeker
  { t: "bloodseeker", c: "shredder", s: "line", r: "Reactive Armor нейтрализует Bloodrage-трейды, а Whirling Death выжирает здоровье Bloodseeker'а с дистанции. Контрит на линии: Timbersaw переживает его давление и доминирует." },
  { t: "bloodseeker", c: "windrunner", s: "line", r: "Powershot наносит много урона по одной цели, а Shackleshot не даёт Bloodseeker'у убежать от фокуса. Контрит на линии: Windranger продавливает его с безопасной позиции." },
  // Drow Ranger
  { t: "drow_ranger", c: "undying", s: "line", r: "Decay снимает силу Drow и не даёт ей трейдить, а Tombstone не даёт ей убежать от прайма. Контрит на линии: Undying доминирует над Drow и не даёт ей фармить." },
  { t: "drow_ranger", c: "tusk", s: "line", r: "Snowball заводит союзников прямо на Drow, а Ice Shards режут ей дистанцию — она не успевает отойти. Контрит на линии: Tusk с партнёром продавливает её с первой минуты." },
  // Juggernaut
  { t: "juggernaut", c: "bristleback", s: "line", r: "Quill Spray копится от каждого удара Juggernaut'а и бьёт сквозь Blade Fury остаточным уроном, а сам Bristleback не боится его правок. Контрит на линии: Bristleback выживает спин и выигрывает затяжной трейд." },
  // Shadow Fiend
  { t: "nevermore", c: "lina", s: "line", r: "Lina перебивает Dragon Slave своей дальностью и кастует со своей позиции, а Laguna на 6-м уровне делает рейндж-килл. Контрит на линии: Lina доминирует над Shadow Fiend'ом в трейдах и контроле линии." },
  // Phantom Lancer
  { t: "phantom_lancer", c: "luna", s: "line", r: "Lucent Beams и Glaives бьют по иллюзиям вместе с героем — PL не может спрятать себя в стае. Контрит на линии: Luna быстро сносит его иллюзии и продавливает." },
  // Puck
  { t: "puck", c: "tinker", s: "line", r: "Laser слепит Puck'а, а March of Machines не даёт ему стоять на волне — Puck приходится отступать за башню. Контрит на линии: Tinker давит его на дистанции и контролирует руны." },
  { t: "puck", c: "zuus", s: "line", r: "Lightning Bolt бьёт Puck'а в любой точке и наказывает его за попытки дристать на волне. Контрит на линии: Zeus перехарассивает Puck'а и не даёт ему стоять." },
  // Pudge
  { t: "pudge", c: "viper", s: "line", r: "Corrosive Skin замедляет и разъедает Pudge за каждый удар, Nethertoxin давит линию, а Viper не боится его гангов. Контрит на линии: Viper не даёт Pudge зафармить и держит его в атаке." },
  // Razor
  { t: "razor", c: "shredder", s: "line", r: "Timbersaw рвётся в лес через Reactive Armor и не зависит от Static Link — Whirling Death снимает с него атрибуты. Контрит на линии: Timbersaw переживает Static Link и выигрывает трейды в упор." },
  // Storm Spirit
  { t: "storm_spirit", c: "queenofpain", s: "line", r: "Shadow Strike ломает Storm'у реген и заставляет тратить ману на прорыв, а QoP легко убегает от его попыток. Контрит на линии: Queen of Pain давит Storm на дистанции и не даёт ему разгоняться." },
  { t: "storm_spirit", c: "tinker", s: "line", r: "Laser слепит Storm и сбивает ему касты, March не даёт стоять на волне, а Tinker копит преимущество по рунам. Контрит на линии: Tinker выбивает Storm с линии и контролирует темп." },
  // Sven
  { t: "sven", c: "shredder", s: "line", r: "Reactive Armor поглощает станы и удары Sven, а Whirling Death режет ему силу — Свен не может продавить Timber'а. Контрит на линии: Timbersaw держит Sven'а и выигрывает каждый трейд." },
  { t: "sven", c: "viper", s: "line", r: "Viper разъедает Sven Corrosive Skin'ом и замедляет его, Nethertoxin давит линию — Свену не дают подойти в упор. Контрит на линии: Viper доминирует над Sven'ом с дистанции." },
  // Windranger
  { t: "windrunner", c: "skywrath_mage", s: "line", r: "Arcane Bolt летит по приоритету и наносит много урона за раз, а Concussive Shot не даёт Windranger убежать — windrun не спасает от магии. Контрит на линии: Skywrath Mage продавливает Windranger на дистанции." },
  // Zeus
  { t: "zuus", c: "queenofpain", s: "line", r: "Shadow Strike доткает Zeus и заставляет тратить ману на реген, а Blink-мобильность QoP позволяет избегать Arc Lightning. Контрит на линии: Queen of Pain убивает Zeus'а за счёт мобильности и доток." },
  { t: "zuus", c: "batrider", s: "line", r: "Sticky Napalm копится от каждого удара, и Firefly не даёт Zeus'у уйти — каст Zeus'а становится невозможным. Контрит на линии: Batrider разбирает Zeus'а в соло и сносит его на 6-м." },
  // Slardar
  { t: "slardar", c: "axe", s: "line", r: "Counter Helix кастуется от автоатак Slardar'а и наказывает его за удары, а Battle Hunger не даёт отступать. Контрит на линии: Axe переигрывает Slardar'а в каждом трейде." },
  // Witch Doctor
  { t: "witch_doctor", c: "pudge", s: "line", r: "Pudge сносит Witch Doctor'а хук-рот-комбо: WD без сейвов умирает с одного хука. Контрит на линии: Pudge наказывает WD за позицию и выбивает его с линии." },
  // Enigma
  { t: "enigma", c: "lion", s: "line", r: "Earth Spike и Finger наказывают за eidolon'ов — Lion сносит призывов и давит Enigma. Контрит на линии: Lion не даёт Enigma накопить стадо и переживает его давление." },
];
