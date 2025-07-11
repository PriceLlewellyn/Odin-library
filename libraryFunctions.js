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

const bookTable = document.querySelector("#book-table")


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

function renderBooks() {
    bookTable.innerHTML = "";

    myLibrary.forEach((book, index) => {
        const row = document.createElement("tr");

        row.innerHTML = ` 
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td>${book.read? "yes" : "no"}</td>
            <td><button class="delete-button" 
                        data-index="${index}">Delete</button></td>
        `;
            
        bookTable.appendChild(row);
    });
}

bookTable.addEventListener("click", (e) => {
    if (e.target.matches(".delete-button")) {
        const idx = e.target.dataset.index;
        myLibrary.splice(idx, 1);
        renderBooks();
    }
});


const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295 , false);
myLibrary.push(theHobbit)




