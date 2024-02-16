const Router = require('express').Router();
const MenuItem = require('../models/menu')
// API Routes
Router.get('/', async (req, res) => {
    try {
      const menuItems = await MenuItem.find();
      return res.json(menuItems);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  Router.post('/', async (req, res) => {
    try {
      const menuItem = new MenuItem(req.body);
      const savedMenuItem = await menuItem.save();
      res.status(201).json(savedMenuItem);
    } catch (err) {
        
      res.status(400).json({ error: err.message });
    }
  });
  
module.exports = Router