const mongoose = require('mongoose');   

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