
        // Actual book data from EIE recommendations
        const books = [
            {
                title: "The Curious Incident of the Dog in the Night-time",
                author: "Mark Haddon",
                episode: 1,
                coverUrl: "https://books.google.com/books/content?id=OWUbAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
                googleBooksUrl: "https://books.google.com/books?id=OWUbAQAAMAAJ",
                isSpecial: false,
                type: "book"
            },
            {
                title: "Songs of Surrender",
                author: "U2",
                episode: 1,
                coverUrl: "https://www.u2.com/media/uploads/2022/12/15/songs-of-surrender-product-shot.jpg",
                googleBooksUrl: "https://books.google.com/books?q=U2+Songs+of+Surrender",
                isSpecial: true,
                type: "music"
            },
            {
                title: "A Vindication of the Rights of Woman",
                author: "Mary Wollstonecraft",
                episode: 2,
                coverUrl: "https://books.google.com/books/content?id=qhcFAAAAQAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
                googleBooksUrl: "https://books.google.com/books?id=qhcFAAAAQAAJ",
                isSpecial: false,
                type: "book"
            },
            {
                title: "Frankenstein",
                author: "Mary Shelley",
                episode: 2,
                coverUrl: "https://books.google.com/books/content?id=2Zc3AAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
                googleBooksUrl: "https://books.google.com/books?id=2Zc3AAAAYAAJ",
                isSpecial: false,
                type: "book",
                notes: "Daughter of Mary Wollstonecraft"
            },
            {
                title: "Romantic Outlaws",
                author: "Charlotte Gordon",
                episode: 2,
                coverUrl: "https://books.google.com/books/content?id=xNKuBgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
                googleBooksUrl: "https://books.google.com/books?id=xNKuBgAAQBAJ",
                isSpecial: false,
                type: "book",
                notes: "about the two Marys"
            },
            {
                title: "Saaya & the Rituals of Tamil Muslim Milk Tea",
                author: "Maazin Buhari",
                episode: 2,
                coverUrl: "/api/placeholder/280/200",
                googleBooksUrl: "https://books.google.com/books?q=Saaya+Tamil+Muslim+Milk+Tea",
                isSpecial: true,
                type: "book"
            },
            {
                title: "Classical Liberalism - A Primer",
                author: "Eamonn Butler",
                episode: 3,
                coverUrl: "https://books.google.com/books/content?id=vg4wDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
                googleBooksUrl: "https://books.google.com/books?id=vg4wDwAAQBAJ",
                isSpecial: false,
                type: "book"
            },
            {
                title: "Friedrich Hayek: The ideas and influence of the libertarian economist",
                author: "Eamonn Butler",
                episode: 3,
                coverUrl: "https://books.google.com/books/content?id=qwwZzwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
                googleBooksUrl: "https://books.google.com/books?id=qwwZzwEACAAJ",
                isSpecial: false,
                type: "book"
            },
            {
                title: "Ludwig von Mises – A Primer",
                author: "Eamonn Butler",
                episode: 3,
                coverUrl: "https://books.google.com/books/content?id=3i8NEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
                googleBooksUrl: "https://books.google.com/books?id=3i8NEAAAQBAJ",
                isSpecial: false,
                type: "book"
            },
            {
                title: "Milton Friedman: A concise guide to the ideas and influence of the free-market economist",
                author: "Eamonn Butler",
                episode: 3,
                coverUrl: "https://books.google.com/books/content?id=jxEpDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
                googleBooksUrl: "https://books.google.com/books?id=jxEpDwAAQBAJ",
                isSpecial: false,
                type: "book"
            },
            {
                title: "Public Choice – A Primer",
                author: "Eamonn Butler",
                episode: 3,
                coverUrl: "https://books.google.com/books/content?id=nPDmBQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
                googleBooksUrl: "https://books.google.com/books?id=nPDmBQAAQBAJ",
                isSpecial: false,
                type: "book"
            },
            {
                title: "Adam Smith – A Primer",
                author: "Eamonn Butler",
                episode: 3,
                coverUrl: "https://books.google.com/books/content?id=yYtXDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
                googleBooksUrl: "https://books.google.com/books?id=yYtXDwAAQBAJ",
                isSpecial: false,
                type: "book"
            },
            {
                title: "A Business History of India",
                author: "Tirthankar Roy",
                episode: 4,
                coverUrl: "https://books.google.com/books/content?id=vN8_DwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
                googleBooksUrl: "https://books.google.com/books?id=vN8_DwAAQBAJ",
                isSpecial: false,
                type: "book"
            },
            {
                title: "Dekalog, A Short Film About Love, A Short Film About Killing",
                author: "Krzysztof Kieślowski",
                episode: 4,
                coverUrl: "/api/placeholder/280/200",
                googleBooksUrl: "https://books.google.com/books?q=Krzysztof+Kieślowski+Dekalog",
                isSpecial: true,
                type: "film"
            },
            {
                title: "The Making of the Atomic Bomb",
                author: "Richard Rhodes",
                episode: 5,
                coverUrl: "https://books.google.com/books/content?id=aSgFMMNQ6G4C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
                googleBooksUrl: "https://books.google.com/books?id=aSgFMMNQ6G4C",
                isSpecial: false,
                type: "book"
            },
            {
                title: "The Power Broker",
                author: "Robert Caro",
                episode: 5,
                coverUrl: "https://books.google.com/books/content?id=nIVvJYnygRQC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
                googleBooksUrl: "https://books.google.com/books?id=nIVvJYnygRQC",
                isSpecial: false,
                type: "book"
            }
        ];
