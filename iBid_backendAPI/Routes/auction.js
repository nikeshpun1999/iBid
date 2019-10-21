const express = require("express");
const router = express.Router();
const Auction = require("../Model/Auction");

// const mongoose = require("mongoose");
const Auth = require('../Middleware/auth');
const path = require("path");

const multer = require("multer");
// var ImageNamee = '';
var storage = multer.diskStorage({
    destination: "images",
    filename: (req, file, callback) => {
        let ext = path.extname(file.originalname);
        callback(null, "auctions" + Date.now() + ext);
    }
});

var imageFileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb("Only image files accepted!!"), false;
    }
    cb(null, true);
};

var upload = multer({ storage: storage, fileFilter: imageFileFilter, limits: { fileSize: 1000000 } });

router.post('/uploadimg', upload.single('upload'), (req, res) => {
    // res.json({ Filename: req.file.filename });
    res.json(req.file.filename);
    console.log(req.file.filename)
})

router.post("/registerauction", (req, res) => {

    currenttime = Date();

    const auction = new Auction({

        title: req.body.title,
        shippingCost: req.body.shippingCost,
        // sellerName: req.body.sellername,
        country: req.body.country,
        year: req.body.year,
        type: req.body.type,
        condition: req.body.condition,
        auctionIssuetime: currenttime,
        auctionEndtime: currenttime + 4,
        deliveryDate: currenttime + 11,
        userId: req.body.userId,
        // auctionissuetime: req.body.auctionissuetime,
        // auctionendtime: req.body.auctionendtime,
        // deliverdate: currenttime,
        auctionImgName: storage
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

router.get("/latest", function (req, res) {
    Auction.find()
        .sort({ _id: -1 }).limit(8)
        .exec()
        .then(function (auction) {
            res.send(auction);
        })
        .catch(function (e) {
            res.send(e);
        })
})

router.get("/latest2", function (req, res) {
    Auction.find()
        .sort({ _id: -1 }).limit(4)
        .exec()
        .then(function (auction) {
            res.send(auction);
        })
        .catch(function (e) {
            res.send(e);
        })
})

router.get('/getselectedauction/:id', function (req, res) {
    uid = req.params.id.toString();
    Auction.findById(uid).then(function (auction) {
        res.send(auction);
    }).catch(function (e) {
        res.send(e)
    });
});






router.post('/auctioninvolved', (req, res) => {

})

module.exports = router;