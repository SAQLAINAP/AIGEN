// Add your JavaScript code here
const form = document.getElementById('collegeForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Retrieve form inputs
  const name = document.getElementById('name').value;
  const category = document.getElementById('category').value;
  const rank = document.getElementById('rank').value;

  // Send the form data to the server
  fetch('/colleges', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, category, rank })
  })
  .then(response => response.json())
  .then(data => {
    // Handle the response from the server
    // Update the UI with the list of colleges
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred
    console.error(error);
  });
});
