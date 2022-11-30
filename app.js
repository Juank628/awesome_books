let books = JSON.parse(localStorage.getItem('books')) || [];
const listSection = document.getElementById('list-sec');
const addButton = document.getElementById('btn-add');
const title = document.getElementById('title');
const author = document.getElementById('author');
let removeButtons = document.querySelectorAll('.btn-remove');

class UI {
  showList() {
    let listHtml = '';
    for (let i = 0; i < books.length; i += 1) {
      listHtml += `
          <div class="book-row" id="book-${i}">
            <p>${books[i].title}</p> by <p>${books[i].author}</p>
            <button id="btn-book-${i}" data-index=${i} class="btn-remove">Remove</button> 
            <hr>
          </div>`;
    }
    listSection.innerHTML = listHtml;
    this.addRevomeEvents(); /* eslint-disable-line */
  }

  addBook = () => {
    const newBook = {
      title: title.value,
      author: author.value,
    };
    books.push(newBook);
    this.showList();
    localStorage.setItem('books', JSON.stringify(books));
  };

  removeBook = (e) => {
    const titleToRemove = e.currentTarget.previousElementSibling.previousElementSibling.textContent;
    books = books.filter((book) => book.title !== titleToRemove);
    this.showList();
    localStorage.setItem('books', JSON.stringify(books));
  };

  addRevomeEvents = () => {
    removeButtons = document.querySelectorAll('.btn-remove');
    removeButtons.forEach((button) => {
      button.addEventListener('click', (e) => this.removeBook(e));
    });
  };
}

let objUI = new UI()
addButton.addEventListener('click', objUI.addBook);
objUI.showList();