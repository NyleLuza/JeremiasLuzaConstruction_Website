const mongoose = require("mongoose");

// constructor for creating users for our collection
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  location: String,
});

// creates model object named User and links it to our users collection
module.exports = mongoose.model("User", userSchema);
