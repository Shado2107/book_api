const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();
const authroutes = require("./routes/auth.routes");
const bookroutes = require("./routes/book.routes")
const cookieParser = require("cookie-parser")
const envoyerMail =require ('./controllers/email.controller');

const port = process.env.PORT || 5000;

const app = express();


//Connection a la base de donnees
connectDB();

//Middlware qui permet de traiter les donnes de request
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//les routes de l'api
app.use("/api/auth", authroutes);
app.use("/api/book", bookroutes);


//tester lea function envoie de mail
envoyerMail()
 

//Lancer le serveur
app.listen(port, () => console.log('le serveur a demarré sur le port ' + port))


