// Marvel Multiverse Portal - catalog
// Streaming/purchase/physical data is a US-region snapshot from early 2026.
// Verify availability before purchasing — these things rotate constantly.

const CATALOG = [

  // =========================================================================
  // MCU - PHASE 1 (Infinity Saga)
  // =========================================================================
  {
    id: "iron-man-2008", title: "Iron Man", year: 2008, releaseDate: "2008-05-02",
    type: "Film", studio: "Marvel Studios", universe: "MCU", saga: "Infinity Saga", phase: 1,
    runtime: 126, director: "Jon Favreau",
    synopsis: "Industrialist Tony Stark builds a mechanized suit of armor to escape captivity and becomes the superhero Iron Man.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook (4K)"]
  },
  {
    id: "incredible-hulk-2008", title: "The Incredible Hulk", year: 2008, releaseDate: "2008-06-13",
    type: "Film", studio: "Marvel Studios / Universal", universe: "MCU", saga: "Infinity Saga", phase: 1,
    runtime: 112, director: "Louis Leterrier",
    synopsis: "Bruce Banner, a scientist on the run from the U.S. government, must find a cure for the monster he turns into whenever he loses his temper.",
    streaming: [],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray"]
  },
  {
    id: "iron-man-2-2010", title: "Iron Man 2", year: 2010, releaseDate: "2010-05-07",
    type: "Film", studio: "Marvel Studios", universe: "MCU", saga: "Infinity Saga", phase: 1,
    runtime: 124, director: "Jon Favreau",
    synopsis: "Tony Stark must contend with deteriorating health, government pressure to share his armor, and a Russian physicist who blames the Stark family for his ruin.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook (4K)"]
  },
  {
    id: "thor-2011", title: "Thor", year: 2011, releaseDate: "2011-05-06",
    type: "Film", studio: "Marvel Studios", universe: "MCU", saga: "Infinity Saga", phase: 1,
    runtime: 115, director: "Kenneth Branagh",
    synopsis: "The arrogant Asgardian prince Thor is cast down to Earth and must prove himself worthy to reclaim his hammer Mjolnir.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook (4K)"]
  },
  {
    id: "captain-america-first-avenger-2011", title: "Captain America: The First Avenger", year: 2011, releaseDate: "2011-07-22",
    type: "Film", studio: "Marvel Studios", universe: "MCU", saga: "Infinity Saga", phase: 1,
    runtime: 124, director: "Joe Johnston",
    synopsis: "Steve Rogers, a frail WWII enlistee transformed by a super-soldier serum, battles HYDRA and its leader Red Skull.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook (4K)"]
  },
  {
    id: "avengers-2012", title: "The Avengers", year: 2012, releaseDate: "2012-05-04",
    type: "Film", studio: "Marvel Studios", universe: "MCU", saga: "Infinity Saga", phase: 1,
    runtime: 143, director: "Joss Whedon",
    synopsis: "Nick Fury assembles Earth's mightiest heroes — Iron Man, Cap, Thor, Hulk, Black Widow, Hawkeye — to stop Loki and a Chitauri invasion.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook (4K)"]
  },

  // =========================================================================
  // MCU - PHASE 2
  // =========================================================================
  {
    id: "iron-man-3-2013", title: "Iron Man 3", year: 2013, releaseDate: "2013-05-03",
    type: "Film", studio: "Marvel Studios", universe: "MCU", saga: "Infinity Saga", phase: 2,
    runtime: 130, director: "Shane Black",
    synopsis: "Reeling from the Battle of New York, Tony Stark faces a terrorist called the Mandarin and a former colleague's deadly Extremis program.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook (4K)"]
  },
  {
    id: "thor-dark-world-2013", title: "Thor: The Dark World", year: 2013, releaseDate: "2013-11-08",
    type: "Film", studio: "Marvel Studios", universe: "MCU", saga: "Infinity Saga", phase: 2,
    runtime: 112, director: "Alan Taylor",
    synopsis: "Thor and Loki form an uneasy alliance to stop Malekith, the leader of the Dark Elves, from plunging the universe into eternal darkness.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook (4K)"]
  },
  {
    id: "captain-america-winter-soldier-2014", title: "Captain America: The Winter Soldier", year: 2014, releaseDate: "2014-04-04",
    type: "Film", studio: "Marvel Studios", universe: "MCU", saga: "Infinity Saga", phase: 2,
    runtime: 136, director: "Anthony & Joe Russo",
    synopsis: "Cap teams with Black Widow and Falcon to uncover a HYDRA conspiracy inside SHIELD — and confront a brainwashed assassin from his past.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook (4K)"]
  },
  {
    id: "guardians-of-the-galaxy-2014", title: "Guardians of the Galaxy", year: 2014, releaseDate: "2014-08-01",
    type: "Film", studio: "Marvel Studios", universe: "MCU", saga: "Infinity Saga", phase: 2,
    runtime: 121, director: "James Gunn",
    synopsis: "A group of intergalactic misfits — Star-Lord, Gamora, Drax, Rocket, and Groot — band together to stop the fanatic Ronan from destroying the galaxy.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook (4K)"]
  },
  {
    id: "avengers-age-of-ultron-2015", title: "Avengers: Age of Ultron", year: 2015, releaseDate: "2015-05-01",
    type: "Film", studio: "Marvel Studios", universe: "MCU", saga: "Infinity Saga", phase: 2,
    runtime: 141, director: "Joss Whedon",
    synopsis: "Tony Stark's peacekeeping AI Ultron goes rogue, forcing the Avengers to team with new allies — Vision, Scarlet Witch, Quicksilver — to save humanity.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook (4K)"]
  },
  {
    id: "ant-man-2015", title: "Ant-Man", year: 2015, releaseDate: "2015-07-17",
    type: "Film", studio: "Marvel Studios", universe: "MCU", saga: "Infinity Saga", phase: 2,
    runtime: 117, director: "Peyton Reed",
    synopsis: "Ex-con Scott Lang dons Hank Pym's shrinking suit to pull off a heist that could save the world from the Yellowjacket weapon.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook (4K)"]
  },

  // =========================================================================
  // MCU - PHASE 3
  // =========================================================================
  {
    id: "captain-america-civil-war-2016", title: "Captain America: Civil War", year: 2016, releaseDate: "2016-05-06",
    type: "Film", studio: "Marvel Studios", universe: "MCU", saga: "Infinity Saga", phase: 3,
    runtime: 147, director: "Anthony & Joe Russo",
    synopsis: "Disagreement over the Sokovia Accords splits the Avengers — Cap leads one faction, Iron Man the other. Black Panther and Spider-Man debut.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook (4K)"]
  },
  {
    id: "doctor-strange-2016", title: "Doctor Strange", year: 2016, releaseDate: "2016-11-04",
    type: "Film", studio: "Marvel Studios", universe: "MCU", saga: "Infinity Saga", phase: 3,
    runtime: 115, director: "Scott Derrickson",
    synopsis: "Arrogant neurosurgeon Stephen Strange loses the use of his hands and discovers the mystic arts under the Ancient One in Kamar-Taj.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook (4K)"]
  },
  {
    id: "guardians-of-the-galaxy-2-2017", title: "Guardians of the Galaxy Vol. 2", year: 2017, releaseDate: "2017-05-05",
    type: "Film", studio: "Marvel Studios", universe: "MCU", saga: "Infinity Saga", phase: 3,
    runtime: 136, director: "James Gunn",
    synopsis: "Peter Quill meets his father Ego, a Celestial with godlike power and a horrifying plan for the universe.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook (4K)"]
  },
  {
    id: "spider-man-homecoming-2017", title: "Spider-Man: Homecoming", year: 2017, releaseDate: "2017-07-07",
    type: "Film", studio: "Marvel Studios / Sony", universe: "MCU", saga: "Infinity Saga", phase: 3,
    runtime: 133, director: "Jon Watts",
    synopsis: "Peter Parker juggles high school and crime-fighting under Tony Stark's mentorship while taking on the Vulture.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook (4K)"]
  },
  {
    id: "thor-ragnarok-2017", title: "Thor: Ragnarok", year: 2017, releaseDate: "2017-11-03",
    type: "Film", studio: "Marvel Studios", universe: "MCU", saga: "Infinity Saga", phase: 3,
    runtime: 130, director: "Taika Waititi",
    synopsis: "Imprisoned on Sakaar, Thor must escape Grandmaster's gladiator pits and stop his sister Hela from destroying Asgard.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook (4K)"]
  },
  {
    id: "black-panther-2018", title: "Black Panther", year: 2018, releaseDate: "2018-02-16",
    type: "Film", studio: "Marvel Studios", universe: "MCU", saga: "Infinity Saga", phase: 3,
    runtime: 134, director: "Ryan Coogler",
    synopsis: "T'Challa returns home to Wakanda to take the throne but is challenged by Erik Killmonger, his exiled cousin.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook (4K)"]
  },
  {
    id: "avengers-infinity-war-2018", title: "Avengers: Infinity War", year: 2018, releaseDate: "2018-04-27",
    type: "Film", studio: "Marvel Studios", universe: "MCU", saga: "Infinity Saga", phase: 3,
    runtime: 149, director: "Anthony & Joe Russo",
    synopsis: "Thanos hunts the six Infinity Stones to wipe out half of all life. The Avengers and Guardians scatter across the universe to stop him.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook (4K)"]
  },
  {
    id: "ant-man-and-wasp-2018", title: "Ant-Man and the Wasp", year: 2018, releaseDate: "2018-07-06",
    type: "Film", studio: "Marvel Studios", universe: "MCU", saga: "Infinity Saga", phase: 3,
    runtime: 118, director: "Peyton Reed",
    synopsis: "Scott Lang and Hope van Dyne race to rescue Janet van Dyne from the Quantum Realm while evading Ghost.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook (4K)"]
  },
  {
    id: "captain-marvel-2019", title: "Captain Marvel", year: 2019, releaseDate: "2019-03-08",
    type: "Film", studio: "Marvel Studios", universe: "MCU", saga: "Infinity Saga", phase: 3,
    runtime: 124, director: "Anna Boden & Ryan Fleck",
    synopsis: "Carol Danvers, a Kree warrior with no memory of her past, gets caught in the middle of an intergalactic war on 1990s Earth.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook (4K)"]
  },
  {
    id: "avengers-endgame-2019", title: "Avengers: Endgame", year: 2019, releaseDate: "2019-04-26",
    type: "Film", studio: "Marvel Studios", universe: "MCU", saga: "Infinity Saga", phase: 3,
    runtime: 181, director: "Anthony & Joe Russo",
    synopsis: "After the Snap, the surviving Avengers attempt a Time Heist to undo Thanos's actions and restore the universe.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook (4K)"]
  },
  {
    id: "spider-man-far-from-home-2019", title: "Spider-Man: Far From Home", year: 2019, releaseDate: "2019-07-02",
    type: "Film", studio: "Marvel Studios / Sony", universe: "MCU", saga: "Infinity Saga", phase: 3,
    runtime: 129, director: "Jon Watts",
    synopsis: "On a class trip across Europe, Peter Parker is recruited by Nick Fury to face the Elementals — and the deceptive Mysterio.",
    streaming: [],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook (4K)"]
  },

  // =========================================================================
  // MCU - PHASE 4 (Multiverse Saga begins)
  // =========================================================================
  {
    id: "wandavision-2021", title: "WandaVision", year: 2021, releaseDate: "2021-01-15",
    type: "TV Series", studio: "Marvel Studios", universe: "MCU", saga: "Multiverse Saga", phase: 4,
    runtime: "9 episodes", director: "Matt Shakman",
    synopsis: "Wanda Maximoff and Vision live an idyllic suburban life — but something is very wrong with their sitcom-styled reality.",
    streaming: ["Disney+"], purchase: [], physical: []
  },
  {
    id: "falcon-winter-soldier-2021", title: "The Falcon and the Winter Soldier", year: 2021, releaseDate: "2021-03-19",
    type: "TV Series", studio: "Marvel Studios", universe: "MCU", saga: "Multiverse Saga", phase: 4,
    runtime: "6 episodes", director: "Kari Skogland",
    synopsis: "Sam Wilson and Bucky Barnes confront the legacy of Captain America's shield while battling the radical Flag Smashers.",
    streaming: ["Disney+"], purchase: [], physical: []
  },
  {
    id: "loki-s1-2021", title: "Loki (Season 1)", year: 2021, releaseDate: "2021-06-09",
    type: "TV Series", studio: "Marvel Studios", universe: "MCU", saga: "Multiverse Saga", phase: 4,
    runtime: "6 episodes", director: "Kate Herron",
    synopsis: "Plucked out of his timeline by the Time Variance Authority, Loki must help fix the multiverse — and meets a variant of himself.",
    streaming: ["Disney+"], purchase: [], physical: []
  },
  {
    id: "black-widow-2021", title: "Black Widow", year: 2021, releaseDate: "2021-07-09",
    type: "Film", studio: "Marvel Studios", universe: "MCU", saga: "Multiverse Saga", phase: 4,
    runtime: 134, director: "Cate Shortland",
    synopsis: "On the run after Civil War, Natasha Romanoff confronts her past as a Russian spy and reunites with her surrogate family.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook (4K)"]
  },
  {
    id: "what-if-s1-2021", title: "What If…? (Season 1)", year: 2021, releaseDate: "2021-08-11",
    type: "Animated Series", studio: "Marvel Studios", universe: "MCU", saga: "Multiverse Saga", phase: 4,
    runtime: "9 episodes", director: "Bryan Andrews",
    synopsis: "An anthology of alternate-universe stories narrated by The Watcher, exploring how single changes ripple through the MCU.",
    streaming: ["Disney+"], purchase: [], physical: []
  },
  {
    id: "shang-chi-2021", title: "Shang-Chi and the Legend of the Ten Rings", year: 2021, releaseDate: "2021-09-03",
    type: "Film", studio: "Marvel Studios", universe: "MCU", saga: "Multiverse Saga", phase: 4,
    runtime: 132, director: "Destin Daniel Cretton",
    synopsis: "Shang-Chi must confront the past he tried to leave behind when his father, leader of the Ten Rings, draws him back.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook (4K)"]
  },
  {
    id: "eternals-2021", title: "Eternals", year: 2021, releaseDate: "2021-11-05",
    type: "Film", studio: "Marvel Studios", universe: "MCU", saga: "Multiverse Saga", phase: 4,
    runtime: 156, director: "Chloé Zhao",
    synopsis: "Immortal aliens who have lived on Earth for 7,000 years reunite to stop their ancient enemies, the Deviants — and confront a darker truth.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook (4K)"]
  },
  {
    id: "hawkeye-2021", title: "Hawkeye", year: 2021, releaseDate: "2021-11-24",
    type: "TV Series", studio: "Marvel Studios", universe: "MCU", saga: "Multiverse Saga", phase: 4,
    runtime: "6 episodes", director: "Rhys Thomas; Bert & Bertie",
    synopsis: "Clint Barton teams with young archer Kate Bishop to untangle a criminal conspiracy in NYC over the holidays.",
    streaming: ["Disney+"], purchase: [], physical: []
  },
  {
    id: "spider-man-no-way-home-2021", title: "Spider-Man: No Way Home", year: 2021, releaseDate: "2021-12-17",
    type: "Film", studio: "Marvel Studios / Sony", universe: "MCU", saga: "Multiverse Saga", phase: 4,
    runtime: 148, director: "Jon Watts",
    requires: ["loki-s1-2021"],
    synopsis: "After his identity is exposed, Peter Parker asks Doctor Strange for help — and shatters the multiverse, pulling in past Spider-Man villains.",
    streaming: ["Netflix"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook (4K)"]
  },
  {
    id: "moon-knight-2022", title: "Moon Knight", year: 2022, releaseDate: "2022-03-30",
    type: "TV Series", studio: "Marvel Studios", universe: "MCU", saga: "Multiverse Saga", phase: 4,
    runtime: "6 episodes", director: "Mohamed Diab; Justin Benson & Aaron Moorhead",
    synopsis: "Mild-mannered Steven Grant has dissociative identity disorder — and shares his body with mercenary Marc Spector, avatar of the Egyptian moon god Khonshu.",
    streaming: ["Disney+"], purchase: [], physical: []
  },
  {
    id: "doctor-strange-multiverse-madness-2022", title: "Doctor Strange in the Multiverse of Madness", year: 2022, releaseDate: "2022-05-06",
    type: "Film", studio: "Marvel Studios", universe: "MCU", saga: "Multiverse Saga", phase: 4,
    runtime: 126, director: "Sam Raimi",
    requires: ["wandavision-2021", "spider-man-no-way-home-2021"],
    synopsis: "Strange traverses the multiverse to protect a young woman with universe-hopping powers — and confronts a dark, grieving Wanda Maximoff.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook (4K)"]
  },
  {
    id: "ms-marvel-2022", title: "Ms. Marvel", year: 2022, releaseDate: "2022-06-08",
    type: "TV Series", studio: "Marvel Studios", universe: "MCU", saga: "Multiverse Saga", phase: 4,
    runtime: "6 episodes", director: "Adil El Arbi & Bilall Fallah; Meera Menon; Sharmeen Obaid-Chinoy",
    synopsis: "Pakistani-American teen Kamala Khan, a die-hard Captain Marvel fan, gains cosmic powers of her own.",
    streaming: ["Disney+"], purchase: [], physical: []
  },
  {
    id: "thor-love-and-thunder-2022", title: "Thor: Love and Thunder", year: 2022, releaseDate: "2022-07-08",
    type: "Film", studio: "Marvel Studios", universe: "MCU", saga: "Multiverse Saga", phase: 4,
    runtime: 119, director: "Taika Waititi",
    synopsis: "Thor reunites with Jane Foster, who now wields Mjolnir as the Mighty Thor, to stop Gorr the God Butcher.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook (4K)"]
  },
  {
    id: "i-am-groot-s1-2022", title: "I Am Groot (Season 1)", year: 2022, releaseDate: "2022-08-10",
    type: "Animated Series", studio: "Marvel Studios", universe: "MCU", saga: "Multiverse Saga", phase: 4,
    runtime: "5 shorts", director: "Kirsten Lepore",
    synopsis: "Five animated shorts following Baby Groot's mischievous adventures growing up.",
    streaming: ["Disney+"], purchase: [], physical: []
  },
  {
    id: "she-hulk-2022", title: "She-Hulk: Attorney at Law", year: 2022, releaseDate: "2022-08-18",
    type: "TV Series", studio: "Marvel Studios", universe: "MCU", saga: "Multiverse Saga", phase: 4,
    runtime: "9 episodes", director: "Kat Coiro; Anu Valia",
    synopsis: "Lawyer Jennifer Walters gains Hulk powers from her cousin Bruce — and tries to balance superhero life with her legal practice.",
    streaming: ["Disney+"], purchase: [], physical: []
  },
  {
    id: "werewolf-by-night-2022", title: "Werewolf by Night", year: 2022, releaseDate: "2022-10-07",
    type: "TV Special", studio: "Marvel Studios", universe: "MCU", saga: "Multiverse Saga", phase: 4,
    runtime: 53, director: "Michael Giacchino",
    synopsis: "A black-and-white horror homage: Jack Russell joins a secret society of monster hunters competing for a mystical relic.",
    streaming: ["Disney+"], purchase: [], physical: []
  },
  {
    id: "black-panther-wakanda-forever-2022", title: "Black Panther: Wakanda Forever", year: 2022, releaseDate: "2022-11-11",
    type: "Film", studio: "Marvel Studios", universe: "MCU", saga: "Multiverse Saga", phase: 4,
    runtime: 161, director: "Ryan Coogler",
    synopsis: "Mourning T'Challa, Wakanda confronts a new threat: Namor and the underwater nation of Talokan.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook (4K)"]
  },
  {
    id: "guardians-holiday-special-2022", title: "The Guardians of the Galaxy Holiday Special", year: 2022, releaseDate: "2022-11-25",
    type: "TV Special", studio: "Marvel Studios", universe: "MCU", saga: "Multiverse Saga", phase: 4,
    runtime: 44, director: "James Gunn",
    synopsis: "Mantis and Drax travel to Earth to find Kevin Bacon as a Christmas present for a heartbroken Star-Lord.",
    streaming: ["Disney+"], purchase: [], physical: []
  },

  // =========================================================================
  // MCU - PHASE 5
  // =========================================================================
  {
    id: "ant-man-quantumania-2023", title: "Ant-Man and the Wasp: Quantumania", year: 2023, releaseDate: "2023-02-17",
    type: "Film", studio: "Marvel Studios", universe: "MCU", saga: "Multiverse Saga", phase: 5,
    runtime: 124, director: "Peyton Reed",
    synopsis: "The Lang and Pym families are pulled into the Quantum Realm and confront Kang the Conqueror.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook (4K)"]
  },
  {
    id: "guardians-of-the-galaxy-3-2023", title: "Guardians of the Galaxy Vol. 3", year: 2023, releaseDate: "2023-05-05",
    type: "Film", studio: "Marvel Studios", universe: "MCU", saga: "Multiverse Saga", phase: 5,
    runtime: 150, director: "James Gunn",
    synopsis: "Star-Lord rallies the team for one final mission to save Rocket from his torturous past with the High Evolutionary.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook (4K)"]
  },
  {
    id: "secret-invasion-2023", title: "Secret Invasion", year: 2023, releaseDate: "2023-06-21",
    type: "TV Series", studio: "Marvel Studios", universe: "MCU", saga: "Multiverse Saga", phase: 5,
    runtime: "6 episodes", director: "Ali Selim",
    synopsis: "Nick Fury returns to Earth to stop a faction of rebel Skrulls who have been infiltrating humanity for decades.",
    streaming: ["Disney+"], purchase: [], physical: []
  },
  {
    id: "loki-s2-2023", title: "Loki (Season 2)", year: 2023, releaseDate: "2023-10-05",
    type: "TV Series", studio: "Marvel Studios", universe: "MCU", saga: "Multiverse Saga", phase: 5,
    runtime: "6 episodes", director: "Justin Benson & Aaron Moorhead; Dan Deleeuw; Kasra Farahani",
    requires: ["loki-s1-2021"],
    synopsis: "Loki time-slips through the TVA and across history to save the multiverse from collapse.",
    streaming: ["Disney+"], purchase: [], physical: []
  },
  {
    id: "marvels-2023", title: "The Marvels", year: 2023, releaseDate: "2023-11-10",
    type: "Film", studio: "Marvel Studios", universe: "MCU", saga: "Multiverse Saga", phase: 5,
    runtime: 105, director: "Nia DaCosta",
    requires: ["ms-marvel-2022", "loki-s1-2021"],
    synopsis: "Carol Danvers, Monica Rambeau, and Kamala Khan find their powers entangled and must team up to stop a vengeful Kree warlord.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray"]
  },
  {
    id: "what-if-s2-2023", title: "What If…? (Season 2)", year: 2023, releaseDate: "2023-12-22",
    type: "Animated Series", studio: "Marvel Studios", universe: "MCU", saga: "Multiverse Saga", phase: 5,
    runtime: "9 episodes", director: "Bryan Andrews",
    synopsis: "More multiversal divergences from the Watcher's anthology — Christmas-themed, post-apocalyptic, and superhero detective tales.",
    streaming: ["Disney+"], purchase: [], physical: []
  },
  {
    id: "echo-2024", title: "Echo", year: 2024, releaseDate: "2024-01-09",
    type: "TV Series", studio: "Marvel Studios", universe: "MCU", saga: "Multiverse Saga", phase: 5,
    runtime: "5 episodes", director: "Sydney Freeland; Catriona McKenzie",
    requires: ["hawkeye-2021"],
    synopsis: "Maya Lopez returns to her Choctaw hometown to escape Kingpin's grasp and reckon with her family's legacy.",
    streaming: ["Disney+"], purchase: [], physical: []
  },
  {
    id: "deadpool-wolverine-2024", title: "Deadpool & Wolverine", year: 2024, releaseDate: "2024-07-26",
    type: "Film", studio: "Marvel Studios", universe: "MCU", saga: "Multiverse Saga", phase: 5,
    runtime: 128, director: "Shawn Levy",
    synopsis: "Deadpool drags a battered Wolverine across the multiverse to save his dying timeline from the TVA.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook (4K)"]
  },
  {
    id: "agatha-all-along-2024", title: "Agatha All Along", year: 2024, releaseDate: "2024-09-18",
    type: "TV Series", studio: "Marvel Studios", universe: "MCU", saga: "Multiverse Saga", phase: 5,
    runtime: "9 episodes", director: "Jac Schaeffer; Gandja Monteiro; Rachel Goldberg",
    requires: ["wandavision-2021"],
    synopsis: "Agatha Harkness, freed from Wanda's spell, gathers a coven to walk the Witches' Road and reclaim her power.",
    streaming: ["Disney+"], purchase: [], physical: []
  },
  {
    id: "what-if-s3-2024", title: "What If…? (Season 3)", year: 2024, releaseDate: "2024-12-22",
    type: "Animated Series", studio: "Marvel Studios", universe: "MCU", saga: "Multiverse Saga", phase: 5,
    runtime: "8 episodes", director: "Bryan Andrews",
    synopsis: "The final season of the Watcher's anthology — including Storm as Sorcerer Supreme and a Howard the Duck adventure.",
    streaming: ["Disney+"], purchase: [], physical: []
  },
  {
    id: "your-friendly-neighborhood-spider-man-2025", title: "Your Friendly Neighborhood Spider-Man", year: 2025, releaseDate: "2025-01-29",
    type: "Animated Series", studio: "Marvel Studios", universe: "MCU", saga: "Multiverse Saga", phase: 5,
    runtime: "10 episodes", director: "Jeff Trammell",
    synopsis: "An alternate-MCU origin: a teenage Peter Parker is mentored by Norman Osborn after a different fateful spider bite.",
    streaming: ["Disney+"], purchase: [], physical: []
  },
  {
    id: "captain-america-brave-new-world-2025", title: "Captain America: Brave New World", year: 2025, releaseDate: "2025-02-14",
    type: "Film", studio: "Marvel Studios", universe: "MCU", saga: "Multiverse Saga", phase: 5,
    runtime: 119, director: "Julius Onah",
    synopsis: "Sam Wilson, the new Captain America, is caught in an international incident involving newly-elected President Thaddeus Ross.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook (4K)"]
  },
  {
    id: "daredevil-born-again-2025", title: "Daredevil: Born Again", year: 2025, releaseDate: "2025-03-04",
    type: "TV Series", studio: "Marvel Studios", universe: "MCU", saga: "Multiverse Saga", phase: 5,
    runtime: "9 episodes", director: "Various",
    requires: ["echo-2024"],
    synopsis: "Matt Murdock returns as a lawyer in NYC — just as Wilson Fisk launches a campaign for mayor.",
    streaming: ["Disney+"], purchase: [], physical: []
  },
  {
    id: "thunderbolts-2025", title: "Thunderbolts*", year: 2025, releaseDate: "2025-05-02",
    type: "Film", studio: "Marvel Studios", universe: "MCU", saga: "Multiverse Saga", phase: 5,
    runtime: 127, director: "Jake Schreier",
    synopsis: "Yelena, Bucky, Red Guardian, Ghost, Taskmaster, and US Agent are pulled together by Valentina for a mission designed to fail.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook (4K)"]
  },
  {
    id: "ironheart-2025", title: "Ironheart", year: 2025, releaseDate: "2025-06-24",
    type: "TV Series", studio: "Marvel Studios", universe: "MCU", saga: "Multiverse Saga", phase: 5,
    runtime: "6 episodes", director: "Sam Bailey; Angela Barnes",
    synopsis: "MIT prodigy Riri Williams, fresh off building her own Iron Man-style suit, gets pulled into a Chicago underworld of tech and dark magic.",
    streaming: ["Disney+"], purchase: [], physical: []
  },
  {
    id: "eyes-of-wakanda-2025", title: "Eyes of Wakanda", year: 2025, releaseDate: "2025-08-06",
    type: "Animated Series", studio: "Marvel Studios", universe: "MCU", saga: "Multiverse Saga", phase: 5,
    runtime: "4 episodes", director: "Todd Harris",
    synopsis: "Anthology following Wakandan agents — the Hatut Zeraze — across history as they recover stolen vibranium artifacts.",
    streaming: ["Disney+"], purchase: [], physical: []
  },

  // =========================================================================
  // MCU - PHASE 6
  // =========================================================================
  {
    id: "fantastic-four-first-steps-2025", title: "The Fantastic Four: First Steps", year: 2025, releaseDate: "2025-07-25",
    type: "Film", studio: "Marvel Studios", universe: "MCU", saga: "Multiverse Saga", phase: 6,
    runtime: 115, director: "Matt Shakman",
    synopsis: "In a retro-futuristic 1960s alternate Earth, Marvel's First Family must defend the planet from the cosmic Galactus and his herald Silver Surfer.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook (4K)"]
  },
  {
    id: "wonder-man-2026", title: "Wonder Man", year: 2026, releaseDate: "2026-01-27",
    type: "TV Series", studio: "Marvel Studios", universe: "MCU", saga: "Multiverse Saga", phase: 6,
    runtime: "8 episodes", director: "Stella Meghie; Destin Daniel Cretton",
    synopsis: "Hollywood stuntman Simon Williams is granted superpowers and tries to balance celebrity with responsibility.",
    streaming: ["Disney+"], purchase: [], physical: []
  },
  {
    id: "marvel-zombies-2025", title: "Marvel Zombies", year: 2025, releaseDate: "2025-10-03",
    type: "Animated Series", studio: "Marvel Studios", universe: "MCU", saga: "Multiverse Saga", phase: 5,
    runtime: "4 episodes", director: "Bryan Andrews",
    synopsis: "Survivors of a multiversal zombie outbreak from What If…? fight for humanity's last hope against undead heroes.",
    streaming: ["Disney+"], purchase: [], physical: []
  },
  {
    id: "avengers-doomsday-2026", title: "Avengers: Doomsday", year: 2026, releaseDate: "2026-05-01",
    type: "Film", studio: "Marvel Studios", universe: "MCU", saga: "Multiverse Saga", phase: 6,
    runtime: null, director: "Anthony & Joe Russo",
    synopsis: "The Avengers reunite to face a new multiversal threat in the form of Victor von Doom.",
    streaming: [], purchase: [], physical: []
  },
  {
    id: "avengers-secret-wars-2027", title: "Avengers: Secret Wars", year: 2027, releaseDate: "2027-05-07",
    type: "Film", studio: "Marvel Studios", universe: "MCU", saga: "Multiverse Saga", phase: 6,
    runtime: null, director: "Anthony & Joe Russo",
    synopsis: "The culmination of the Multiverse Saga where realities collide and heroes from across the multiverse must fight for existence.",
    streaming: [], purchase: [], physical: []
  },

  // =========================================================================
  // MCU - ONE-SHOTS
  // =========================================================================
  {
    id: "the-consultant-2011", title: "The Consultant", year: 2011, releaseDate: "2011-09-13",
    type: "One-Shot", studio: "Marvel Studios", universe: "MCU", saga: "Infinity Saga", phase: 1,
    runtime: 4, director: "Leythum", imdbId: "tt2011118",
    localPoster: "posters/the-consultant-2011.jpg",
    synopsis: "Coulson and Sitwell discuss how SHIELD can prevent General Ross from forcing Emil Blonsky onto the Avengers Initiative.",
    streaming: [], purchase: [], physical: ["Bonus on Thor Blu-ray (2011)"]
  },
  {
    id: "thors-hammer-2011", title: "A Funny Thing Happened on the Way to Thor's Hammer", year: 2011, releaseDate: "2011-10-25",
    type: "One-Shot", studio: "Marvel Studios", universe: "MCU", saga: "Infinity Saga", phase: 1,
    runtime: 4, director: "Leythum", imdbId: "tt2011109",
    synopsis: "Agent Coulson stops at a New Mexico convenience store and foils an armed robbery on his way to investigate Thor's hammer.",
    streaming: [], purchase: [], physical: ["Bonus on Captain America: First Avenger Blu-ray"]
  },
  {
    id: "item-47-2012", title: "Item 47", year: 2012, releaseDate: "2012-09-25",
    type: "One-Shot", studio: "Marvel Studios", universe: "MCU", saga: "Infinity Saga", phase: 1,
    runtime: 12, director: "Louis D'Esposito",
    synopsis: "A young couple uses a recovered Chitauri weapon from the Battle of New York to rob banks. SHIELD agents Sitwell and Blake hunt them down.",
    streaming: [], purchase: [], physical: ["Bonus on Avengers Blu-ray (2012)"]
  },
  {
    id: "agent-carter-one-shot-2013", title: "Agent Carter", year: 2013, releaseDate: "2013-09-08",
    type: "One-Shot", studio: "Marvel Studios", universe: "MCU", saga: "Infinity Saga", phase: 1,
    runtime: 15, director: "Louis D'Esposito", imdbId: "tt3067036",
    synopsis: "A year after WWII, Peggy Carter sneaks out of an SSR desk job to single-handedly take down a criminal operation.",
    streaming: [], purchase: [], physical: ["Bonus on Iron Man 3 Blu-ray"]
  },
  {
    id: "all-hail-the-king-2014", title: "All Hail the King", year: 2014, releaseDate: "2014-02-04",
    imdbId: "tt3438640",
    type: "One-Shot", studio: "Marvel Studios", universe: "MCU", saga: "Infinity Saga", phase: 2,
    runtime: 14, director: "Drew Pearce",
    synopsis: "Following the events of Iron Man 3, Trevor Slattery is an infamous icon locked up in Seagate Prison, where he is interviewed by a documentary filmmaker.",
    streaming: ["Disney+"], purchase: [], physical: ["Bonus on Thor: The Dark World Blu-ray"]
  },
  {
    id: "team-thor-2016", title: "Team Thor", year: 2016, releaseDate: "2016-08-28",
    imdbId: "tt5813926",
    type: "One-Shot", studio: "Marvel Studios", universe: "MCU", saga: "Infinity Saga", phase: 3,
    runtime: 4, director: "Taika Waititi",
    synopsis: "A mockumentary detailing what Thor was up to during the events of Captain America: Civil War, living in Australia with his average roommate Darryl.",
    streaming: ["Disney+"], purchase: [], physical: ["Bonus on Captain America: Civil War Blu-ray"]
  },
  {
    id: "team-thor-part-2-2017", title: "Team Thor: Part 2", year: 2017, releaseDate: "2017-02-14",
    imdbId: "tt6488344",
    type: "One-Shot", studio: "Marvel Studios", universe: "MCU", saga: "Infinity Saga", phase: 3,
    runtime: 5, director: "Taika Waititi",
    synopsis: "The hilarious continuation of Thor's time living with his roommate Darryl as they argue over household chores and rent.",
    streaming: ["Disney+"], purchase: [], physical: ["Bonus on Doctor Strange Blu-ray"]
  },
  {
    id: "team-darryl-2018", title: "Team Darryl", year: 2018, releaseDate: "2018-02-20",
    imdbId: "tt7532356",
    type: "One-Shot", studio: "Marvel Studios", universe: "MCU", saga: "Infinity Saga", phase: 3,
    runtime: 6, director: "Taika Waititi",
    synopsis: "After Thor moves out, Darryl finds a new roommate: the deposed Grandmaster from Sakaar.",
    streaming: ["Disney+"], purchase: [], physical: ["Bonus on Thor: Ragnarok Blu-ray"]
  },

  // =========================================================================
  // MARVEL TELEVISION (ABC / Hulu / Freeform)
  // =========================================================================
  {
    id: "agents-of-shield-2013", title: "Agents of S.H.I.E.L.D.", year: 2013, releaseDate: "2013-09-24",
    type: "TV Series", studio: "Marvel Television / ABC", universe: "Marvel Television", saga: "MCU-adjacent", phase: null,
    runtime: "7 seasons / 136 episodes", director: "Various (Joss Whedon, Jed Whedon, Maurissa Tancharoen)",
    synopsis: "Agent Coulson leads a team of operatives investigating super-powered threats — and gradually rebuilds SHIELD after its HYDRA collapse.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play"],
    physical: ["DVD", "Blu-ray (per season)"]
  },
  {
    id: "agent-carter-series-2015", title: "Agent Carter (TV Series)", year: 2015, releaseDate: "2015-01-06",
    type: "TV Series", studio: "Marvel Television / ABC", universe: "Marvel Television", saga: "MCU-adjacent", phase: null,
    runtime: "2 seasons / 18 episodes", director: "Various",
    synopsis: "Peggy Carter balances secret missions for the SSR with her cover life in 1940s/50s America.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play"],
    physical: ["DVD", "Blu-ray"]
  },
  {
    id: "inhumans-2017", title: "Inhumans", year: 2017, releaseDate: "2017-09-29",
    type: "TV Series", studio: "Marvel Television / ABC / IMAX", universe: "Marvel Television", saga: "MCU-adjacent", phase: null,
    runtime: "1 season / 8 episodes", director: "Roel Reiné; Various",
    synopsis: "Black Bolt and the Inhuman royal family flee a coup on the moon and crash-land in Hawaii.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play"],
    physical: ["DVD", "Blu-ray"]
  },
  {
    id: "cloak-and-dagger-2018", title: "Cloak & Dagger", year: 2018, releaseDate: "2018-06-07",
    type: "TV Series", studio: "Marvel Television / Freeform", universe: "Marvel Television", saga: "MCU-adjacent", phase: null,
    runtime: "2 seasons / 20 episodes", director: "Various",
    synopsis: "Two New Orleans teens, Tyrone and Tandy, develop linked superpowers — one with darkness, one with light.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video"],
    physical: []
  },
  {
    id: "runaways-2017", title: "Runaways", year: 2017, releaseDate: "2017-11-21",
    type: "TV Series", studio: "Marvel Television / Hulu", universe: "Marvel Television", saga: "MCU-adjacent", phase: null,
    runtime: "3 seasons / 33 episodes", director: "Various",
    synopsis: "Six teens discover their parents are part of a sinister cult and run away to take them down.",
    streaming: ["Disney+"], purchase: [], physical: []
  },
  {
    id: "helstrom-2020", title: "Helstrom", year: 2020, releaseDate: "2020-10-16",
    type: "TV Series", studio: "Marvel Television / Hulu", universe: "Marvel Television", saga: "MCU-adjacent", phase: null,
    runtime: "1 season / 10 episodes", director: "Various",
    synopsis: "Daimon and Ana Helstrom, children of a serial killer, hunt the worst of humanity's evils — supernatural and otherwise.",
    streaming: ["Disney+"], purchase: [], physical: []
  },

  // =========================================================================
  // NETFLIX DEFENDERS SAGA
  // =========================================================================
  {
    id: "daredevil-netflix-2015", title: "Daredevil (Netflix)", year: 2015, releaseDate: "2015-04-10",
    type: "TV Series", studio: "Marvel Television / Netflix", universe: "Netflix Defenders", saga: "MCU-adjacent", phase: null,
    runtime: "3 seasons / 39 episodes", director: "Various",
    synopsis: "Blind lawyer Matt Murdock fights crime in Hell's Kitchen as the masked vigilante Daredevil.",
    streaming: ["Disney+"],
    purchase: [], physical: []
  },
  {
    id: "jessica-jones-2015", title: "Jessica Jones", year: 2015, releaseDate: "2015-11-20",
    type: "TV Series", studio: "Marvel Television / Netflix", universe: "Netflix Defenders", saga: "MCU-adjacent", phase: null,
    runtime: "3 seasons / 39 episodes", director: "Various",
    synopsis: "PI Jessica Jones, a survivor of mind-controller Kilgrave, takes on cases in Hell's Kitchen while battling her demons.",
    streaming: ["Disney+"], purchase: [], physical: []
  },
  {
    id: "luke-cage-2016", title: "Luke Cage", year: 2016, releaseDate: "2016-09-30",
    type: "TV Series", studio: "Marvel Television / Netflix", universe: "Netflix Defenders", saga: "MCU-adjacent", phase: null,
    runtime: "2 seasons / 26 episodes", director: "Various",
    synopsis: "Bulletproof ex-con Luke Cage protects Harlem from crime lords like Cottonmouth and Bushmaster.",
    streaming: ["Disney+"], purchase: [], physical: []
  },
  {
    id: "iron-fist-2017", title: "Iron Fist", year: 2017, releaseDate: "2017-03-17",
    type: "TV Series", studio: "Marvel Television / Netflix", universe: "Netflix Defenders", saga: "MCU-adjacent", phase: null,
    runtime: "2 seasons / 23 episodes", director: "Various",
    synopsis: "Danny Rand returns to NYC after 15 years presumed dead — armed with mystical kung fu and the glowing fist of K'un-Lun.",
    streaming: ["Disney+"], purchase: [], physical: []
  },
  {
    id: "defenders-2017", title: "The Defenders", year: 2017, releaseDate: "2017-08-18",
    type: "TV Series", studio: "Marvel Television / Netflix", universe: "Netflix Defenders", saga: "MCU-adjacent", phase: null,
    runtime: "1 season / 8 episodes", director: "Various",
    synopsis: "Daredevil, Jessica Jones, Luke Cage, and Iron Fist team up to take down The Hand in NYC.",
    streaming: ["Disney+"], purchase: [], physical: []
  },
  {
    id: "punisher-netflix-2017", title: "The Punisher (Netflix)", year: 2017, releaseDate: "2017-11-17",
    type: "TV Series", studio: "Marvel Television / Netflix", universe: "Netflix Defenders", saga: "MCU-adjacent", phase: null,
    runtime: "2 seasons / 26 episodes", director: "Various",
    synopsis: "Ex-Marine Frank Castle wages a brutal war on the criminals responsible for his family's death.",
    streaming: ["Disney+"], purchase: [], physical: []
  },

  // =========================================================================
  // SONY'S SPIDER-MAN UNIVERSE / SONY MARVEL
  // =========================================================================
  {
    id: "spider-man-2002", title: "Spider-Man", year: 2002, releaseDate: "2002-05-03",
    type: "Film", studio: "Sony / Columbia", universe: "Raimi Spider-Man", saga: "Pre-MCU", phase: null,
    runtime: 121, director: "Sam Raimi",
    synopsis: "After a radioactive spider bite, geeky Peter Parker becomes Spider-Man and faces the Green Goblin in his first outing.",
    streaming: [],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray"]
  },
  {
    id: "spider-man-2-2004", title: "Spider-Man 2", year: 2004, releaseDate: "2004-06-30",
    type: "Film", studio: "Sony / Columbia", universe: "Raimi Spider-Man", saga: "Pre-MCU", phase: null,
    runtime: 127, director: "Sam Raimi",
    synopsis: "Peter Parker considers giving up the mantle just as Doctor Otto Octavius transforms into the deadly Doc Ock.",
    streaming: [],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray"]
  },
  {
    id: "spider-man-3-2007", title: "Spider-Man 3", year: 2007, releaseDate: "2007-05-04",
    type: "Film", studio: "Sony / Columbia", universe: "Raimi Spider-Man", saga: "Pre-MCU", phase: null,
    runtime: 139, director: "Sam Raimi",
    synopsis: "Peter Parker faces Sandman, a vengeful Harry Osborn, and the alien symbiote that births Venom.",
    streaming: [],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray"]
  },
  {
    id: "amazing-spider-man-2012", title: "The Amazing Spider-Man", year: 2012, releaseDate: "2012-07-03",
    type: "Film", studio: "Sony / Columbia", universe: "Webb Spider-Man", saga: "Pre-MCU", phase: null,
    runtime: 136, director: "Marc Webb",
    synopsis: "A reboot: Peter Parker discovers his late father's research and faces Dr. Curt Connors' transformation into the Lizard.",
    streaming: [],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray"]
  },
  {
    id: "amazing-spider-man-2-2014", title: "The Amazing Spider-Man 2", year: 2014, releaseDate: "2014-05-02",
    type: "Film", studio: "Sony / Columbia", universe: "Webb Spider-Man", saga: "Pre-MCU", phase: null,
    runtime: 142, director: "Marc Webb",
    synopsis: "Peter Parker faces Electro and confronts his old friend Harry Osborn — with tragic consequences for Gwen Stacy.",
    streaming: [],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray"]
  },
  {
    id: "venom-2018", title: "Venom", year: 2018, releaseDate: "2018-10-05",
    type: "Film", studio: "Sony / Columbia", universe: "Sony's Spider-Man Universe", saga: "Pre-MCU", phase: null,
    runtime: 112, director: "Ruben Fleischer",
    synopsis: "Investigative journalist Eddie Brock bonds with an alien symbiote and becomes the antiheroic Venom.",
    streaming: ["Netflix"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook"]
  },
  {
    id: "spider-man-into-spider-verse-2018", title: "Spider-Man: Into the Spider-Verse", year: 2018, releaseDate: "2018-12-14",
    type: "Animated Film", studio: "Sony / Columbia", universe: "Spider-Verse Animated", saga: "Pre-MCU", phase: null,
    runtime: 117, director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
    synopsis: "Brooklyn teen Miles Morales becomes Spider-Man and joins forces with Spider-People from across the multiverse.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook"]
  },
  {
    id: "venom-let-there-be-carnage-2021", title: "Venom: Let There Be Carnage", year: 2021, releaseDate: "2021-10-01",
    type: "Film", studio: "Sony / Columbia", universe: "Sony's Spider-Man Universe", saga: "Pre-MCU", phase: null,
    runtime: 97, director: "Andy Serkis",
    synopsis: "Eddie Brock and Venom face serial killer Cletus Kasady, who bonds with a red symbiote to become Carnage.",
    streaming: ["Netflix"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook"]
  },
  {
    id: "morbius-2022", title: "Morbius", year: 2022, releaseDate: "2022-04-01",
    type: "Film", studio: "Sony / Columbia", universe: "Sony's Spider-Man Universe", saga: "Pre-MCU", phase: null,
    runtime: 104, director: "Daniel Espinosa",
    synopsis: "Biochemist Michael Morbius cures himself of a rare blood disease — and becomes a vampire-like creature.",
    streaming: ["Netflix"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray"]
  },
  {
    id: "spider-man-across-spider-verse-2023", title: "Spider-Man: Across the Spider-Verse", year: 2023, releaseDate: "2023-06-02",
    type: "Animated Film", studio: "Sony / Columbia", universe: "Spider-Verse Animated", saga: "Pre-MCU", phase: null,
    runtime: 140, director: "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
    synopsis: "Miles Morales is pulled into a multiversal Spider-Society — and clashes with them over a fundamental rule of Spider-Man canon.",
    streaming: ["Netflix"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook"]
  },
  {
    id: "madame-web-2024", title: "Madame Web", year: 2024, releaseDate: "2024-02-14",
    type: "Film", studio: "Sony / Columbia", universe: "Sony's Spider-Man Universe", saga: "Pre-MCU", phase: null,
    runtime: 116, director: "S.J. Clarkson",
    synopsis: "Paramedic Cassandra Webb develops clairvoyant powers and must protect three young women from a deadly stalker.",
    streaming: ["Netflix"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray"]
  },
  {
    id: "venom-last-dance-2024", title: "Venom: The Last Dance", year: 2024, releaseDate: "2024-10-25",
    type: "Film", studio: "Sony / Columbia", universe: "Sony's Spider-Man Universe", saga: "Pre-MCU", phase: null,
    runtime: 109, director: "Kelly Marcel",
    synopsis: "Eddie and Venom go on the run as Knull dispatches the Xenophages to hunt them across America.",
    streaming: ["NOW (Sky Cinema)"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook"]
  },
  {
    id: "kraven-the-hunter-2024", title: "Kraven the Hunter", year: 2024, releaseDate: "2024-12-13",
    type: "Film", studio: "Sony / Columbia", universe: "Sony's Spider-Man Universe", saga: "Pre-MCU", phase: null,
    runtime: 127, director: "J.C. Chandor",
    synopsis: "Sergei Kravinoff, son of a Russian crime boss, becomes the world's deadliest hunter after a mystical encounter in the African wild.",
    streaming: ["NOW (Sky Cinema)"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray"]
  },

  // =========================================================================
  // FOX X-MEN UNIVERSE
  // =========================================================================
  {
    id: "x-men-2000", title: "X-Men", year: 2000, releaseDate: "2000-07-14",
    type: "Film", studio: "20th Century Fox", universe: "Fox X-Men", saga: "Pre-MCU", phase: null,
    runtime: 104, director: "Bryan Singer",
    synopsis: "Professor Xavier's mutants protect humanity from a society that fears them — and from Magneto's plot to mutate world leaders.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray"]
  },
  {
    id: "x-men-2-2003", title: "X2: X-Men United", year: 2003, releaseDate: "2003-05-02",
    type: "Film", studio: "20th Century Fox", universe: "Fox X-Men", saga: "Pre-MCU", phase: null,
    runtime: 134, director: "Bryan Singer",
    synopsis: "An attack on the President triggers a militarized hunt for mutants. The X-Men must ally with Magneto to survive.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray"]
  },
  {
    id: "x-men-last-stand-2006", title: "X-Men: The Last Stand", year: 2006, releaseDate: "2006-05-26",
    type: "Film", studio: "20th Century Fox", universe: "Fox X-Men", saga: "Pre-MCU", phase: null,
    runtime: 104, director: "Brett Ratner",
    synopsis: "A 'cure' for mutation divides the X-Men — and Jean Grey returns as the unstable Phoenix.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray"]
  },
  {
    id: "x-men-origins-wolverine-2009", title: "X-Men Origins: Wolverine", year: 2009, releaseDate: "2009-05-01",
    type: "Film", studio: "20th Century Fox", universe: "Fox X-Men", saga: "Pre-MCU", phase: null,
    runtime: 107, director: "Gavin Hood",
    synopsis: "Wolverine's tragic origins from the 19th century to the Weapon X program.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray"]
  },
  {
    id: "x-men-first-class-2011", title: "X-Men: First Class", year: 2011, releaseDate: "2011-06-03",
    type: "Film", studio: "20th Century Fox", universe: "Fox X-Men", saga: "Pre-MCU", phase: null,
    runtime: 132, director: "Matthew Vaughn",
    synopsis: "1962: Charles Xavier and Erik Lehnsherr unite young mutants to stop Sebastian Shaw from triggering nuclear war.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray"]
  },
  {
    id: "the-wolverine-2013", title: "The Wolverine", year: 2013, releaseDate: "2013-07-26",
    type: "Film", studio: "20th Century Fox", universe: "Fox X-Men", saga: "Pre-MCU", phase: null,
    runtime: 126, director: "James Mangold",
    synopsis: "In Japan, Logan loses his healing factor while caught in a Yakuza-Samurai war over an old debt.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray"]
  },
  {
    id: "x-men-days-of-future-past-2014", title: "X-Men: Days of Future Past", year: 2014, releaseDate: "2014-05-23",
    type: "Film", studio: "20th Century Fox", universe: "Fox X-Men", saga: "Pre-MCU", phase: null,
    runtime: 132, director: "Bryan Singer",
    synopsis: "In a Sentinel-ruled future, Wolverine's consciousness is sent back to 1973 to stop the assassination that doomed mutantkind.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray"]
  },
  {
    id: "deadpool-2016", title: "Deadpool", year: 2016, releaseDate: "2016-02-12",
    type: "Film", studio: "20th Century Fox", universe: "Fox X-Men", saga: "Pre-MCU", phase: null,
    runtime: 108, director: "Tim Miller",
    synopsis: "Wisecracking mercenary Wade Wilson is given accelerated healing — and disfigurement — and hunts the man responsible.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook"]
  },
  {
    id: "x-men-apocalypse-2016", title: "X-Men: Apocalypse", year: 2016, releaseDate: "2016-05-27",
    type: "Film", studio: "20th Century Fox", universe: "Fox X-Men", saga: "Pre-MCU", phase: null,
    runtime: 144, director: "Bryan Singer",
    synopsis: "1983: an ancient mutant called Apocalypse awakens and recruits Magneto to remake the world.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray"]
  },
  {
    id: "logan-2017", title: "Logan", year: 2017, releaseDate: "2017-03-03",
    type: "Film", studio: "20th Century Fox", universe: "Fox X-Men", saga: "Pre-MCU", phase: null,
    runtime: 137, director: "James Mangold",
    synopsis: "In 2029, an aging Logan and a frail Professor X protect a young mutant girl from corporate killers.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook (Noir)"]
  },
  {
    id: "deadpool-2-2018", title: "Deadpool 2", year: 2018, releaseDate: "2018-05-18",
    type: "Film", studio: "20th Century Fox", universe: "Fox X-Men", saga: "Pre-MCU", phase: null,
    runtime: 119, director: "David Leitch",
    synopsis: "Deadpool forms X-Force to protect a young mutant from time-traveling soldier Cable.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray", "Steelbook"]
  },
  {
    id: "dark-phoenix-2019", title: "Dark Phoenix", year: 2019, releaseDate: "2019-06-07",
    type: "Film", studio: "20th Century Fox", universe: "Fox X-Men", saga: "Pre-MCU", phase: null,
    runtime: 113, director: "Simon Kinberg",
    synopsis: "Jean Grey absorbs a cosmic force during a rescue mission and her growing power threatens to consume her.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray"]
  },
  {
    id: "new-mutants-2020", title: "The New Mutants", year: 2020, releaseDate: "2020-08-28",
    type: "Film", studio: "20th Century Fox", universe: "Fox X-Men", saga: "Pre-MCU", phase: null,
    runtime: 94, director: "Josh Boone",
    synopsis: "Five young mutants are held in a secret facility, where their gifts manifest as nightmares made flesh.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray"]
  },
  {
    id: "x-men-97-2024", title: "X-Men '97", year: 2024, releaseDate: "2024-03-20",
    type: "Animated Series", studio: "Marvel Studios Animation", universe: "Fox X-Men / Animated", saga: "MCU-adjacent", phase: null,
    runtime: "2 seasons / 20 episodes (S1: 10, S2: 10 — through 2025)", director: "Jake Castorena; Beau DeMayo",
    synopsis: "A continuation of the beloved 1990s X-Men: The Animated Series, picking up after Xavier's apparent death.",
    streaming: ["Disney+"], purchase: [], physical: []
  },

  // =========================================================================
  // FOX X-MEN TV
  // =========================================================================
  {
    id: "legion-2017", title: "Legion", year: 2017, releaseDate: "2017-02-08",
    type: "TV Series", studio: "FX / 20th Television", universe: "Fox X-Men", saga: "Pre-MCU", phase: null,
    runtime: "3 seasons / 27 episodes", director: "Noah Hawley; Various",
    synopsis: "David Haller, schizophrenic and possibly the most powerful mutant alive, struggles to separate reality from illusion.",
    streaming: ["Disney+"], purchase: ["Apple TV", "Amazon Video"], physical: []
  },
  {
    id: "the-gifted-2017", title: "The Gifted", year: 2017, releaseDate: "2017-10-02",
    type: "TV Series", studio: "Fox / 20th Television", universe: "Fox X-Men", saga: "Pre-MCU", phase: null,
    runtime: "2 seasons / 29 episodes", director: "Various",
    synopsis: "After their kids manifest mutant powers, a family goes on the run and joins a mutant resistance.",
    streaming: ["Disney+"], purchase: ["Apple TV", "Amazon Video"], physical: ["DVD", "Blu-ray"]
  },

  // =========================================================================
  // BLADE TRILOGY
  // =========================================================================
  {
    id: "blade-1998", title: "Blade", year: 1998, releaseDate: "1998-08-21",
    type: "Film", studio: "New Line Cinema", universe: "Blade Trilogy", saga: "Pre-MCU", phase: null,
    runtime: 120, director: "Stephen Norrington",
    synopsis: "Half-vampire daywalker Blade hunts the undead and uncovers a vampire prophecy threatening humanity.",
    streaming: [],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray"]
  },
  {
    id: "blade-2-2002", title: "Blade II", year: 2002, releaseDate: "2002-03-22",
    type: "Film", studio: "New Line Cinema", universe: "Blade Trilogy", saga: "Pre-MCU", phase: null,
    runtime: 117, director: "Guillermo del Toro",
    synopsis: "Blade reluctantly teams with vampires to hunt the Reapers — a mutated strain that feeds on vampires and humans alike.",
    streaming: [],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray"]
  },
  {
    id: "blade-trinity-2004", title: "Blade: Trinity", year: 2004, releaseDate: "2004-12-08",
    type: "Film", studio: "New Line Cinema", universe: "Blade Trilogy", saga: "Pre-MCU", phase: null,
    runtime: 113, director: "David S. Goyer",
    synopsis: "Blade joins the Nightstalkers to face Dracula himself, resurrected by the vampire elite.",
    streaming: [],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray"]
  },
  {
    id: "blade-the-series-2006", title: "Blade: The Series", year: 2006, releaseDate: "2006-06-28",
    type: "TV Series", studio: "New Line / Spike TV", universe: "Blade Trilogy", saga: "Pre-MCU", phase: null,
    runtime: "1 season / 12 episodes", director: "Various",
    synopsis: "Blade (Sticky Fingaz) takes on a vampire research program in Detroit.",
    streaming: [], purchase: ["Apple TV", "Amazon Video"], physical: ["DVD"]
  },

  // =========================================================================
  // PRE-MCU MARVEL FILMS (2000s and earlier)
  // =========================================================================
  {
    id: "howard-the-duck-1986", title: "Howard the Duck", year: 1986, releaseDate: "1986-08-01",
    type: "Film", studio: "Universal / Lucasfilm", universe: "Pre-MCU", saga: "Pre-MCU", phase: null,
    runtime: 110, director: "Willard Huyck",
    synopsis: "An anthropomorphic duck from another planet is teleported to Earth and must save it from interstellar invaders.",
    streaming: [],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play"],
    physical: ["DVD", "Blu-ray"]
  },
  {
    id: "punisher-1989", title: "The Punisher", year: 1989, releaseDate: "1989-10-05",
    type: "Film", studio: "New World Pictures", universe: "Pre-MCU", saga: "Pre-MCU", phase: null,
    runtime: 89, director: "Mark Goldblatt",
    synopsis: "Dolph Lundgren plays Frank Castle, an ex-cop who wages a one-man war on crime after the mafia kills his family.",
    streaming: [],
    purchase: ["Apple TV", "Amazon Video"],
    physical: ["DVD", "Blu-ray"]
  },
  {
    id: "captain-america-1990", title: "Captain America", year: 1990, releaseDate: "1990-12-14",
    type: "Film", studio: "21st Century Film Corporation", universe: "Pre-MCU", saga: "Pre-MCU", phase: null,
    runtime: 97, director: "Albert Pyun",
    synopsis: "Frozen since WWII, Steve Rogers thaws in the 1990s and faces the now-aged Red Skull.",
    streaming: [],
    purchase: ["Amazon Video"],
    physical: ["DVD", "Blu-ray"]
  },
  {
    id: "daredevil-2003", title: "Daredevil", year: 2003, releaseDate: "2003-02-14",
    type: "Film", studio: "20th Century Fox", universe: "Pre-MCU", saga: "Pre-MCU", phase: null,
    runtime: 103, director: "Mark Steven Johnson",
    synopsis: "Blind lawyer Matt Murdock fights crime as Daredevil and faces Bullseye and Kingpin.",
    streaming: [],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray"]
  },
  {
    id: "hulk-2003", title: "Hulk", year: 2003, releaseDate: "2003-06-20",
    type: "Film", studio: "Universal", universe: "Pre-MCU", saga: "Pre-MCU", phase: null,
    runtime: 138, director: "Ang Lee",
    synopsis: "Bruce Banner's exposure to gamma rays unleashes the Hulk — and forces him to confront his father's experiments.",
    streaming: [],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play", "Microsoft Store"],
    physical: ["DVD", "Blu-ray"]
  },
  {
    id: "punisher-2004", title: "The Punisher", year: 2004, releaseDate: "2004-04-16",
    type: "Film", studio: "Lionsgate / Marvel Studios", universe: "Pre-MCU", saga: "Pre-MCU", phase: null,
    runtime: 124, director: "Jonathan Hensleigh",
    synopsis: "Thomas Jane stars as Frank Castle, who unleashes brutal vengeance on a Florida crime lord.",
    streaming: [],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play"],
    physical: ["DVD", "Blu-ray"]
  },
  {
    id: "elektra-2005", title: "Elektra", year: 2005, releaseDate: "2005-01-14",
    type: "Film", studio: "20th Century Fox", universe: "Pre-MCU", saga: "Pre-MCU", phase: null,
    runtime: 97, director: "Rob Bowman",
    synopsis: "Resurrected assassin Elektra is hired to kill a father and daughter — and chooses to protect them instead.",
    streaming: [],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play"],
    physical: ["DVD", "Blu-ray"]
  },
  {
    id: "fantastic-four-2005", title: "Fantastic Four", year: 2005, releaseDate: "2005-07-08",
    type: "Film", studio: "20th Century Fox", universe: "Pre-MCU", saga: "Pre-MCU", phase: null,
    runtime: 106, director: "Tim Story",
    synopsis: "Astronauts gain superpowers from cosmic radiation — Reed Richards, Sue Storm, Johnny Storm, and Ben Grimm — and battle Doctor Doom.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play"],
    physical: ["DVD", "Blu-ray"]
  },
  {
    id: "fantastic-four-rise-silver-surfer-2007", title: "Fantastic Four: Rise of the Silver Surfer", year: 2007, releaseDate: "2007-06-15",
    type: "Film", studio: "20th Century Fox", universe: "Pre-MCU", saga: "Pre-MCU", phase: null,
    runtime: 92, director: "Tim Story",
    synopsis: "The Fantastic Four face the herald Silver Surfer, who has come to prepare Earth for the world-eater Galactus.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play"],
    physical: ["DVD", "Blu-ray"]
  },
  {
    id: "ghost-rider-2007", title: "Ghost Rider", year: 2007, releaseDate: "2007-02-16",
    type: "Film", studio: "Sony / Columbia", universe: "Pre-MCU", saga: "Pre-MCU", phase: null,
    runtime: 110, director: "Mark Steven Johnson",
    synopsis: "Stunt rider Johnny Blaze sells his soul and becomes the demon-headed Spirit of Vengeance.",
    streaming: [],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play"],
    physical: ["DVD", "Blu-ray", "4K UHD Blu-ray"]
  },
  {
    id: "punisher-war-zone-2008", title: "Punisher: War Zone", year: 2008, releaseDate: "2008-12-05",
    type: "Film", studio: "Lionsgate / Marvel Knights", universe: "Pre-MCU", saga: "Pre-MCU", phase: null,
    runtime: 103, director: "Lexi Alexander",
    synopsis: "Ray Stevenson's Frank Castle wages an ultra-violent war on Jigsaw and the New York mob.",
    streaming: [],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play"],
    physical: ["DVD", "Blu-ray"]
  },
  {
    id: "ghost-rider-spirit-of-vengeance-2011", title: "Ghost Rider: Spirit of Vengeance", year: 2011, releaseDate: "2011-12-10",
    type: "Film", studio: "Columbia / Marvel Knights", universe: "Pre-MCU", saga: "Pre-MCU", phase: null,
    runtime: 96, director: "Mark Neveldine, Brian Taylor",
    synopsis: "Johnny Blaze, hiding in Eastern Europe, is recruited to protect a young boy the Devil wants as a vessel.",
    streaming: [],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play"],
    physical: ["DVD", "Blu-ray"]
  },
  {
    id: "fantastic-four-2015", title: "Fantastic Four", year: 2015, releaseDate: "2015-08-07",
    type: "Film", studio: "20th Century Fox", universe: "Pre-MCU", saga: "Pre-MCU", phase: null,
    runtime: 100, director: "Josh Trank",
    synopsis: "A grim reboot: four young scientists are transformed by an interdimensional accident and must stop a former friend.",
    streaming: ["Disney+"],
    purchase: ["Apple TV", "Amazon Video", "Sky Store", "Google Play"],
    physical: ["DVD", "Blu-ray"]
  },

  // =========================================================================
  // CLASSIC TV (1970s-1990s)
  // =========================================================================
  {
    id: "incredible-hulk-1977", title: "The Incredible Hulk (TV Series)", year: 1977, releaseDate: "1977-11-04",
    type: "TV Series", studio: "Universal TV / CBS", universe: "Classic TV", saga: "Pre-MCU", phase: null,
    runtime: "5 seasons / 82 episodes (+ 3 TV movies)", director: "Various",
    synopsis: "Bill Bixby plays Dr. David Banner, who turns into the Hulk (Lou Ferrigno) when angered, on the run from a tabloid reporter.",
    streaming: [],
    purchase: ["Apple TV", "Amazon Video"],
    physical: ["DVD (complete series)"]
  },
  {
    id: "spider-man-1977", title: "The Amazing Spider-Man (TV Series)", year: 1977, releaseDate: "1977-09-14",
    type: "TV Series", studio: "Charles Fries Productions / CBS", universe: "Classic TV", saga: "Pre-MCU", phase: null,
    runtime: "2 seasons / 13 episodes", director: "Various",
    synopsis: "Live-action Spider-Man adaptation starring Nicholas Hammond as Peter Parker.",
    streaming: [], purchase: [], physical: ["DVD (Region 2 import)"]
  },
  {
    id: "captain-america-1979", title: "Captain America", year: 1979, releaseDate: "1979-01-19",
    type: "Film", studio: "Universal TV / CBS", universe: "Classic TV", saga: "Pre-MCU", phase: null,
    runtime: 97, director: "Rod Holcomb",
    synopsis: "Steve Rogers (Reb Brown) is a former Marine who gains super-strength via a secret serum to fight criminals.",
    streaming: [], purchase: [], physical: ["DVD"]
  },
  {
    id: "captain-america-ii-1979", title: "Captain America II: Death Too Soon", year: 1979, releaseDate: "1979-11-23",
    type: "Film", studio: "Universal TV / CBS", universe: "Classic TV", saga: "Pre-MCU", phase: null,
    runtime: 90, director: "Ivan Nagy",
    synopsis: "Steve Rogers returns to battle a terrorist who has developed a fast-aging chemical weapon.",
    streaming: [], purchase: [], physical: ["DVD"]
  },
  {
    id: "generation-x-1996", title: "Generation X", year: 1996, releaseDate: "1996-02-20",
    type: "Film", studio: "Fox", universe: "Classic TV", saga: "Pre-MCU", phase: null,
    runtime: 87, director: "Jack Sholder",
    synopsis: "Banshee and Emma Frost lead a group of young mutants at the Xavier School in this TV movie pilot.",
    streaming: [], purchase: [], physical: ["DVD"]
  },
  {
    id: "fantastic-four-1994", title: "The Fantastic Four (Unreleased)", year: 1994, releaseDate: "1994-05-31",
    type: "Film", studio: "New Horizon / Constantine Film", universe: "Classic TV", saga: "Pre-MCU", phase: null,
    runtime: 90, director: "Oley Sassone",
    synopsis: "The infamous unreleased Roger Corman production. Despite never being officially released, it became a cult classic through bootlegs.",
    streaming: [], purchase: [], physical: ["None (Official)"]
  },
  {
    id: "x-men-tas-1992", title: "X-Men: The Animated Series", year: 1992, releaseDate: "1992-10-31",
    type: "Animated Series", studio: "Saban / Marvel / Fox Kids", universe: "Classic Animated", saga: "Pre-MCU", phase: null,
    runtime: "5 seasons / 76 episodes", director: "Larry Houston; Various",
    synopsis: "The seminal 90s adaptation of the X-Men, beloved for its faithful comic-accurate storytelling.",
    streaming: ["Disney+"], purchase: ["Apple TV", "Amazon Video"], physical: ["DVD"]
  },
  {
    id: "spider-man-tas-1994", title: "Spider-Man: The Animated Series", year: 1994, releaseDate: "1994-11-19",
    type: "Animated Series", studio: "Marvel / Fox Kids", universe: "Classic Animated", saga: "Pre-MCU", phase: null,
    runtime: "5 seasons / 65 episodes", director: "Bob Richardson; Various",
    synopsis: "The acclaimed 90s Spider-Man cartoon — Peter Parker juggling Daily Bugle work and adventures with Venom, Carnage, and the Sinister Six.",
    streaming: ["Disney+"], purchase: ["Apple TV", "Amazon Video"], physical: ["DVD"]
  },
  {
    id: "spider-man-unlimited-1999", title: "Spider-Man Unlimited", year: 1999, releaseDate: "1999-10-02",
    type: "Animated Series", studio: "Saban / Marvel", universe: "Classic Animated", saga: "Pre-MCU", phase: null,
    runtime: "1 season / 13 episodes", director: "Patrick Archibald",
    synopsis: "Spider-Man travels to Counter-Earth to rescue John Jameson and fight the High Evolutionary's Beastials.",
    streaming: ["Disney+"], purchase: [], physical: ["DVD"]
  },
  {
    id: "wolverine-x-men-2009", title: "Wolverine and the X-Men", year: 2009, releaseDate: "2009-01-23",
    type: "Animated Series", studio: "Marvel / Liberation / Toonz", universe: "Animated Multiverse", saga: "Pre-MCU", phase: null,
    runtime: "1 season / 26 episodes", director: "Various",
    synopsis: "After the X-Men disband following a mysterious explosion, Wolverine must reunite them to prevent a Sentinel-dominated future.",
    streaming: ["Disney+"], purchase: ["Apple TV", "Amazon Video"], physical: ["DVD", "Blu-ray"]
  },
  {
    id: "avengers-emh-2010", title: "The Avengers: Earth's Mightiest Heroes", year: 2010, releaseDate: "2010-09-22",
    type: "Animated Series", studio: "Marvel Animation / Disney XD", universe: "Animated Multiverse", saga: "Pre-MCU", phase: null,
    runtime: "2 seasons / 52 episodes", director: "Various",
    synopsis: "Classic comic-style Avengers: Iron Man, Thor, Hulk, and others team up after a massive supervillain prison break.",
    streaming: ["Disney+"], purchase: ["Apple TV", "Amazon Video"], physical: ["DVD", "Blu-ray"]
  },
  {
    id: "marvel-anime-2010", title: "Marvel Anime Series", year: 2010, releaseDate: "2010-10-01",
    type: "Animated Series", studio: "Madhouse / Marvel", universe: "Animated Multiverse", saga: "Pre-MCU", phase: null,
    runtime: "4 series / 48 episodes", director: "Various",
    synopsis: "Four distinct anime series produced by Madhouse: Iron Man, Wolverine, X-Men, and Blade, each taking place in Japan.",
    streaming: [], purchase: ["Apple TV", "Amazon Video"], physical: ["DVD"]
  },
  {
    id: "ultimate-spider-man-2012", title: "Ultimate Spider-Man", year: 2012, releaseDate: "2012-04-01",
    type: "Animated Series", studio: "Marvel Animation / Disney XD", universe: "Animated Multiverse", saga: "Pre-MCU", phase: null,
    runtime: "4 seasons / 104 episodes", director: "Various",
    synopsis: "Peter Parker is recruited by Nick Fury to lead a team of teen heroes and become the Ultimate Spider-Man.",
    streaming: ["Disney+"], purchase: ["Apple TV", "Amazon Video"], physical: ["DVD"]
  },
  {
    id: "avengers-assemble-2013", title: "Avengers Assemble", year: 2013, releaseDate: "2013-05-26",
    type: "Animated Series", studio: "Marvel Animation / Disney XD", universe: "Animated Multiverse", saga: "Pre-MCU", phase: null,
    runtime: "5 seasons / 126 episodes", director: "Various",
    synopsis: "Following the movie's success, the Avengers reunite at Avengers Tower to face the Cabal and other cosmic threats.",
    streaming: ["Disney+"], purchase: ["Apple TV", "Amazon Video"], physical: ["DVD"]
  },
  {
    id: "hulk-smash-2013", title: "Hulk and the Agents of S.M.A.S.H.", year: 2013, releaseDate: "2013-08-11",
    type: "Animated Series", studio: "Marvel Animation / Disney XD", universe: "Animated Multiverse", saga: "Pre-MCU", phase: null,
    runtime: "2 seasons / 52 episodes", director: "Various",
    synopsis: "Hulk and his family (Red Hulk, She-Hulk, Skaar, A-Bomb) live together and fight threats while filming a reality show.",
    streaming: ["Disney+"], purchase: ["Apple TV", "Amazon Video"], physical: ["DVD"]
  },
  {
    id: "punisher-dirty-laundry-2012", title: "Punisher: Dirty Laundry", year: 2012, releaseDate: "2012-07-15",
    type: "Short Film", studio: "1984 Private Defense Contractors (Fan Film)", universe: "Independent", saga: "Pre-MCU", phase: null,
    runtime: 10, director: "Phil Joanou",
    synopsis: "Thomas Jane returns as Frank Castle in this gritty unofficial short film. Frank just wants to do his laundry, but a street gang intervenes.",
    streaming: ["YouTube"], purchase: [], physical: []
  },
  {
    id: "spider-man-beyond-spider-verse-2027", title: "Spider-Man: Beyond the Spider-Verse", year: 2027, releaseDate: "2027-06-18",
    type: "Film", studio: "Sony Pictures Animation", universe: "Spider-Verse (Sony)", saga: "Spider-Verse Trilogy", phase: null,
    runtime: null, director: "Joaquim Dos Santos; Kemp Powers; Justin K. Thompson",
    synopsis: "The final chapter of the Spider-Verse trilogy where Miles Morales must save the multiverse and his family from the Spot and the Spider-Society.",
    streaming: [], purchase: [], physical: []
  }
];

