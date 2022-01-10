// Initialize library array
let myLibrary = [];

let body = document.body;

// Book constructor
function Book(name, author) {
    this.name = name;
    this.author = author;
}

// Create new book
function addBookToLibrary(nome, autor) {
    myLibrary.push(new Book(nome, autor));
}

addBookToLibrary('asdasd', 'joao');
addBookToLibrary('maria sul', 'rui');
addBookToLibrary('fado', 'camane');
addBookToLibrary('s', 'camane');
addBookToLibrary('s', 'camane');
addBookToLibrary('s', 'camane');

console.table(myLibrary);

// Container for the book cards
let libraryContainer = document.querySelector(".library");

// Create a card for each of the books in the library(array)
myLibrary.forEach(book => {
    let bookCard = document.createElement('div');
    bookCard.id = myLibrary.indexOf(book);
    bookCard.classList.add('card');

    let bookName = document.createElement('h2')
    bookName.textContent = book.name;

    let authorName = document.createElement('p');
    authorName.textContent = `by ${book.author}`;

    bookCard.appendChild(bookName);
    bookCard.appendChild(authorName);
    libraryContainer.appendChild(bookCard);  
}); 

// Open 'new book' form
let newBookButton = document.querySelector(".newBook");
newBookButton.addEventListener("click", function () {

    // Display Form
    let formContainer = document.querySelector('.formContainer')
    formContainer.style.display = 'flex';
    
    // Title of the book
    let titleTextBox = document.createElement('input');
    titleTextBox.name = "title";
    titleTextBox.id = "title";

    let labelTitleTextBox = document.createElement('label');
    labelTitleTextBox.textContent = "Title:";
    labelTitleTextBox.setAttribute("for", "title");

    formContainer.appendChild(labelTitleTextBox);
    formContainer.appendChild(titleTextBox);  

    // Author of the book
    let authorTextBox = document.createElement('input');
    authorTextBox.name = "author";
    authorTextBox.id = "author";

    let labelAuthorTextBox = document.createElement('label');
    labelAuthorTextBox.textContent = "Author:";
    labelAuthorTextBox.setAttribute("for", "author");

    formContainer.appendChild(labelAuthorTextBox);
    formContainer.appendChild(authorTextBox);

    // How many pages
    let pagesTextBox = document.createElement('input');
    pagesTextBox.name = "pages";
    pagesTextBox.id = "pages";

    let labelPagesTextBox = document.createElement('label');
    labelPagesTextBox.textContent = "Pages:";
    labelPagesTextBox.setAttribute("for", "pages");

    formContainer.appendChild(labelPagesTextBox);
    formContainer.appendChild(pagesTextBox);

    // If book has been read
    let readCheckBox = document.createElement('input');
    readCheckBox.type = "checkbox";
    readCheckBox.name = "read";
    readCheckBox.id = "read";

    let labelReadCheckbox = document.createElement('label');
    labelReadCheckbox.textContent = "Read:";
    labelReadCheckbox.setAttribute("for", "read");

    formContainer.appendChild(labelReadCheckbox);
    formContainer.appendChild(readCheckBox);

    // Submit new book
    let submitButton = document.createElement('button');
    submitButton.textContent = "Add";

    formContainer.appendChild(submitButton);
});

