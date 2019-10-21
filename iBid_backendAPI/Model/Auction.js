const mongoose = require("mongoose");


const auctionSchema = mongoose.Schema({
    title: {
        type: String
    },
    shippingCost: {
        type: String
    },
    sellerName: {
        type: String
    },
    country: {
        type: String
    },
    year: {
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
        type: Date
    },
    auctionImgName: {
        type: String
    },
    auctionLock: {
        type: Date
    },
    userId: {
        type: String
    },
    progress: {
        type: String
    }
});

const Auction = mongoose.model("Auction", auctionSchema);
module.exports = Auction;