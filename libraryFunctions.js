const myLibrary = [];

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none"
}


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        const readstatus =  this.read ? "read already" : "waiting to read";
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readstatus}`;
    };
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295 , false);
console.log(theHobbit.info());

myLibrary.push(theHobbit);
console.log(myLibrary)

//create event listner to capture form inputs
//use them to create new book
//display