document.addEventListener('DOMContentLoaded', () => {
    // DOM elements
    const booksContainer = document.getElementById('books-container');
    const sortTitleBtn = document.getElementById('sort-title');
    const sortEpisodeBtn = document.getElementById('sort-episode');
    const searchInput = document.getElementById('search-input');

    // DOM elements for filters
    const filterAllBtn = document.getElementById('filter-all');
    const filterBooksBtn = document.getElementById('filter-books');
    const filterMediaBtn = document.getElementById('filter-media');
    // Filter Button Elements
    const filterMovieBtn = document.getElementById('filter-movie');
    const filterMusicBtn = document.getElementById('filter-music');
    const filterBirSessionsBtn = document.getElementById('filter-bir-sessions');
    const filterSpecialInterestBtn = document.getElementById('filter-special-interest');
    const filterArticleEssayBtn = document.getElementById('filter-article-essay');


    // Current states
    let currentSort = 'title';
    let searchTerm = '';
    let currentFilter = 'all'; // Initial filter state

    // Helper function to convert tag string to a valid CSS class name (kebab-case)
    function tagToClassName(tag) {
        return tag.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9_-]/g, '');
    }

    // Render all books
    function renderBooks() {
        // Clear existing books
        booksContainer.innerHTML = '';

        // Apply filters
        const filteredBooks = books.filter(book => {
            // Search filter
            const matchesSearch =
                book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (book.notes && book.notes.toLowerCase().includes(searchTerm.toLowerCase())); // Include notes in search

            // Tag filtering
            let matchesFilter = false; // Start assuming no match
            const tags = book.tags || []; // Ensure tags is an array, even if missing
            const lowerCaseTags = tags.map(tag => tag.toLowerCase());


            if (currentFilter === 'all') {
                matchesFilter = true;
            }
            else if (currentFilter === 'books') {
                 matchesFilter = lowerCaseTags.includes('book'); // Check if 'book' tag exists
            }
            // Filtering logic for specific tags
            else if (currentFilter === 'movie') {
                 matchesFilter = lowerCaseTags.includes('movie') || lowerCaseTags.includes('film'); // Include both 'movie' and 'film'
            }
            else if (currentFilter === 'music') {
                 matchesFilter = lowerCaseTags.includes('music'); // Check for 'music' tag
            } else if (currentFilter === 'bir-sessions') {
                 matchesFilter = lowerCaseTags.includes('bir-sessions'); // Check for 'bir-sessions' tag
            } else if (currentFilter === 'special-interest') {
                 matchesFilter = lowerCaseTags.includes('special-interest'); // Check for 'special-interest' tag
            }
            // Filtering logic for 'article-essay' to check for 'article' OR 'essay'
            else if (currentFilter === 'article-essay') {
                 matchesFilter = lowerCaseTags.includes('article') || lowerCaseTags.includes('essay'); // Check for 'article' OR 'essay'
            }
            else if (currentFilter === 'media') {
                 // This filter shows items that are NOT 'book' and don't match the specific filters
                 const specificTags = ['book', 'movie', 'film', 'music', 'bir-sessions', 'special-interest', 'article', 'essay']; // Include all specific filter tags
                 // Check if the item has ANY of the specific tags. If it does, it's NOT 'media' in this context.
                 const hasSpecificTag = specificTags.some(specificTag =>
                      lowerCaseTags.includes(specificTag)
                 );
                 matchesFilter = !lowerCaseTags.includes('book') && !hasSpecificTag;
            }


            return matchesSearch && matchesFilter;
        });

        // Sort filtered books
        const sortedBooks = [...filteredBooks].sort((a, b) => {
            if (currentSort === 'title') {
                return a.title.localeCompare(b.title);
            } else {
                 // Handle non-numeric episode values for sorting
                 const episodeA = typeof a.episode === 'number' ? a.episode : Infinity;
                 const episodeB = typeof b.episode === 'number' ? b.episode : Infinity;
                 return episodeB - episodeA; // Assuming descending order for episodes usually
            }
        });

        // Create book cards
        sortedBooks.forEach(book => {
            const card = document.createElement('a');
            card.className = 'card';
            card.href = book.googleBooksUrl; // Keep Google Books URL for the link
            card.target = '_blank';

            // Prepare tags for display and add classes
            const tagsHtml = (book.tags || []).map(tag => {
                // Create a span for each tag to style them individually
                const className = tagToClassName(tag); // Get CSS class name for the tag
                return `<span class="card-type ${className}">${tag}</span>`;
            }).join(''); // Join the spans together

            // Prepare episode info HTML (format: Number. Title)
            // Only create this div if episode or episodeTitle exists
            let episodeInfoDiv = '';
            if (book.episode || book.episodeTitle) { // Check if either exists
                 const episodeDisplay = `${book.episode || ''}${book.episode ? '.' : ''} ${book.episodeTitle || ''}`;
                 episodeInfoDiv = `<div class="card-episode-info">${episodeDisplay.trim()}</div>`; // Trim handles cases where episode/title is missing
            }


            // Determine card-image class based on coverUrl
             const cardImageClass = book.coverUrl && book.coverUrl !== "/api/placeholder/280/200" ? '' : 'no-image';


            // Create card HTML
            card.innerHTML = `
                <div class="card-image ${cardImageClass}" style="background-image: url('${book.coverUrl}')" onerror="this.classList.add('no-image'); this.style.backgroundImage='none';"></div>
                <div class="card-content">
                    <h3 class="card-title">${book.title}</h3>
                    <div class="card-author">${book.author}</div>
                    <div class="card-badges">
                        ${tagsHtml} </div>
                    ${book.notes ? `<div class="card-notes">${book.notes}</div>` : ''}
                    ${episodeInfoDiv} </div>
            `;

            booksContainer.appendChild(card);
        });

        // Show message if no results
        if (sortedBooks.length === 0) {
            booksContainer.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 2rem;">No results found</div>';
        }
    }

    // Event listeners for sorting
    sortTitleBtn.addEventListener('click', () => {
        currentSort = 'title';
        updateSortButtons();
        renderBooks();
    });

    sortEpisodeBtn.addEventListener('click', () => {
        currentSort = 'episode';
        updateSortButtons();
        renderBooks();
    });

    // Event listeners for filtering
    filterAllBtn.addEventListener('click', () => {
        currentFilter = 'all';
        updateFilterButtons();
        renderBooks();
    });

    filterBooksBtn.addEventListener('click', () => {
        currentFilter = 'books';
        updateFilterButtons();
        renderBooks();
    });

    filterMovieBtn.addEventListener('click', () => {
        currentFilter = 'movie';
        updateFilterButtons();
        renderBooks();
    });

    filterMusicBtn.addEventListener('click', () => {
        currentFilter = 'music';
        updateFilterButtons();
        renderBooks();
    });

    filterBirSessionsBtn.addEventListener('click', () => {
        currentFilter = 'bir-sessions';
        updateFilterButtons();
        renderBooks();
    });

    filterSpecialInterestBtn.addEventListener('click', () => {
        currentFilter = 'special-interest';
        updateFilterButtons();
        renderBooks();
    });

    filterArticleEssayBtn.addEventListener('click', () => {
        currentFilter = 'article-essay';
        updateFilterButtons();
        renderBooks();
    });

     filterMediaBtn.addEventListener('click', () => {
        currentFilter = 'media';
        updateFilterButtons();
        renderBooks();
    });


    // Search functionality
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value;
        renderBooks();
    });

    // Update button active states
    function updateSortButtons() {
        sortTitleBtn.classList.toggle('active', currentSort === 'title');
        sortEpisodeBtn.classList.toggle('active', currentSort === 'episode');
    }

    function updateFilterButtons() {
        filterAllBtn.classList.toggle('active', currentFilter === 'all');
        filterBooksBtn.classList.toggle('active', currentFilter === 'books');
        filterMovieBtn.classList.toggle('active', currentFilter === 'movie');
        filterMusicBtn.classList.toggle('active', currentFilter === 'music');
        filterBirSessionsBtn.classList.toggle('active', currentFilter === 'bir-sessions');
        filterSpecialInterestBtn.classList.toggle('active', currentFilter === 'special-interest');
        filterArticleEssayBtn.classList.toggle('active', currentFilter === 'article-essay');
        filterMediaBtn.classList.toggle('active', currentFilter === 'media');
    }

    // Function to fetch book cover from APIs (Open Library then Google Books)
    async function fetchBookCover(title, author) {
        // 1. Try Open Library API (Requesting Large size, fallback to Medium)
        try {
            const query = encodeURIComponent(`${title} by ${author}`);
            const searchUrl = `https://openlibrary.org/search.json?q=${query}&limit=1`;

            const searchResponse = await fetch(searchUrl);
            const searchData = await searchResponse.json();

            if (searchData.docs && searchData.docs.length > 0 && searchData.docs[0].cover_i) {
                const coverId = searchData.docs[0].cover_i;
                // Try Large size ('L') first
                let coverUrl = `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`;
                console.log(`Attempting to fetch Large cover for "${title}" from Open Library.`);
                 const imgResponse = await fetch(coverUrl);

                 if (imgResponse.ok) {
                     console.log(`Found Large cover for "${title}" on Open Library.`);
                     return coverUrl;
                 } else {
                     console.log(`Large cover not available for "${title}", trying Medium.`);
                     // If large fails, try Medium size ('M')
                     coverUrl = `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
                     const mediumImgResponse = await fetch(coverUrl);
                     if(mediumImgResponse.ok) {
                         console.log(`Found Medium cover for "${title}" on Open Library.`);
                         return coverUrl;
                     }
                 }
            }
        } catch (error) {
            console.error('Error fetching from Open Library:', error);
            // Continue to Google Books if Open Library fails or no cover found
        }

        // 2. If Open Library failed or found no cover, try Google Books API (Thumbnail size)
        try {
            const query = encodeURIComponent(`${title} ${author}`);
            const googleBooksUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=1`;
            const googleBooksResponse = await fetch(googleBooksUrl);
            const googleBooksData = await googleBooksResponse.json();

            if (googleBooksData.items && googleBooksData.items[0].volumeInfo && googleBooksData.items[0].volumeInfo.imageLinks && googleBooksData.items[0].volumeInfo.imageLinks.thumbnail) {
                const coverUrl = googleBooksData.items[0].volumeInfo.imageLinks.thumbnail;
                 console.log(`Found cover for "${title}" on Google Books (Thumbnail).`);
                return coverUrl;
            }
        } catch (error) {
            console.error('Error fetching from Google Books:', error);
            // Continue to return null if Google Books also fails
        }

        console.log(`No cover found for "${title}" on either API.`);
        return null; // Return null if neither API found a cover
    }

    // Function to load book covers if not already set
    async function loadBookCovers() {
        let coversLoaded = false;
        for (let book of books) {
            // Only attempt to fetch if the coverUrl is the placeholder and title/author exist
            if (book.coverUrl === "/api/placeholder/280/200" && book.title && book.author) {
                const coverUrl = await fetchBookCover(book.title, book.author);
                if (coverUrl) {
                    book.coverUrl = coverUrl;
                    coversLoaded = true;
                }
            }
        }
        if (coversLoaded) {
             renderBooks(); // Re-render only if any covers were updated
        }
    }


    // Initial render and load covers wrapped in DOMContentLoaded
    renderBooks();
    loadBookCovers();
});

