function fetchBooks() {
  const url = 'https://anapioficeandfire.com/api/books';

  // Returning the fetch promise
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(books => {
      renderBooks(books);
    })
    .catch(error => {
      console.error('Error fetching books:', error.message);
      // Handle error appropriately (e.g., show an error message on the UI)
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name; // Assuming 'name' is the correct property based on the API response
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

