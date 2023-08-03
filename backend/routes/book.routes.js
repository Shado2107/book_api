const { getBooks } = require ("../controllers/book.controller");
const express = require("express")

const bookRouter = express.Router();

bookRouter.get("/", getBooks);

bookRouter.post("/book");
bookRouter.put("/book/:id");
bookRouter.delete("/book/:id");



module.exports = bookRouter ;