// =========================================================================
// SPOILER-LOCK: tier at which each MCU item becomes safe to display.
// Non-MCU items default to 0 (always shown). Tier scale mirrors TIER_LABELS.
// =========================================================================
const TIER_LABELS = [
  "New to the MCU",
  "Through The Avengers (2012)",
  "Through Age of Ultron (2015)",
  "Through Civil War (2016)",
  "Through Infinity War (2018)",
  "Through Endgame (2019)",
  "Through No Way Home (2021)",
  "Through Loki Season 2 (2023)",
  "Fully caught up"
];

const UNLOCK_MAP = {
  // Phase 1 — entry level
  "iron-man-2008": 0,
  "incredible-hulk-2008": 0,
  "iron-man-2-2010": 0,
  "thor-2011": 0,
  "captain-america-first-avenger-2011": 0,
  "avengers-2012": 0,

  // Phase 2 — assumes Avengers seen
  "iron-man-3-2013": 1,
  "thor-dark-world-2013": 1,
  "captain-america-winter-soldier-2014": 1,
  "guardians-of-the-galaxy-2014": 1,
  "avengers-age-of-ultron-2015": 1,
  "ant-man-2015": 2,

  // Phase 3
  "captain-america-civil-war-2016": 2,
  "doctor-strange-2016": 2,
  "guardians-of-the-galaxy-2-2017": 2,
  "spider-man-homecoming-2017": 3,
  "thor-ragnarok-2017": 3,
  "black-panther-2018": 3,
  "avengers-infinity-war-2018": 3,
  "ant-man-and-wasp-2018": 4,
  "captain-marvel-2019": 4,
  "avengers-endgame-2019": 4,
  "spider-man-far-from-home-2019": 5,

  // Phase 4 — post-Endgame
  "wandavision-2021": 5,
  "falcon-winter-soldier-2021": 5,
  "loki-s1-2021": 5,
  "black-widow-2021": 5,
  "what-if-s1-2021": 5,
  "shang-chi-2021": 5,
  "eternals-2021": 5,
  "hawkeye-2021": 5,
  "spider-man-no-way-home-2021": 5,
  "moon-knight-2022": 6,
  "doctor-strange-multiverse-madness-2022": 6,
  "ms-marvel-2022": 6,
  "thor-love-and-thunder-2022": 6,
  "i-am-groot-s1-2022": 6,
  "she-hulk-2022": 6,
  "werewolf-by-night-2022": 6,
  "black-panther-wakanda-forever-2022": 6,
  "guardians-holiday-special-2022": 6,

  // Phase 5
  "ant-man-quantumania-2023": 7,
  "guardians-of-the-galaxy-3-2023": 7,
  "secret-invasion-2023": 7,
  "loki-s2-2023": 7,
  "marvels-2023": 7,
  "what-if-s2-2023": 7,
  "echo-2024": 8,
  "deadpool-wolverine-2024": 8,
  "agatha-all-along-2024": 8,
  "what-if-s3-2024": 8,
  "your-friendly-neighborhood-spider-man-2025": 8,
  "captain-america-brave-new-world-2025": 8,
  "daredevil-born-again-2025": 8,
  "thunderbolts-2025": 8,
  "ironheart-2025": 8,
  "eyes-of-wakanda-2025": 8,
  "marvel-zombies-2025": 8,

  // Phase 6
  "fantastic-four-first-steps-2025": 8,
  "wonder-man-2026": 8,
  "avengers-doomsday-2026": 8,
  "avengers-secret-wars-2027": 8,

  // One-Shots — Phase 1/2 era bonus content
  "the-consultant-2011": 0,
  "thors-hammer-2011": 0,
  "item-47-2012": 1,
  "agent-carter-one-shot-2013": 0,
  "team-thor-2016": 3,
  "team-thor-part-2-2017": 3,
  "team-darryl-2018": 3,
  "all-hail-the-king-2014": 1
};

function getUnlock(item) {
  if (item.universe !== "MCU") return 0;  // non-MCU is unrestricted
  return UNLOCK_MAP[item.id] ?? 0;
}

// Studio-color mapping for poster gradient
function posterClass(item) {
  if (item.universe === "MCU") return "mcu";
  if (item.universe.includes("Sony") || item.universe.includes("Spider-Verse") || item.universe.includes("Raimi") || item.universe.includes("Webb")) return "sony";
  if (item.universe.includes("Fox X-Men")) return "fox";
  if (item.universe === "Netflix Defenders") return "netflix";
  if (item.universe === "Marvel Television") return "tv";
  return "classic";
}
