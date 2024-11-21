const mongoose = require('mongoose');   

// owner Schema
const ownerSchema = mongoose.Schema ({
    fullname: String,
    emial: String,
    password: String,
    product: Array,
    gstin: Number,
    picture: String,
})

module.exports = mongoose.model('owner', ownerSchema);