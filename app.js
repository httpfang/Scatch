const express = require('express');
const app = express();
const cookieparser = require('cookie-parser');
const path = require('path');
const db = require("./config/mongoose_connection");
const ownersRouter = require('./routes/ownersRouter'); // Correct path
const usersRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productsRouter');


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieparser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use('/owners', ownersRouter)
app.use('/users', usersRouter)
app.use('/products', productsRouter)

app.get('/', (req, res) => {
    res.send('index');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})  // Listen on port 3000