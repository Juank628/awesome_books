let books = JSON.parse(localStorage.getItem('books')) || []
const listSection = document.getElementById('list-sec')
const addButton = document.getElementById('btn-add')
const title = document.getElementById('title')
const author = document.getElementById('author')


addBook = () => {
    const newBook = {
        title: title.value,
        author: author.value
    }
    books.push(newBook)
    localStorage.setItem('books', JSON.stringify(books));
}


addButton.addEventListener('click', addBook)

