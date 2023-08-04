const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();

const port = process.env.PORT || 5000;

const app = express();


//Connection a la base de donnees
connectDB();

//Middlware qui permet de traiter les donnes de request
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//les routes de l'api
app.use("/api/book",require("./routes/book.routes"));
app.use("/api/auth",require("./routes/auth.routes"))
 

//Lancer le serveur
app.listen(port, () => console.log('le serveur a demarré sur le port ' + port))


