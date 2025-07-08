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


document.addEventListener("DOMContentLoaded", () => {
    const myForm = document.querySelector("#myForm");
    myForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(myForm);
        const data = {}
        for (const [key, value] of formData.entries()) {
            data[key] = value;
        }
        console.log(data);

        const newBook = new book (
            data.title,
            data.author,
            parseInt(data.pages),
            data.read === "on"
        )
        myLibrary.push(newBook)
        myForm.reset();
        closeForm()
    })
})





const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295 , false);
console.log(theHobbit.info());

myLibrary.push(theHobbit);
console.log(myLibrary)


