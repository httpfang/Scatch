const mongoose = require('mongoose');
const config = require('config'); 
const dbgr = require('debug')('development:mongoose');

mongoose.connect(`${config.get("MONGODB_URI")}/Scatch-be-project`)
.then(() => {
    dbgr('Connected to MongoDB');
})
.catch((err) => {
    console.log('Error connecting to MongoDB', err);
});


module.exports = mongoose.connection    // Export the connection object