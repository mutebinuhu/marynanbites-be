const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username: String,
    phoneNumber: {type:String, unique: true},
    location: String,
    role:{
        type:String,
        default:"normal"
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User