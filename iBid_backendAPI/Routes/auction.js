const express = require("express");
const router = express.Router();
const Profile = require("../Model/Auction");



router.post("/registerauction", (req, res) => {
    const auction = new Auction({

        title: req.body.title,
        shippingCost: req.body.title,
        sellerName: req.body.sellername,
        sellerReview: req.body.sellerreview,
        country: req.body.country,
        period: req.body.period,
        type: req.body.type,
        condition: req.body.condition,
        auctionissuetime: req.body.auctionissuetime,
        auctionendtime: req.body.auctionendtime,
        deliverdate: req.body.deliverydate
    })
    auction.save()
        .then(result => {
            console.log(req);
            res.status(201).json("Auction registered successfully");

        })
        .catch(err => {
            res.status(500).json({
                error: err,
            })
        })

})

router.post('/auctioninvolved',(req,res)=>
{

})

module.exports = router;