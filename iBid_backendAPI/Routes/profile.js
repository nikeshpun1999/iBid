const express = require("express");
const router = express.Router();
const Profile = require("../Model/Profile");
const mongoose = require("mongoose");
const Auth = require('../Middleware/auth');
const path = require("path");

const multer = require("multer");


router.post("/registerprofile", (req, res) => {
    const user = new Profile({
        Fname: req.body.firstname,
        Mname: req.body.middlename,
        Lname: req.body.lastname,
        Username: req.body.username,
        Password: req.body.password,
        Aboutme: req.body.about,
        Contact: req.body.Contact,
        DOB: req.body.dob,
        Gender: req.body.gender,
        Badges: req.body.badges,
        Email: req.body.email,
        Profilepic: "default.jpg"
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
        // const token = await Profile.generateAuthToken();
        res.status(201).json({
            // token: token,
            user: Profile,
            Fname: Profile.firstname,
            Mname: Profile.middlename,
            Lname: Profile.lastname,
            Username: Profile.username,
            Password: Profile.password,
            Aboutme: Profile.about,
            Contact: Profile.Contact,
            DOB: Profile.dob,
            Gender: Profile.gender,
            Badges: Profile.badges,
            Email: Profile.email,
            Profilepic: Profile.profilepic

        });
    }
    else {
        res.json({ message: "Invalid Login" });
    }



})
module.exports = router;