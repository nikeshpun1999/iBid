const mongoose = require("mongoose");


const auctionSchema = mongoose.Schema({
    title: {
        type: String
    },
    sellerName: {
        type: String
    },
    sellerReview: {
        type: String
    },
    country: {
        type: String
    },
    period: {
        type: String
    },
    condition: {
        type: String
    },
    type: {
        type: String
    },
    auctionIssuetime: {
        type: Date
    },

    auctionEndtime: {
        type: Date
    },

    deliveryDate: {
        type: String
    }
});

const Auction = mongoose.model("Auction", auctionSchema);
module.exports = Auction;