/* const myLibrary = [];

// Constructor for each book
function Book(title, author, pageCount, finished) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.finished = finished;
}
// Adding a method to Book Object
Book.prototype.info = () => `${title} by ${author}, ${pageCount} pages, ${finished}`;

const book1 = new Book('The Pragmatic Programmer', 'Andrew Hunt & David Thomas', 320, 'Not Finished');

const bookShelf = document.querySelector('.bookShelf');


function addBookToLibrary() {

} */
const form = document.querySelector('#addBook');
const submit = document.querySelector('#submitBook');
submit.addEventListener('click', () => {
  console.log(this.form.title);
})


