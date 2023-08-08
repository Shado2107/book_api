const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']
    if(token === undefined || token === null) return res.sendStatus(401)

    jwt.verify(token, process.env.JWT_KEY, async(err, user) => {
        if(err) return res.sendStatus(403)
        req.user = user;
        
        next();
    })
};


module.exports = {
    verifyToken
}