// Lets start by putting in my dependencies.
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const ejs = require("ejs");
require("dotenv").config();
// some mongoDB stuff copied from my mongoDB repo


const app = express();
// importing my module
const foods = require("./models/food.js");

//setting view engine
app.set("view engine", "ejs");
// middleware stuff
app.use(express.static(path.join(__dirname, "public")));

// Now to connect to mongoDB
mongoose.connect(process.env.MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}); 

const db = mongoose.connection;
// copied this mongoose code from my mongo DB repo, link in README.
db.on("error", console.error.bind(console, "MongoDB connection error:"));

db.once("open", function() {
  console.log("Connected to DB...");
});
// this is my homepage endpoint
app.get("/", (req, res) => res.send("<h1> Hello, there.</h1> <p>Check out /api/v0/foods for some cool foods.</p>"))

// below, we are going to return those nature photos in an array.
app.get("api/v0/foods", (req, res) => {
  photos.find({}, (err, data) => {
    console.log(data);
    res.json(data);
  });
});

// here is my JSON endpoint which returns specific objects with a unique ID to each object.
app.get("/api/v0/foods/:id", (req, res) => {
  let foodID = req.params.id;
  foods.findOne({ id: foodID }, function (err, p) {
    res.json(food)
  });
});

// here, we wanna show a specific error if we type in a different address or if none of this works
app.use(function(req, res) {
  res.status(404);
  res.send("404: File Not Found");
});
// Now we wanna use an environment variable to set up the port.
const PORT = process.env.PORT || 3000;
//Now we have set it up, we wanna make it so that the server "listens" on port 3000.
app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`)
});