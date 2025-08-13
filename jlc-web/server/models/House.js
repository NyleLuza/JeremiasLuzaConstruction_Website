const mongoose = require("mongoose");

const houseSchema = new mongoose.Schema({
  remodelType: String,
  address: String,
  description: String,
  image: Buffer,
});

module.exports = mongoose.model("houses", houseSchema);
