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
    books.push(newBook);
    showList();
    localStorage.setItem('books', JSON.stringify(books));
}

function showList() {
    let listHtml = '';
    for (let i = 0; i < books.length; i += 1) {
      listHtml += `
        <div class="book-row" id="book-${i}">
          <p>${books[i].title}</p>
          <p>${books[i].author}</p>
          <button id="btn-book-${i}" data-index=${i} class="btn-remove">Remove</button> 
          <hr>
        </div>`;
    }
    listSection.innerHTML = listHtml;
  }


addButton.addEventListener('click', addBook);

showList();
