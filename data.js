const books = [
    {
        title: "Songs of Surrender",
        author: "U2",
        episode: 1,
        episodeTitle: "Episode 1",
        coverUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/U2_in_Milan_%2831515306638%29.jpg/2880px-U2_in_Milan_%2831515306638%29.jpg",
        googleBooksUrl: "https://open.spotify.com/album/3fqPfbVHsvdpovpJXOJlvU",
        tags: ["music"],
        notes: ""
    },
    {
        title: "The Curious Incident of the Dog in the Night-time",
        author: "Mark Haddon",
        episode: 1,
        episodeTitle: "Episode 1",
        coverUrl: "https://upload.wikimedia.org/wikipedia/en/0/03/Curiousincidentofdoginnighttime.jpg",
        googleBooksUrl: "https://books.google.com/books?id=OWUbAQAAMAAJ",
        tags: ["book"],
        notes: ""
    },
    {
        title: "A Vindication of the Rights of Woman",
        author: "Mary Wollstonecraft",
        episode: 2,
        episodeTitle: "Singularity",
        coverUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/A_Vindication_of_the_Rights_of_Woman_title_page.jpg/1024px-A_Vindication_of_the_Rights_of_Woman_title_page.jpg",
        googleBooksUrl: "https://books.google.com/books?id=qhcFAAAAQAAJ",
        tags: ["book"],
        notes: ""
    },
    {
        title: "Frankenstein",
        author: "Mary Shelley",
        episode: 2,
        episodeTitle: "Singularity",
        coverUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Christie%27s_auction_scan_of_Frankenstein_1818.jpg/1280px-Christie%27s_auction_scan_of_Frankenstein_1818.jpg",
        googleBooksUrl: "https://books.google.com/books?id=2Zc3AAAAYAAJ",
        tags: ["book"],
        notes: "Daughter of Mary Wollstonecraft"
    },
    {
        title: "Romantic Outlaws",
        author: "Charlotte Gordon",
        episode: 2,
        episodeTitle: "Singularity",
        coverUrl: "https://covers.openlibrary.org/b/id/10302599-L.jpg",
        googleBooksUrl: "https://books.google.com/books?id=xNKuBgAAQBAJ",
        tags: ["book"],
        notes: "About the two Marys"
    },
    {
        title: "Saaya & the Rituals of Tamil Muslim Milk Tea",
        author: "Maazin Buhari",
        episode: 2,
        episodeTitle: "Singularity",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Saaya+Tamil+Muslim+Milk+Tea",
        tags: [],
        notes: ""
    },
    {
        title: "Adam Smith – A Primer",
        author: "Eamonn Butler",
        episode: 3,
        episodeTitle: "Version of yourself",
        coverUrl: "https://londonpublishingpartnership.co.uk/wp-content/uploads/2024/05/adam-smith-a-primer.jpg",
        googleBooksUrl: "https://iea.org.uk/wp-content/uploads/2016/07/upldbook414pdf.pdf",
        tags: ["book"],
        notes: ""
    },
    {
        title: "Classical Liberalism - A Primer",
        author: "Eamonn Butler",
        episode: 3,
        episodeTitle: "Version of yourself",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://iea.org.uk/wp-content/uploads/2016/07/Butler-interactive.pdf",
        tags: ["book"],
        notes: ""
    },
    {
        title: "Friedrich Hayek: The ideas and influence of the libertarian economist",
        author: "Eamonn Butler",
        episode: 3,
        episodeTitle: "Version of yourself",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Friedrich+Hayek:+The+ideas+and+influence+of+the+libertarian+economist+Eamonn+Butler",
        tags: ["book"],
        notes: ""
    },
    {
        title: "Ludwig von Mises – A Primer",
        author: "Eamonn Butler",
        episode: 3,
        episodeTitle: "Version of yourself",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Ludwig+von+Mises+%E2%80%93+A+Primer+Eamonn+Butler",
        tags: ["book"],
        notes: ""
    },
    {
        title: "Milton Friedman: A concise guide to the ideas and influence of the free-market economist",
        author: "Eamonn Butler",
        episode: 3,
        episodeTitle: "Version of yourself",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Milton+Friedman:+A+concise+guide+to+the+ideas+and+influence+of+the+free-market+economist+Eamonn+Butler",
        tags: ["book"],
        notes: ""
    },
    {
        title: "Public Choice – A Primer",
        author: "Eamonn Butler",
        episode: 3,
        episodeTitle: "Version of yourself",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Public+Choice+%E2%80%93+A+Primer+Eamonn+Butler",
        tags: ["book"],
        notes: ""
    },
    {
        title: "A Business History of India",
        author: "Tirthankar Roy",
        episode: 4,
        episodeTitle: "Fighting Extremists",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=A+Business+History+of+India+Tirthankar+Roy.",
        tags: ["book"],
        notes: ""
    },
    {
        title: "Dekalog, A Short Film About Love, A Short Film About Killing",
        author: "Krzysztof Kieślowski",
        episode: 4,
        episodeTitle: "Fighting Extremists",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Krzysztof+Kieślowski:+Dekalog,.+A+Short+Film+About+Love,+A+Short+Film+About+Killing",
        tags: ["movie"],
        notes: ""
    },
    {
        title: "The Making of the Atomic Bomb",
        author: "Richard Rhodes",
        episode: 5,
        episodeTitle: "Oppenheimer",
        coverUrl: "https://books.google.com/books/content?id=aSgFMMNQ6G4C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        googleBooksUrl: "https://books.google.com/books?id=aSgFMMNQ6G4C",
        tags: ["book"],
        notes: ""
    },
    {
        title: "The Life and Death of Great American Cities",
        author: "Jane Jacobs",
        episode: 5,
        episodeTitle: "Oppenheimer",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Life+and+Death+of+Great+American+Cities+",
        tags: ["book"],
        notes: ""
    },
    {
        title: "The Power Broker",
        author: "Robert Caro",
        episode: 5,
        episodeTitle: "Oppenheimer",
        coverUrl: "https://books.google.com/books/content?id=nIVvJYnygRQC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        googleBooksUrl: "https://books.google.com/books?id=nIVvJYnygRQC",
        tags: ["book"],
        notes: ""
    },
    {
        title: "Capitalism and Freedom",
        author: "Milton Friedman",
        episode: 6,
        episodeTitle: "Freddies - Frédéric Bastiat and Friedrich Hayek",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Capitalism+and+Freedom+-+Milton+Friedman",
        tags: ["book"],
        notes: ""
    },
    {
        title: "Economics in one lesson",
        author: "Henry Haznik",
        episode: 6,
        episodeTitle: "Freddies - Frédéric Bastiat and Friedrich Hayek",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Economics+in+one+lesson+-+Henry+Haznik",
        tags: ["book"],
        notes: ""
    },
    {
        title: "Free to Choose",
        author: "Milton Friedman",
        episode: 6,
        episodeTitle: "Freddies - Frédéric Bastiat and Friedrich Hayek",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Free+to+Choose+Milton+Friedman",
        tags: ["book"],
        notes: ""
    },
    {
        title: "The Ascent of Man",
        author: "Jason Bronowsky",
        episode: 7,
        episodeTitle: "Newton and Gandhi",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Ascent+of+Man+-+Jason+Bronowsky",
        tags: ["book"],
        notes: ""
    },
    {
        title: "The Collected Works of Mahatma Gandhi",
        author: "",
        episode: 7,
        episodeTitle: "Newton and Gandhi",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Collected+Works+of+Mahatma+Gandhi+",
        tags: ["book"],
        notes: ""
    },
    {
        title: "Essays by George Orwell, Politics and the English Language",
        author: "",
        episode: 8,
        episodeTitle: "Talent Clusters",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Essays+by+George+Orwell,+Politics+and+the+English+Language+",
        tags: ["article", "essay"],
        notes: ""
    },
    {
        title: "Essays in Persuasion, Essays in Biography",
        author: "John Keynes",
        episode: 7,
        episodeTitle: "Newton and Gandhi",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Essays+in+Persuasion,+Essays+in+Biography-John+Keynes",
        tags: ["article", "essay", "book"],
        notes: "Ajay and Amit generall disagree with Keyes"
    },
    {
        title: "The Essays of Paul Graham",
        author: "Paul Graham",
        episode: 7,
        episodeTitle: "Newton and Gandhi",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Essays+of+Paul+Graham+",
        tags: ["article", "essay"],
        notes: ""
    },
    {
        title: "Fear the Boom and Bust: Keynes vs. Hayek - The Original Economics Rap Battle",
        author: "",
        episode: 7,
        episodeTitle: "Newton and Gandhi",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Fear+the+Boom+and+Bust:+Keynes+vs.+Hayek+-+The+Original+Economics+Rap+Battle+",
        tags: ["music", "video"],
        notes: ""
    },
    {
        title: "Gandhi",
        author: "Ramchandra Guha",
        episode: 7,
        episodeTitle: "Newton and Gandhi",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Gandhi+Ramchandra+Guha",
        tags: ["book"],
        notes: ""
    },
    {
        title: "Gandhi before India",
        author: "Ramchandra Guha",
        episode: 7,
        episodeTitle: "Newton and Gandhi",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Gandhi+before+India+-+Ramchandra+Guha",
        tags: ["book"],
        notes: ""
    },
    {
        title: "The Good Boatman: A Portrait of Gandhi",
        author: "Rajmohan Gandhi",
        episode: 7,
        episodeTitle: "Newton and Gandhi",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Good+Boatman:+A+Portrait+of+Gandhi+-+Rajmohan+Gandhi",
        tags: ["book"],
        notes: ""
    },
    {
        title: "Great Soul: Mahatma Gandhi and his Struggle with India",
        author: "Joseph Lelyveld",
        episode: 7,
        episodeTitle: "Newton and Gandhi",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Great+Soul:+Mahatma+Gandhi+and+his+Struggle+with+India+-+Joseph+Lelyveld",
        tags: ["book"],
        notes: ""
    },
    {
        title: "His Dark Materials",
        author: "Philip Pullman",
        episode: 7,
        episodeTitle: "Newton and Gandhi",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=His+Dark+Materials+-+Philip+Pullman",
        tags: ["book"],
        notes: ""
    },
    {
        title: "The Elusive Quest for Growth",
        author: "",
        episode: 8,
        episodeTitle: "Talent Clusters",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Elusive+Quest+for+Growth+",
        tags: ["book"],
        notes: ""
    },
    {
        title: "Joan Didion",
        author: "",
        episode: 8,
        episodeTitle: "Talent Clusters",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Joan+Didion+",
        tags: ["author", "work"],
        notes: ""
    },
    {
        title: "The White Crow Books and coffee",
        author: "",
        episode: 7,
        episodeTitle: "Newton and Gandhi",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+White+Crow+Books+and+coffee+",
        tags: ["other"],
        notes: ""
    },
    {
        title: "The White Man's Burden",
        author: "William Easterly.",
        episode: 8,
        episodeTitle: "Talent Clusters",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+White+Man's+Burden+-+William+Easterly.",
        tags: ["book"],
        notes: ""
    },
    {
        title: "Barack Obama",
        author: "David Remnick",
        episode: 9,
        episodeTitle: "Diabetes",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Barack+Obama+-+David+Remnick",
        tags: ["special-interest", "biography"],
        notes: ""
    },
    {
        title: "The Emergency: A Personal History",
        author: "Coomi Kapoor",
        episode: 9,
        episodeTitle: "Diabetes",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Emergency:+A+Personal+History+Coomi+Kapoor",
        tags: ["book"],
        notes: ""
    },
    {
        title: "FreeStyle Libre Glucose Monitoring System (Reader & Sensor)",
        author: "",
        episode: 9,
        episodeTitle: "Diabetes",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=FreeStyle+Libre+Glucose+Monitoring+System+(Reader+&+Sensor)+",
        tags: ["special-interest", "technology"],
        notes: ""
    },
    {
        title: "Lenin's Tomb: The Last Days of the Soviet Empire",
        author: "David Remnick",
        episode: 9,
        episodeTitle: "Diabetes",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Lenin's+Tomb:+The+Last+Days+of+the+Soviet+Empire+-+David+Remnick",
        tags: ["book", "history"],
        notes: ""
    },
    {
        title: "Tripurdaman Singh - Sixteen Stormy Days and Nehru: The Debates that Defined India",
        author: "",
        episode: 10,
        episodeTitle: "Freedom Matters",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Tripurdaman+Singh+-+Sixteen+Stormy+Days+and+Nehru:+The+Debates+that+Defined+India+",
        tags: ["book", "history", "politics"],
        notes: ""
    },
    {
        title: "Early Indians",
        author: "Tony Joseph",
        episode: 12,
        episodeTitle: "Khichdi of Culture",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Early+Indians+-+Tony+Joseph",
        tags: ["book", "history"],
        notes: ""
    },
    {
        title: "Fermentation and Kefir Grain",
        author: "",
        episode: 12,
        episodeTitle: "Khichdi of Culture",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Fermentation+and+Kefir+Grain+",
        tags: ["other"],
        notes: ""
    },
    {
        title: "India Moving",
        author: "Chinmay Tumbe",
        episode: 12,
        episodeTitle: "Khichdi of Culture",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=India+Moving+-+Chinmay+Tumbe",
        tags: ["book", "history", "migration"],
        notes: ""
    },
    {
        title: "Wanderers, Kings, Merchants",
        author: "Peggy Mohan",
        episode: 12,
        episodeTitle: "Khichdi of Culture",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Wanderers,+Kings,+Merchants+-+Peggy+Mohan",
        tags: ["book", "history", "language"],
        notes: ""
    },
    {
        title: "Who We Are and How We Got Here",
        author: "David Reich",
        episode: 12,
        episodeTitle: "Khichdi of Culture",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Who+We+Are+and+How+We+Got+Here+David+Reich",
        tags: ["book", "science", "genetics"],
        notes: ""
    },
    {
        title: "Born to Run (the book)",
        author: "Bruce Springsteen",
        episode: 13,
        episodeTitle: "Bruce Springsteen",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Born+to+Run+(the+book)+-+Bruce+Springsteen",
        tags: ["book", "autobiography", "music"],
        notes: ""
    },
    {
        title: "Bruce Springsteen: All the Songs",
        author: "Philippe Margotin and Jean-Michel Guesdon",
        episode: 13,
        episodeTitle: "Bruce Springsteen",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Bruce+Springsteen:+All+the+Songs+Philippe+Margotin+and+Jean-Michel+Guesdon",
        tags: ["music", "book"],
        notes: ""
    },
    {
        title: "The Notebook Trilogy",
        author: "Agota Kristof",
        episode: 13,
        episodeTitle: "Bruce Springsteen",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Notebook+Trilogy+Agota+Kristof",
        tags: ["book", "fiction"],
        notes: ""
    },
    {
        title: "The Road",
        author: "Cormac McCarthy",
        episode: 13,
        episodeTitle: "Bruce Springsteen",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=(Father+and+Son)+The+Road+-+Cormac+McCarthy",
        tags: ["book", "fiction"],
        notes: ""
    },
    {
        title: "Self-Portrait",
        author: "AK Ramanujan",
        episode: 13,
        episodeTitle: "Bruce Springsteen",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Self-Portrait+-+AK+Ramanujan",
        tags: ["book", "poetry"],
        notes: ""
    },
    {
        title: "How the War Was Won",
        author: "Phillips Payson O'Brien",
        episode: 14,
        episodeTitle: "Ukraine War",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=How+the+War+Was+Won+-+Phillips+Payson+O'Brien",
        tags: ["book", "history", "military"],
        notes: ""
    },
    {
        title: "Ode To Kirihito",
        author: "Osamu Tezuka (Buddha series).",
        episode: 14,
        episodeTitle: "Ukraine War",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Ode+To+Kirihito+-+Osamu+Tezuka+(Buddha+series).",
        tags: ["book", "manga"],
        notes: ""
    },
    {
        title: "The Great Mental Models",
        author: "Shane Parrish (Knowledge Project Podcast).",
        episode: 15,
        episodeTitle: "Math and the Brigadier’s Girlfriend",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Great+Mental+Models+Shane+Parrish+(Knowledge+Project+Podcast).",
        tags: ["book", "psychology", "learning"],
        notes: ""
    },
    {
        title: "The Lady Tasting Tea",
        author: "David Salsburg",
        episode: 15,
        episodeTitle: "Math and the Brigadier’s Girlfriend",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Lady+Tasting+Tea+-+David+Salsburg",
        tags: ["book", "history", "science", "statistics"],
        notes: ""
    },
    {
        title: "Alison Bechdel - The Essential Dykes To Watch Out For, Fun Home",
        author: "",
        episode: 16,
        episodeTitle: "China Model",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Alison+Bechdel+-+The+Essential+Dykes+To+Watch+Out+For,+Fun+Home",
        tags: ["book", "graphic-novel", "memoir"],
        notes: ""
    },
    {
        title: "Blankets",
        author: "Craig Thompson",
        episode: 16,
        episodeTitle: "China Model",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Blankets+Craig+Thompson",
        tags: ["book", "graphic-novel", "memoir"],
        notes: ""
    },
    {
        title: "China's Future",
        author: "David Shambaugh",
        episode: 16,
        episodeTitle: "China Model",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=China's+Future+David+Shambaugh",
        tags: ["book", "politics", "international-relations"],
        notes: ""
    },
    {
        title: "Ghost World",
        author: "Daniel Clowes",
        episode: 16,
        episodeTitle: "China Model",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Ghost+World+-+Daniel+Clowes",
        tags: ["book", "graphic-novel"],
        notes: ""
    },
    {
        title: "Hardcore History_(podcast)",
        author: "Dan Carlin Supernova in the East, Blueprint for Armageddon",
        episode: 17,
        episodeTitle: "Three Globalizations",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Hardcore+History_(podcast)+—\u00a0Dan+Carlin+Supernova+in+the+East,+Blueprint+for+Armageddon",
        tags: ["podcast", "history"],
        notes: ""
    },
    {
        title: "Public Opinion",
        author: "Walter Lippmann",
        episode: 17,
        episodeTitle: "Three Globalizations",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Public+Opinion+-+Walter+Lippmann",
        tags: ["book", "politics", "sociology"],
        notes: ""
    },
    {
        title: "Seizing the Enigma",
        author: "David Kahn",
        episode: 17,
        episodeTitle: "Three Globalizations",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Seizing+the+Enigma+-+David+Kahn",
        tags: ["book", "history", "cryptography"],
        notes: ""
    },
    {
        title: "Down to Earth",
        author: "Sharad Joshi",
        episode: 18,
        episodeTitle: "Indian Agriculture",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Down+to+Earth+-+Sharad+Joshi",
        tags: ["book", "agriculture", "economics"],
        notes: ""
    },
    {
        title: "Talking to an Empty Room",
        author: "Sharad Joshi",
        episode: 18,
        episodeTitle: "Indian Agriculture",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Talking+to+an+Empty+Room+-+Sharad+Joshi",
        tags: ["book", "essays"],
        notes: ""
    },
    {
        title: "The Wizard and the Prophet",
        author: "",
        episode: 18,
        episodeTitle: "Indian Agriculture",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Wizard+and+the+Prophet+",
        tags: ["book", "science", "environment"],
        notes: ""
    },
    {
        title: "Superforecasting: The Art and Science of Prediction",
        author: "Philip Tetlock & Dan Gardner",
        episode: 19,
        episodeTitle: "Cricket and Predictions",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Superforecasting:+The+Art+and+Science+of+Prediction+-+Philip+Tetlock+&+Dan+Gardner",
        tags: ["special-interest", "psychology", "forecasting"],
        notes: ""
    },
    {
        title: "Thinking Strategically: The Competitive Edge in Business, Politics, and Everyday Life",
        author: "Avinash Dixit & Barry Nalebuff",
        episode: 19,
        episodeTitle: "Cricket and Predictions",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Thinking+Strategically:+The+Competitive+Edge+in+Business,+Politics,+and+Everyday+Life+-+Avinash+Dixit+&+Barry+Nalebuff",
        tags: ["special-interest", "strategy", "game theory"],
        notes: ""
    },
    {
        title: "The Origins of Totalitarianism",
        author: "Hannah Arendt",
        episode: 20,
        episodeTitle: "Population is an asset",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Origins+of+Totalitarianism+-+Hannah+Arendt",
        tags: ["book", "politics", "history"],
        notes: ""
    },
    {
        title: "Yuganta",
        author: "Irawati Karve",
        episode: 20,
        episodeTitle: "Population is an asset",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Yuganta+Irawati+Karve",
        tags: ["book", "mythology", "history"],
        notes: ""
    },
    {
        title: "Capital Ideas",
        author: "Peter L Bernstein (dated but basics).",
        episode: 21,
        episodeTitle: "Beauty of Finance",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Capital+Ideas+-+Peter+L+Bernstein+(dated+but+basics).",
        tags: ["book", "finance", "history"],
        notes: ""
    },
    {
        title: "The Pathan Unarmed",
        author: "Mukulika Banerjee",
        episode: 21,
        episodeTitle: "Beauty of Finance",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Pathan+Unarmed+-+Mukulika+Banerjee",
        tags: ["book", "sociology", "history"],
        notes: ""
    },
    {
        title: "Timur Kuran - Private Truths, Public Lies + The Long Divergence + Freedoms Delayed",
        author: "",
        episode: 21,
        episodeTitle: "Beauty of Finance",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Timur+Kuran+-+Private+Truths,+Public+Lies+++The+Long+Divergence+++Freedoms+Delayed",
        tags: ["book", "economics", "sociology"],
        notes: ""
    },
    {
        title: "The Creative Act: A Way of Being",
        author: "Rick Rubin",
        episode: 22,
        episodeTitle: "Three Great Leaps by firms",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Creative+Act:+A+Way+of+Being+-+Rick+Rubin",
        tags: ["book", "creativity", "self-help"],
        notes: ""
    },
    {
        title: "A Moveable Feast",
        author: "Ernest Hemingway.",
        episode: 22,
        episodeTitle: "Three Great Leaps by firms",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=A+Moveable+Feast+-+Ernest+Hemingway.",
        tags: ["book", "memoir", "literature"],
        notes: ""
    },
    {
        title: "The Soul of a New Machine",
        author: "Tracy Kidder",
        episode: 22,
        episodeTitle: "Three Great Leaps by firms",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Soul+of+a+New+Machine+-+Tracy+Kidder",
        tags: ["book", "technology", "history"],
        notes: ""
    },
    {
        title: "Darkness at Noon",
        author: "Arthur Koestler (1941 version and new)",
        episode: 23,
        episodeTitle: "Stories that should be films",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Darkness+at+Noon+-+Arthur+Koestler+(1941+version+and+new)",
        tags: ["special-interest", "fiction", "politics"],
        notes: ""
    },
    {
        title: "My Friend Sancho",
        author: "Amit Varma",
        episode: 23,
        episodeTitle: "Stories that should be films",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=My+Friend+Sancho+-+Amit+Varma",
        tags: ["special-interest", "fiction", "indian-literature"],
        notes: ""
    },
    {
        title: "The World of Yesterday",
        author: "Stefan Zweig",
        episode: 23,
        episodeTitle: "Stories that should be films",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+World+of+Yesterday+-+Stefan+Zweig",
        tags: ["special-interest", "memoir", "history"],
        notes: ""
    },
    {
        title: "The Case Against Education",
        author: "Bryan Caplan",
        episode: 24,
        episodeTitle: "Knowledge Society",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Case+Against+Education+-+Bryan+Caplan",
        tags: ["book", "economics", "education"],
        notes: ""
    },
    {
        title: "The Missionary Position",
        author: "Christopher Hitchens",
        episode: 24,
        episodeTitle: "Knowledge Society",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Missionary+Position+-+Christopher+Hitchens",
        tags: ["book", "criticism", "religion"],
        notes: ""
    },
    {
        title: "Unelected Power",
        author: "Paul Tucker",
        episode: 24,
        episodeTitle: "Knowledge Society",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Unelected+Power+-+Paul+Tucker",
        tags: ["book", "politics", "economics"],
        notes: ""
    },
    {
        title: "Essays on Nationalism",
        author: "Rabindranath Tagore",
        episode: 25,
        episodeTitle: "The State",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Essays+on+Nationalism+-+Rabindranath+Tagore",
        tags: ["article", "essay", "politics"],
        notes: ""
    },
    {
        title: "The Libertarian Reader",
        author: "Edited by David Boaz",
        episode: 25,
        episodeTitle: "The State",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Libertarian+Reader+-+Edited+by+David+Boaz",
        tags: ["book", "politics", "philosophy"],
        notes: ""
    },
    {
        title: "The Origins of Political Order + Political Order and Political Decay",
        author: "Francis Fukuyama",
        episode: 25,
        episodeTitle: "The State",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Origins+of+Political+Order+++Political+Order+and+Political+Decay+Francis+Fukuyama",
        tags: ["book", "politics", "history"],
        notes: ""
    },
    {
        title: "Cicada",
        author: "Shaun Tan",
        episode: 26,
        episodeTitle: "When the state should act",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Cicada+Shaun+Tan",
        tags: ["book", "picture book"],
        notes: ""
    },
    {
        title: "Seeing like a State",
        author: "James C. Scott ✩",
        episode: 26,
        episodeTitle: "When the state should act",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Seeing+like+a+State+James+C.+Scott+✩",
        tags: ["book", "politics", "sociology"],
        notes: ""
    },
    {
        title: "A History of Global Health",
        author: "Randall M Packard",
        episode: 27,
        episodeTitle: "Vaccines and Freedom",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=A+History+of+Global+Health+-+Randall+M+Packard",
        tags: ["book", "history", "health"],
        notes: ""
    },
    {
        title: "Beggars in Spain",
        author: "Nancy. Kress",
        episode: 27,
        episodeTitle: "Vaccines and Freedom",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Beggars+in+Spain+-+Nancy.+Kress",
        tags: ["book", "fiction", "science-fiction"],
        notes: ""
    },
    {
        title: "How Music Works",
        author: "David Byrne",
        episode: 29,
        episodeTitle: "Five More Stories that should be films",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=How+Music+Works+-+David+Byrne",
        tags: ["book", "music"],
        notes: ""
    },
    {
        title: "William Spaniel",
        author: "",
        episode: 29,
        episodeTitle: "Five More Stories that should be films",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=William+Spaniel+",
        tags: ["other", "resource"],
        notes: ""
    },
    {
        title: "The Paper Menagerie",
        author: "Ken Liu",
        episode: 30,
        episodeTitle: "Declutter",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Paper+Menagerie+-+Ken+Liu",
        tags: ["special-interest", "fiction", "short-stories"],
        notes: ""
    },
    {
        title: "To Have or To Be",
        author: "Erich Fromm",
        episode: 30,
        episodeTitle: "Declutter",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=To+Have+or+To+Be+-+Erich+Fromm",
        tags: ["special-interest", "philosophy", "psychology"],
        notes: ""
    },
    {
        title: "Army and Nation",
        author: "Steven & Wilkinson",
        episode: 31,
        episodeTitle: "Indian Military",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Army+and+Nation+-+Steven+&+Wilkinson",
        tags: ["book", "politics", "military"],
        notes: ""
    },
    {
        title: "Strategy: A History",
        author: "Lawrence Freedman (he's on sub-stack).",
        episode: 31,
        episodeTitle: "Indian Military",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Strategy:+A+History+-+Lawrence+Freedman+(he's+on+sub-stack).",
        tags: ["book", "history", "strategy"],
        notes: ""
    },
    {
        title: "Victor Davis Hanson - The Second World Wars + Carnage and Culture",
        author: "",
        episode: 31,
        episodeTitle: "Indian Military",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Victor+Davis+Hanson+-+The+Second+World+Wars+++Carnage+and+Culture",
        tags: ["book", "history", "military"],
        notes: ""
    },
    {
        title: "The Cathedral & the Bazaar",
        author: "Eric S Raymond",
        episode: 32,
        episodeTitle: "UNIX",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Cathedral+&+the+Bazaar+-+Eric+S+Raymond",
        tags: ["book", "technology", "software"],
        notes: ""
    },
    {
        title: "In the Beginning... Was the Command Line",
        author: "Neal Stephenson",
        episode: 32,
        episodeTitle: "UNIX",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=In+the+Beginning...+Was+the+Command+Line+-+Neal+Stephenson",
        tags: ["book", "technology", "essays"],
        notes: ""
    },
    {
        title: "Constitutional Amendments",
        author: "",
        episode: 33,
        episodeTitle: "Public Choice Theory",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Constitutional+Amendments+",
        tags: ["other", "politics", "law"],
        notes: ""
    },
    {
        title: "The Godfather trilogy",
        author: "",
        episode: 34,
        episodeTitle: "Family Firms",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Godfather+trilogy+",
        tags: ["movie"  ],
        notes: ""
    },
    {
        title: "Father, Son & Co: My Life at IBM and Beyond",
        author: "Thomas J Watson Jr",
        episode: 34,
        episodeTitle: "Family Firms",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Father,+Son+&+Co:+My+Life+at+IBM+and+Beyond+Thomas+J+Watson+Jr",
        tags: ["book", "business", "memoir"],
        notes: ""
    },
    {
        title: "Heaven's Gaits",
        author: "Adam Gopnik",
        episode: 35,
        episodeTitle: "Hiking",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Heaven's+Gaits+-+Adam+Gopnik",
        tags: ["special-interest", "essays", "culture"],
        notes: ""
    },
    {
        title: "Into the Wild",
        author: "Jon Krakauer",
        episode: 35,
        episodeTitle: "Hiking",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Into+the+Wild+-+Jon+Krakauer",
        tags: ["special-interest", "book", "non-fiction"],
        notes: ""
    },
    {
        title: "Man Eaters of Kumaon",
        author: "Jim Corbett",
        episode: 35,
        episodeTitle: "Hiking",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Man+Eaters+of+Kumaon+-+Jim+Corbett",
        tags: ["special-interest", "book", "adventure"],
        notes: ""
    },
    {
        title: "Rumblefish, The Outsiders",
        author: "Francis Ford Coppola",
        episode: 35,
        episodeTitle: "Hiking",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Rumblefish,+The+Outsiders+Francis+Ford+Coppola",
        tags: ["special-interest", "movie"  ],
        notes: ""
    },
    {
        title: "Runaway, Hateship, Friendship, Courtship, Loveship, Marriage, The Bear Came Over the Mountain",
        author: "Alice Munro",
        episode: 36,
        episodeTitle: "Long Road to Change",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Runaway,+Hateship,+Friendship,+Courtship,+Loveship,+Marriage,+The+Bear+Came+Over+the+Mountain+-+Alice+Munro",
        tags: ["book", "fiction", "short-stories"],
        notes: "Amit's Favorite Author"
    },
    {
        title: "Weapons of the Weak, Against the Grain",
        author: "James C Scott",
        episode: 36,
        episodeTitle: "Long Road to Change",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Weapons+of+the+Weak,+Against+the+Grain+James+C+Scott",
        tags: ["book", "sociology", "politics"],
        notes: ""
    },
    {
        title: "Desperately Seeking Shahrukh",
        author: "Shrayana Bhattacharya",
        episode: 37,
        episodeTitle: "Imperial to Adaptive Firms",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Desperately+Seeking+Shahrukh+-+Shrayana+Bhattacharya",
        tags: ["book", "sociology", "culture"],
        notes: ""
    },
    {
        title: "The Discovery of India",
        author: "Jawaharlal Nehru",
        episode: 37,
        episodeTitle: "Imperial to Adaptive Firms",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Discovery+of+India+-+Jawaharlal+Nehru",
        tags: ["book", "history", "politics"],
        notes: ""
    },
    {
        title: "Anatomy of a Fall",
        author: "Justine Triet",
        episode: 39,
        episodeTitle: "Surface area of Serendipity",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Anatomy+of+a+Fall+-+Justine+Triet",
        tags: ["movie"  ],
        notes: ""
    },
    {
        title: "Dead Poet's Society",
        author: "Peter Weir",
        episode: 39,
        episodeTitle: "Surface area of Serendipity",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Dead+Poet's+Society+-+Peter+Weir",
        tags: ["movie"  ],
        notes: ""
    },
    {
        title: "Midnight in Chernobyl",
        author: "Adam Higginbotham",
        episode: 40,
        episodeTitle: "Future of Electricity",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Midnight+in+Chernobyl+-+Adam+Higginbotham",
        tags: ["book", "history", "disaster"],
        notes: ""
    },
    {
        title: "World Energy Outlook 2023",
        author: "",
        episode: 40,
        episodeTitle: "Future of Electricity",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=World+Energy+Outlook+2023+",
        tags: ["report", "energy", "economics"],
        notes: ""
    },
    {
        title: "GOAT",
        author: "Tyler Cowen (good starting point for non- economics people).",
        episode: 41,
        episodeTitle: "Four papers that changed the world",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=GOAT+-+Tyler+Cowen+(good+starting+point+for+non-+economics+people).",
        tags: ["other", "economics", "resource"],
        notes: ""
    },
    {
        title: "Marginal Revolution University",
        author: "",
        episode: 41,
        episodeTitle: "Four papers that changed the world",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Marginal+Revolution+University+",
        tags: ["other", "education", "economics"],
        notes: ""
    },
    {
        title: "Modern Principles of Microeconomics",
        author: "Alex Tabarrok and Tyler Cowen",
        episode: 41,
        episodeTitle: "Four papers that changed the world",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Modern+Principles+of+Microeconomics+-+Alex+Tabarrok+and+Tyler+Cowen",
        tags: ["book", "economics"],
        notes: ""
    },
    {
        title: "1984, Animal Farm",
        author: "George Orwell",
        episode: 42,
        episodeTitle: "Populist Playbook",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=1984,+Animal+Farm+-+George+Orwell",
        tags: ["book", "fiction", "politics"],
        notes: ""
    },
    {
        title: "On Tyranny",
        author: "Timothy Snyder (graphic version, to give WhatsApp uncles).",
        episode: 42,
        episodeTitle: "Populist Playbook",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=On+Tyranny+-+Timothy+Snyder+(graphic+version,+to+give+WhatsApp+uncles).",
        tags: ["book", "politics", "history"],
        notes: ""
    },
    {
        title: "The Great Arc",
        author: "John Keay",
        episode: 44,
        episodeTitle: "Maps are Magic",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Great+Arc+-+John+Keay",
        tags: ["bir-sessions", "book", "history"],
        notes: ""
    },
    {
        title: "Thelma and Louise",
        author: "Ridley Scott",
        episode: 44,
        episodeTitle: "Maps are Magic",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Thelma+and+Louise+Ridley+Scott",
        tags: ["bir-sessions", "movie"  ],
        notes: ""
    },
    {
        title: "Defending the Undefendable",
        author: "Walter Block",
        episode: 45,
        episodeTitle: "Fallacies! and Luxury Beliefs",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Defending+the+Undefendable+Walter+Block",
        tags: ["bir-sessions", "book", "economics", "philosophy"],
        notes: ""
    },
    {
        title: "The Three Languages of Politics",
        author: "Arnold King",
        episode: 45,
        episodeTitle: "Fallacies! and Luxury Beliefs",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Three+Languages+of+Politics+-+Arnold+King",
        tags: ["bir-sessions", "book", "politics"],
        notes: ""
    },
    {
        title: "Why we Fight",
        author: "Christopher Blattman",
        episode: 45,
        episodeTitle: "Fallacies! and Luxury Beliefs",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Why+we+Fight+-+Christopher+Blattman",
        tags: ["bir-sessions", "book", "politics", "conflict"],
        notes: ""
    },
    {
        title: "The Death and Life of Great American Cities",
        author: "Jane Jacobs",
        episode: 47,
        episodeTitle: "India needs Decentralization",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Death+and+Life+of+Great+American+Cities+-+Jane+Jacobs",
        tags: ["bir-sessions", "book", "urbanism", "sociology"],
        notes: ""
    },
    {
        title: "Triumph of the City",
        author: "Edward Glaeser",
        episode: 47,
        episodeTitle: "India needs Decentralization",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Triumph+of+the+City+-+Edward+Glaeser",
        tags: ["bir-sessions", "book", "urbanism", "economics"],
        notes: ""
    },
    {
        title: "Research papers list by Ajay",
        author: "",
        episode: 48,
        episodeTitle: "Graduating to Globalisation",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Research+papers+list+by+Ajay.",
        tags: ["research-papers"],
        notes: ""
    },
    {
        title: "How Life Imitates Chess",
        author: "Garry Kasparov",
        episode: 52,
        episodeTitle: "Chess",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=How+Life+Imitates+Chess+-+Garry+Kasparov",
        tags: ["bir-sessions", "book", "strategy", "chess"],
        notes: ""
    },
    {
        title: "The Lives of Others",
        author: "Florian Henckel von Donnersmarck",
        episode: 51,
        episodeTitle: "Lines on Maps",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Lives+of+Others+-+Florian+Henckel+von+Donnersmarck",
        tags: ["bir-sessions", "movie"  ],
        notes: ""
    },
    {
        title: "To Kill a Mocking Bird",
        author: "Harper Lee",
        episode: 54,
        episodeTitle: "Education",
        coverUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
        googleBooksUrl: "https://books.google.com/books?q=To+Kill+a+Mocking+Bird+",
        tags: ["bir-sessions", "book", "fiction"],
        notes: ""
    },
    {
        title: "Lydia Davis: Collected stories, Essays",
        author: "Lydia Davis",
        episode: 54,
        episodeTitle: "Education",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Lydia+Davis:+Collected+stories,+Essays",
        tags: ["bir-sessions", "book", "short-stories", "essays"],
        notes: ""
    },
    {
        title: "The Odd Woman and the City",
        author: "Vivian Gornick",
        episode: 55,
        episodeTitle: "Infrastructure",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1420944842i/22929524.jpg",
        googleBooksUrl: "https://books.google.com/books?q=The+Odd+Woman+and+the+City+",
        tags: ["bir-sessions", "book", "memoir", "essays"],
        notes: ""
    },
    {
        title: "Young Rural Women in India Chase Big-City Dreams (NYT)",
        author: "",
        episode: 55,
        episodeTitle: "Infrastructure",
        coverUrl: "https://static01.nyt.com/images/2016/09/24/world/asia/India-slide-TRGD/India-slide-TRGD-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
        googleBooksUrl: "https://www.nytimes.com/2016/09/25/world/asia/bangalore-india-women-factories.html",
        tags: ["bir-sessions", "article", "essay", "sociology"],
        notes: ""
    },
    {
        title: "Cathedral",
        author: "Raymond Carver",
        episode: 56,
        episodeTitle: "Digital Public Goods",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Cathedral+Raymond+Carver",
        tags: ["book", "fiction", "short-stories"],
        notes: ""
    },
    {
        title: "Short Cuts (Film based on Raymond Carver original short-stories).",
        author: "",
        episode: 56,
        episodeTitle: "Digital Public Goods",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Short+Cuts+(Film+based+on+Raymond+Carver+original+short+stories).",
        tags: ["bir-sessions", "movie", "short-stories-adaptation"],
        notes: ""
    },
    {
        title: "Lant Pritchett - National Development Delivers: And How!, Reforming Development Economics",
        author: "",
        episode: 57,
        episodeTitle: "How to do Development",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Lant+Pritchett+-+National+Development+Delivers:+And+How!,+Reforming+Development+Economics",
        tags: ["bir-sessions", "book", "economics", "development"],
        notes: ""
    },
    {
        title: "Horizon",
        author: "Barry Lopez",
        episode: 58,
        episodeTitle: "Switzerland in India",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Horizon+-+Barry+Lopez",
        tags: ["bir-sessions", "book", "nature", "essays"],
        notes: ""
    },
    {
        title: "Order without Design",
        author: "Alain Bertaud",
        episode: 58,
        episodeTitle: "Switzerland in India",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Order+without+Design+-+Alain+Bertaud",
        tags: ["bir-sessions", "book", "urbanism", "economics"],
        notes: ""
    },
    {
        title: "Trek the Sahyadris",
        author: "Harish Kapadia",
        episode: 58,
        episodeTitle: "Switzerland in India",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Trek+the+Sahyadris+",
        tags: ["bir-sessions", "travel", "guide"],
        notes: ""
    },
    {
        title: "How Innovation Works: And Why It Flourishes in Freedom",
        author: "",
        episode: 59,
        episodeTitle: "Innovation Policy",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=How+Innovation+Works:+And+Why+It+Flourishes+in+Freedom",
        tags: ["book", "innovation", "economics"],
        notes: ""
    },
    {
        title: "Huntsville, Alabama (to study).",
        author: "",
        episode: 59,
        episodeTitle: "Innovation Policy",
        coverUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Big_Spring_International_Park_2019.jpg/2880px-Big_Spring_International_Park_2019.jpg",
        googleBooksUrl: "https://books.google.com/books?q=Huntsville,+Alabama+(to+study).",
        tags: ["place", "study"],
        notes: ""
    },
    {
        title: "How To Know a Person",
        author: "David Brooks",
        episode: 60,
        episodeTitle: "Countries and Companies",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1684815605i/112974860.jpg",
        googleBooksUrl: "https://books.google.com/books?q=How+To+Know+a+Person+",
        tags: ["book", "psychology", "relationships"],
        notes: ""
    },
    {
        title: "When McKinsey Comes to Town",
        author: "Walt Bogdanich",
        episode: 60,
        episodeTitle: "Countries and Companies",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1665649420i/60644838.jpg",
        googleBooksUrl: "https://books.google.com/books?q=When+McKinsey+Comes+to+Town",
        tags: ["book", "business", "investigation"],
        notes: ""
    },
    {
        title: "Boltzmann’s Grave",
        author: "",
        episode: 61,
        episodeTitle: "The Outlaws",
        coverUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Boltzmann2.jpg/1280px-Boltzmann2.jpg",
        googleBooksUrl: "https://www.atlasobscura.com/places/boltzmanns-grave",
        tags: ["location"],
        notes: ""
    },
    {
        title: "Art of clear writing",
        author: "Amit Varma",
        episode: 62,
        episodeTitle: "How to Write a Paper",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://indiauncut.com/clear-writing/",
        tags: ["course", "other", "skill"],
        notes: ""
    },
    {
        title: "Economical Writing",
        author: "Deirdre Nansen McCloskey",
        episode: 62,
        episodeTitle: "How to Write a Paper",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Economical+Writing",
        tags: ["book", "writing", "economics"],
        notes: ""
    },
    {
        title: "How China Escaped The Poverty Trap",
        author: "Yuen Yuen Ang",
        episode: 64,
        episodeTitle: "Tech Wars",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1474474082i/32175526.jpg",
        googleBooksUrl: "https://books.google.com/books?q=How+China+Escaped+The+Poverty+Trap",
        tags: ["book", "economics", "history"],
        notes: ""
    },
    {
        title: "Nightfall",
        author: "Isaac Asimov",
        episode: 63,
        episodeTitle: "Knowledge Lost and Regained",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1368557860i/99245.jpg",
        googleBooksUrl: "https://books.google.com/books?q=Nightfall+—\u00a0Isaac+Asimov",
        tags: ["book", "fiction", "science-fiction"],
        notes: ""
    },
    {
        title: "On the Natural History of Destruction",
        author: "W.G. Sebald",
        episode: 63,
        episodeTitle: "Knowledge Lost and Regained",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1702048637i/183922.jpg",
        googleBooksUrl: "https://books.google.com/books?q=On+the+Natural+History+of+Destruction",
        tags: ["book", "history", "war"],
        notes: ""
    },
    {
        title: "Orienting - An Indian in Japan",
        author: "Pallavi Aiyar",
        episode: 63,
        episodeTitle: "Knowledge Lost and Regained",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1627987208i/58691736.jpg",
        googleBooksUrl: "https://books.google.com/books?q=Orienting+-+An+Indian+in+Japan+—\u00a0Pallavi+Aiyar",
        tags: ["book", "travel", "culture"],
        notes: ""
    },
    {
        title: "China’s Gilded Age",
        author: "Yuen Yuen Ang",
        episode: 64,
        episodeTitle: "Tech Wars",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1586831495i/49105000.jpg",
        googleBooksUrl: "https://books.google.com/books?q=China’s+Gilded+Age",
        tags: ["book", "history", "economics"],
        notes: ""
    },
    {
        title: "When the Chips are Down",
        author: "Pranay Kotasthane",
        episode: 64,
        episodeTitle: "Tech Wars",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1702068666i/200722914.jpg",
        googleBooksUrl: "https://books.google.com/books?q=When+the+Chips+are+Down",
        tags: ["book", "technology", "economics"],
        notes: ""
    },
    {
        title: "Prices Fast and Slow",
        author: "Ajay Shah",
        episode: 66,
        episodeTitle: "Prices",
        coverUrl: "https://bsmedia.business-standard.com/_media/bs/img/article/2018-07/09/full/1531075985-6611.jpg?im=FeatureCrop,size=(826,465)",
        googleBooksUrl: "https://www.nipfp.org.in/media/medialibrary/2018/07/09072018.pdf",
        tags: ["article", "essay", "economics"],
        notes: ""
    },
    {
        title: "Slouching towards Utopia",
        author: "James Bradford DeLong",
        episode: 66,
        episodeTitle: "Prices",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1641777586i/9283648.jpg",
        googleBooksUrl: "https://books.google.com/books?q=Slouching+towards+Utopia",
        tags: ["book", "history", "economics"],
        notes: ""
    },
    {
        title: "Essays in Positive Economics",
        author: "Milton Friedman",
        episode: 67,
        episodeTitle: "Exchange Rate, Inflation",
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Essays+in+Positive+Economics+—\u00a0Milton+Friedman",
        tags: ["article", "essay", "economics"],
        notes: ""
    },
    {
        title: "Joni Mitchell - Blue",
        author: "",
        episode: 67,
        episodeTitle: "Exchange Rate, Inflation",
        coverUrl: "https://i.ytimg.com/vi/MvR7Dkg4NQU/maxresdefault.jpg",
        googleBooksUrl: "https://www.youtube.com/watch?v=MvR7Dkg4NQU",
        tags: ["music", "album"],
        notes: ""
    },
    {
title: "Paris, Texas",
author: "",
episode: 67,
episodeTitle: "Exchange Rate, Inflation",
coverUrl: "https://a.ltrbxd.com/resized/film-poster/5/1/4/6/9/51469-paris-texas-0-2000-0-3000-crop.jpg?v=c8f2743612",
googleBooksUrl: "https://letterboxd.com/film/paris-texas/",
tags: ["movie"],
notes: ""
},
{
title: "Perfect Days",
author: "",
episode: 67,
episodeTitle: "Exchange Rate, Inflation",
coverUrl: "https://a.ltrbxd.com/resized/film-poster/8/7/9/2/2/9/879229-perfect-days-0-2000-0-3000-crop.jpg?v=4ea80661fd",
googleBooksUrl: "https://letterboxd.com/film/perfect-days-2023/",
tags: ["movie"],
notes: ""
},
{
title: "Introduction to Human Behavourial Biology",
author: "",
episode: 70,
episodeTitle: "Competitive Exams",
coverUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Robert_Sapolsky_in_2023_A_16.jpg/1200px-Robert_Sapolsky_in_2023_A_16.jpg",
googleBooksUrl: "https://www.youtube.com/watch?v=NNnIGh9g6fA",
tags: ["competitive-exams", "biology", "behavior"],
notes: ""
},
{
title: "Capital Ideas: The Improbable Origins of Modern Wall Street",
author: "",
episode: 71,
episodeTitle: "Indian Finance",
coverUrl: "/api/placeholder/280/200",
googleBooksUrl: "https://books.google.com/books?q=Capital+Ideas:+The+Improbable+Origins+of+Modern+Wall+Street",
tags: ["book", "finance", "history"],
notes: ""
}
];
