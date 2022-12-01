let books = JSON.parse(localStorage.getItem('books')) || [];
const listSection = document.getElementById('list-sec');
const addButton = document.getElementById('btn-add');
const title = document.getElementById('title');
const author = document.getElementById('author');
let removeButtons = document.querySelectorAll('.btn-remove');

const showlist = document.getElementById('listshow');
const addshow = document.getElementById('addshow');
const contactshow = document.getElementById('contactshow');

const add = document.getElementById('add-sec');
const contact = document.querySelector('.contact');

showlist.addEventListener('click', () => {
  listSection.style.display = 'block';
  add.style.display = 'none';
  contact.style.display = 'none';
});

addshow.addEventListener('click', () => {
  listSection.style.display = 'none';
  add.style.display = 'flex';
  contact.style.display = 'none';
});

contactshow.addEventListener('click', () => {
  listSection.style.display = 'none';
  add.style.display = 'none';
  contact.style.display = 'flex';
});

class UI {
  showList() {
    let listHtml = '';
    for (let i = 0; i < books.length; i += 1) {
      listHtml += `
          <div class="book-row" id="book-${i}">
            <p class="title">${books[i].title}</p> by <p class="author">${books[i].author}</p>
            <button id="btn-book-${i}" data-index=${i} class="btn-remove">Remove</button> 
            <hr>
          </div>`;
    }
    listSection.innerHTML = listHtml;
    this.addRevomeEvents(); /* eslint-disable-line */
  }

  addBook = () => {
    if (title.value.length > 0 && author.value.length > 0) {
      const newBook = {
        title: title.value,
        author: author.value,
      };
      books.push(newBook);
      title.value = '';
      author.value = '';
      this.showList();
      localStorage.setItem('books', JSON.stringify(books));
    }
  };

  removeBook = (e) => {
    const titleToRemove = e.currentTarget.previousElementSibling.previousElementSibling.textContent;
    const authorToRemove = e.currentTarget.previousElementSibling.textContent;
    books = books.filter((book) => book.title !== titleToRemove || book.author !== authorToRemove);
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

const objUI = new UI();
addButton.addEventListener('click', objUI.addBook);
objUI.showList();
