const express = require("express");
const app = express();

app.use(express.json());

//you create list of books in the bookStore
let bookStore = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
  },
  {
    id: 2,
    title: "The Power of Now",
    author: "Eckhart Tolle",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

//get all books
app.get("/books", getAllBooks);

//get book by id
app.get("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const book = bookStore.find((book) => book.id == bookId);
  if (!book) {
    res.status(404).send("Book not found");
  } else {
    res.json(book);
  }
});

//add new book
app.post("/books", (req, res) => {
  const newBook = req.body;
  bookStore.push(newBook);
  res.json(bookStore);
});

function getAllBooks(req, res) {
  res.json(bookStore);
}

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
