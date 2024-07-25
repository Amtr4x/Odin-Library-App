const books = [];
const submit = document.querySelector("#submit-btn");
const bookList = document.querySelector("#books-list");

const Book = function (title, author, amountOfPages, read) {
  this.title = title;
  this.author = author;
  this.amountOfPages = Number(amountOfPages);
  this.read = Boolean(read);
};

function addLastBook() {
  const lastBook = books[books.length - 1];
  const newCard = document.createElement("li");
  const cardHead = document.createElement("div");
  const bookTitle = document.createElement("h3");
  const deleteButton = document.createElement("button");
  const authorName = document.createElement("p");
  const cardFoot = document.createElement("div");
  const bookPages = document.createElement("p");
  const bookRead = document.createElement("p");

  bookTitle.textContent = lastBook.title;
  deleteButton.textContent = "x";
  authorName.textContent = lastBook.author;
  bookPages.textContent = `pages: ${lastBook.amountOfPages}`;
  bookRead.textContent = `${lastBook.read ? "is read!" : "not read yet"}`;
  deleteButton.setAttribute("id", "del-btn");

  cardHead.appendChild(bookTitle);
  cardHead.appendChild(deleteButton);

  cardFoot.appendChild(bookPages);
  cardFoot.appendChild(bookRead);

  newCard.setAttribute("id", `${books.length - 1}`);
  newCard.appendChild(cardHead);
  newCard.appendChild(authorName);
  newCard.appendChild(cardFoot);
  bookList.appendChild(newCard);
}

function retrieveBook() {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const title = document.querySelector("#book-title");
    const author = document.querySelector("#book-author");
    const amountOfPages = document.querySelector("#pages");
    const isRead = document.querySelector("#read");

    const newBook = new Book(
      title.value,
      author.value,
      amountOfPages.value,
      isRead.checked,
    );

    if (newBook.title && newBook.author && newBook.amountOfPages) {
      books.push(newBook);

      title.value = "";
      author.value = "";
      amountOfPages.value = "";
      isRead.checked = false;
      addLastBook();
    }
  });
}

function deleteBook() {
  bookList.addEventListener("click", (elem) => {
    const elemToRemove = elem.target.parentNode.parentNode;
    if (elem.target.id === "del-btn" && elemToRemove) {
      bookList.removeChild(elem.target.parentNode.parentNode);
      books.splice(books.indexOf(elemToRemove.id));
    }
  });
}

retrieveBook();
deleteBook();
