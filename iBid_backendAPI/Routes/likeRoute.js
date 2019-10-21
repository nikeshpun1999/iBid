const express = require("express");
const router = express.Router();
const Like = require("../Model/like");



router.post("/postlike", (req, res) => {
    const auctionID = req.body.auctionid;
    const userID = req.body.userid;

    Like.findOneAndRemove({ "auctionId": auctionID, "userId": userID }).then((ok) => {

        console.log(ok)
    });

    const auction = new Like({

        auctionId: auctionID,
        userId: userID,
        like: 1

    })
    auction.save()
        .then(result => {
            console.log(req);

            res.status(201).json("Like Saved");


        })
        .catch(err => {
            res.status(500).json({
                error: err,
            })
        })

})

router.post("/postunlike", (req, res) => {

    const auctionID = req.body.auctionid;
    const userID = req.body.userid;
    Like.findOneAndRemove({ "auctionId": auctionID, "userId": userID }).then((ok) => {

        console.log(ok)
    });

    const auction = new Like({

        auctionId: auctionID,
        userId: userID,
        like: 0

    })
    auction.save()
        .then(result => {
            console.log(req);

            res.status(201).json("unlike Saved");


        })
        .catch(err => {
            res.status(500).json({
                error: err,
            })
        })

})

router.get("/mostlikedauction", function (req, res) {
    Like.find()
        .sort({ _id: 1 })
        .exec()
        .then(function (auction) {
            res.send(auction);
        })
        .catch(function (e) {
            res.send(e);
        })
})



module.exports = router;