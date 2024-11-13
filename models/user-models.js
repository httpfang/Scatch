const mongoose = require('mongoose');   
mongoose.connect('mongodb://localhost:27017/Scatch-be-project');

// User Schema
const userSchema = mongoose.Schema ({
    fullname: String,
    emial: String,
    password: String,
    cart: Array,
    isadmin: Boolean,
    orders: Array,
    contact: Number,
    picture: String,
})

module.exports = mongoose.model('User', userSchema);