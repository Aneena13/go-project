const mongoose = require('mongoose')

const busSchema = mongoose.Schema({
    source : String,
    destination : String,
    via : String,
    viatime : String,
    arrival : String,
    depart : String,
    triptime : String
})

const bus = mongoose.model('bus',busSchema);
module.exports = bus;
