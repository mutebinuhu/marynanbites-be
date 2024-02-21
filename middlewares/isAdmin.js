const jwt = require('jsonwebtoken');
const User = require('../models/user');

let  isAadmin = async(req, res, next) => {
    const token = req.header('Authorization');

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403); // Forbidden
       // return res.json(user.user[0]["role"]);
        if (user.user[0]["role"] == "admin")
        {
           return  next();
        }
        return res.sendStatus(403); // Forbidden
    });
}
module.exports = isAadmin;