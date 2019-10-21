const express = require("express");
const router = express.Router();
const Like = require("../Model/comment");


router.post("/comment", (req, res) => {

    currenttime = Date();

    const auction = new Like({

        recipeId: req.body.recipeid,
        userId: req.body.userid,
        comment: req.body.comment

    })
    auction.save()
        .then(result => {
            console.log(req);

            res.status(201).json("Comment Saved");


        })
        .catch(err => {
            res.status(500).json({
                error: err,
            })
        })

})


module.exports = router;