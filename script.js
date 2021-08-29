let myLibrary = [];

//Constructor for each book
function Book(title, author, pageCount, finished) {
  this.title = title,
  this.author = author,
  this.pageCount = pageCount,
  this.finished = finished,
}
//Adding a method to Book Object
Book.prototype.info = () => {
  return `${title} by ${author}, ${pageCount} pages, ${finished}`
}

const book1 = new Book('The Pragmatic Programmer', 'Andrew Hunt & David Thomas', 320, 'Not Finished');


function addBookToLibrary(){
//Exactly what it says, should add the book to myLibrary array
}


