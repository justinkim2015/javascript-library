// MAIN LIBRARY
let myLibrary = [];
let booklist = document.querySelector('ul')

// CONSTRUCTOR
function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
};

Book.prototype.finOrNot = function(read) {
  if(read == true ) {
    return 'finished reading '
  } else {
    return 'not read yet '
  };
}

Book.prototype.info = function() {
  let read = this.finOrNot(this.read)

  return `${this.title} by ${this.author}, ${this.pages} pages, ${read}`
}

Book.prototype.delete = function(index) {
  myLibrary.splice(index, 1)
  document.querySelector(`.li${index}`).remove();
}

Book.prototype.readToggle = function(element, index) {
  let node = document.querySelector(`.li${index}`).firstChild

  if(element.read == true) {
    element.read = false
  } else {
    element.read = true
  }

  node.textContent = element.info()
}

// FORM
function showForm() {
  const div = document.querySelector('form')
  div.classList.toggle('hidden')
}

function submitClick(event) {
  title = document.getElementById('title').value
  author = document.getElementById('author').value
  pages = document.getElementById('pages').value
  read = document.getElementById('read').checked

  addBookToLibrary(title, author, pages, read)
  event.preventDefault();
} 

// EVENT LISTENERS FORMS
const show = document.querySelector('#show-form')
show.addEventListener('click', showForm)

const submit = document.querySelector('#book-submit')
submit.addEventListener('click', submitClick)


// BOOKS
function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read))
  update(booklist)
};

function makelist() {
  myLibrary.forEach((element, index) => {
    createLi(element, index)
  })  
}

function clear(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
}}

function update(parent) {
  clear(parent)
  makelist()
}

function createLi(element, index) {
  newListItem = document.createElement('li')
  newListItem.classList.add(`li${index}`)
  newP = document.createElement('p')
  newP.textContent = element.info()
  newListItem.appendChild(newP)
  document.querySelector('ul').appendChild(newListItem)

  delButton(element, index)
  readButton(element, index)
}

function delButton(element, index) {
  newButton = document.createElement('button')
  newButton.textContent = 'delete'
  newButton.classList.add(`deletebutton${index}`)
  document.querySelector(`.li${index}`).appendChild(newButton)

  const delBook = document.querySelector(`.deletebutton${index}`)
  delBook.addEventListener('click', element.delete.bind(this, index))
}

function readButton(element, index) {
  newButton = document.createElement('button')
  newButton.textContent = 'read?'
  newButton.classList.add(`readbutton${index}`)
  document.querySelector(`.li${index}`).appendChild(newButton)

  const readBook = document.querySelector(`.readbutton${index}`)
  readBook.addEventListener('click', element.readToggle.bind(this, element, index))
}