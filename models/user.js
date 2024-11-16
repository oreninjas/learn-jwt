const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://fshopno23:ninja@cluster0.xwcrd.mongodb.net/jwt-learning');

const userschema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    age: Number
});

module.exports = mongoose.model('user', userschema);