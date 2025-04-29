// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById('app'); // Assuming you have a div with id="app" in your HTML

    if (!appContainer) {
        console.error("Error: Could not find the 'app' element in the HTML.");
        return;
    }

    // Check if recommendationsData is available (from data.js)
    if (typeof recommendationsData === 'undefined') {
        console.error("Error: recommendationsData is not loaded. Make sure data.js is linked correctly in your HTML.");
        return;
    }

    let currentRecommendations = [...recommendationsData]; // Create a copy to avoid modifying the original data


    // Function to display the recommendations
    function displayRecommendations(recommendations) {
        appContainer.innerHTML = ''; // Clear existing content

        recommendations.forEach(rec => {
            const recElement = document.createElement('div');
            recElement.classList.add('recommendation-card'); // Add a class for styling

            let htmlContent = `<h3>${rec.title}</h3>`;

            if (rec.author) {
                htmlContent += `<p><strong>Author:</strong> ${rec.author}</p>`;
            }

            htmlContent += `<p><strong>Episode:</strong> ${rec.episode}</p>`;

             if (rec.google_books_url) {
                htmlContent += `<p><a href="${rec.google_books_url}" target="_blank">View on Google Books</a></p>`;
            } else if (rec.original_url) {
                 // Fallback to original URL if no Google Books link
                 htmlContent += `<p><a href="${rec.original_url}" target="_blank">View Resource</a></p>`;
            }

            // Add tags (currently just displays them if any are present in data.js)
            if (rec.tags && rec.tags.length > 0) {
                htmlContent += `<p><strong>Tags:</strong> ${rec.tags.join(', ')}</p>`;
            }


            recElement.innerHTML = htmlContent;
            appContainer.appendChild(recElement);
        });
    }

    // --- Sorting Logic ---

    // Sort by Title (alphabetically)
    function sortRecommendationsByTitle() {
        currentRecommendations.sort((a, b) => {
            const titleA = a.title.toLowerCase();
            const titleB = b.title.toLowerCase();
            if (titleA < titleB) {
                return -1;
            }
            if (titleA > titleB) {
                return 1;
            }
            return 0; // titles must be equal
        });
        displayRecommendations(currentRecommendations);
    }

    // Sort by Episode Number
    function sortRecommendationsByEpisode() {
        currentRecommendations.sort((a, b) => a.episode - b.episode);
        displayRecommendations(currentRecommendations);
    }

    // --- Initial Display ---
    displayRecommendations(currentRecommendations);

    // --- Example of how to trigger sorting (you'll need HTML buttons) ---
    // Assuming you have buttons like:
    // <button id="sort-by-title">Sort by Title</button>
    // <button id="sort-by-episode">Sort by Episode</button>

    const sortByTitleButton = document.getElementById('sort-by-title');
    if (sortByTitleButton) {
        sortByTitleButton.addEventListener('click', sortRecommendationsByTitle);
    }

    const sortByEpisodeButton = document.getElementById('sort-by-episode');
    if (sortByEpisodeButton) {
        sortByEpisodeButton.addEventListener('click', sortRecommendationsByEpisode);
    }

    // --- Placeholder for Filtering and Tagging functionality ---
    // You would add similar functions and event listeners for filtering
    // and for adding/managing tags.
});
