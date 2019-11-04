const express = require("express");
const router = express.Router();
const Auction = require("../Model/Auction");

// const mongoose = require("mongoose");
const Auth = require('../Middleware/auth');
const path = require("path");
var moment = require('moment');

const multer = require("multer");
router.use('/images', express.static('./images'));
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

router.post('/uploadimg', upload.single('imageFile'), (req, res) => {
    // res.json({ Filename: req.file.filename });
    res.json(req.file.filename);
    console.log(req.file.filename)
})

router.post("/registerauction", (req, res) => {

    currenttime = Date();
    var auctionImgName = req.body.auctionImgname;
    var title = req.body.title;
    var shippingCost = req.body.shippingCost;
    var country = req.body.country;
    var type = req.body.type;
    var condition = req.body.condition;
    var year = req.body.year;

    const auction = new Auction({
        'auctionImgName': auctionImgName,
        'title': title,
        'shippingCost': shippingCost,
        // sellerName: req.body.sellername,
        'country': country,
        'year': year,
        'type': type,
        'condition': condition,
        auctionIssuetime: moment().format('YYYY MM DD'),
        auctionEndtime: moment().add('days', 7),
        deliveryDate: moment().add('days', 10),
        progress: "Open"
        //userId: req.body.userId,
        // auctionissuetime: req.body.auctionissuetime,
        // auctionendtime: req.body.auctionendtime,
        // deliverdate: currenttime,

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
        .slice(3)
        .sort({ _id: -1 }).limit(4)
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

router.get('/getsimilarauction/:id', function (req, res) {
    uid = req.params.id.toString();
    Auction.find({ "type": uid }).then(function (auction) {
        res.send(auction);
    }).catch(function (e) {
        res.send(e)
    });
});

router.get('/updatestatus/:id', function (req, res) {
    uid = req.params.id.toString();
    Auction.findByIdAndUpdate(uid, { $set: { "progress": "Closed" } }, { new: true }).then(function (auction) {
        res.send(auction);
    }).catch(function (e) {
        res.send(e)
    });
});


router.delete('/delete-auction/:id', function (req, res) {
    Auction.findByIdAndDelete(req.params.id).then(function (e) {
        console.log("I m here...............")
        res.send(e);
    }).catch(function () {
    })
});

router.get('/all', function (req, res) {
    Auction.find().then(function (auction) {
        res.send(auction);
    }).catch(function (e) {
        res.send(e)
    });
});

router.get('/allopen', function (req, res) {
    Auction.find({ "progress": "Open" }).then(function (auction) {
        res.send(auction);
    }).catch(function (e) {
        res.send(e)
    });
});
router.get('/allclosed', function (req, res) {
    Auction.find({ "progress": "Closed" }).then(function (auction) {
        res.send(auction);
    }).catch(function (e) {
        res.send(e)
    });
});






router.post('/auctioninvolved', (req, res) => {

})

module.exports = router;