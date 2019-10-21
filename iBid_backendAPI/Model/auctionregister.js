const mongoose = require("mongoose");


const auctionrSchema = mongoose.Schema({
    auctionId: {
        type: String
    },
    userId: {
        type: String
    },
    auctionUsertype: {
        type: String
    }
});

const Auctionr = mongoose.model("Auctionregister", auctionrSchema);
module.exports = Auctionr;