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
    if( req.body.title === undefined ||
        req.body.author === undefined ||
        req.body.editor === undefined ||
        req.body.year === undefined ||
        req.body.description === undefined)
        {
        
        res.statusCode = 400,
        res.json({
            "success" : false,
            "message": "merci de renseigner des informations valides"
        })
    } 
        //recureper les donnees
        var title = req.body.title
        var author = req.body.author
        var editor = req.body.editor
        var year =  parseInt(req.body.year)
        var description = req.body.description

        //create and store book
        const book = await bookModel.create({
            title: title,
            author: author,
            editor: editor,
            year: year,
            description: description
        });
        res.statusCode = 200
        res.json({"success": true, "message": "Informations enregistrées avec succes", book})
    

   

}


module.exports.editBook = async (req, res) => {
    try {
        const book = await bookModel.findById(req.params.id); 
  
      if (!book) {
       // Ajoutez le return pour sortir de la fonction après avoir renvoyé la réponse
        res.statusCode = 400 
        res.json({"success": false, "message": "ce livre n'existe pas" }); 
      }
  
      // Utilisez findByIdAndUpdate pour mettre à jour le livre en fonction de son ID
      const updateBook = await bookModel.findByIdAndUpdate(
        req.params.id, 
        req.body,
        { new: true }
      );
      res.statusCode= 200 
      res.json({ "success": true, "message": "mise a jour effectue", updateBook });
    } catch (error) {
      console.error(error); // Vous pouvez gérer les erreurs ici si nécessaire
      res.statusCode = 500 
      res.json({ "success": false, "message": "Erreur lors de la mise à jour du livre" });
    }
  };

module.exports.deleteBook = async (req, res) => {
    const book = await bookModel.findById(req.params.id)

    if(!book){
        res.statusCode = 400 
        res.json({"success": false, "message": "ce livre n'existe pas"})
    }

    await bookModel.deleteOne(
       {id : req.params.id}
    )
    res.statusCode = 200
    res.json({"success": true, "message": "livre supprimé"})
}