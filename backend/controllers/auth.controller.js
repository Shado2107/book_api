const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userModel = require('../models/user.model');


module.exports.login = async (req, res) => {
    try{
        const user = await userModel.findOne({
            username: req.body.username
        })
        if(!user) return res.status(404).json({"success":false, "message": "utilisateur non trouvé"});
        const isCorrect = bcrypt.compareSync(req.body.password, user.password);

        if(!isCorrect) return res.status(400).jsoon({"success": false, "message": "mot de passe ou username  incorrect", err});


        const token = jwt.sign(
            {
                id: user._id,
                
            }
        )

        const {password, ...info} = user._doc
        res.status(200).json({info})

    } catch(err){
        res.status(500).json({"success": false, "message": "une erreur s'est produite", err})
    }
    
}


module.exports.register = async (req, res) => {
    
    try{
        const hash = bcrypt.hashSync(req.body.password, 5)
        const newUser = new userModel({
            ...req.body,
            password: hash
        });
        await newUser.save();
        res.status(201).json({"success": true, "message": "utilisateur cree", newUser})
    } catch(err){
 
        res.status(500).json({"success": false, "message": "une erreur s'est produite", err})
    }

    
}



module.exports.logout = async (req, res) => {
 
    
}