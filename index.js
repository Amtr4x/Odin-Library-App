const books = [];
const submit = document.querySelector("#submit-btn");

const Book = function (title, author, amountOfPages, read) {
  this.title = title;
  this.author = author;
  this.amountOfPages = Number(amountOfPages);
  this.read = Boolean(read);
};

function retrieveBook() {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const title = document.querySelector("#book-title").value;
    const author = document.querySelector("#book-author").value;
    const amountOfPages = document.querySelector("#pages").value;
    const isRead = document.querySelector("#read").checked;

    const newBook = new Book(title, author, amountOfPages, isRead);
    books.push(newBook);
  });
}

retrieveBook();
