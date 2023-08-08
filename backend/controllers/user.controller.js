import userModel from "../models/user.model";
const jwt = require('jsonwebtoken')


module.exports.deleteUser = async (req, res) => {
    const token = req.cookies.accessToken;
    const user = await userModel.findById(req.params.id)
    if(!token) return res.status(401).send("you are not authenticated");

    jwt.verify(token, process.env.JWT_KEY, (err, payload)=>{
        if(payload.id === user._id){
            res.status(403).send('you can delete')
        }
    })

    // await userModel.findByIdAndDelete(req.params.id);
}