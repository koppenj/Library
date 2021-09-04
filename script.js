// Constructor for each book
function Book(title, author, pageCount, finished) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.finished = finished;
}
Book.prototype.info = () => `${title} by ${author}, ${pageCount} pages, ${finished}`;
const book1 = new Book('The Pragmatic Programmer', 'Andrew Hunt & David Thomas', 320, 'Not Finished');

const myLibrary = [book1];

const openForm = document.querySelector('#openForm');
const bookShelf = document.querySelector('#container');
// Appending a new div which will carry the new book info.
function addBookToLibrary() {
  myLibrary.push();
  const collect = document.createElement('div');
  collect.setAttribute('id', 'myLibrary[i]');
  collect.setAttribute('class', 'books');
  collect.innerText = "they there they're";
  bookShelf.appendChild(collect);
}

const formModal = document.getElementById('formModal');
const addBook = document.getElementById('submitBook');

openForm.addEventListener('click', () => {
  formModal.style.display = 'block';
});

addBook.addEventListener('click', addBookToLibrary);
addBook.addEventListener('click', () => {
  formModal.style.display = 'none';
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
