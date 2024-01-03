form = document.getElementById("bookForm");
bookList = document.querySelector("div.bookList");
bookListAuthor = document.querySelector("div.bookAuthor");
bookListTitle = document.querySelector("div.bookTitle");
bookListPages = document.querySelector("div.bookPages");
bookListGenre = document.querySelector("div.bookGenre");
var cardCon = document.querySelector("div.cardContainer");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const genre = document.getElementById("genre").value;
  const pages = document.getElementById("pages").value;

  const book = {
    title,
    author,
    genre,
    pages,
  };

  const booksArray = JSON.parse(localStorage.getItem("books")) || [];
  booksArray.push(book);
  localStorage.setItem("books", JSON.stringify(booksArray));

  form.reset();

  window.location.reload();
});

// fetching the details of the information of the books stored in the local storage
localBooks = localStorage.getItem("books");
const arrayBooks = localBooks ? JSON.parse(localBooks) : [];
arrayBooks.forEach((item, index) => {
  var card = document.createElement("div");
  var btn = document.createElement("button");

  card.classList.add("book");
  btn.classList.add("remove");

  card.innerHTML = `
        <h3 id="title"><span></span>${item.title}</h3>
        <hr>
        <h3><span>Author: </span>${item.author}</h3>
        <h3><span>Genre: </span>${item.genre}</h3>
        <h3><span>Pages: </span>${item.pages}</h3>

    `;
  btn.textContent = "Remove";
  btn.classList.add("btn-remove");
  btn.onclick = localStorage.removeItem(arrayBooks[index]);

  cardCon.appendChild(card);
  card.appendChild(btn);
});
