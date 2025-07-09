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

document.querySelector("#myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(this);

    let userInput = {};

    for (const key of formData.keys()) {
        const value = formData.get(key).toString();
        if (value.length > 0) {
            userInput[key] = value;
        }
    }
    console.log(userInput);
});

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295 , false);
myLibrary.push(theHobbit)


//pull info from form
//pass infro into object
//pass object into array
//display array in table

