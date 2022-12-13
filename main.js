let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages

  if(read == true) {
    this.read = 'finished reading'
  } else {
    this.read = 'not read yet'
  };

  this.info = () => {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
  }
};

function addBookToLibrary() {
};

let theHobbit = new Book('The Hobbit', 'Tolkien', 696, true)
console.log(theHobbit.info())
