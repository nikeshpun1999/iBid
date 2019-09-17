const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
    Fname: {
        type: String
    },
    Mname: {
        type: String
    },
    Lname: {
        type: String
    },
    Username: {
        type: String
    },
    Password: {
        type: String
    },
    Aboutme: {
        type: String
    },
    Contact: {
        type: Number
    },

    DOB: {
        type: Date
    },
    Gender: {
        type: String
    },
    Badges: {
        type: String
    },
    Email: {
        type: String
    },
    ProfilePic: {
        type: String
    },

    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
});

userSchema.statics.checkCredentialsDb = async (username, password) => {

    const user1 = await Profile.findOne({ Username: username, Password: password })
    return user1;

}

userSchema.methods.generateAuthToken = async function () {

    console.log("token");

    const Profile = this
    const token = jwt.sign({ _id: Profile._id.toString() }, 'tokens')

    console.log(token);
    Profile.tokens = Profile.tokens.concat({ token: token })
    await Profile.save()
    return token
}


const Profile = mongoose.model("Profile", userSchema);
module.exports = Profile;