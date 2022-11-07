/* MAIN LIBRARY DISPLAY */

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
        let removeButton = document.createElement("button");
        let statusButton = document.createElement("button");

        card.classList.add("card");
        card.setAttribute("data-index", i);

        cardTitle.textContent = "Title: " + arr[i].title;
        cardAuthor.textContent = "Author: " + arr[i].author;
        cardPages.textContent = "Pages: " + arr[i].pages;
        cardStatus.textContent = "Status: " + arr[i].status;
        cardRating.textContent = "Rating: " + arr[i].rating;
        removeButton.textContent = "Remove Book";
        statusButton.textContent = "Change Read Status";

        card.appendChild(cardTitle);
        card.appendChild(cardAuthor);
        card.appendChild(cardPages);
        card.appendChild(cardStatus);
        card.appendChild(cardRating);
        card.appendChild(removeButton);
        card.appendChild(statusButton);

        removeButton.addEventListener("click", function(){
            cardContainer.removeChild(card);
            let thisCardTitle = this.parentElement.firstElementChild.innerHTML;
            for(const book of myLibrary) {
                if(thisCardTitle === "Title: " + book.title) {
                    let index = myLibrary.findIndex(object => {
                        return object.title === book.title;
                    });
                    myLibrary.splice(index,1);
                }
             }
        });

        statusButton.addEventListener("click", function() {
            let thisCardTitle = this.parentElement.firstElementChild.innerHTML;
            for(const book of myLibrary) {
                if(thisCardTitle === "Title: " + book.title) {
                    let index = myLibrary.findIndex(object => {
                        return object.title === book.title;
                    });
                    let currentStatus = myLibrary[index]["status"];
                    if(currentStatus === "read") {
                        myLibrary[index]["status"] = "unread";
                        cardStatus.textContent = "Status: " + myLibrary[index]["status"];
                    } else {
                        myLibrary[index]["status"] = "read";
                        cardStatus.textContent = "Status: " + myLibrary[index]["status"];
                    }
                }
             }
        });
        cardContainer.appendChild(card);
    }
}

/* TEST BOOKS */

addBookToLibrary("Hi Glem", "Glem", 100, "read", 8);
addBookToLibrary("Hi Cody", "Code", 10000, "unread", 2);
addBookToLibrary("Hi Copper", "Copper", 345, "read", 5);
addBookToLibrary("Hi Alexis", "Lex", 160, "unread", 7.5);
addBookToLibrary("Hi Morgan", "Morg", 546, "read", 10);

/* FORM */

function toggleForm() {
    formContainer.classList.toggle("hidden");
}

let addButton = document.querySelector("#add-button");
let formContainer = document.querySelector(".form-container");
addButton.addEventListener("click", toggleForm)

function saveInfo(e) {
    
    e.preventDefault();

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let status = document.getElementsByClassName("radio").value;
    let rating = document.getElementById("rating").value;

    addBookToLibrary(title, author, pages, status, rating);
    toggleForm();
    displayBooks([{title, author, pages, status, rating}]);
}

let form = document.querySelector("#new-book-form");
form.addEventListener("submit", saveInfo);

displayBooks(myLibrary);
