const mongoose = require("mongoose");

const houseSchema = new mongoose.Schema({
  remodelType: String,
  address: String,
  description: String,
  image: String,
});

module.exports = mongoose.model("House", houseSchema);
