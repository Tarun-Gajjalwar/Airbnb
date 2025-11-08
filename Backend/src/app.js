// creating the server using express
const express = require('express');
const listingRoutes = require('./routes/listing.routes');
const methodOverride = require('method-override');
const path = require('path');
const ejsMate = require('ejs-mate');


const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs',ejsMate);
app.use(express.static(path.join(__dirname, 'public')));





app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/listings', listingRoutes);


module.exports = app;