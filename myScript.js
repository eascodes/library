let myLibrary = [];
let cardContainer = document.querySelector(".card-container");

function Book(title, author, pages, status, rating) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.rating = rating;
}

function addBookToLibrary(title, author, pages, status, rating) {
    let bookCopy = new Book(title, author, pages, status, rating)
    myLibrary.push(bookCopy);
}

function displayBooks(arr) {
    for(let i=0; i < arr.length; i++) {
        let card = document.createElement("div");
        let cardTitle = document.createElement("h4");
        let cardAuthor = document.createElement("p");
        let cardPages = document.createElement("p");
        let cardStatus = document.createElement("p");
        let cardRating = document.createElement("p");

        cardTitle.textContent = "Title: " + arr[i].title;
        cardAuthor.textContent = "Author: " + arr[i].author;
        cardPages.textContent = "Pages: " + arr[i].pages;
        cardStatus.textContent = "Status: " + arr[i].status;
        cardRating.textContent = "Rating: " + arr[i].rating;

        card.appendChild(cardTitle);
        card.appendChild(cardAuthor);
        card.appendChild(cardPages);
        card.appendChild(cardStatus);
        card.appendChild(cardRating);

        cardContainer.appendChild(card);
    }
}

addBookToLibrary("Glem", "Hi Glem", 100, "read", 8);
addBookToLibrary("Cody", "Hi Code", 10000, "unread", 2);
addBookToLibrary("Copper", "Hi Copper", 345, "read", 5);
addBookToLibrary("Alexis", "Hi Lex", 160, "unread", 7.5);
addBookToLibrary("Morgan", "Hi Morg", 546, "read", 10);

displayBooks(myLibrary);