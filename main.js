// MAIN LIBRARY
let myLibrary = [];
let booklist = document.querySelector('ul')

// CONSTRUCTOR
function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages

  if(read == 'read') {
    this.read = 'finished reading'
  } else {
    this.read = 'not read yet'
  };

  this.info = () => {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
  }
};

// FORM
function showForm() {
  const div = document.querySelector('form')
  div.classList.toggle('hidden')
}

function submitClick(event) {
  title = document.getElementById('title').value
  author = document.getElementById('author').value
  pages = document.getElementById('pages').value
  read = document.getElementById('read').value

  addBookToLibrary(title, author, pages, read)
  event.preventDefault();
} 

// EVENT LISTENERS FORMS
show = document.querySelector('#show-form')
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
    newListItem = document.createElement('li')
    newListItem.classList.add(`li${index}`)
    newListItem.textContent = element.info();
    document.querySelector('ul').appendChild(newListItem)

    newButton = document.createElement('button')
    newButton.textContent = 'delete'
    newButton.classList.add(`deletebutton${index}`)
    document.querySelector(`.li${index}`).appendChild(newButton)

    const delBook = document.querySelector(`.deletebutton${index}`)
    delBook.addEventListener('click', deleteBook.bind(this, index))

    // newButton = document.createElement('button')
    // newButton.textContent = 'read'
    // newButton.classList.add('read')
    // document.querySelector('ul').appendChild(newButton)
    // const markRead = document.querySelector('.read')
    // markRead.addEventListener('click', readBook)
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

function deleteBook(index) {
  console.log(index)
  myLibrary.splice(index, 1)
  document.querySelector(`.li${index}`).remove();
}

