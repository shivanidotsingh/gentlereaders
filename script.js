document.addEventListener('DOMContentLoaded', () => {
    // DOM elements
    const booksContainer = document.getElementById('books-container');
    const sortTitleBtn = document.getElementById('sort-title');
    const sortEpisodeBtn = document.getElementById('sort-episode');
    const searchInput = document.getElementById('search-input');

    // DOM elements for filters
    const filterAllBtn = document.getElementById('filter-all');
    // Removed the filterSpecialBtn
    const filterBooksBtn = document.getElementById('filter-books');
    const filterMediaBtn = document.getElementById('filter-media');
    // Filter Button Elements
    const filterMovieBtn = document.getElementById('filter-movie');
    const filterMusicBtn = document.getElementById('filter-music'); // Renamed from song
    const filterBirSessionsBtn = document.getElementById('filter-bir-sessions');
    const filterSpecialInterestBtn = document.getElementById('filter-special-interest');
    const filterArticleEssayBtn = document.getElementById('filter-article-essay');


    // Current states
    let currentSort = 'title';
    let searchTerm = '';
    let currentFilter = 'all'; // Initial filter state

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
            // Convert tags to lowercase for case-insensitive matching
            const tags = book.tags || []; // Ensure tags is an array, even if missing
            const lowerCaseTags = tags.map(tag => tag.toLowerCase());


            if (currentFilter === 'all') {
                matchesFilter = true;
            }
            // Removed 'special' filter case
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
                 matchesFilter = !specificTags.some(tag => lowerCaseTags.includes(tag));
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
                 return episodeA - episodeB;
            }
        });

        // Create book cards
        sortedBooks.forEach(book => {
            const card = document.createElement('a');
            card.className = 'card';
            card.href = book.googleBooksUrl; // Keep Google Books URL for the link
            card.target = '_blank';

            // Prepare tags for display
            const tagsLabel = (book.tags || []).join(' / '); // Join tags with ' / ' for display


            // Determine card-image class based on coverUrl
             const cardImageClass = book.coverUrl && book.coverUrl !== "/api/placeholder/280/200" ? '' : 'no-image';


            // Create card HTML with fallback for image loading errors
            card.innerHTML = `
                <div class="card-image ${cardImageClass}" style="background-image: url('${book.coverUrl}')" onerror="this.classList.add('no-image'); this.style.backgroundImage='none';"></div>
                <div class="card-content">
                    <h3 class="card-title">${book.title}</h3>
                    <div class="card-author">${book.author}</div>
                    <div class="card-badges">
                        <span class="card-type">${tagsLabel}</span>
                        <span class="card-episode">Episode ${book.episode}</span>
                    </div>
                    ${book.notes ? `<div class="card-notes">${book.notes}</div>` : ''}
                </div>
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

    // Function to fetch book cover from Open Library API
    async function fetchBookCover(title, author) {
        try {
            // Construct the search query for Open Library
            const query = encodeURIComponent(`${title} by ${author}`);
            const searchUrl = `https://openlibrary.org/search.json?q=${query}&limit=1`;

            const searchResponse = await fetch(searchUrl);
            const searchData = await searchResponse.json();

            if (searchData.docs && searchData.docs.length > 0 && searchData.docs[0].cover_i) {
                const coverId = searchData.docs[0].cover_i;
                // Construct the cover image URL using the Covers API (M for medium size)
                const coverUrl = `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
                return coverUrl;
            }

            return null; // No cover found
        } catch (error) {
            console.error('Error fetching book cover from Open Library:', error);
            return null;
        }
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
