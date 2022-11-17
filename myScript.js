/* MAIN LIBRARY DISPLAY */

let myLibrary = [];
let cardContainer = document.querySelector(".card-container");

class Book {
    constructor(title, author, pages, status, rating) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
        this.rating = rating;
    }
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

        removeButton.classList.add("card-button");
        statusButton.classList.add("card-button");
        card.classList.add("card");

        cardTitle.textContent = arr[i].title;
        cardAuthor.textContent = "Author: " + arr[i].author;
        cardPages.textContent = "Pages: " + arr[i].pages;
        cardStatus.textContent = "Status: " + arr[i].status;
        cardRating.textContent = "Rating: " + arr[i].rating + "/10";
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
                if(thisCardTitle === book.title) {
                    let index = myLibrary.findIndex(object => {
                        return object.title === book.title;
                    });
                    let currentStatus = myLibrary[index]["status"];
                    if(currentStatus === "Read") {
                        myLibrary[index]["status"] = "Unread";
                        cardStatus.textContent = "Status: " + myLibrary[index]["status"];
                    } else {
                        myLibrary[index]["status"] = "Read";
                        cardStatus.textContent = "Status: " + myLibrary[index]["status"];
                    }
                }
             }
        });
        cardContainer.appendChild(card);
    }
}

/* TEST BOOKS */

addBookToLibrary("Where the Crawdads Sing", "Delia Owens", 368, "Read", 9);
addBookToLibrary("Don Quixote", "Miguel de Cervantes", 1072, "Unread", 5);
addBookToLibrary("The Life Changing Magic of Tidying Up", "Marie Kondo", 224, "Read", 8);
addBookToLibrary("Deep Work", "Cal Newport", 304, "Read", 8);
addBookToLibrary("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", 224, "Unread", 5);

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
    let status = "";
    let rating = document.getElementById("rating").value;
    let statusResult = document.getElementsByName("status");
    for(i = 0; i < statusResult.length; i++) {
        if(statusResult[i].checked) {
            status = statusResult[i].value;
        }
    }

    addBookToLibrary(title, author, pages, status, rating);
    toggleForm();
    displayBooks([{title, author, pages, status, rating}]);

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
}

let form = document.querySelector("#new-book-form");
form.addEventListener("submit", saveInfo);

displayBooks(myLibrary);
