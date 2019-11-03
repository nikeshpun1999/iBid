const express = require("express");
const router = express.Router();
const Bid = require("../Model/bidding");



router.post('/bidonauction', (req, res) => {

    console.log("postlike entered");
    //var response = "Nothing";

    var auctionid = req.body.auctionID;
    var userid = req.body.userId;
    var bidamount = req.body.bidamount;




    var newpostcomment = new Bid(
        {
            'auctionID': auctionid,

            'userId': userid,
            'bidamount': bidamount,

        }
    );
    console.log("REQUEST-->" + newpostcomment);

    newpostcomment.save().then(function () {
        response = "You took part in the bid"
        console.log(response);
        res.json(response);
    }).catch(function (e) {
        response = "Error"
        console.log(response);
        res.send(e);
    })

})


module.exports = router;