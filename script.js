// Wait for the DOM to be fully loaded before running the script
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
                    book.author.toLowerCase().includes(searchTerm.toLowerCase());
                
                // Type filters
                let matchesFilter = true;
                if (currentFilter === 'special') {
                    matchesFilter = book.isSpecial;
                } else if (currentFilter === 'books') {
                    matchesFilter = book.type === 'book';
                } else if (currentFilter === 'media') {
                    matchesFilter = book.type !== 'book';
                }
                
                return matchesSearch && matchesFilter;
            });
            
            // Sort filtered books
            const sortedBooks = [...filteredBooks].sort((a, b) => {
                if (currentSort === 'title') {
                    return a.title.localeCompare(b.title);
                } else {
                    return a.episode - b.episode;
                }
            });
            
            // Create book cards
            sortedBooks.forEach(book => {
                const card = document.createElement('a');
                card.className = 'card';
                card.href = book.googleBooksUrl;
                card.target = '_blank';
                
                // Prepare type label
                const typeLabel = book.type.charAt(0).toUpperCase() + book.type.slice(1);
                
                // Create card HTML with fallback for image loading errors
                card.innerHTML = `
                    <div class="card-image" style="background-image: url('${book.coverUrl}')" onerror="this.classList.add('no-image')"></div>
                    <div class="card-content">
                        <h3 class="card-title ${book.isSpecial ? 'special' : ''}">${book.title}</h3>
                        <div class="card-author">${book.author}</div>
                        <div class="card-badges">
                            <span class="card-type ${book.type}">${typeLabel}</span>
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
                
                // Note: In a real implementation, you'd make this API call.
                // For demo purposes, we're using static images.
                // const response = await fetch(url);
                // const data = await response.json();
                // if (data.items && data.items[0].volumeInfo.imageLinks) {
                //     return data.items[0].volumeInfo.imageLinks.thumbnail;
                // }
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
            renderBooks();
        }
        
        // Initial render and load covers
        renderBooks();
        // loadBookCovers(); // Uncomment to use Google Books API
    </script>
