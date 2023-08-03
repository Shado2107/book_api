const bookModel = require("../models/book.model");


module.exports.getBooks = async (req, res) => {
    const books = await bookModel.find({});
        res.statusCode = 200 
        res.json({
            "success": true, 
            books
        })

}

module.exports.addBook = async (req, res) => {

}


module.exports.editBook = async (req, res) => {

}