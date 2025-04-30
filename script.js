document.addEventListener('DOMContentLoaded', () => {
    // DOM elements
    const booksContainer = document.getElementById('books-container');
    const sortTitleBtn = document.getElementById('sort-title');
    const sortEpisodeBtn = document.getElementById('sort-episode');
    const searchInput = document.getElementById('search-input');

    // DOM elements for filters
    const filterAllBtn = document.getElementById('filter-all');
    // Removed the filterSpecialBtn as per previous discussion
    const filterBooksBtn = document.getElementById('filter-books');
    const filterMediaBtn = document.getElementById('filter-media');
    // New Filter Button Elements
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
            // Filtering logic for kebab-case and individual tags
            else if (currentFilter === 'movie') {
                 matchesFilter = lowerCaseTags.includes('movie') || lowerCaseTags.includes('film'); // Still check for both if applicable
            }
            else if (currentFilter === 'music') {
                 matchesFilter = lowerCaseTags.includes('music'); // Check for 'music' tag
            } else if (currentFilter === 'bir-sessions') {
                 matchesFilter = lowerCaseTags.includes('bir-sessions'); // Check for 'bir-sessions' tag
            } else if (currentFilter === 'special-interest') {
                 matchesFilter = lowerCaseTags.includes('special-interest'); // Check for 'special-interest' tag
            }
            // Updated filtering logic for 'article-essay' to check for 'article' OR 'essay'
            else if (currentFilter === 'article-essay') {
                 matchesFilter = lowerCaseTags.includes('article') || lowerCaseTags.includes('essay'); // Check for 'article' OR 'essay'
            }
            else if (currentFilter === 'media') {
                 // This filter shows items that are NOT 'book' and don't match the specific filters
                 const specificTags = ['book', 'movie', 'film', 'music', 'bir-sessions', 'special-interest', 'article', 'essay']; // Include all specific filter tags (removed 'article-essay')
                 matchesFilter = !specificTags.some(tag => lowerCaseTags.includes(tag));
            }

            // With no 'special' tag, no need for the isSpecial check here

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
            card.href = book.googleBooksUrl;
            card.target = '_blank';

            // Prepare tags for display
            // Display original tags, not necessarily lowercase or kebab-case
            const tagsLabel = (book.tags || []).join(' / '); // Join tags with ' / ' for display


            // Determine card-image class based on coverUrl
             const cardImageClass = book.coverUrl && book.coverUrl !== "/api/placeholder/280/200" ? '' : 'no-image';

            // Removed check for 'special' tag for title styling


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

    // Removed event listener for filterSpecialBtn

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
        // Removed active state toggle for filterSpecialBtn
        filterBooksBtn.classList.toggle('active', currentFilter === 'books');
        filterMovieBtn.classList.toggle('active', currentFilter === 'movie');
        filterMusicBtn.classList.toggle('active', currentFilter === 'music');
        filterBirSessionsBtn.classList.toggle('active', currentFilter === 'bir-sessions');
        filterSpecialInterestBtn.classList.toggle('active', currentFilter === 'special-interest');
        filterArticleEssayBtn.classList.toggle('active', currentFilter === 'article-essay');
        filterMediaBtn.classList.toggle('active', currentFilter === 'media');
    }

    // Function to fetch book cover from Google Books API
    async function fetchBookCover(title, author) {
        try {
            const query = encodeURIComponent(`${title} ${author}`);
            const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=1`;
            const response = await fetch(url);
            const data = await response.json();
            if (data.items && data.items[0].volumeInfo && data.items[0].volumeInfo.imageLinks && data.items[0].volumeInfo.imageLinks.thumbnail) {
                return data.items[0].volumeInfo.imageLinks.thumbnail;
            }
            return null;
        } catch (error) {
            console.error('Error fetching book cover:', error);
            return null;
        }
    }

    // Function to load book covers if not already set
    async function loadBookCovers() {
        let coversLoaded = false;
        for (let book of books) {
            if (book.coverUrl === "/api/placeholder/280/200" && book.title && book.author) { // Check if title and author exist
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
