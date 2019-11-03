const express = require('express');
const app = express();
const cors = require('cors');

const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/images", express.static("images"));
require('./DB/mongoose');

const profileRoute = require('./Routes/profile');
const auctionRoute = require('./Routes/auction');
const likeRoutes = require('./Routes/likeRoute');
const commentRoute = require('./Routes/comment');
const auctionbidRoute = require('./Routes/auctionbidding');


app.use('/comments', commentRoute);
app.use('/likes', likeRoutes);
app.use('/profiles', profileRoute);
app.use('/auctions', auctionRoute);
app.use('/bids', auctionbidRoute);

module.exports = app;