const nodemailer = require('nodemailer');

const envoyerMail = async () => {
    try {
        let transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.AUTH_EMAIL,
                pass: process.env.AUTH_PASS
            }
        });

        transport.verify((error, success) => {
            if (error) {
                console.error("Erreur lors de la vérification du transporteur : ", error);
            } else {
                console.log("Transporteur prêt pour l'envoi de courrier électronique.");
            }
        });
        
    } catch (error) {
        console.error("Une erreur est survenue lors de la création du transporteur : ", error);
    }
};

module.exports = envoyerMail;
