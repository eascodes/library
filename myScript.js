let myLibrary = [];
let cardContainer = document.querySelector(".card-container");

function Book(author, title, pages, status, rating) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.status = status;
    this.rating = rating;
}

function addBookToLibrary(author, title, pages, status, rating) {
    let bookCopy = new Book(author, title, pages, status, rating)
    myLibrary.push(bookCopy);
}

function displayBooks(arr) {
    for(let i=0; i < arr.length; i++) {
        let card = document.createElement("div");
        card.textContent = arr[i].author + arr[i].title + arr[i].pages + arr[i].status + arr[i].rating;
        cardContainer.appendChild(card);
    }
}

addBookToLibrary("Glem", "Hi Glem", 100, "read", 8);
addBookToLibrary("Cody", "Hi Code", 10000, "unread", 2);
addBookToLibrary("Copper", "Hi Copper", 345, "read", 5);
addBookToLibrary("Alexis", "Hi Lex", 160, "unread", 7.5);
addBookToLibrary("Morgan", "Hi Morg", 546, "read", 10);

displayBooks(myLibrary);