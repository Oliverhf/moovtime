export function seedDatabase(firebase) {
    function getUUID() {
      // eslint gets funny about bitwise
      /* eslint-disable */
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
          const piece = (Math.random() * 16) | 0;
          const elem = c === 'x' ? piece : (piece & 0x3) | 0x8;
          return elem.toString(16);
      });
      /* eslint-enable */
    }
  
    /* Series
      ============================================ */
    // Documentaries
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Monkey King',
      description: 'An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.',
      genre: 'documentaries',
      maturity: '18',
      slug: 'monkey-king',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Lucy Fox',
      description: 'Lucy Heartbeat Fox is an American woman who spent almost four years in an Russian prison.',
      genre: 'documentaries',
      maturity: '12',
      slug: 'lucy-fox',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Police Officer',
      description:
        'Police Officer is 2000 documentary film directed by Ron Jhon, concerning James Luke and the L.A.P.D',
      genre: 'documentaries',
      maturity: '12',
      slug: 'police-officer',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Ultra size',
      description:
        "Director Roe Max's social experiment in fast-food gastronomy sees him attempting to subsist uniquely on food from the McBurguer",
      genre: 'documentaries',
      maturity: '12',
      slug: 'ultra-size',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Girl on Wire',
      description:
        "Filmmaker Yoshi Matsuga masterfully recreates high-wire daredevil Joanna Pitsburg's 1930 stunt walking on a wire across the main road",
      genre: 'documentaries',
      maturity: '12',
      slug: 'girl-on-wire',
    });
  
    // Comedies
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'The Park',
      description:
        'A motley group of park workers go through hilarious misadventures at the buffalo, New York, park of Roots Company.',
      genre: 'comedies',
      maturity: '15',
      slug: 'the-park',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Wild Bakery',
      description:
        'The bakery is about to brankrupt but the employees are willing to do whatver it takes to keep on business.',
      genre: 'comedies',
      maturity: '15',
      slug: 'wild-bakery',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Private Castle',
      description:
        'Hugh Viktor gets in trouble with a princess that lives under the Grouburk Castle.',
      genre: 'comedies',
      maturity: '15',
      slug: 'private-castle',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Family Guy',
      description:
        'Peter Griffin and his family of two teenagers, a smart dog, a devilish baby and his wife find themselves in some of the most hilarious scenarios.',
      genre: 'comedies',
      maturity: '15',
      slug: 'family-guy',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Green Beach',
      description:
        'Four young, schoolgoing boys and Leon, who live in Green Beach set out on various adventures.',
      genre: 'comedies',
      maturity: '15',
      slug: 'green-beach',
    });
  
    // Children
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Willy Pig',
      description:
        'Willy, an outgoing preschool pig, participates in many energetic activities. He learns something new every day and has a lot of fun with her family and friends.',
      genre: 'children',
      maturity: '0',
      slug: 'willy-pig',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Karen The Explorer',
      description:
        'Karen, a seven-year-old girl of Latin American descent, embarks upon numerous adventures in the wilderness with her friend Boots, a monkey, and a variety of fun and useful tools.',
      genre: 'children',
      maturity: '0',
      slug: 'karen-the-explorer',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Mew Patrol',
      description:
        'Six brave puppies, captained by a tech-savvy ten-year-old boy, Ryder, work together to accomplish high-stakes rescue missions to safeguard the residents of the Adventure Bay community.',
      genre: 'children',
      maturity: '0',
      slug: 'mew-patrol',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Icaro',
      description:
        'Bespectacled kkoi Icaro Read demonstrates to kids how to deal with such childhood traumas and challenges as homework, teachers and bullies.',
      genre: 'children',
      maturity: '0',
      slug: 'icaro',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'CrabMurray',
      description:
        'A orange sea crab named CrabMurray Longlegs lives in the city of Sand Diego deep in the Pacific Ocean. ',
      genre: 'children',
      maturity: '0',
      slug: 'crabmurray',
    });
  
    // Crime
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Living with a Murderer',
      description:
        'Rose Guy used to commit several crimes and his girlfriend June does not let him go to prision after he got arrested.',
      genre: 'crime',
      maturity: '18',
      slug: 'living-with-a-murderer',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Sniper Shot',
      description:
        'An innocent man is accused of murder, leading his attorney on a wild chase to confirm his alibi using raw footage from a television show.',
      genre: 'crime',
      maturity: '18',
      slug: 'sniper-shot',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'The Moon Killer',
      description:
        'Sam Mars Kroch was an American convicted serial killer whose crimes spanned from 1940 to 1983. He was convicted of murdering eleven people and condemned to death for the murder of Helen Jhonson B. although his sentence would be commuted to life in prison in 1998.',
      genre: 'crime',
      maturity: '18',
      slug: 'the-moon-killer',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'The Veteran',
      description:
        'The veteran John Kog Mouse is a veteran, accused of commitied 50 violent crimes.',
      genre: 'crime',
      maturity: '18',
      slug: 'the-veteran',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'The Woodstock',
      description:
        "In 2000 novelist Jean Ruiz Kurtznu wife died, and he claimed she perished after falling down stairs at their home. The medical examiner, however, determined that she had been beaten with a weapon",
      genre: 'crime',
      maturity: '18',
      slug: 'the-woodstock',
    });
  
    // Feel-good
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Good Tucker Hunting',
      description:
        'Tucker Hunting, a genius in mathematics, solves all the difficult mathematical problems. When he faces an emotional crisis, he takes help from psychiatrist Dr Emerson Flickell, who helps him recover.',
      genre: 'feel-good',
      maturity: '12',
      slug: 'good-tucker-hunting',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Bar of West Virginia',
      description:
        'The little bar called RushSeat, has a lot of different customers. When the RushSeat needs help, the customers are ready to help',
      genre: 'feel-good',
      maturity: '12',
      slug: 'bar-of-west-virginia',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Heliopolys',
      description:
        "Social misfit Heliopolys protects herself with a caustic wit, but her unplanned pregnancy has the teen getting more involved in the lives of her baby's adoptive parents than she expected.",
      genre: 'feel-good',
      maturity: '12',
      slug: 'Heliopolys',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Welcome to Hill Mountain',
      description:
        'Gil arrives with his fiancee and her family in Hill Mountain lounge for a vacation, even as he tries to finish his debut novel. He is beguiled by the city, which takes him to a time past, away from his fiancee.',
      genre: 'feel-good',
      maturity: '12',
      slug: 'welcome-to-hill-mountain',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'School of soccer',
      description:
        "Thesis, an amateur rock enthusiast, slyly takes up his friend's substitute teacher's job. Bearing no qualifications for it, he instead starts training the students to form a soccer team.",
      genre: 'feel-good',
      maturity: '12',
      slug: 'school-of-soccer',
    });
  
    /* Films
      ============================================ */
    // Drama
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'The Car',
      description:
        'Two friends and fellow magicians become bitter enemies after a sudden tragedy. As they devote themselves to this rivalry, they make sacrifices that bring them a magic car but with terrible consequences.',
      genre: 'drama',
      maturity: '15',
      slug: 'the-car',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Swim Club',
      description:
        'Discontented with his capitalistic lifestyle, a white-collared insomniac forms an underground swim club with Tyler, a careless soap salesman. The project soon spirals down into something sinister.',
      genre: 'drama',
      maturity: '15',
      slug: 'swim-club',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Kings Glass',
      description:
        'King Glass VI tries to overcome his stammering problem with the help of speech therapist Lionel Umber and makes himself worthy enough to lead his country through World War II.',
      genre: 'drama',
      maturity: '15',
      slug: 'kings-glass',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'The Optic Guy',
      description:
        'Hugh Glass, a legendary frontiersman, is severely injured in a bear attack and is abandoned by his hunting crew. He uses his skills to survive and take revenge on his companion, who betrayed him.',
      genre: 'drama',
      maturity: '15',
      slug: 'the-optic-guy',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'The Stamp',
      description:
        'Pedro Merlin creates a social stamp for websites, with the help of his friend Omar Castilo. But soon, a string of lies tears their relationship apart even as the stamp connects people.',
      genre: 'drama',
      maturity: '12',
      slug: 'the-stamp',
    });
  
    // Suspense
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Island Of Falcons',
      description:
        'Gordon Markley and Webster Burk, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Gordon uncovers a shocking truth about the place.',
      genre: 'suspense',
      maturity: '15',
      slug: 'shutter-island',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Gone Boy',
      description:
        'Noah Fin discovers that the entire media focus has shifted on him when his wife Amanda Fin disappears on the day of their second wedding anniversary.',
      genre: 'suspense',
      maturity: '15',
      slug: 'gone-boy',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Prisoners',
      description:
        "When the police take time to find Rude Mongretch's daughter and her friend, he decides to go on a search himself. His desperation leads him closer to finding the truth and also jeopardises his own life.",
      genre: 'suspense',
      maturity: '15',
      slug: 'prisoners',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'First',
      description:
        'A serial killer begins murdering people according to the seven deadly sins. Two detectives, one new to the city and the other about to retire, are tasked with apprehending the criminal.',
      genre: 'suspense',
      maturity: '15',
      slug: 'first',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Jepp',
      description:
        'Luis Braga Fokenhoustry, a cartoonist by profession, finds himself obsessively thinking about the Zodiac killer. He uses his puzzle-solving abilities to get closer to revealing the identity of the killer.',
      genre: 'suspense',
      maturity: '15',
      slug: 'jepp',
    });
  
    // Children
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Hotel Novak',
      description:
        'Din Novak, who owns a high-end resort for monsters, attempts to keep his daughter from falling in love with Din, a human.',
      genre: 'children',
      maturity: '0',
      slug: 'hotel-novak',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Despicable Hinu',
      description:
        'Hinu, a criminal mastermind, adopts three orphans as pawns to carry out the biggest heist in history. His life takes an unexpected turn when the little girls see him as their potential father.',
      genre: 'children',
      maturity: '0',
      slug: 'despicable-hinu',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Neon',
      description:
        'Neon sets out on a journey with an iceman, Formen, and his reindeer, Stwart, in order to find her sister, Eliza, who has the power to convert any object or person into ice.',
      genre: 'children',
      maturity: '0',
      slug: 'neon',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Spirited Room',
      description:
        'In this animated feature by noted Japanese director Numisaky-hiro, 10-year-old ketsugada (Huri Manety) and her parents (Tabasury , Tabasury Sakgway) stumble upon a seemingly abandoned amusement park.',
      genre: 'children',
      maturity: '0',
      slug: 'spirited-room',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Fly',
      description:
        "Tyson, an old widower, goes off on an adventure in his flying desk in search of Blue River, his wife's dream destination.",
      genre: 'children',
      maturity: '0',
      slug: 'fly',
    });
  
    // Thriller
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Tadala Hipster',
      description:
        'Hipster in a hurry, failed actor Tadala Hipster seeks connection as he walks the streets of Bloom City.',
      genre: 'thriller',
      maturity: '15',
      slug: 'tadala-hipster',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'A region of birds',
      description:
        'Birds fly around of Gainsville, Florida. Sometimes they dissapear but nobody knows why.',
      genre: 'thriller',
      maturity: '15',
      slug: 'a-region-of-birds',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Black Weapon',
      description:
        'Yuri, gets the chance to play the Black Weapon, Fort Wiko. But she finds herself slipping into madness when, the artistic director, decides that Yuri might fit the weapon better.',
      genre: 'thriller',
      maturity: '15',
      slug: 'black-swan',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Nightmare',
      description:
        'Nunes Ivy, a petty thief, realises that he can make money by capturing photographs of criminal activities and starts resorting to extreme tactics to get them.',
      genre: 'thriller',
      maturity: '15',
      slug: 'nightmare',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'The Silence of the hill',
      description:
        'Willam Stuggart, an FBI agent, seeks help from Quan Ibon, a psychopathic serial killer who lives on the hill, in order to apprehend another serial killer who has been claiming female victims.',
      genre: 'thriller',
      maturity: '15',
      slug: 'the-silence-of-the-hill',
    });
  
    // Romance
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'A Star Grows',
      description:
        'After falling in love with struggling artist Leonard, Jackson, a musician, coaxes her to follow her dreams, while he battles with alcoholism and his personal demons.',
      genre: 'romance',
      maturity: '15',
      slug: 'a-star-grows',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Yellow Sun',
      description:
        'Jack and Curriel are married with a daughter and their marriage is about to fall apart. Both come from dysfunctional families and struggle to make sense of their relationship.',
      genre: 'romance',
      maturity: '15',
      slug: 'yellow-sun',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Log Log Tombstone',
      description:
        'Log log (Arthur murdoch) and Amber (Nessa Stone) are drawn together by their common desire to do what they love. But as success mounts they are faced with decisions that begin...',
      genre: 'romance',
      maturity: '15',
      slug: 'log-log-tombstone',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'The Lonely Dream',
      description:
        "Luke reads the story of Josh and Rogue, two lovers who were separated by fate, to Ms Hamilton, an old woman who suffers from Alzheimer's, on a daily basis out of his notebook.",
      genre: 'romance',
      maturity: '15',
      slug: 'the-lonely-dream',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Shadow Fall',
      description:'Robert Epson is a highly skilled chemist, starts drinking with a young woman named Kate Downson. She is the wife of Hugo Bolshivck, ambassador of Qtar, and intends to reveal that Kate is not who people believe.',
      genre: 'romance',
      maturity: '15',
      slug: 'shadow-fall',
    });
  }