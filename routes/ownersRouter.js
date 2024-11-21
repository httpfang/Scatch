const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owner-model');

if(process.env.NODE_URI === 'development') {
    router.post("/create", async (req, res) => {
     let oenwers = await ownerModel.find()
     if(owners.length > 0) {
         return res.status(500).send('No owners found');
    }

    let {fullname, email, password} = req.body;
    let createdowner = await ownerModel.create({
        fullname,
        email,
        password,
    })    

    res.status(201).send(createdowner);
  });
}
router.get('/', (req, res) => {
    res.send('Owner Router');
})



module.exports = router;  // Export the router object