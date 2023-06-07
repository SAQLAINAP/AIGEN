function searchVideos() {
    var searchQuery = document.getElementById('search-input').value;
    var url = 'https://www.google.com/search?q=' + encodeURIComponent(searchQuery);
    window.location.href = 'search-results.html?q=' + encodeURIComponent(searchQuery);
  }
  