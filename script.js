/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
let bookCount = 1;

function Book(title, author, pageCount, finished) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.finished = finished;
  this.bookId = bookCount;
}

Book.prototype.info = () => `${this.title} by ${this.author}, ${this.pageCount} pages, ${this.finished}`;
const book1 = new Book('The Pragmatic Programmer', 'Andrew Hunt & David Thomas', 320, 'Not Finished');

const myLibrary = [book1];

const openForm = document.querySelector('#openForm');
const bookShelf = document.querySelector('#container');
const form = document.querySelector('#bookInput');

function readLibrary() {
  bookShelf.replaceChildren();
  for (const book of myLibrary) {
    const card = document.createElement('div');
    // eslint-disable-next-line operator-linebreak
    const HTML =
    `<table id="stockCard" class="card">
      <tr>
        <td>Title:</td>
        <td id="title">${book.title}</td>
      </tr>
      <tr>
        <td>Author:</td>
        <td id="author">${book.author}</td>
      </tr>
      <tr>
        <td># Pages:</td>
        <td id="pages">${book.pageCount}</td>
      </tr>
      <tr>
        <td>Read?:</td>
        <td id="read">${book.finished}</td>
      </tr>
      <tr>
        <td><button type= "button" class="removeBook">Remove</button></td>
      </tr>
    </table>`;
    card.innerHTML = HTML;
    bookShelf.appendChild(card);
  }
}

function createBook() {
  bookCount++;
  const book = new Book(
    document.querySelector('#title').value,
    document.querySelector('#author').value,
    document.querySelector('#pageCount').value,
    document.querySelector('#read').checked,
    bookCount,
  );
  myLibrary.push(book);
  readLibrary();
}

// Controlling modal window
const formModal = document.getElementById('formModal');

openForm.addEventListener('click', () => {
  formModal.style.display = 'block';
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  createBook();
  formModal.style.display = 'none';
  form.reset();
});

const span = document.getElementsByClassName('close')[0];

span.addEventListener('click', () => {
  formModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === formModal) {
    formModal.style.display = 'none';
  }
});

bookShelf.addEventListener('click', (event) => {
  if (event.target.matches('.removeBook')) {
    event.preventDefault();
    console.log(this.book.bookId);
  }
});
