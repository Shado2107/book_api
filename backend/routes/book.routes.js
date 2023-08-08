const { getBooks, addBook, editBook, deleteBook } = require ("../controllers/book.controller");
const express = require("express");
const { verifyToken } = require("../middleware/jwt");

const bookRouter = express.Router();

bookRouter.get("/", getBooks);
bookRouter.post("/", addBook);
bookRouter.put("/:id", editBook);
bookRouter.delete("/:id",verifyToken, deleteBook);


module.exports = bookRouter;