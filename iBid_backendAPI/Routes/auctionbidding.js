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
            'status': "not decided"

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

router.get('/allclosed/:id', function (req, res) {
    uid = req.params.id.toString();
    Bid.find({ "auctionID": uid }).then(function (auction) {
        res.send(auction);
    }).catch(function (e) {
        res.send(e)
    });
});

router.post('/auctionwinner/:auctionid/:bidamount', function (req, res) {
    uid = req.params.auctionid.toString();
    amt = req.params.bidamount.toString();
    console.log(uid);
    console.log(amt);
    console.log("here we are")
    Bid.findOneAndUpdate({ "auctionID": uid, "bidamount": amt }, { $set: { "status": "winner" } }, { new: true }).then(function (auction) {
        res.send(auction);
        console.log("winner picked");
    }).catch(function (e) {
        res.send(e)
    });
});






module.exports = router;