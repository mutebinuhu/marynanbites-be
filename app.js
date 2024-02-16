const express = require('express')
let dbConnection = require('./utils/db.config');
require('dotenv').config()
const cors = require("cors");
let app = express()
app.use(express.json());
const menuController = require('./controllers/menuController')
app.use(cors())
app.use("/api/menu", menuController)



module.exports = app