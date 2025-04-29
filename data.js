const recommendationsData = [
  {
    "episode": 1,
    "title": "The Curious Incident of the Dog in the Night-time",
    "author": "Mark Haddon",
    "original_url": "https://www.amazon.in/dp/B008PU8SR4?ref_=cm_sw_r_cp_ud_dp_8ZY29E5BAYBXR29HSRG2",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 1,
    "title": "Songs of Surrender",
    "author": "U2",
    "original_url": null,
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 2,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/B07DQVDJJG?ref_=cm_sw_r_cp_ud_dp_SZP27S22FEZWFX5CXMT4",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 2,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/B06XXSNJ47?ref_=cm_sw_r_cp_ud_dp_KZ1QPSFY1QKWNFSR50DX",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 2,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/B00RKX0R5S?ref_=cm_sw_r_cp_ud_dp_RTPCBQPEX32M6SSXJFBD",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 2,
    "title": "Saaya & the Rituals of Tamil Muslim Milk Tea",
    "author": "Maazin Buhari",
    "original_url": null,
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 3,
    "title": "Classical Liberalism",
    "author": "Eamonn Butler",
    "original_url": "https://iea.org.uk/publications/research/classical-liberalism-a-primer",
    "google_books_url": "https://books.google.com/books/about/Classical_Liberalism_A_Primer.html?id=Q5CCDwAAQBAJ",
    "tags": []
  },
  {
    "episode": 3,
    "title": "Friedrich Hayek: The ideas and influence of the libertarian economist",
    "author": "Eamonn Butler",
    "original_url": "https://amzn.eu/d/aJVAe3J",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 3,
    "title": "Milton Friedman: A concise guide to the ideas and influence of the free-market economist",
    "author": "Eamonn Butler",
    "original_url": "https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbXJpME83eW1HemEwRUl6QXJieDdNOFhONWptQXxBQ3Jtc0ttN1NJNkFFVUtWV2tTSEpMdjViYVgxWFlsQi16UXVaSTZON3hkdU81NHlBSW9DU1VxNTFrSnV2SUxiWG1Tc1VaTG1HUXk2VnUwNXZQZjJZaF96bmZnNU9MbXc4dzVlcVpKREFZM0hQZG0wSWFkZ2lKdw&q=https%3A%2F%2Famzn.eu%2Fd%2F1dCAYhy&v=OuJc5vi93xk",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 3,
    "title": "Ludwig von Mises",
    "author": "Eamonn Butler",
    "original_url": "https://iea.org.uk/publications/research/ludwig-von-mises-a-primer",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 3,
    "title": "Adam Smith – A Primer",
    "author": "Eamonn Butler",
    "original_url": null,
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 3,
    "title": "Public Choice – A Primer",
    "author": "Eamonn Butler",
    "original_url": null,
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 4,
    "title": "A Business History of India",
    "author": "Tirthankar Roy",
    "original_url": "https://www.amazon.in/dp/B07B7MLLPQ?ref_=cm_sw_r_cp_ud_dp_HXRXFWSTYBQF5NS3CN7P",
    "google_books_url": "https://play.google.com/store/info/name/Tirthankar_Roy?id=05x63rb",
    "tags": []
  },
  {
    "episode": 4,
    "title": "Dekalog",
    "author": "Krzysztof Kieślowski",
    "original_url": "https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqblhNcng0UTRuNEVmbk1kbXExTlZYZS1Ib21iZ3xBQ3Jtc0tsOXJBU0daSUJkMG5FMmdlTWF1S1JYVnZaNkFhQjl2NUdCWTBIZHhhNW9EMzAwbV9zRmVGRG02Z0x4bTdjemxDZWJIOXZlNW45ZjQ2N3d4V1VBOTlhSkpnOVJGX05jVXp2WDgxZUlodkNLTmx5aGFBYw&q=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FDekalog&v=Dc3NnU4tKVM",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 4,
    "title": "A Short Film About Love",
    "author": "Krzysztof Kieślowski",
    "original_url": "https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbUtfSU01bk04MUNTQU8xbkQ0WFdXSHhxRi1lQXxBQ3Jtc0trR0JMc2QzUTRrS3B1TU9xcUlUX2psZG1JcWR5NHFRZzQ3Zlo5LTV3ZEgyRlVUVlNjRHRJMXVLekNrWjBmcGhzUzQ3QVdCOUxUekR3eVRtLXVkNW5pZWQ0MmpSbDlzMllxWU5XcE1rUzY4QU14aEl2OA&q=https%3A%2F%2Fwww.primevideo.com%2Fdp%2Famzn1.dv.gti.028a258f-5796-4339-8f0d-37494695ee6d%3Fautoplay%3D0%26ref_%3Datv_cf_strg_wb&v=Dc3NnU4tKVM",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 4,
    "title": "A Short Film About Killing",
    "author": "Krzysztof Kieślowski",
    "original_url": "https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbkxaVjc3ckphbkN6S0x4eXNrT2xNX0tfTzlpZ3xBQ3Jtc0tuWm1LTUxMcnh6R195SDZUU0tvRHp3bS1yTE8yTVlfXzFNRDEzMGtNRVltSjh6bDQzdjhIcmZLOVBDQ2J5Z2NnR3Z4U29ObjdtOEk3NFlxNFFOZXFFRlRhd2FIUU1kRXJmYkIzbGxVWlByam1xSmU3RQ&q=https%3A%2F%2Fmubi.com%2Ffilms%2Fa-short-film-about-killing&v=Dc3NnU4tKVM",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 5,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/B008TRU7SQ?ref_=cm_sw_r_cp_ud_dp_4ZVEQFT13K0R45R61K2Z",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 5,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/0394720245?ref_=cm_sw_r_cp_ud_dp_6C6WK09NWE9D2C5NCBFX",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 5,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/B01MQ6EGDX?ref_=cm_sw_r_cp_ud_dp_49ZA0QKBRH044JB0QQPD",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 6,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/B08KYHC6QV?ref_=cm_sw_r_cp_ud_dp_A2Z17ZQEBXTX5MZ7QZPT",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 6,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/0156334607?ref_=cm_sw_r_cp_ud_dp_TWDAHNJJ1AHZX0242BGA",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 6,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/B003XT60KO?ref_=cm_sw_r_cp_ud_dp_F7YN4167KF7T5GTCSFZX",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 7,
    "title": "The White Crow Books and coffee",
    "author": null,
    "original_url": "https://www.instagram.com/thewhitecrowbooksandcoffee/",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 7,
    "title": "Essays in Persuasion",
    "author": "John Keynes",
    "original_url": "https://www.amazon.in/dp/B07TRZHKMW?ref_=cm_sw_r_cp_ud_dp_T9F5GH7EJQ6Q3KYYM5QP",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 7,
    "title": "Essays in Biography",
    "author": "John Keynes",
    "original_url": "https://www.amazon.in/dp/B07B3Z159R?ref_=cm_sw_r_cp_ud_dp_Q913DR8NJ14J6ZM81S4Y",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 7,
    "title": "The Collected Works of Mahatma Gandhi",
    "author": null,
    "original_url": "https://www.gandhiashramsevagram.org/gandhi-literature/collected-works-of-mahatma-gandhi-volume-1-to-98.php",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 7,
    "title": "Fear the Boom and Bust: Keynes vs. Hayek",
    "author": "The Original Economics Rap Battle",
    "original_url": "https://www.youtube.com/watch?v=d0nERTFo-Sk&t=0s",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 7,
    "title": "The Essays of Paul Graham",
    "author": "Paul Graham",
    "original_url": "https://www.paulgraham.com/articles.html",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 7,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/B07M7S13MZ?ref_=cm_sw_r_cp_ud_dp_PRWE5R9S7KRD41G9G5Z9",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 7,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/B005BON6OW?ref_=cm_sw_r_cp_ud_dp_T0NJHQ0207T3RPP49CMW",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 7,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/1841593427?ref_=cm_sw_r_cp_ud_dp_R0XJFCXVSEMH6PV9DDQ8",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 7,
    "title": "Gandhi before India",
    "author": "Ramchandra Guha",
    "original_url": "https://www.amazon.in/dp/014342341X?ref_=cm_sw_r_cp_ud_dp_Y160WBFFN24PQG31R44D_1",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 7,
    "title": "Great Soul: Mahatma Gandhi and his Struggle with India",
    "author": "Joseph Lelyveld",
    "original_url": "https://www.amazon.in/dp/B01N18HOMM?ref_=cm_sw_r_cp_ud_dp_Y19BD62VZC85XMGGS7N0",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 7,
    "title": "The Good Boatman: A Portrait of Gandhi",
    "author": "Rajmohan Gandhi",
    "original_url": "https://www.amazon.in/dp/B06XXN1812?ref_=cm_sw_r_cp_ud_dp_TC5YM91ZTJSEC25XZCRC",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 8,
    "title": "Essays",
    "author": "George Orwell",
    "original_url": "https://www.amazon.in/dp/1857152425?ref_=cm_sw_r_cp_ud_dp_CWVMMKRTE9D0HYD9JNR9",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 8,
    "title": "Politics and the English Language",
    "author": "George Orwell",
    "original_url": "https://www.thinkpragati.com/history/1953/politics-english-language/",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 8,
    "title": "Joan Didion",
    "author": "Joan Didion",
    "original_url": "https://www.amazon.in/stores/Joan-Didion/author/B000AQ4ZD2?ref=sr_ntt_srch_lnk_3&qid=1692337458&sr=8-3&isDramIntegrated=true&shoppingPortalEnabled=true",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 8,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/B08BSTFZKL?ref_=cm_sw_r_cp_ud_dp_PBTX6F5W6P77G1QDYHJ3",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 8,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/B000QJLQXU?ref_=cm_sw_r_cp_ud_dp_QYRZG8XK60S4Q8CR2PBM",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 9,
    "title": "The Emergency: A Personal History",
    "author": "Coomi Kapoor",
    "original_url": "https://www.amazon.in/dp/B06XXY6R4L?ref_=cm_sw_r_cp_ud_dp_7Y1A5FSCCBWBEYNPZB3N",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 9,
    "title": "Lenin’s Tomb: The Last Days of the Soviet Empire",
    "author": "David Remnick",
    "original_url": "https://www.amazon.in/dp/0679751254?ref_=cm_sw_r_cp_ud_dp_CNZ0W1533JFCW6P5VERM",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 9,
    "title": "The Bridge: The Life and Rise of Barack Obama",
    "author": "David Remnick",
    "original_url": "https://www.amazon.in/dp/B003O2S2T2?ref_=cm_sw_r_cp_ud_dp_PE92R4MTP8Y9AM1HBRZD",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 9,
    "title": "FreeStyle Libre Glucose Monitoring System (Reader & Sensor)",
    "author": null,
    "original_url": "https://www.amazon.in/dp/B095N7D23G?ref_=cm_sw_r_cp_ud_dp_PDZ9ZWEBD7PHAB4GMX2S",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 10,
    "title": "Sixteen Stormy Days",
    "author": "Tripurdaman Singh",
    "original_url": "https://www.amazon.in/dp/B0842TJSZ8?ref_=cm_sw_r_cp_ud_dp_MK6X2C10F9FRD9C53MYW",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 10,
    "title": "Nehru: The Debates that Defined India",
    "author": "Tripurdaman Singh",
    "original_url": "https://www.amazon.in/dp/B09GH2KD1X?ref_=cm_sw_r_cp_ud_dp_V5YNABVMQR10TVA9PZQC",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 12,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/B07YYM1CM4?ref_=cm_sw_r_cp_ud_dp_QEG72V5V2VDQNMYFCVYY_1",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 12,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/B091CYW65Z?ref_=cm_sw_r_cp_ud_dp_5FDND4JNSZVQQ60CEJJF",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 12,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/B07F9W12DD?ref_=cm_sw_r_cp_ud_dp_XMFBWMX4FZP9EX2EFKYE",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 12,
    "title": "Who We Are and How We Got Here",
    "author": "David Reich",
    "original_url": "https://www.amazon.in/dp/B07DKCRXYB?ref_=cm_sw_r_cp_ud_dp_0GZBNNV40B8D01P2M3H8",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 12,
    "title": "Fermentation and Kefir Grain",
    "author": null,
    "original_url": "https://www.kefirwala.in/",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 13,
    "title": "Bruce Springsteen: All the Songs",
    "author": "Philippe Margotin and Jean-Michel Guesdon",
    "original_url": "https://www.amazon.in/dp/1784726494?ref_=cm_sw_r_cp_ud_dp_XDS7PHB8GJG16N0GF3Q5",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 13,
    "title": "Born to Run (the book)",
    "author": "Bruce Springsteen",
    "original_url": "https://www.amazon.in/dp/B01BPFBVRY?ref_=cm_sw_r_cp_ud_dp_CW59CW8Z1W909ZYN3HE5_1",
    "google_books_url": "https://play.google.com/store/books/details/Born_to_Run?id=L2yOCwAAQBAJ&hl=en_US&gl=US",
    "tags": []
  },
  {
    "episode": 13,
    "title": "The Notebook Trilogy",
    "author": "Agota Kristof",
    "original_url": "https://www.amazon.in/dp/0802135064?ref_=cm_sw_r_cp_ud_dp_51BGNPTZQR029Y5E5BH8",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 13,
    "title": "The Road",
    "author": "Cormac McCarthy",
    "original_url": "https://www.amazon.in/dp/B004FV4T9I?ref_=cm_sw_r_cp_ud_dp_BEXE6XFEYZ357VE0Y51J",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 13,
    "title": "Self-Portrait",
    "author": "AK Ramanujan",
    "original_url": "https://allpoetry.com/poem/8613975-Self-Portrait-by-A.K.-Ramanujan",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 14,
    "title": "How the War Was Won",
    "author": "Phillips Payson O'Brien",
    "original_url": "https://www.amazon.in/dp/B00VAOVM2A?ref_=cm_sw_r_cp_ud_dp_XBPF758JNATB61D4FAKW",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 14,
    "title": "Ode To Kirihito",
    "author": "Osamu Tezuka (Buddha series)",
    "original_url": "https://www.amazon.in/dp/1647291194?ref_=cm_sw_r_cp_ud_dp_NSE2GC2QPXN60400HGYG",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 15,
    "title": "The Great Mental Models",
    "author": "Shane Parrish",
    "original_url": "https://www.amazon.in/dp/1999449002?ref_=cm_sw_r_cp_ud_dp_4SW64MAVJEA70H8QF44W",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 15,
    "title": "Knowledge Project Podcast",
    "author": "Shane Parrish",
    "original_url": "https://fs.blog/knowledge-project-podcast/",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 15,
    "title": "The Lady Tasting Tea",
    "author": "David Salsburg",
    "original_url": "https://www.amazon.in/dp/0805071342?ref_=cm_sw_r_cp_ud_dp_V8W43XZQ1M2PSY4Q80VH",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 16,
    "title": "China's Future",
    "author": "David Shambaugh",
    "original_url": "https://www.amazon.in/dp/B01CXU2SG8?ref_=cm_sw_r_cp_ud_dp_EN304QS1C0ATYD53C3VP",
    "google_books_url": "https://books.google.com/books/about/China_s_Future.html?id=O0rhCgAAQBAJ",
    "tags": []
  },
  {
    "episode": 16,
    "title": "The Essential Dykes To Watch Out For",
    "author": "Alison Bechdel",
    "original_url": "https://www.amazon.in/dp/0224087061?ref_=cm_sw_r_cp_ud_dp_YFEXZ7TAFB07XG000157",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 16,
    "title": "Fun Home",
    "author": "Alison Bechdel",
    "original_url": "https://www.amazon.in/dp/0224080512?ref_=cm_sw_r_cp_ud_dp_M6YEW79PQFVNEPC7ZHCV",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 16,
    "title": "Blankets",
    "author": "Craig Thompson",
    "original_url": "https://www.amazon.in/dp/0571336027?ref_=cm_sw_r_cp_ud_dp_XX1YNPZ8MEAMZ6KFYFDC",
    "google_books_url": "https://books.google.com/books/about/Blankets.html?id=caBXnQAACAAJ",
    "tags": []
  },
  {
    "episode": 16,
    "title": "Ghost World",
    "author": "Daniel Clowes",
    "original_url": "https://www.amazon.in/dp/0224060880?ref_=cm_sw_r_cp_ud_dp_JM4MZ5YCQA1W1YN6Q43K",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 17,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/B00OVVS7YA?ref_=cm_sw_r_cp_ud_dp_YGWDYQR3YHJ5VMMRB94P",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 17,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/B00ONZQ78M?ref_=cm_sw_r_cp_ud_dp_1RAKYQBRWMKEP1TKV4X8",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 17,
    "title": "Hardcore History (podcast)",
    "author": "Dan Carlin",
    "original_url": "https://www.dancarlin.com/",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 17,
    "title": "Supernova in the East",
    "author": "Dan Carlin",
    "original_url": "https://www.dancarlin.com/product/hardcore-history-62-supernova-in-the-east-i/",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 17,
    "title": "Blueprint for Armageddon",
    "author": "Dan Carlin",
    "original_url": "https://www.dancarlin.com/product/hardcore-history-50-55-blueprint-for-armageddon-series/",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 18,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://amzn.eu/d/5xQ9WYf",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 18,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/8193830342?ref_=cm_sw_r_cp_ud_dp_KFGDGTR12ZX9SPCQX4NE",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 18,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/B0763QTZLY?ref_=cm_sw_r_cp_ud_dp_6SXKFBT86HRDP3VC59K1",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 19,
    "title": "Superforecasting: The Art and Science of Prediction",
    "author": "Philip Tetlock & Dan Gardner",
    "original_url": "https://www.amazon.in/dp/B00Y78X7HY?ref_=cm_sw_r_cp_ud_dp_08W5Y3VNZNBSH5B9ZYRW",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 19,
    "title": "Thinking Strategically: The Competitive Edge in Business, Politics, and Everyday Life",
    "author": "Avinash Dixit & Barry Nalebuff",
    "original_url": "https://www.amazon.in/dp/B002OJIBLU?ref_=cm_sw_r_cp_ud_dp_BNFCQ4YZR57VJNA5VTFM",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 20,
    "title": "The Origins of Totalitarianism",
    "author": "Hannah Arendt",
    "original_url": "https://www.amazon.in/dp/B06XCPY2BL?ref_=cm_sw_r_cp_ud_dp_MS8G8P3JHHSP4DQ4SVRA",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 20,
    "title": "Yuganta",
    "author": "Irawati Karve",
    "original_url": "https://www.amazon.in/dp/8125014241?ref_=cm_sw_r_cp_ud_dp_R89DFYYDY0TAN9NYKXHJ",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 21,
    "title": "Private Truths, Public Lies",
    "author": "Timur Kuran",
    "original_url": "https://www.amazon.in/dp/B082QVPYPL?ref_=cm_sw_r_cp_ud_dp_5ZFF6KSA8R6CKRNQ4WPA",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 21,
    "title": "The Long Divergence",
    "author": "Timur Kuran",
    "original_url": "https://www.amazon.in/dp/B0046A9MA4?ref_=cm_sw_r_cp_ud_dp_QS0DG7X5QXDA0ADKTH4N",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 21,
    "title": "Freedoms Delayed",
    "author": "Timur Kuran",
    "original_url": "https://www.amazon.in/dp/B0C94Q5RJB?ref_=cm_sw_r_cp_ud_dp_JXA8DHD2FR3AWV0JWTYT",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 21,
    "title": "The Pathan Unarmed",
    "author": "Mukulika Banerjee",
    "original_url": "https://www.amazon.in/dp/0852552734?ref_=cm_sw_r_cp_ud_dp_69HG8TEG1CEMGTXEYPEV",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 21,
    "title": "Capital Ideas",
    "author": "Peter L Bernstein",
    "original_url": "https://www.amazon.in/dp/B00BV7MN7O?ref_=cm_sw_r_cp_ud_dp_RT38ZRRBR9NRT1W0KK4H",
    "google_books_url": "https://books.google.com/books/about/Capital_Ideas.html?id=KbF7EyLelvQC",
    "tags": []
  },
  {
    "episode": 22,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/B00FOQS8AO?ref_=cm_sw_r_cp_ud_dp_PQPMZNKJGPJ5MMZA5S99",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 22,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/B0B5RM18NC?ref_=cm_sw_r_cp_ud_dp_BNHV2ZGAD9FA6NM4XD39",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 22,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/B09X9Z6B3Z?ref_=cm_sw_r_cp_ud_dp_DAPBBMAB03A8QNJQ8Y98_1",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 23,
    "title": "My Friend Sancho",
    "author": "Amit Varma",
    "original_url": "https://www.amazon.in/dp/8190617311?ref_=cm_sw_r_cp_ud_dp_DYA53D0BAB8JTWXPYW2S",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 23,
    "title": "Darkness at Noon",
    "author": "Arthur Koestler",
    "original_url": "https://www.amazon.in/dp/B07PFMD4RK?ref_=cm_sw_r_cp_ud_dp_F6GFJ4SEQA9H9BKMHXTX",
    "google_books_url": "https://books.google.com/books/about/Darkness_at_Noon.html?id=py12DwAAQBAJ",
    "tags": []
  },
  {
    "episode": 23,
    "title": "The World of Yesterday",
    "author": "Stefan Zweig",
    "original_url": "https://www.amazon.in/dp/B08HLRDS14?ref_=cm_sw_r_cp_ud_dp_207E8R99BWRGJ5APH7EX",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 24,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/B007EPESOS?ref_=cm_sw_r_cp_ud_dp_0BGD3D8VD5Q9XKYDNSVJ",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 24,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/B07T3QRNLC?ref_=cm_sw_r_cp_ud_dp_5PAQFP6YGP8Q93B8VCSZ",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 24,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/B07NPFRDLY?ref_=cm_sw_r_cp_ud_dp_HMACVEGPYMX7VZ88MP27",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 25,
    "title": "Essays on Nationalism",
    "author": "Rabindranath Tagore",
    "original_url": "https://www.amazon.in/dp/B08R3W5X8Q?ref_=cm_sw_r_cp_ud_dp_YBHPKX5Z04TH7S1CPX4K",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 25,
    "title": "The Libertarian Reader",
    "author": "Edited by David Boaz",
    "original_url": "https://www.amazon.in/dp/B0034DGP22?ref_=cm_sw_r_cp_ud_dp_VYYPM39WMA8YSG1J00WQ",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 25,
    "title": "The Origins of Political Order",
    "author": "Francis Fukuyama",
    "original_url": "https://www.amazon.in/dp/B004Y5460W?ref_=cm_sw_r_cp_ud_dp_XT7NJ9WM97AR6WCBHPVV",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 25,
    "title": "Political Order and Political Decay",
    "author": "Francis Fukuyama",
    "original_url": "https://www.amazon.in/dp/B00KDB2JP0?ref_=cm_sw_r_cp_ud_dp_RVF3MG10ZG6PKQT71731",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 26,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/-/en/James-Scott/dp/0300078153",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 26,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/144494620X?ref_=cm_sw_r_cp_ud_dp_WDPJ7F18X97H0BSBTVBQ",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 27,
    "title": "Beggars in Spain",
    "author": "Nancy Kress",
    "original_url": "https://www.amazon.in/dp/B0029PBVHU?ref_=cm_sw_r_cp_ud_dp_FMJQ0RGQ5BQ3G4A40163",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 27,
    "title": "A History of Global Health",
    "author": "Randall M Packard",
    "original_url": null,
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 29,
    "title": "How Music Works",
    "author": "David Byrne",
    "original_url": "https://www.amazon.in/dp/B008R9POQ6?ref_=cm_sw_r_cp_ud_dp_RXJZ8FHETNGS9QS4T1TJ_1",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 29,
    "title": "William Spaniel",
    "author": null,
    "original_url": "https://www.youtube.com/@Gametheory101",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 30,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/B00BBPWBAK?ref_=cm_sw_r_cp_ud_dp_J8C7VQKQM9AF6TGGDJPC",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 30,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/B00TBKYK60?ref_=cm_sw_r_cp_ud_dp_CWBTW3NWE1D5HHAWYXXF",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 31,
    "title": "Army and Nation",
    "author": "Steven & Wilkinson",
    "original_url": null,
    "google_books_url": "https://www.orientblackswan.com/details?id=9788178244761",
    "tags": []
  },
  {
    "episode": 31,
    "title": "Strategy: A History",
    "author": "Lawrence Freedman",
    "original_url": "https://www.amazon.in/dp/B00F3D4IVG?ref_=cm_sw_r_cp_ud_dp_4JMQR8YNJ0QYW9C8EFAC",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 31,
    "title": "The Second World Wars",
    "author": "Victor Davis Hanson",
    "original_url": "https://www.amazon.in/dp/B072P185BN?ref_=cm_sw_r_cp_ud_dp_NKCSE30DHW2GEA79BBXG",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 31,
    "title": "Carnage and Culture",
    "author": "Victor Davis Hanson",
    "original_url": "https://www.amazon.in/dp/B0012D1D7S?ref_=cm_sw_r_cp_ud_dp_7ACCG5GK9SYEXB2G18HC",
    "google_books_url": "https://books.google.com/books/about/Carnage_and_Culture.html?id=6p5mAAAAMAAJ",
    "tags": []
  },
  {
    "episode": 32,
    "title": "In the Beginning...Was the Command Line",
    "author": "Neal Stephenson",
    "original_url": "https://www.amazon.in/dp/B0011GA08E?ref_=cm_sw_r_cp_ud_dp_RZ4E0G7FWFWN2K4JJBC9",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 32,
    "title": "The Cathedral & the Bazaar",
    "author": "Eric S Raymond",
    "original_url": "https://www.amazon.in/dp/B0026OR3LM?ref_=cm_sw_r_cp_ud_dp_DE9X1GXWN71KXA48PM6A",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 33,
    "title": "Constitutional Amendments",
    "author": null,
    "original_url": "https://www.youtube.com/watch?v=AhZl7kmdC_g&t=0s",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 34,
    "title": "Father, Son & Co: My Life at IBM and Beyond",
    "author": "Thomas J Watson Jr",
    "original_url": "https://www.amazon.in/dp/B00DXKJ6KE?ref_=cm_sw_r_cp_ud_dp_BYWZB3HXBMKJERS0283J",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 34,
    "title": "The Godfather trilogy",
    "author": null,
    "original_url": null,
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 35,
    "title": "Rumblefish",
    "author": "Francis Ford Coppola",
    "original_url": "https://www.primevideo.com/dp/amzn1.dv.gti.a57fd249-e846-4fad-bbde-a1867371a0ac?autoplay=0&ref_=atv_cf_strg_wb",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 35,
    "title": "The Outsiders",
    "author": "Francis Ford Coppola",
    "original_url": "https://www.imdb.com/title/tt0086066/",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 35,
    "title": "Heaven’s Gaits",
    "author": "Adam Gopnik",
    "original_url": "https://www.newyorker.com/magazine/2014/09/01/heavens-gaits",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 35,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/Jim-Corbett/dp/0195622553",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 35,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/B005AV93JI?ref_=cm_sw_r_cp_ud_dp_WFA5376M35HSDRXVBP6D",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 36,
    "title": "Weapons of the Weak",
    "author": "James C Scott",
    "original_url": "https://www.amazon.in/dp/0300036418?ref_=cm_sw_r_cp_ud_dp_JRK2Y14PQQ08N13536DJ",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 36,
    "title": "Against the Grain",
    "author": "James C Scott",
    "original_url": null,
    "google_books_url": "https://shs.cairn.info/journal-of-the-ciph-2021-1-page-151?lang=en",
    "tags": []
  },
  {
    "episode": 36,
    "title": "Runaway",
    "author": "Alice Munro",
    "original_url": "https://www.amazon.in/dp/B00FVXJX9K?ref_=cm_sw_r_cp_ud_dp_V9FRWST73WJ80Z5V7QK4",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 36,
    "title": "Hateship, Friendship, Courtship, Loveship, Marriage",
    "author": "Alice Munro",
    "original_url": "https://www.amazon.in/dp/B00FZ08B3S?ref_=cm_sw_r_cp_ud_dp_CBYSW6N3WS5RYGZE7HRK",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 36,
    "title": "The Bear Came Over the Mountain",
    "author": "Alice Munro",
    "original_url": "https://www.newyorker.com/magazine/2013/10/21/the-bear-came-over-the-mountain-2",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 37,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/B09GPXWWX2?ref_=cm_sw_r_cp_ud_dp_XPJVVZRYGA03Z34PBS5T",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 37,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/B0CFM87CX2?ref_=cm_sw_r_cp_ud_dp_N7Q8T1YVXZWYMN5RSRGD",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 39,
    "title": "Dead Poet's Society",
    "author": "Peter Weir",
    "original_url": null,
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 39,
    "title": "Anatomy of a Fall",
    "author": "Justine Triet",
    "original_url": null,
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 40,
    "title": "World Energy Outlook 2023",
    "author": null,
    "original_url": "https://www.iea.org/reports/world-energy-outlook-2023",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 40,
    "title": "Midnight in Chernobyl",
    "author": "Adam Higginbotham",
    "original_url": "https://www.amazon.in/dp/B0741QVVPJ?ref_=cm_sw_r_cp_ud_dp_E6FMZ3E5C4HJYC63NX5T",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 41,
    "title": "GOAT",
    "author": "Tyler Cowen",
    "original_url": "https://goatgreatesteconomistofalltime.ai/en",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 41,
    "title": "Modern Principles of Microeconomics",
    "author": "Alex Tabarrok and Tyler Cowen",
    "original_url": "https://www.amazon.in/dp/1319384021?ref_=cm_sw_r_cp_ud_dp_9GWA1BEKNJ8788J4Z46G",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 41,
    "title": "Marginal Revolution University",
    "author": null,
    "original_url": "https://mru.org/",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 42,
    "title": "On Tyranny",
    "author": "Timothy Snyder",
    "original_url": "https://www.amazon.in/dp/1847927068?ref_=cm_sw_r_cp_ud_dp_GXAM6P1JXXRBBGHVYH5H_1",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 42,
    "title": "1984",
    "author": "George Orwell",
    "original_url": null,
    "google_books_url": "https://books.google.com/books/about/1984.html?id=kotPYEqx7kMC",
    "tags": []
  },
  {
    "episode": 42,
    "title": "Animal Farm",
    "author": "George Orwell",
    "original_url": null,
    "google_books_url": "https://books.google.com/books/about/Animal_Farm.html?id=XRUOEAAAQBAJ",
    "tags": []
  },
  {
    "episode": 42,
    "title": "Lord of the Flies",
    "author": "William Golding",
    "original_url": null,
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 44,
    "title": "The Great Arc",
    "author": "John Keay",
    "original_url": "https://www.amazon.in/dp/Z9MA5C3BQAS2YYT6C8CD",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 44,
    "title": "Thelma and Louise",
    "author": "Ridley Scott",
    "original_url": null,
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 45,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/B098VYWVYH?ref_=cm_sw_r_cp_ud_dp_TA62CN4NNGTCS00E5V4H",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 45,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/B07S1RRCHZ?ref_=cm_sw_r_cp_ud_dp_8WAHVWJ3KF4D0JAT84Q0",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 45,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.com/Defending-Undefendable-Prostitute-Moneylender-Scapegoats/dp/1479323985",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 47,
    "title": "Triumph of the City",
    "author": "Edward Glaeser",
    "original_url": "https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbjBUZ1NmczNXN1BJUjFNYWtkRXBKeTVCaHpwQXxBQ3Jtc0tsLWhheU9jX3dPU0trWHhaMjh3eHpxcTNFVXBhRGdCQTJtOC1HT1dkREV3NExEd3J0TjJyNFVFOXdRSGNRZ1VRcWp0R3VVcFN5YlowOEgwSnBIVDV5RkdmMjdfWHREazBHYnFFOTN5Q2Y1aXNhNzJQcw&q=https%3A%2F%2Famzn.in%2Fd%2F8tbd0xe&v=wArMaqpNvFE",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 47,
    "title": "The Death and Life of Great American Cities",
    "author": "Jane Jacobs",
    "original_url": "https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbUxIR0hsbU9FejdNNHdCNldLX1p1X1d4ZzAyZ3xBQ3Jtc0trMTJlbDhOaFhNY0F6SWxEa1BpNW0zZ2wtZG9sbEVfNC1lY1l3ZVpialk3Wl9hWkJyMWtTcnFsaXpMRHdGcS10YkNqYXZSSnMzTmhfX1JneDJreTl2N1V3cmw1N215Qi02aHdmUm1NZnk1R0JlTW1OZw&q=https%3A%2F%2Famzn.in%2Fd%2F0gH07m3&v=wArMaqpNvFE",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 48,
    "title": "Research papers list by Ajay",
    "author": "Ajay",
    "original_url": "https://www.youtube.com/watch?v=OUVhRmPLHBs&pp=ygU0Z3JhZHVhdGluZyB0byBnbG9iYWxpemF0aW9uIGV2ZXJ5dGhpbmcgaXMgZXZlcnl0aGluZw%3D%3D",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 51,
    "title": "The Lives of Others",
    "author": "Florian Henckel von Donnersmarck",
    "original_url": "https://www.amazon.com/Lives-Others-Martina-Gedeck/dp/B000V4NX04",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 52,
    "title": "How Life Imitates Chess",
    "author": "Garry Kasparov",
    "original_url": "https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbktyQUdzSDYySEVlM3JPTU5HYUpHaldpTlNmUXxBQ3Jtc0tsaFN6SkdnMDk4QXNuUUVfNVA1N0M4eFd1Vm9LQm9RQk9ua1hFNm5pZm5oaVZ1Y3BhSnEtSHE4QU9HYWZ2WXlMZXNlUjdPRThwUmFqWGFhX3ZfODdMWXpMV2hWTVJKZ0Q3MHU4NUJsVWFYNGwzLXQtcw&q=https%3A%2F%2Famzn.in%2Fd%2F0hBxxCI3&v=F6bHYRX_5eY",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 54,
    "title": "Collected stories",
    "author": "Lydia Davis",
    "original_url": "https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbW5xQnFtT0RINC00eE9XX21zSXZrYlhZbktTZ3xBQ3Jtc0tsUVhxOWY3alVKNkpiTEdsd2ZUZ1pwVFNWMGVMUlF4UUZXbWdUMVhXMG1KbHA0RWthcEFaLTMwVktKNzc3d19JaThiQVBRU3VaSlcwRW41RFA3WHpnTFI3TW15QXNMSzhNcU1aQzlXUVFHZDRpNlhfTQ&q=https%3A%2F%2Famzn.in%2Fd%2F0bGj3ZoE&v=fa_ZXlqwmSM",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 54,
    "title": "Essays",
    "author": "Lydia Davis",
    "original_url": "https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa25PU05OeVJPUC02LVNzcWp0enJHRVZKWndZZ3xBQ3Jtc0ttRjU2RXZtTkNFT0sxY3VDTlBPbHJuSDVkRnVIZWFKLVVvR3Q5dl9pZzlKNG9va3ZKUVlqbjB0UDRSeVN6eURvMzE3N2RndXBNclcwVnJuTTFzN3pmcVByYks5MlF6NnpEMHJEeWloMl9WeC1JZnlqZw&q=https%3A%2F%2Famzn.in%2Fd%2F06KXJVUo&v=fa_ZXlqwmSM",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 54,
    "title": "To Kill a Mocking Bird",
    "author": null,
    "original_url": "https://www.amazon.in/dp/ZTZMB8Q6274979P83B08&ref_=cm_sw_r_cp_ud_dp_ZTZMB8Q6274979P83B08&social_share=cm_sw_r_cp_ud_dp_ZTZMB8Q6274979P83B08&skipTwisterOG=2",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 55,
    "title": "Young Rural Women in India Chase Big-City Dreams (NYT)",
    "author": null,
    "original_url": "https://www.nytimes.com/2016/09/25/world/asia/bangalore-india-women-factories.html",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 55,
    "title": "The Odd Woman and the City",
    "author": null,
    "original_url": "https://www.amazon.in/dp/1PKHRSW7XN5KNF0XECB5&ref_=cm_sw_r_cp_ud_dp_1PKHRSW7XN5KNF0XECB5&social_share=cm_sw_r_cp_ud_dp_1PKHRSW7XN5KNF0XECB5&skipTwisterOG=2",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 56,
    "title": "Cathedral",
    "author": "Raymond Carver",
    "original_url": "http://www.giuliotortello.it/ebook/cathedral.pdf",
    "google_books_url": "https://books.google.com/books/about/Cathedral.html?id=wXuPQAAACAAJ",
    "tags": []
  },
  {
    "episode": 56,
    "title": "Short Cuts (*Film based on Raymond Carver original short stories*)",
    "author": null,
    "original_url": "https://www.criterion.com/films/376-short-cuts",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 57,
    "title": "National Development Delivers: And How!",
    "author": "Lant Pritchett",
    "original_url": "https://www.hks.harvard.edu/centers/cid/publications/faculty-working-papers/national-development-delivers",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 57,
    "title": "Reforming Development Economics",
    "author": "Lant Pritchett",
    "original_url": "https://www.mercatus.org/ideasofindia/lant-pritchett-reforming-development-economics",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 58,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/0262038765?ref=cm_sw_r_cp_ud_dp_3SRP1515PTE555007FEJ&ref_=cm_sw_r_cp_ud_dp_3SRP1515PTE555007FEJ&social_share=cm_sw_r_cp_ud_dp_3SRP1515PTE555007FEJ&skipTwisterOG=2",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 58,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/B07HKY73F7?ref=cm_sw_r_cp_ud_dp_Z5CRYXY1AXQ7746JAQZ1&ref_=cm_sw_r_cp_ud_dp_Z5CRYXY1AXQ7746JAQZ1&social_share=cm_sw_r_cp_ud_dp_Z5CRYXY1AXQ7746JAQZ1&skipTwisterOG=2",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 58,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/8193341252?_encoding=UTF8&psc=1&ref=cm_sw_r_cp_ud_dp_T27GTA7JR9HP6186VFPD&ref_=cm_sw_r_cp_ud_dp_T27GTA7JR9HP6186VFPD&social_share=cm_sw_r_cp_ud_dp_T27GTA7JR9HP6186VFPD&skipTwisterOG=2",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 59,
    "title": "How Innovation Works: And Why It Flourishes in Freedom",
    "author": null,
    "original_url": "https://www.amazon.in/dp/B07WSBV7YZ?ref=cm_sw_r_cp_ud_dp_T80JADERV0BYB69FX0YQ&ref_=cm_sw_r_cp_ud_dp_T80JADERV0BYB69FX0YQ&social_share=cm_sw_r_cp_ud_dp_T80JADERV0BYB69FX0YQ&skipTwisterOG=2",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 59,
    "title": "Huntsville, Alabama (to study)",
    "author": null,
    "original_url": null,
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 60,
    "title": "When McKinsey Comes to Town",
    "author": null,
    "original_url": "https://www.amazon.in/dp/B09VYS5QV7?ref_=cm_sw_r_cp_ud_dp_T027HD2HF26WBQ9DAJV6&ref_=cm_sw_r_cp_ud_dp_T027HD2HF26WBQ9DAJV6&social_share=cm_sw_r_cp_ud_dp_T027HD2HF26WBQ9DAJV6&skipTwisterOG=1",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 60,
    "title": "How To Know a Person",
    "author": null,
    "original_url": "https://www.amazon.in/dp/B0C4DGKBTX?ref_=cm_sw_r_cp_ud_dp_77N2E39EF1WFWAAERPEK&ref_=cm_sw_r_cp_ud_dp_77N2E39EF1WFWAAERPEK&social_share=cm_sw_r_cp_ud_dp_77N2E39EF1WFWAAERPEK&skipTwisterOG=1",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 61,
    "title": "Boltzmann’s Grave",
    "author": null,
    "original_url": "https://www.atlasobscura.com/places/boltzmanns-grave",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 62,
    "title": "Art of clear writing",
    "author": null,
    "original_url": "https://indiauncut.com/clear-writing/",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 62,
    "title": "Economical Writing",
    "author": null,
    "original_url": "https://www.amazon.in/dp/B07RRH2XS4?ref_=cm_sw_r_cp_ud_dp_NGSJ0Y1HCWJ0ANFTEYGB&ref_=cm_sw_r_cp_ud_dp_NGSJ0Y1HCWJ0ANFTEYGB&social_share=cm_sw_r_cp_ud_dp_NGSJ0Y1HCWJ0ANFTEYGB&skipTwisterOG=1",
    "google_books_url": "https://play.google.com/store/books/details/Economical_Writing_Third_Edition_Thirty_Five_Rules?id=j9SWDwAAQBAJ&hl=en_US",
    "tags": []
  },
  {
    "episode": 63,
    "title": "On the Natural History of Destruction",
    "author": null,
    "original_url": "https://www.amazon.in/dp/0375756574?ref_=cm_sw_r_cp_ud_dp_C1TM2RAF2YFCGB42QN61&ref_=cm_sw_r_cp_ud_dp_C1TM2RAF2YFCGB42QN61&social_share=cm_sw_r_cp_ud_dp_C1TM2RAF2YFCGB42QN61&skipTwisterOG=1",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 63,
    "title": "Orienting - An Indian in Japan",
    "author": "Pallavi Aiyar",
    "original_url": "https://www.amazon.in/dp/BCN99DZ03GQEKXMPH65H&ref_=cm_sw_r_cp_ud_dp_BCN99DZ03GQEKXMPH65H&social_share=cm_sw_r_cp_ud_dp_BCN99DZ03GQEKXMPH65H&skipTwisterOG=1",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 63,
    "title": "Nightfall",
    "author": "Isaac Asimov",
    "original_url": "https://sites.uni.edu/morgans/astro/course/nightfall.pdf",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 64,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/7BZAPQFPSRH01BM19W2G&ref_=cm_sw_r_cp_ud_dp_7BZAPQFPSRH01BM19W2G&social_share=cm_sw_r_cp_ud_dp_7BZAPQFPSRH01BM19W2G&skipTwisterOG=1",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 64,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/T93RB8T97QZWCT35E47S&ref_=cm_sw_r_cp_ud_dp_T93RB8T97QZWCT35E47S&social_share=cm_sw_r_cp_ud_dp_T93RB8T97QZWCT35E47S&skipTwisterOG=1",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 64,
    "title": "Amazon Link",
    "author": null,
    "original_url": "https://www.amazon.in/dp/T80K0W8ZPS6Z1SSP4BRJ&ref_=cm_sw_r_cp_ud_dp_T80K0W8ZPS6Z1SSP4BRJ&social_share=cm_sw_r_cp_ud_dp_T80K0W8ZPS6Z1SSP4BRJ&skipTwisterOG=1",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 64,
    "title": "China’s Choice: Economic Slowdown or Exporting Unemployment",
    "author": null,
    "original_url": "https://www.youtube.com/watch?v=s1bSk8Dzxko&t=0s",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 66,
    "title": "Slouching towards Utopia",
    "author": null,
    "original_url": "https://www.amazon.in/dp/B0B3KPG229?ref_=cm_sw_r_cp_ud_dp_H84G6W1ZR6H9C4MEFNVW&ref_=cm_sw_r_cp_ud_dp_H84G6W1ZR6H9C4MEFNVW&social_share=cm_sw_r_cp_ud_dp_H84G6W1ZR6H9C4MEFNVW&skipTwisterOG=1",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 66,
    "title": "Prices Fast and Slow (article)",
    "author": null,
    "original_url": "https://www.notion.so/Ajay-and-Amit-s-end-of-episode-recommendations-on-the-podcast-Everything-is-Everything-00f6341627634abf99571e52b05b41a9?pvs=21",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 67,
    "title": "Perfect Days (2023)",
    "author": null,
    "original_url": "https://letterboxd.com/film/perfect-days-2023/",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 67,
    "title": "Paris, Texas (1984)",
    "author": null,
    "original_url": "https://letterboxd.com/film/paris-texas/",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 67,
    "title": "Essays in Positive Economics",
    "author": "Milton Friedman",
    "original_url": "https://www.amazon.in/dp/0226264033?ref_=cm_sw_r_cp_ud_dp_7QRT5MADTF2936FBZMXK&ref_=cm_sw_r_cp_ud_dp_7QRT5MADTF2936FBZMXK&social_share=cm_sw_r_cp_ud_dp_7QRT5MADTF2936FBZMXK&skipTwisterOG=1",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 67,
    "title": "Joni Mitchell - Blue",
    "author": null,
    "original_url": "https://www.youtube.com/watch?v=MvR7Dkg4NQU&ab_channel=JoniMitchell",
    "google_books_url": null,
    "tags": []
  },
    {
    "episode": 70,
    "title": "1. Introduction to Human Behavioral Biology",
    "author": null,
    "original_url": "https://www.youtube.com/watch?v=NNnIGh9g6fA&list=PL848F2368C90DDC3D&index=1&t=0s",
    "google_books_url": null,
    "tags": []
  },
  {
    "episode": 71,
    "title": "Capital Ideas: The Improbable Origins of Modern Wall Street",
    "author": null,
    "original_url": "https://www.amazon.in/dp/B00BV7MN7O?ref_=cm_sw_r_cp_ud_dp_50X19SKBTVQ75X3ERXQD&ref_=cm_sw_r_cp_ud_dp_50X19SKBTVQ75X3ERXQD&social_share=cm_sw_r_cp_ud_dp_50X19SKBTVQ75X3ERXQD&skipTwisterOG=1",
    "google_books_url": "https://books.google.com/books/about/Capital_Ideas.html?id=KbF7EyLelvQC",
    "tags": []
  }
];
