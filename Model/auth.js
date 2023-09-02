import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
    user: {
        type: String,
        // required: 'Please enter your name',
        // trim: true
    },
    pwd: {
        type: String,
        // required: true
    },
    // cfpwd: {
    //     type: String,
    //     required: true
    // },
    email: {
        type: String,
        // unique:true,
        // required: 'Please enter your email',
        // trim: true,
        // lowercase:true,
    },
    admin: {
        type: Number
    }

});

const User = mongoose.model('user',userSchema)

export default User