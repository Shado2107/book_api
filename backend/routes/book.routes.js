const { getBooks, addBook, editBook, deleteBook } = require ("../controllers/book.controller");
const express = require("express")

const bookRouter = express.Router();

bookRouter.get("/", getBooks);
bookRouter.post("/", addBook);
bookRouter.put("/:id", editBook);
bookRouter.delete("/:id", deleteBook);


module.exports = bookRouter ;