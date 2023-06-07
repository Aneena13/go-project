const mongoose = require("mongoose");

// const busSchema = mongoose.Schema({
//     source : String,
//     destination : String,
//     via : String,
//     viatime : String,
//     arrival : String,
//     depart : String,
//     triptime : String
// })
const busSchema = mongoose.Schema(
  {
    place: [
      {
        place: String,
        time: String,
      },
    ],
    totaltime: String,
  },
  {
    timestamps: true,
    collection:'bus routes'
  }
);
const bus = mongoose.model("bus", busSchema);
module.exports = bus;
