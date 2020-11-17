const mongoose = require("mongoose");

const foodsSchema = new mongoose.Schema(
  {
    id: Number,
    title: String,
    description: String
  }
);

module.exports = mongoose.model("Food", foodsSchema);