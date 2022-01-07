let myLibrary = [];

function Book(name, author) {
    this.name = name;
    this.author = author;
}

function addBookToLibrary(nome, autor) {
    myLibrary.push(new Book(nome, autor));
}

addBookToLibrary('asdasd', 'joao');
addBookToLibrary('maria sul', 'rui');
addBookToLibrary('fado', 'camane');

console.table(myLibrary);

let libraryContainer = document.querySelector(".library");

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

