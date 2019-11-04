const mongoose = require("mongoose");
const likeSchema = mongoose.Schema({

    auctionID: {
        type: String
    },
    userId: {
        type: String
    },

    bidamount: {
        type: Number
    },
    status:
    {
        type: String
    }

});

const bid = mongoose.model("bidding", likeSchema);
module.exports = bid;