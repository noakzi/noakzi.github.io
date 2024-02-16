// search.js

// Function to handle form submission
function handleSearch(event) {
    event.preventDefault(); // Prevent form submission

    // Get the search query
    var query = document.getElementById('searchInput').value;
    
    // Perform the Google search
    var searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(query);
    window.open(searchUrl, '_blank'); // Open search results in a new tab
}

// Add event listener to the form
document.getElementById('googleSearchForm').addEventListener('submit', handleSearch);
