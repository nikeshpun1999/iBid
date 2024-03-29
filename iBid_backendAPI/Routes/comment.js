const express = require("express");
const router = express.Router();
const Comnt = require("../Model/comment");



router.post('/postcomment', (req, res) => {

    console.log("postlike entered");
    //var response = "Nothing";

    var auctionid = req.body.auctionID;
    var userid = req.body.userId;
    var comment = req.body.comment;
    var rate = req.body.rate;



    var newpostcomment = new Comnt(
        {
            'auctionID': auctionid,

            'userId': userid,
            'rate': rate,
            'comment': comment
        }
    );
    console.log("REQUEST-->" + newpostcomment);

    newpostcomment.save().then(function () {
        response = "You left a review and comment on the post"
        console.log(response);
        res.json(response);
    }).catch(function (e) {
        response = "Error"
        console.log(response);
        res.send(e);
    })

})

router.get('/getselectedauctionrate/:id', function (req, res) {
    uid = req.params.id.toString();
    Comnt.find({ auctionID: uid }).then(function (recipe) {
        res.send(recipe);
        console.log(recipe)
    }).catch(function (e) {
        res.send(e)
    });
});



module.exports = router;