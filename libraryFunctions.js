const myLibrary = [];

function openForm() {
    document.getElementById("myForm").style.display = "block";
};

function closeForm() {
    document.getElementById("myForm").style.display = "none";
};


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



const form = document.getElementById("myForm");

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    renderBooks();
    closeForm();
    form.reset();

})

const bookTable = document.querySelector("#book-table")

function renderBooks() {
    bookTable.innerHTML = "";

    myLibrary.forEach((book) => {
        const row = document.createElement("tr");
        row.innerHTML += ` 
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td>${book.read? "yes" : "no"}</td>
        `;
            
        bookTable.appendChild(row);
    });
}




const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295 , false);
myLibrary.push(theHobbit)

//Notes:
// x = document.getElementById("ID GOES IN HERE") https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
//x.value = what you want

/*


8. Toggle Form Visibility
When the “New Book” button is clicked, toggle visibility of the form.

9. Add Buttons for Each Book
Each book should have:

A “Remove” button to delete it from the array and re-render.

A “Toggle Read” button to switch its read status and re-render.

10. Update the Display Dynamically
After adding, removing, or toggling a book, update the DOM.

Clear the book display container and re-loop through the array to show updated books.
*/

