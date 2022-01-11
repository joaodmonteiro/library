// Initialize library array
let myLibrary = [];

// Container for the book cards
let libraryContainer = document.querySelector(".library");

// Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Create a card to display each of the books in the library(array)
function DisplayLibrary() {
    libraryContainer.innerHTML = "";
    myLibrary.forEach(book => {
        let bookCard = document.createElement('div');
        bookCard.id = myLibrary.indexOf(book);
        bookCard.classList.add('card');
    
        let bookTitle = document.createElement('h2')
        bookTitle.textContent = book.title;
    
        let authorName = document.createElement('p');
        authorName.textContent = `by ${book.author}`;
    
        let numberOfPages = document.createElement('p');
        numberOfPages.textContent = `${book.pages} pages`;
    
        let readInfo = document.createElement('p');
        if(book.read)
            readInfo.textContent = "Read";
        else
            readInfo.textContent = "Not read";
    
        let deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.id = bookCard.id;
    
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(authorName);
        bookCard.appendChild(numberOfPages);
        bookCard.appendChild(readInfo);
        bookCard.appendChild(deleteButton);
        libraryContainer.appendChild(bookCard);  
    
        deleteButton.addEventListener("click", function() {
            deleteBook(this.id);
            console.table(myLibrary);
            DisplayLibrary();
        });
    }); 
}
// Create new book
function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}

// Delete book from library
function deleteBook(index) {
    myLibrary.splice(index, 1);
}

// Open 'new book' form
function openForm() {
    // Display Form
    let formContainer = document.querySelector('.formContainer');
    formContainer.innerHTML = "";
    formContainer.style.display = 'flex';
    formContainer.textContent = "Book Details";
    
    // Title of the book
    let titleTextBox = document.createElement('input');
    titleTextBox.name = "title";
    titleTextBox.id = "title";
    titleTextBox.placeholder = "Title";

    formContainer.appendChild(titleTextBox);  

    // Author of the book
    let authorTextBox = document.createElement('input');
    authorTextBox.name = "author";
    authorTextBox.id = "author";
    authorTextBox.placeholder = "Author";

    formContainer.appendChild(authorTextBox);

    // How many pages
    let pagesTextBox = document.createElement('input');
    pagesTextBox.name = "pages";
    pagesTextBox.id = "pages";
    pagesTextBox.placeholder = "Number of pages";

    formContainer.appendChild(pagesTextBox);

    // If book has been read
    let readCheckBox = document.createElement('input');
    readCheckBox.type = "checkbox";
    readCheckBox.name = "read";
    readCheckBox.id = "read";

    let labelReadCheckbox = document.createElement('label');
    labelReadCheckbox.textContent = "Have you read it?";
    labelReadCheckbox.setAttribute("for", "read");

    formContainer.appendChild(labelReadCheckbox);
    formContainer.appendChild(readCheckBox);

    // Submit new book
    let submitButton = document.createElement('button');
    submitButton.textContent = "Add";
    formContainer.appendChild(submitButton);

    submitButton.addEventListener("click", function() {
        if(!titleTextBox.value || !authorTextBox.value || !pagesTextBox.value)
            alert("Missing details!");
        else {
            addBookToLibrary(titleTextBox.value, authorTextBox.value, pagesTextBox.value, readCheckBox.checked);
            DisplayLibrary();
            formContainer.style.display = 'none';
        }      
    });
}

// Adding some books to the array for testing purposes
addBookToLibrary('A vida e a morte', 'joao', 56, true);
addBookToLibrary('Vida', 'joao', 56, true);
addBookToLibrary('O pecado esta la fora', 'joao', 6, true);
addBookToLibrary('asdasd', 'joao', 56, true);
addBookToLibrary('asdasd', 'joao', 56, true);
addBookToLibrary('asdasd', 'joao', 56, false);

console.table(myLibrary);

DisplayLibrary();

// 'Add new book' button
let newBookButton = document.querySelector(".newBook");
newBookButton.addEventListener("click", function () {
    openForm();
});

// Close 'new book' form if clicked out
document.addEventListener("click", function(event) {
    if(!event.target.closest(".formContainer") && !event.target.classList.contains("newBook") )
    {
        document.querySelector('.formContainer').style.display = 'none';
    }
});



