const books = [
    {
        title: "Songs of Surrender",
        author: "U2",
        episode: 1,
        coverUrl: "https://www.u2.com/media/uploads/2022/12/15/songs-of-surrender-product-shot.jpg",
        googleBooksUrl: "https://books.google.com/books?q=U2+Songs+of+Surrender",
         
        type: "music",
        notes: ""
    },
    {
        title: "The Curious Incident of the Dog in the Night-time",
        author: "Mark Haddon",
        episode: 1,
        coverUrl: "https://books.google.com/books/content?id=OWUbAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        googleBooksUrl: "https://books.google.com/books?id=OWUbAQAAMAAJ",
         
        type: "book",
        notes: ""
    },
    {
        title: "A Vindication of the Rights of Woman",
        author: "Mary Wollstonecraft",
        episode: 2,
        coverUrl: "https://books.google.com/books/content?id=qhcFAAAAQAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        googleBooksUrl: "https://books.google.com/books?id=qhcFAAAAQAAJ",
         
        type: "book",
        notes: ""
    },
    {
        title: "Frankenstein",
        author: "Mary Shelley",
        episode: 2,
        coverUrl: "https://books.google.com/books/content?id=2Zc3AAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        googleBooksUrl: "https://books.google.com/books?id=2Zc3AAAAYAAJ",
         
        type: "book",
        notes: "Daughter of Mary Wollstonecraft"
    },
    {
        title: "Romantic Outlaws",
        author: "Charlotte Gordon",
        episode: 2,
        coverUrl: "https://books.google.com/books/content?id=xNKuBgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        googleBooksUrl: "https://books.google.com/books?id=xNKuBgAAQBAJ",
         
        type: "book",
        notes: "about the two Marys"
    },
    {
        title: "Saaya & the Rituals of Tamil Muslim Milk Tea",
        author: "Maazin Buhari",
        episode: 2,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Saaya+Tamil+Muslim+Milk+Tea",
         
        type: "book",
        notes: ""
    },
    {
        title: "Adam Smith – A Primer",
        author: "Eamonn Butler",
        episode: 3,
        coverUrl: "https://books.google.com/books/content?id=yYtXDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        googleBooksUrl: "https://books.google.com/books?q=Adam+Smith+%E2%80%93+A+Primer+Eamonn+Butler",
         
        type: "book",
        notes: ""
    },
    {
        title: "Classical Liberalism - A Primer",
        author: "Eamonn Butler",
        episode: 3,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Classical+Liberalism+-+A+Primer+Eamonn+Butler",
         
        type: "book",
        notes: ""
    },
    {
        title: "Friedrich Hayek: The ideas and influence of the libertarian economist",
        author: "Eamonn Butler",
        episode: 3,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Friedrich+Hayek:+The+ideas+and+influence+of+the+libertarian+economist+Eamonn+Butler",
         
        type: "book",
        notes: ""
    },
    {
        title: "Ludwig von Mises – A Primer",
        author: "Eamonn Butler",
        episode: 3,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Ludwig+von+Mises+%E2%80%93+A+Primer+Eamonn+Butler",
         
        type: "book",
        notes: ""
    },
    {
        title: "Milton Friedman: A concise guide to the ideas and influence of the free-market economist",
        author: "Eamonn Butler",
        episode: 3,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Milton+Friedman:+A+concise+guide+to+the+ideas+and+influence+of+the+free-market+economist+Eamonn+Butler",
         
        type: "book",
        notes: ""
    },
    {
        title: "Public Choice – A Primer",
        author: "Eamonn Butler",
        episode: 3,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Public+Choice+%E2%80%93+A+Primer+Eamonn+Butler",
         
        type: "book",
        notes: ""
    },
    {
        title: "A Business History of India",
        author: "Tirthankar Roy",
        episode: 4,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=A+Business+History+of+India+Tirthankar+Roy.",
         
        type: "book",
        notes: ""
    },
    {
        title: "Dekalog, A Short Film About Love, A Short Film About Killing",
        author: "Krzysztof Kieślowski",
        episode: 4,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Krzysztof+Kieślowski:+Dekalog,.+A+Short+Film+About+Love,+A+Short+Film+About+Killing",
         
        type: "film",
        notes: ""
    },
    {
        title: "The Making of the Atomic Bomb",
        author: "Richard Rhodes",
        episode: 5,
        coverUrl: "https://books.google.com/books/content?id=aSgFMMNQ6G4C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        googleBooksUrl: "https://books.google.com/books?id=aSgFMMNQ6G4C",
         
        type: "book",
        notes: ""
    },
    {
        title: "The Life and Death of Great American Cities",
        author: "",
        episode: 5,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Life+and+Death+of+Great+American+Cities+",
         
        type: "book",
        notes: ""
    },
    {
        title: "The Power Broker",
        author: "Robert Caro",
        episode: 5,
        coverUrl: "https://books.google.com/books/content?id=nIVvJYnygRQC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        googleBooksUrl: "https://books.google.com/books?id=nIVvJYnygRQC",
         
        type: "book",
        notes: ""
    },
    {
        title: "Capitalism and Freedom",
        author: "Milton Friedman",
        episode: 6,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Capitalism+and+Freedom+-+Milton+Friedman",
         
        type: "book",
        notes: ""
    },
    {
        title: "Economics in one lesson",
        author: "Henry Haznik",
        episode: 6,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Economics+in+one+lesson+-+Henry+Haznik",
         
        type: "book",
        notes: ""
    },
    {
        title: "Free to Choose",
        author: "Milton Friedman",
        episode: 6,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Free+to+Choose+Milton+Friedman",
         
        type: "book",
        notes: ""
    },
    {
        title: "The Ascent of Man",
        author: "Jason Bronowsky",
        episode: 7,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Ascent+of+Man+-+Jason+Bronowsky",
         
        type: "book",
        notes: ""
    },
    {
        title: "The Collected Works of Mahatma Gandhi",
        author: "",
        episode: 7,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Collected+Works+of+Mahatma+Gandhi+",
         
        type: "book",
        notes: ""
    },
    {
        title: "Essays by George Orwell, Politics and the English Language",
        author: "",
        episode: 8,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Essays+by+George+Orwell,+Politics+and+the+English+Language+",
         
        type: "book",
        notes: ""
    },
    {
        title: "Essays in Persuasion, Essays in Biography",
        author: "John Keynes (who they disagree with).",
        episode: 7,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Essays+in+Persuasion,+Essays+in+Biography-John+Keynes+(who+they+disagree+with).",
         
        type: "book",
        notes: ""
    },
    {
        title: "The Essays of Paul Graham",
        author: "",
        episode: 7,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Essays+of+Paul+Graham+",
         
        type: "book",
        notes: ""
    },
    {
        title: "Fear the Boom and Bust: Keynes vs. Hayek - The Original Economics Rap Battle",
        author: "",
        episode: 7,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Fear+the+Boom+and+Bust:+Keynes+vs.+Hayek+-+The+Original+Economics+Rap+Battle+",
         
        type: "book",
        notes: ""
    },
    {
        title: "Gandhi",
        author: "Ramchandra Guha",
        episode: 7,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Gandhi+Ramchandra+Guha",
         
        type: "book",
        notes: ""
    },
    {
        title: "Gandhi before India",
        author: "Ramchandra Guha",
        episode: 7,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Gandhi+before+India+-+Ramchandra+Guha",
         
        type: "book",
        notes: ""
    },
    {
        title: "The Good Boatman: A Portrait of Gandhi",
        author: "Rajmohan Gandhi",
        episode: 7,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Good+Boatman:+A+Portrait+of+Gandhi+-+Rajmohan+Gandhi",
         
        type: "book",
        notes: ""
    },
    {
        title: "Great Soul: Mahatma Gandhi and his Struggle with India",
        author: "Joseph Lelyveld",
        episode: 7,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Great+Soul:+Mahatma+Gandhi+and+his+Struggle+with+India+-+Joseph+Lelyveld",
         
        type: "book",
        notes: ""
    },
    {
        title: "His Dark Materials",
        author: "Philip Pullman",
        episode: 7,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=His+Dark+Materials+-+Philip+Pullman",
         
        type: "book",
        notes: ""
    },
    {
        title: "The Elusive Quest for Growth",
        author: "",
        episode: 8,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Elusive+Quest+for+Growth+",
         
        type: "book",
        notes: ""
    },
    {
        title: "Joan Didion",
        author: "",
        episode: 8,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Joan+Didion+",
         
        type: "book",
        notes: ""
    },
    {
        title: "The White Crow Books and coffee",
        author: "",
        episode: 7,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+White+Crow+Books+and+coffee+",
         
        type: "book",
        notes: ""
    },
    {
        title: "The White Man's Burden",
        author: "William Easterly.",
        episode: 8,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+White+Man's+Burden+-+William+Easterly.",
         
        type: "book",
        notes: ""
    },
    {
        title: "Barack Obama",
        author: "David Remnick",
        episode: 9,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Barack+Obama+-+David+Remnick",
         
        type: "special interest",
        notes: ""
    },
    {
        title: "The Emergency: A Personal History",
        author: "Coomi Kapoor",
        episode: 9,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Emergency:+A+Personal+History+Coomi+Kapoor",
         
        type: "book",
        notes: ""
    },
    {
        title: "FreeStyle Libre Glucose Monitoring System (Reader & Sensor)",
        author: "",
        episode: 9,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=FreeStyle+Libre+Glucose+Monitoring+System+(Reader+&+Sensor)+",
         
        type: "special interest",
        notes: ""
    },
    {
        title: "Lenin's Tomb: The Last Days of the Soviet Empire",
        author: "David Remnick",
        episode: 9,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Lenin's+Tomb:+The+Last+Days+of+the+Soviet+Empire+-+David+Remnick",
         
        type: "book",
        notes: ""
    },
    {
        title: "Tripurdaman Singh - Sixteen Stormy Days and Nehru: The Debates that Defined India",
        author: "",
        episode: 10,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Tripurdaman+Singh+-+Sixteen+Stormy+Days+and+Nehru:+The+Debates+that+Defined+India+",
         
        type: "book",
        notes: ""
    },
    {
        title: "Early Indians",
        author: "Tony Joseph",
        episode: 12,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Early+Indians+-+Tony+Joseph",
         
        type: "book",
        notes: ""
    },
    {
        title: "Fermentation and Kefir Grain",
        author: "",
        episode: 12,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Fermentation+and+Kefir+Grain+",
         
        type: "other",
        notes: ""
    },
    {
        title: "India Moving",
        author: "Chinmay Tumbe",
        episode: 12,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=India+Moving+-+Chinmay+Tumbe",
         
        type: "book",
        notes: ""
    },
    {
        title: "Wanderers, Kings, Merchants",
        author: "Peggy Mohan",
        episode: 12,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Wanderers,+Kings,+Merchants+-+Peggy+Mohan",
         
        type: "book",
        notes: ""
    },
    {
        title: "Who We Are and How We Got Here",
        author: "David Reich",
        episode: 12,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Who+We+Are+and+How+We+Got+Here+David+Reich",
         
        type: "book",
        notes: ""
    },
    {
        title: "Born to Run (the book)",
        author: "Bruce Springsteen",
        episode: 13,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Born+to+Run+(the+book)+-+Bruce+Springsteen",
         
        type: "book",
        notes: ""
    },
    {
        title: "Bruce Springsteen: All the Songs",
        author: "Philippe Margotin and Jean-Michel Guesdon",
        episode: 13,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Bruce+Springsteen:+All+the+Songs+Philippe+Margotin+and+Jean-Michel+Guesdon",
         
        type: "song",
        notes: ""
    },
    {
        title: "The Notebook Trilogy",
        author: "Agota Kristof",
        episode: 13,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Notebook+Trilogy+Agota+Kristof",
         
        type: "book",
        notes: ""
    },
    {
        title: "The Road",
        author: "Cormac McCarthy",
        episode: 13,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=(Father+and+Son)+The+Road+-+Cormac+McCarthy",
         
        type: "book",
        notes: ""
    },
    {
        title: "Self-Portrait",
        author: "AK Ramanujan",
        episode: 13,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Self-Portrait+-+AK+Ramanujan",
         
        type: "book",
        notes: ""
    },
    {
        title: "How the War Was Won",
        author: "Phillips Payson O'Brien",
        episode: 14,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=How+the+War+Was+Won+-+Phillips+Payson+O'Brien",
         
        type: "book",
        notes: ""
    },
    {
        title: "Ode To Kirihito",
        author: "Osamu Tezuka (Buddha series).",
        episode: 14,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Ode+To+Kirihito+-+Osamu+Tezuka+(Buddha+series).",
         
        type: "book",
        notes: ""
    },
    {
        title: "The Great Mental Models",
        author: "Shane Parrish (Knowledge Project Podcast).",
        episode: 15,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Great+Mental+Models+Shane+Parrish+(Knowledge+Project+Podcast).",
         
        type: "book",
        notes: ""
    },
    {
        title: "The Lady Tasting Tea",
        author: "David Salsburg",
        episode: 15,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Lady+Tasting+Tea+-+David+Salsburg",
         
        type: "book",
        notes: ""
    },
    {
        title: "Alison Bechdel - The Essential Dykes To Watch Out For, Fun Home",
        author: "",
        episode: 16,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Alison+Bechdel+-+The+Essential+Dykes+To+Watch+Out+For,+Fun+Home",
         
        type: "book",
        notes: ""
    },
    {
        title: "Blankets",
        author: "Craig Thompson",
        episode: 16,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Blankets+Craig+Thompson",
         
        type: "book",
        notes: ""
    },
    {
        title: "China's Future",
        author: "David Shambaugh",
        episode: 16,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=China's+Future+David+Shambaugh",
         
        type: "book",
        notes: ""
    },
    {
        title: "Ghost World",
        author: "Daniel Clowes",
        episode: 16,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Ghost+World+-+Daniel+Clowes",
         
        type: "book",
        notes: ""
    },
    {
        title: "Hardcore History_(podcast)",
        author: "Dan Carlin Supernova in the East, Blueprint for Armageddon",
        episode: 17,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Hardcore+History_(podcast)+—\u00a0Dan+Carlin+Supernova+in+the+East,+Blueprint+for+Armageddon",
         
        type: "book",
        notes: ""
    },
    {
        title: "Public Opinion",
        author: "Walter Lippmann",
        episode: 17,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Public+Opinion+-+Walter+Lippmann",
         
        type: "book",
        notes: ""
    },
    {
        title: "Seizing the Enigma",
        author: "David Kahn",
        episode: 17,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Seizing+the+Enigma+-+David+Kahn",
         
        type: "book",
        notes: ""
    },
    {
        title: "Down to Earth",
        author: "Sharad Joshi",
        episode: 18,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Down+to+Earth+-+Sharad+Joshi",
         
        type: "book",
        notes: ""
    },
    {
        title: "Talking to an Empty Room",
        author: "Sharad Joshi",
        episode: 18,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Talking+to+an+Empty+Room+-+Sharad+Joshi",
         
        type: "book",
        notes: ""
    },
    {
        title: "The Wizard and the Prophet",
        author: "",
        episode: 18,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Wizard+and+the+Prophet+",
         
        type: "book",
        notes: ""
    },
    {
        title: "Superforecasting: The Art and Science of Prediction",
        author: "Philip Tetlock & Dan Gardner",
        episode: 19,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Superforecasting:+The+Art+and+Science+of+Prediction+-+Philip+Tetlock+&+Dan+Gardner",
         
        type: "special interest",
        notes: ""
    },
    {
        title: "Thinking Strategically: The Competitive Edge in Business, Politics, and Everyday Life",
        author: "Avinash Dixit & Barry Nalebuff",
        episode: 19,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Thinking+Strategically:+The+Competitive+Edge+in+Business,+Politics,+and+Everyday+Life+-+Avinash+Dixit+&+Barry+Nalebuff",
         
        type: "special interest",
        notes: ""
    },
    {
        title: "The Origins of Totalitarianism",
        author: "Hannah Arendt",
        episode: 20,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Origins+of+Totalitarianism+-+Hannah+Arendt",
         
        type: "other",
        notes: ""
    },
    {
        title: "Yuganta",
        author: "Irawati Karve",
        episode: 20,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Yuganta+Irawati+Karve",
         
        type: "other",
        notes: ""
    },
    {
        title: "Capital Ideas",
        author: "Peter L Bernstein (dated but basics).",
        episode: 21,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Capital+Ideas+-+Peter+L+Bernstein+(dated+but+basics).",
         
        type: "other",
        notes: ""
    },
    {
        title: "The Pathan Unarmed",
        author: "Mukulika Banerjee",
        episode: 21,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Pathan+Unarmed+-+Mukulika+Banerjee",
         
        type: "other",
        notes: ""
    },
    {
        title: "Timur Kuran - Private Truths, Public Lies + The Long Divergence + Freedoms Delayed",
        author: "",
        episode: 21,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Timur+Kuran+-+Private+Truths,+Public+Lies+++The+Long+Divergence+++Freedoms+Delayed",
         
        type: "other",
        notes: ""
    },
    {
        title: "The Creative Act: A Way of Being",
        author: "Rick Rubin",
        episode: 22,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Creative+Act:+A+Way+of+Being+-+Rick+Rubin",
         
        type: "other",
        notes: ""
    },
    {
        title: "A Moveable Feast",
        author: "Ernest Hemingway.",
        episode: 22,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=A+Moveable+Feast+-+Ernest+Hemingway.",
         
        type: "other",
        notes: ""
    },
    {
        title: "The Soul of a New Machine",
        author: "Tracy Kidder",
        episode: 22,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Soul+of+a+New+Machine+-+Tracy+Kidder",
         
        type: "other",
        notes: ""
    },
    {
        title: "Darkness at Noon",
        author: "Arthur Koestler (1941 version and new)",
        episode: 23,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Darkness+at+Noon+-+Arthur+Koestler+(1941+version+and+new)",
         
        type: "special interest",
        notes: ""
    },
    {
        title: "My Friend Sancho",
        author: "Amit Varma",
        episode: 23,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=My+Friend+Sancho+-+Amit+Varma",
         
        type: "special interest",
        notes: ""
    },
    {
        title: "The World of Yesterday",
        author: "Stefan Zweig",
        episode: 23,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+World+of+Yesterday+-+Stefan+Zweig",
         
        type: "special interest",
        notes: ""
    },
    {
        title: "The Case Against Education",
        author: "Bryan Caplan",
        episode: 24,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Case+Against+Education+-+Bryan+Caplan",
         
        type: "other",
        notes: ""
    },
    {
        title: "The Missionary Position",
        author: "Christopher Hitchens",
        episode: 24,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Missionary+Position+-+Christopher+Hitchens",
         
        type: "other",
        notes: ""
    },
    {
        title: "Unelected Power",
        author: "Paul Tucker",
        episode: 24,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Unelected+Power+-+Paul+Tucker",
         
        type: "other",
        notes: ""
    },
    {
        title: "Essays on Nationalism",
        author: "Rabindranath Tagore",
        episode: 25,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Essays+on+Nationalism+-+Rabindranath+Tagore",
         
        type: "other",
        notes: ""
    },
    {
        title: "The Libertarian Reader",
        author: "Edited by David Boaz",
        episode: 25,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Libertarian+Reader+-+Edited+by+David+Boaz",
         
        type: "other",
        notes: ""
    },
    {
        title: "The Origins of Political Order + Political Order and Political Decay",
        author: "Francis Fukuyama",
        episode: 25,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Origins+of+Political+Order+++Political+Order+and+Political+Decay+Francis+Fukuyama",
         
        type: "other",
        notes: ""
    },
    {
        title: "Cicada",
        author: "Shaun Tan",
        episode: 26,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Cicada+Shaun+Tan",
         
        type: "other",
        notes: ""
    },
    {
        title: "Seeing like a State",
        author: "James C. Scott ✩",
        episode: 26,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Seeing+like+a+State+James+C.+Scott+✩",
         
        type: "other",
        notes: ""
    },
    {
        title: "A History of Global Health",
        author: "Randall M Packard",
        episode: 27,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=A+History+of+Global+Health+-+Randall+M+Packard",
         
        type: "other",
        notes: ""
    },
    {
        title: "Beggars in Spain",
        author: "Nancy. Kress",
        episode: 27,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Beggars+in+Spain+-+Nancy.+Kress",
         
        type: "other",
        notes: ""
    },
    {
        title: "How Music Works",
        author: "David Byrne",
        episode: 29,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=How+Music+Works+-+David+Byrne",
         
        type: "other",
        notes: ""
    },
    {
        title: "William Spaniel",
        author: "",
        episode: 29,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=William+Spaniel+",
         
        type: "other",
        notes: ""
    },
    {
        title: "The Paper Menagerie",
        author: "Ken Liu",
        episode: 30,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Paper+Menagerie+-+Ken+Liu",
         
        type: "special interest",
        notes: ""
    },
    {
        title: "To Have or To Be",
        author: "Erich Fromm",
        episode: 30,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=To+Have+or+To+Be+-+Erich+Fromm",
         
        type: "special interest",
        notes: ""
    },
    {
        title: "Army and Nation",
        author: "Steven & Wilkinson",
        episode: 31,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Army+and+Nation+-+Steven+&+Wilkinson",
         
        type: "other",
        notes: ""
    },
    {
        title: "Strategy: A History",
        author: "Lawrence Freedman (he's on sub-stack).",
        episode: 31,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Strategy:+A+History+-+Lawrence+Freedman+(he's+on+sub-stack).",
         
        type: "other",
        notes: ""
    },
    {
        title: "Victor Davis Hanson - The Second World Wars + Carnage and Culture",
        author: "",
        episode: 31,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Victor+Davis+Hanson+-+The+Second+World+Wars+++Carnage+and+Culture",
         
        type: "other",
        notes: ""
    },
    {
        title: "The Cathedral & the Bazaar",
        author: "Eric S Raymond",
        episode: 32,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Cathedral+&+the+Bazaar+-+Eric+S+Raymond",
         
        type: "other",
        notes: ""
    },
    {
        title: "In the Beginning... Was the Command Line",
        author: "Neal Stephenson",
        episode: 32,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=In+the+Beginning...+Was+the+Command+Line+-+Neal+Stephenson",
         
        type: "other",
        notes: ""
    },
    {
        title: "Constitutional Amendments",
        author: "",
        episode: 33,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Constitutional+Amendments+",
         
        type: "other",
        notes: ""
    },
    {
        title: "Father, Son & Co: My Life at IBM and Beyond",
        author: "Thomas J Watson Jr",
        episode: 34,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Father,+Son+&+Co:+My+Life+at+IBM+and+Beyond+Thomas+J+Watson+Jr",
         
        type: "other",
        notes: ""
    },
    {
        title: "The Godfather trilogy",
        author: "",
        episode: 34,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Godfather+trilogy+",
         
        type: "other",
        notes: ""
    },
    {
        title: "Heaven's Gaits",
        author: "Adam Gopnik",
        episode: 35,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Heaven's+Gaits+-+Adam+Gopnik",
         
        type: "special interest",
        notes: ""
    },
    {
        title: "Into the Wild",
        author: "Jon Krakauer",
        episode: 35,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Into+the+Wild+-+Jon+Krakauer",
         
        type: "special interest",
        notes: ""
    },
    {
        title: "Man Eaters of Kumaon",
        author: "Jim Corbett",
        episode: 35,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Man+Eaters+of+Kumaon+-+Jim+Corbett",
         
        type: "special interest",
        notes: ""
    },
    {
        title: "Rumblefish, The Outsiders",
        author: "Francis Ford Coppola",
        episode: 35,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Rumblefish,+The+Outsiders+Francis+Ford+Coppola",
         
        type: "special interest",
        notes: ""
    },
    {
        title: "Runaway, Hateship, Friendship, Courtship, Loveship, Marriage, The Bear Came Over the Mountain",
        author: "Alice Munro",
        episode: 36,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Runaway,+Hateship,+Friendship,+Courtship,+Loveship,+Marriage,+The+Bear+Came+Over+the+Mountain+-+Alice+Munro",
         
        type: "other",
        notes: ""
    },
    {
        title: "Weapons of the Weak, Against the Grain",
        author: "James C Scott",
        episode: 36,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Weapons+of+the+Weak,+Against+the+Grain+James+C+Scott",
         
        type: "other",
        notes: ""
    },
    {
        title: "Desperately Seeking Shahrukh",
        author: "Shrayana Bhattacharya",
        episode: 37,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Desperately+Seeking+Shahrukh+-+Shrayana+Bhattacharya",
         
        type: "other",
        notes: ""
    },
    {
        title: "The Discovery of India",
        author: "Jawaharlal Nehru",
        episode: 37,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Discovery+of+India+-+Jawaharlal+Nehru",
         
        type: "other",
        notes: ""
    },
    {
        title: "Anatomy of a Fall",
        author: "Justine Triet",
        episode: 39,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Anatomy+of+a+Fall+-+Justine+Triet",
         
        type: "other",
        notes: ""
    },
    {
        title: "Dead Poet's Society",
        author: "Peter Weir",
        episode: 39,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Dead+Poet's+Society+-+Peter+Weir",
         
        type: "other",
        notes: ""
    },
    {
        title: "Midnight in Chernobyl",
        author: "Adam Higginbotham",
        episode: 40,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Midnight+in+Chernobyl+-+Adam+Higginbotham",
         
        type: "other",
        notes: ""
    },
    {
        title: "World Energy Outlook 2023",
        author: "",
        episode: 40,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=World+Energy+Outlook+2023+",
         
        type: "other",
        notes: ""
    },
    {
        title: "GOAT",
        author: "Tyler Cowen (good starting point for non- economics people).",
        episode: 41,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=GOAT+-+Tyler+Cowen+(good+starting+point+for+non-+economics+people).",
         
        type: "other",
        notes: ""
    },
    {
        title: "Marginal Revolution University",
        author: "",
        episode: 41,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Marginal+Revolution+University+",
         
        type: "other",
        notes: ""
    },
    {
        title: "Modern Principles of Microeconomics",
        author: "Alex Tabarrok and Tyler Cowen",
        episode: 41,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Modern+Principles+of+Microeconomics+-+Alex+Tabarrok+and+Tyler+Cowen",
         
        type: "book",
        notes: ""
    },
    {
        title: "1984, Animal Farm",
        author: "George Orwell",
        episode: 42,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=1984,+Animal+Farm+-+George+Orwell",
         
        type: "other",
        notes: ""
    },
    {
        title: "On Tyranny",
        author: "Timothy Snyder (graphic version, to give WhatsApp uncles).",
        episode: 42,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=On+Tyranny+-+Timothy+Snyder+(graphic+version,+to+give+WhatsApp+uncles).",
         
        type: "other",
        notes: ""
    },
    {
        title: "The Great Arc",
        author: "John Keay",
        episode: 44,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Great+Arc+-+John+Keay",
         
        type: "bir sessions\nbook",
        notes: ""
    },
    {
        title: "Thelma and Louise",
        author: "Ridley Scott",
        episode: 44,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Thelma+and+Louise+Ridley+Scott",
         
        type: "bir sessions\nmovie",
        notes: ""
    },
    {
        title: "Defending the Undefendable",
        author: "Walter Block",
        episode: 45,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Defending+the+Undefendable+Walter+Block",
         
        type: "bir sessions\nbook",
        notes: ""
    },
    {
        title: "The Three Languages of Politics",
        author: "Arnold King",
        episode: 45,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Three+Languages+of+Politics+-+Arnold+King",
         
        type: "bir sessions\nbook",
        notes: ""
    },
    {
        title: "Why we Fight",
        author: "Christopher Blattman",
        episode: 45,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Why+we+Fight+-+Christopher+Blattman",
         
        type: "bir sessions\nbook",
        notes: ""
    },
    {
        title: "The Death and Life of Great American Cities",
        author: "Jane Jacobs",
        episode: 47,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Death+and+Life+of+Great+American+Cities+-+Jane+Jacobs",
         
        type: "bir sessions\nbook",
        notes: ""
    },
    {
        title: "Triumph of the City",
        author: "Edward Glaeser",
        episode: 47,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Triumph+of+the+City+-+Edward+Glaeser",
         
        type: "bir sessions\nbook",
        notes: ""
    },
    {
        title: "Research papers list by Ajay.",
        author: "",
        episode: 48,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Research+papers+list+by+Ajay.",
         
        type: "bir sessions\nresearch papers",
        notes: ""
    },
    {
        title: "How Life Imitates Chess",
        author: "Garry Kasparov",
        episode: 52,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=How+Life+Imitates+Chess+-+Garry+Kasparov",
         
        type: "bir sessions\nbook",
        notes: ""
    },
    {
        title: "The Lives of Others",
        author: "Florian Henckel von Donnersmarck",
        episode: 51,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Lives+of+Others+-+Florian+Henckel+von+Donnersmarck",
         
        type: "bir sessions",
        notes: ""
    },
    {
        title: "To Kill a Mocking Bird",
        author: "",
        episode: 54,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=To+Kill+a+Mocking+Bird+",
         
        type: "bir sessions\nbook",
        notes: ""
    },
    {
        title: "Lydia Davis: Collected stories, Essays",
        author: "",
        episode: 54,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Lydia+Davis:+Collected+stories,+Essays",
         
        type: "bir sessions\nbook",
        notes: ""
    },
    {
        title: "The Odd Woman and the City",
        author: "",
        episode: 55,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=The+Odd+Woman+and+the+City+",
         
        type: "bir sessions\nbook",
        notes: ""
    },
    {
        title: "Young Rural Women in India Chase Big-City Dreams (NYT)",
        author: "",
        episode: 55,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Young+Rural+Women+in+India+Chase+Big-City+Dreams+(NYT)",
         
        type: "article / essay\n\nbir sessions",
        notes: ""
    },
    {
        title: "Cathedral",
        author: "Raymond Carver",
        episode: 56,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Cathedral+Raymond+Carver",
         
        type: "digital\n\npublic goods\n\nbook",
        notes: ""
    },
    {
        title: "Short Cuts (Film based on Raymond Carver original short stories).",
        author: "",
        episode: 56,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Short+Cuts+(Film+based+on+Raymond+Carver+original+short+stories).",
         
        type: "bir sessions\n\nbook",
        notes: ""
    },
    {
        title: "Lant Pritchett - National Development Delivers: And How!, Reforming Development Economics",
        author: "",
        episode: 57,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Lant+Pritchett+-+National+Development+Delivers:+And+How!,+Reforming+Development+Economics",
         
        type: "bir sessions\n\nbook",
        notes: ""
    },
    {
        title: "Horizon",
        author: "Barry Lopez",
        episode: 58,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Horizon+-+Barry+Lopez",
         
        type: "bir sessions\n\nbook",
        notes: ""
    },
    {
        title: "Order without Design",
        author: "Alain Bertaud",
        episode: 58,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Order+without+Design+-+Alain+Bertaud",
         
        type: "bir sessions\n\nbook",
        notes: ""
    },
    {
        title: "Trek the Sahyadris",
        author: "",
        episode: 58,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Trek+the+Sahyadris+",
         
        type: "bir sessions\nbook",
        notes: ""
    },
    {
        title: "How Innovation Works: And Why It Flourishes in Freedom",
        author: "",
        episode: 59,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=How+Innovation+Works:+And+Why+It+Flourishes+in+Freedom",
         
        type: "bir sessions\nbook",
        notes: ""
    },
    {
        title: "Huntsville, Alabama (to study).",
        author: "",
        episode: 59,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Huntsville,+Alabama+(to+study).",
         
        type: "bir sessions",
        notes: ""
    },
    {
        title: "How To Know a Person",
        author: "",
        episode: 60,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=How+To+Know+a+Person+",
         
        type: "book",
        notes: ""
    },
    {
        title: "When McKinsey Comes to Town",
        author: "",
        episode: 60,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=When+McKinsey+Comes+to+Town",
         
        type: "book",
        notes: ""
    },
    {
        title: "Boltzmann’s Grave",
        author: "",
        episode: 61,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Boltzmann’s+Grave",
         
        type: "book",
        notes: ""
    },
    {
        title: "Art of clear writing",
        author: "",
        episode: 62,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Art+of+clear+writing",
         
        type: "book",
        notes: ""
    },
    {
        title: "Economical Writing",
        author: "",
        episode: 62,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Economical+Writing",
         
        type: "book",
        notes: ""
    },
    {
        title: "How China Escaped The Poverty Trap",
        author: "",
        episode: 64,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=How+China+Escaped+The+Poverty+Trap",
         
        type: "book",
        notes: ""
    },
    {
        title: "Nightfall",
        author: "Isaac Asimov",
        episode: 63,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Nightfall+—\u00a0Isaac+Asimov",
         
        type: "book",
        notes: ""
    },
    {
        title: "On the Natural History of Destruction",
        author: "",
        episode: 63,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=On+the+Natural+History+of+Destruction",
         
        type: "book",
        notes: ""
    },
    {
        title: "Orienting - An Indian in Japan",
        author: "Pallavi Aiyar",
        episode: 63,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Orienting+-+An+Indian+in+Japan+—\u00a0Pallavi+Aiyar",
         
        type: "book",
        notes: ""
    },
    {
        title: "China’s Gilded Age",
        author: "",
        episode: 64,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=China’s+Gilded+Age",
         
        type: "book",
        notes: ""
    },
    {
        title: "When the Chips are Down",
        author: "",
        episode: 64,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=When+the+Chips+are+Down",
         
        type: "book",
        notes: ""
    },
    {
        title: "Prices Fast and Slow (article)",
        author: "",
        episode: 66,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Prices+Fast+and+Slow+(article)",
         
        type: "article / essay",
        notes: ""
    },
    {
        title: "Slouching towards Utopia",
        author: "",
        episode: 66,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Slouching+towards+Utopia",
         
        type: "book",
        notes: ""
    },
    {
        title: "Essays in Positive Economics",
        author: "Milton Friedman",
        episode: 67,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Essays+in+Positive+Economics+—\u00a0Milton+Friedman",
         
        type: "article / essay",
        notes: ""
    },
    {
        title: "Joni Mitchell - Blue",
        author: "",
        episode: 67,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Joni+Mitchell+-+Blue",
         
        type: "book",
        notes: ""
    },
    {
        title: "Paris, Texas",
        author: "",
        episode: 67,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Paris,+Texas",
         
        type: "movie",
        notes: ""
    },
    {
        title: "Perfect Days",
        author: "",
        episode: 67,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Perfect+Days",
         
        type: "movie",
        notes: ""
    },
    {
        title: "Introduction to Human Behavourial Biology",
        author: "",
        episode: 70,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Introduction+to+Human+Behavourial+Biology",
         
        type: "competitive exams",
        notes: ""
    },
    {
        title: "Capital Ideas: The Improbable Origins of Modern Wall Street",
        author: "",
        episode: 71,
        coverUrl: "/api/placeholder/280/200",
        googleBooksUrl: "https://books.google.com/books?q=Capital+Ideas:+The+Improbable+Origins+of+Modern+Wall+Street",
         
        type: "book",
        notes: ""
    }
];
