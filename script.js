/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */

class Book {
  constructor (title, author, pageCount, finished) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.finished = finished;
  }

  readStatus = (object) => {
    if (object.finished === 'Yes') {
    return object.finished = 'No';
    }
    if (object.finished === 'No') {
      return object.finished = 'Yes';
    }
  };
}
const myLibrary = [];

const openForm = document.querySelector('#openForm');
const bookShelf = document.querySelector('#container');
const form = document.querySelector('#bookInput');

function readLibrary() {
  bookShelf.replaceChildren();
  for (const book of myLibrary) {
    const card = document.createElement('div');
    card.classList.add('books');
    card.setAttribute('data-count', myLibrary.indexOf(book));
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
    </table>
    <button type= "button" id="toggleRead">Change Read Status</button>
    <button type= "button" id="removeBook">Remove</button>`;
    card.innerHTML = HTML;
    bookShelf.appendChild(card);
  }
}

function createBook() {
  const book = new Book(
    document.querySelector('#title').value,
    document.querySelector('#author').value,
    document.querySelector('#pageCount').value,
    document.querySelector('#read').value,
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
  if (event.target.matches('#removeBook')) {
    event.preventDefault();
    const deleteBook = event.target.parentNode;
    myLibrary.splice(deleteBook.getAttribute('data-count'), 1);
    readLibrary();
  }
});

bookShelf.addEventListener('click', (event) => {
  if (event.target.matches('#toggleRead')) {
    event.preventDefault();
    const targetBook = myLibrary[event.target.parentNode.getAttribute('data-count')];
    targetBook.readStatus(targetBook);
    bookShelf.replaceChildren();
    readLibrary();
  }
});
