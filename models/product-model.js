const { text } = require('express');
const mongoose = require('mongoose');   

// product Schema
const ProductSchema = mongoose.Schema ({
    image: String,
    name: String,
    price: Number,
    discount: {
        type: Number,
        default: 0
    },
    bgcolor: String,
    panelcolor: String,
    textcolor: String,
})

module.exports = mongoose.model('Product', ProductSchema);