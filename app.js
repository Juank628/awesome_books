
const addButton = document.getElementById('btn-add');

class UI {
    constructor (books) {
        books = JSON.parse(localStorage.getItem('books')) || [];
        removeButtons = document.querySelectorAll('.btn-remove');
        listSection = document.getElementById('list-sec');
        title = document.getElementById('title');
        author = document.getElementById('author');
    }

    static showList() {
        let listHtml = '';
        for (let i = 0; i < this.books.length; i += 1) {
        listHtml += `
          <div class="book-row" id="book-${i}">
            <p>${this.books[i].title}</p>
            <p>${this.books[i].author}</p>
            <button id="btn-book-${i}" data-index=${i} class="btn-remove">Remove</button> 
            <hr>
          </div>`;
        }
        this.listSection.innerHTML = listHtml;
        addRevomeEvents(); /* eslint-disable-line */
    }

    static addBook  ()  {
        const newBook = {
          title: title.value,
          author: author.value,
        };
        this.books.push(newBook);
        this.showList();
        localStorage.setItem('books', JSON.stringify(this.books));
      };
      
    static removeBook (e)  {
        const titleToRemove = e.currentTarget.previousElementSibling.previousElementSibling.textContent;
        this.books = this.books.filter((book) => this.book.title !== titleToRemove);
        this.showList();
        localStorage.setItem('books', JSON.stringify(this.books));
      };      

    static addRevomeEvents() {
        this.removeButtons = document.querySelectorAll('.btn-remove');
        this.removeButtons.forEach((button) => {
          button.addEventListener('click', (e) => this.removeBook(e));
        });
    };     
}    

addButton.addEventListener('click', UI.addBook);

UI.showList();
