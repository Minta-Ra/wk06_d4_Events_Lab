document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  // This will be for all form
  const formInput = document.querySelector('#new-item-form');
  formInput.addEventListener('submit', handleFormSubmit);

  const inputDeleteButton = document.querySelector('#delete');
  inputDeleteButton.addEventListener('click', handleDeleteInput);
})

// // THIS SINGLE FUNCTION HANDLES ALL THE FORM INPUTS AS A LIST
// const handleFormSubmit = function(event) {
//   event.preventDefault();
//   // console.log(event.target.title.value);
//   const readingList = document.querySelector('#reading-list')
//   const listItem = document.createElement('li');
//   listItem.textContent = `${event.target.title.value}, ${event.target.author.value}, ${event.target.category.value}`;
//   readingList.appendChild(listItem);
//   document.getElementById('new-item-form').reset();   // OR: event.target.reset();
// }
////////////////////////////////


const handleFormSubmit = function(event) {
  event.preventDefault();
  const readingListItem = createReadingListItem(event.target);
  const readingList = document.querySelector('#reading-list');
  readingList.appendChild(readingListItem);
  event.target.reset();
}


// Create list of items
const createReadingListItem = function(form) {
  const readingListItem = document.createElement('li');
  readingListItem.classList.add('reading-list-item');

  const title = document.createElement('h2');
  title.textContent = form.title.value;
  readingListItem.appendChild(title);

  const author = document.createElement('h3');
  author.textContent = form.author.value;
  readingListItem.appendChild(author);

  const category = document.createElement('p');
  category.textContent = form.category.value;
  readingListItem.appendChild(category);

  return readingListItem;
}


// Delete all the list
const handleDeleteInput = function(event) {
  const removeList = document.querySelector('#reading-list');
  removeList.innerHTML = '';
}