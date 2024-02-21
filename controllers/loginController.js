const Router = require('express').Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
Router.post('/', async (req, res) => {
    const { phoneNumber } = req.body;

  
    // Validate input data (add additional validation as needed)
    if (!phoneNumber) {
        return res.status(400).json({ error: 'Please submit the required data' });
    }

    try {
        const user = await User.find({phoneNumber});

        if (user.length == 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        const token = jwt.sign({ user}, process.env.JWT_SECRET_KEY, { expiresIn: '36h' });


        return res.json({user, token});
        

    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = Router;