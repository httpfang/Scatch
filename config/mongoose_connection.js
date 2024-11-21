const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Scatch-be-project')
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.log('Error connecting to MongoDB', err);
});


module.exports = mongoose.connection    // Export the connection object