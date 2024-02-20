const jwt = require('jsonwebtoken');


let  authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) return res.sendStatus(401); // Unauthorized

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403); // Forbidden

        req.user = user;
        next();
    });
}
module.exports = authenticateToken;