const fs = require('fs');
const crypto = require('crypto');

//genere une cle aleatoire de 64 caracteres pour la cle JWT
const jwtSecret = crypto.randomBytes(32).toString('hex');


//cree une chaine de configuration pour le fichier .env
const envconfig = `JWT_KEY=${jwtSecret}\n`;


//ecrit la chaine de configuration dans le fichier .env
fs.writeFileSync('.env', envconfig);

console.log('cle genenee et stocké dans le .env')