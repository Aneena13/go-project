require("dotenv").config();

const mongoose = require("mongoose");
const signup = require("./models/signupSchema");
const bus = require("./models/busSchema");

const cors = require("cors");

const express = require("express");

// const signupSchema = require('./models/signupSchema')
const SignupRoutes = require("./routes/signup.route");
const {addbusRoute, getRouteByRequirement} = require('./controllors/bus.controller')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose
  .connect("mongodb+srv://theres810:02468@cluster0.yxbkars.mongodb.net/GO", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to db");
  })
  .catch((e) => {
    console.log("error");
  });

// app.use('/signup', SignupRoutes)

app.post('/busroute',addbusRoute)

app.post("/", async (req, res) => {
  const { email, password } = req.body;
  const copy = email;
  try {
    const check = await signup.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (e) {
    res.json("notexist");
  }
});

app.post("/signup", async (req, res) => {
  // const{email,password,username,phone}=req.body
  // var Signup = new signup();
  // console.log(req.body);
  const data = new signup({
    names: req.body.text,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.number,
  });

  try {
    const check = await signup.find({ email: req.body.email });
    console.log(check);
    if (check.length > 0) {
      res.status(400).json({ message: "user already exist" });
    } else {
      await data.save();
      // history("/home");
      // console.log(data);
      res.json("notexist");
      res
        .status(200)
        .json({ success: true, message: "successfully registered" });
    }
  } catch (e) {
    res.json("notexist");
  }
});

app.get("./admin");
app.post("/admin", async (req, res) => {
  // const{email,password,username,phone}=req.body
  // var Signup = new signup();
  // console.log(req.body);
  const busData = new bus({
    source: req.body.source,
    destination: req.body.destination,
    via: req.body.via,
    viatime: req.body.viatime,
    arrival: req.body.arrival,
    depart: req.body.depart,
    triptime: req.body.triptime,
  });

  try {
    await busData.save();
    alert("data saved");
    // history("/home");
    // console.log(data);
    res.status(200).json({ succes: true, message: "Added route successfully" });
  } catch (e) {
    res.json({ message: "error" });
  }
});

app.post("/home",getRouteByRequirement);

app.listen(process.env.PORT, () => {
  console.log("listening to port ", process.env.PORT);
});

// app.use('/busroutes',busRoutes)
