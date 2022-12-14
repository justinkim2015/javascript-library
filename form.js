// FORM
function showForm() {
  const div = document.querySelector('form')
  div.classList.toggle('hidden')
}

show = document.querySelector('#show-form')
show.addEventListener('click', showForm)

const submit = document.querySelector('#book-submit')
submit.addEventListener('click', submitClick)
