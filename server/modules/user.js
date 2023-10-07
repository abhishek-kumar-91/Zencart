const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phoneNo:{
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatarImg:{
        type: String,
        required: true
    }
   
    
}, {timestamp: true});

const User = mongoose.model('User', userSchema);


module.exports = User;