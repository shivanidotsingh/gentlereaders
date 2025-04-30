document.addEventListener('DOMContentLoaded', () => {
    // DOM elements
    const booksContainer = document.getElementById('books-container');
    const sortTitleBtn = document.getElementById('sort-title');
    const sortEpisodeBtn = document.getElementById('sort-episode');
    const searchInput = document.getElementById('search-input');

    // DOM elements for filters
    const filterAllBtn = document.getElementById('filter-all');
    const filterSpecialBtn = document.getElementById('filter-special');
    const filterBooksBtn = document.getElementById('filter-books');
    const filterMediaBtn = document.getElementById('filter-media');

    // Current states
    let currentSort = 'title';
    let searchTerm = '';
    let currentFilter = 'all';

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

            // Type and Special filters
            let matchesFilter = false; // Start assuming no match

            if (currentFilter === 'all') {
                matchesFilter = true;
            } else if (currentFilter === 'special') {
                matchesFilter = book.isSpecial;
            } else if (currentFilter === 'books') {
                // Match items whose type includes 'book' but are not special
                 matchesFilter = book.type.includes('book') && !book.isSpecial;
            } else if (currentFilter === 'media') {
                 // Match items whose type includes keywords for various media/other types and are not special
                 const mediaKeywords = ['movie', 'song', 'bir sessions', 'special interest', 'article', 'essay', 'film', 'music', 'other', 'research papers', 'digital public goods', 'competitive exams']; // Added competitive exams type
                 matchesFilter = mediaKeywords.some(keyword => book.type.includes(keyword)) && !book.isSpecial;
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
            card.href = book.googleBooksUrl;
            card.target = '_blank';

            // Prepare type label - use the raw type string for display
            const typeLabel = book.type.split('\n').map(part => part.trim()).filter(part => part).join(' / '); // Handle multiline types

            // Determine card-image class based on coverUrl
             const cardImageClass = book.coverUrl && book.coverUrl !== "/api/placeholder/280/200" ? '' : 'no-image';


            // Create card HTML with fallback for image loading errors
            card.innerHTML = `
                <div class="card-image ${cardImageClass}" style="background-image: url('${book.coverUrl}')" onerror="this.classList.add('no-image'); this.style.backgroundImage='none';"></div>
                <div class="card-content">
                    <h3 class="card-title ${book.isSpecial ? 'special' : ''}">${book.title}</h3>
                    <div class="card-author">${book.author}</div>
                    <div class="card-badges">
                        <span class="card-type ${book.type.split('\n')[0].trim().toLowerCase()}">${typeLabel}</span>
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

    filterSpecialBtn.addEventListener('click', () => {
        currentFilter = 'special';
        updateFilterButtons();
        renderBooks();
    });

    filterBooksBtn.addEventListener('click', () => {
        currentFilter = 'books';
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
        filterSpecialBtn.classList.toggle('active', currentFilter === 'special');
        filterBooksBtn.classList.toggle('active', currentFilter === 'books');
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
        for (let book of books) {
            if (book.coverUrl === "/api/placeholder/280/200") {
                const coverUrl = await fetchBookCover(book.title, book.author);
                if (coverUrl) {
                    book.coverUrl = coverUrl;
                }
            }
        }
        renderBooks(); // Re-render after attempting to load covers
    }

    // Initial render and load covers wrapped in DOMContentLoaded
    renderBooks();
    loadBookCovers();
});
