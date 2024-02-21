const express = require('express')
let dbConnection = require('./utils/db.config');
require('dotenv').config()
const cors = require("cors");
let app = express()
app.use(express.json());
const menuController = require('./controllers/menuController')
//const loginController = require('./controllers/authController')
const userRegistrationController = require("./controllers/userRegistrationController");
const loginController = require("./controllers/loginController");

app.use(cors())
app.use("/api/menu", menuController)
app.use("/api/register", userRegistrationController);
app.use("/api/update", userRegistrationController);
app.use("/api/login", loginController);





module.exports = app