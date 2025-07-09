const myLibrary = [];

function openForm() {
    document.getElementById("myForm").style.display = "block";
};

function closeForm() {
    document.getElementById("myForm").style.display = "none"
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
const newBook = new Book(title, author, pages, read);
myLibrary.push(newBook);

        



const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295 , false);
myLibrary.push(theHobbit)

//Notes:
// x = document.getElementById("ID GOES IN HERE") https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
//x.value = what you want

/*
Write a Function to Add a Book
This function should accept form values (title, author, pages, read).

It should create a new Book and add it to the library array.

6. Display the Books
Write a function to loop through your library array.

For each book, create a DOM element (like a card or a table row).

Show the book’s title, author, pages, and read status.

7. Handle Form Submission
Use an event listener on the form’s submit event.

Prevent the default behavior with event.preventDefault().

Get values from the form and call your function to add a book.

Reset and hide the form after submission.

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

