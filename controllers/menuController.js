require('dotenv').config()
const Router = require('express').Router();
const multer = require('multer');
const cloudinary = require('cloudinary').v2     
cloudinary.config({ 
  cloud_name: 'mutebinuhu', 
  api_key: process.env.CLOUDINARY_API,
  api_secret: process.env.CLOUDINARY_SECRET,
});
const MenuItem = require('../models/menu');
const authenticateToken  = require('../middlewares/auth');
const isAadmin = require('../middlewares/isAdmin');
// API Routes
Router.get('/',  async (req, res) => {
    try {
  
    
      const menuItems = await MenuItem.find();
      return res.json(menuItems);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  Router.post('/', authenticateToken, isAadmin,  async (req, res) => {
    try {
      const menuItem = new MenuItem(req.body);
      cloudinary.uploader.upload(req.body.image,
    { public_id: "image" }, 
  function(error, result) {

    console.log("result returned============", result); 

  });
      const savedMenuItem = await menuItem.save();
      res.status(201).json(savedMenuItem);
    } catch (err) {
        
      res.status(400).json({ error: err.message });
    }
  });
  
module.exports = Router