const myLibrary = [];

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

myLibrary.push(new Book);


const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295 , false);
console.log(theHobbit.info());

