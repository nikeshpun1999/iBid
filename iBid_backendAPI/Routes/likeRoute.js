const express = require("express");
const router = express.Router();
const Like = require("../Model/like");



router.post("/postlike", (req, res) => {
    const auctionID = req.body.auctionID;
    const userID = req.body.userId;

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

    const auctionID = req.body.auctionID;
    const userID = req.body.userId;
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

router.get('/likecount/:id', (req, res) => {
    Aucid = req.params.id.toString();
    console.log(Aucid);
    console.log("likecount entered");
    Like.countDocuments({ "auctionId": Aucid, "like": '1' }).then(function (likecount) {
        console.log(likecount);
        res.json(likecount);

    }).catch(function (e) {
        res.send(e)
    });




})
router.get('/unlikecount/:id', (req, res) => {
    Aucid = req.params.id.toString();
    console.log(Aucid);
    console.log("unlikecount entered");
    Like.countDocuments({ "auctionId": Aucid, "like": '0' }).then(function (unlikecount) {
        console.log(unlikecount);
        res.json(unlikecount);

    }).catch(function (e) {
        res.send(e)
    });




})



module.exports = router;