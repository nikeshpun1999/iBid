const mongoose = require("mongoose");
const likeSchema = mongoose.Schema({

    auctionId: {
        type: String
    },
    userId: {
        type: String
    },

    bidamount: {
        type: Number
    }

});

const bid = mongoose.model("bidding", likeSchema);
module.exports = bid;