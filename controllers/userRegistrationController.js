const User = require('../models/user');

const Router = require('express').Router();

Router.post('/', async (req, res) => {
    const { username, phoneNumber, location } = req.body;

    // Validate input data (add additional validation as needed)
    if (!username || !phoneNumber || !location) {
        return res.status(400).json({ error: 'Invalid input data' });
    }

    try {
        // Create a new user instance
        const newUser = new User({
            username,
            phoneNumber,
            location,
        });

        // Save the user to the database
        const savedUser = await newUser.save();

        res.json(savedUser);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = Router;