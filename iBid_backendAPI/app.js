const express = require('express');
const app = express();

const bodyParser = require('body-parser');


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require('./DB/mongoose');

const profileRoute = require('./Routes/profile');
const auctionRoute = require('./Routes/auction');


app.use('/profiles', profileRoute);
app.use('/auctions', auctionRoute);

module.exports = app;