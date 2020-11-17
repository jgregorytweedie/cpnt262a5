const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

// here, I wanna import my seed data.
const dbSeed = require(`./seeds/foods.js`);

// Let's define the model now!
const Food = require(`./models/club.js`);

// this is my mongoDB connection:

mongoose.connect(process.env.MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

let db = mongoose.connection;
db.on("error", function(error){
  console.log(`Connection Error: ${error.message}`)
});

db.once("open", function() {
  console.log("Connected to DB...");
});

Food.insertMany(dbSeed, function(error, food) {
  console.log("data Import completed! woo!")
  mongoose.connection.close();
});