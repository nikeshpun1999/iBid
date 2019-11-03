const mongoose = require("mongoose");


const commentSchema = mongoose.Schema({

    auctionID: {
        type: String
    },
    userId: {
        type: String
    },

    comment: {
        type: String
    },
    rate: {
        type: Number
    }

});

const Commented = mongoose.model("Comment", commentSchema);
module.exports = Commented;