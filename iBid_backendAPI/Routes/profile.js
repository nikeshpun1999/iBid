const express = require("express");
const router = express.Router();
const Profile = require("../Model/Profile");
const mongoose = require("mongoose");
const Auth = require('../Middleware/auth');
const path = require("path");

const multer = require("multer");


router.post("/registerprofile", (req, res) => {
    const user = new Profile({
        firstname: req.body.firstname,
        middlename: req.body.middlename,
        lastname: req.body.lastname,
        username: req.body.username,
        password: req.body.password,
        about: req.body.about,
        Contact: req.body.Contact,
        dob: req.body.dob,
        address: req.body.address,
        gender: req.body.gender,
        Badge1: 0,
        Badge2: 0,
        Badge3: 0,
        email: req.body.email,
        profilepic: "default.jpg",
        userType: "user",
        credit: 0
    })
    user.save()
        .then(result => {
            console.log(req);
            res.status(201).json("User registered successfully");

        })
        .catch(err => {
            res.status(500).json({
                error: err,
            })
        })

})

router.post("/login", async function (req, res) {

    var enteredUname = req.body.username;
    var enteredpass = req.body.password;
    console.log(enteredUname, enteredpass);
    const user = await Profile.checkCredentialsDb(enteredUname, enteredpass);
    if (user) {
        const token = await user.generateAuthToken();
        console.log(token);
        res.status(201).json({
            token: token,
            _id: user._id,
            user: user

        });

    }
    else {
        res.json({ message: "Invalid Login" });
    }




})

router.get('/this', Auth, function (req, res) {
    res.send(req.user);
    console.log(req.user);
})
router.get('/getUserForAdmin', function (req, res) {
    Profile.find().then(function (user) {
        res.send(user);
    }).catch(function (e) {
        res.send(e)
    });
});

router.post('/addcredit/:id/:credit', function (req, res) {
    uid = req.params.id.toString();
    console.log("here")
    console.log(uid);
    var credit = parseInt(req.params.credit.toString());


    Profile.findByIdAndUpdate(uid, { $set: { "credit": credit + 500 } }, { new: true })
        .then(function (user) {
            res.json(user);
        })
        .catch(function (e) {
            res.send(e);
        })
})

router.delete('/delete-user/:id', function (req, res) {
    Profile.findByIdAndDelete(req.params.id).then(function () {
    }).catch(function () {
    })
});

router.get('/getuserdata/:id', function (req, res) {
    uid = req.params.id.toString();
    console.log(uid);
    Profile.findById(uid).then(function (user) {
        res.json(user);
    }).catch(function (e) {
        res.send(e)
    });
});
module.exports = router;