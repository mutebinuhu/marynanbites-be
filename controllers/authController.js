require('dotenv').config()
const Router = require('express').Router();
const jwt = require('jsonwebtoken');
Router.post('/', (req, res) => {
    // Perform user authentication (check credentials, etc.)
    const user = { id: 1, username: 'example_user' };

    // Create a token with a payload (user information) and sign it with the secret key
    const token = jwt.sign({ user }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

    res.json({ token });
});

module.exports = Router;