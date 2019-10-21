const mongoose = require("mongoose");


const likeSchema = mongoose.Schema({

    auctionId: {
        type: String
    },
    userId: {
        type: String
    },

    like: {
        type: Number
    }

});

const liked = mongoose.model("like", likeSchema);
module.exports = liked;