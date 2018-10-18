function fetchBooks() { 
  fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => console.log(json));
}
function fetchhouse() { 
  fetch("https://anapioficeandfire.com/api/houses/378")
  .then(resp => resp.json())
  .then(json => console.log(json));
}
function fetch5thbook() { 
  fetch("https://anapioficeandfire.com/api/")
  .then(resp => resp.json())
  .then(json => console.log(json));
}
function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
