const mongoose = require('mongoose')

// const Schema = mongoose.Schema

const signupSchema = mongoose.Schema({
    names: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
   
}, { timestamp: true })


const signup = mongoose.model('signup',signupSchema);
module.exports = signup;

