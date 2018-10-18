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
function fetch5thbooks() { 
  fetch("https://anapioficeandfire.com/api/books/5/")
  .then(resp => resp.json())
  .then(json => console.log(json));
}
function fetchcharacter() { 
  fetch("https://anapioficeandfire.com/api/books/5")
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
  fetch5thbooks()
})
