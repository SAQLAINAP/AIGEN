window.addEventListener('DOMContentLoaded', function() {
    // Get the search query from the URL
    var urlParams = new URLSearchParams(window.location.search);
    var searchQuery = urlParams.get('q');
  
    // Update the page title with the search query
    document.title = 'Search Results - ' + searchQuery;
  
    // Display the search query
    var queryHeading = document.querySelector('#search-results h2');
    queryHeading.textContent += ' ' + searchQuery;
  
    // Fetch the trending videos
    fetchTrendingVideos();
  
    function fetchTrendingVideos() {
      // Set up the YouTube Data API request
      var apiKey = 'AIzaSyAHWvcWu7gv39LNvp4KJg-gCVUaonlvpR0'; // Replace with your YouTube Data API key
      var apiUrl = 'https://www.googleapis.com/youtube/v3/videos';
      var params = {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 10,
        key: apiKey
      };
  
      // Construct the API URL with query parameters
      var apiURL = apiUrl + '?' + new URLSearchParams(params);
  
      // Fetch the trending videos
      fetch(apiURL)
        .then(response => response.json())
        .then(data => {
          // Display the trending videos
          displayVideos(data.items);
        })
        .catch(error => {
          console.log('An error occurred:', error);
        });
    }
  
    function displayVideos(videos) {
      var resultsContainer = document.getElementById('video-results');
      videos.forEach(function(video) {
        var videoLink = document.createElement('a');
        videoLink.href = 'https://www.youtube.com/watch?v=' + video.id;
        videoLink.textContent = video.snippet.title;
        resultsContainer.appendChild(videoLink);
        resultsContainer.appendChild(document.createElement('br'));
      });
    }
  });
  