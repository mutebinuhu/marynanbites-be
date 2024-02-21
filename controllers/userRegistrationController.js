const Router = require('express').Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');


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
        const token = jwt.sign({ newUser}, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

        // Save the user to the database
        let  savedUser = await newUser.save();
       


        res.status(200).json({data:savedUser, token});
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});
// Update user details API
Router.put('/:userId', async (req, res) => {
    const userId = req.params.userId;
    const { username, phoneNumber, location } = req.body;

    // Validate input data (add additional validation as needed)
    if (!username && !phoneNumber && !location) {
        return res.status(400).json({ error: 'No valid data provided for update' });
    }

    try {
        // Find the user by ID
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Update user details
        if (username) user.username = username;
        if (phoneNumber) user.phoneNumber = phoneNumber;
        if (location) user.location = location;

        // Save the updated user to the database
        const updatedUser = await user.save();

        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = Router;