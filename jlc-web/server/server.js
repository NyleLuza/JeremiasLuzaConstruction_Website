const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/User");
const app = express();

const PORT = 5000;
const database_uri =
  "mongodb+srv://nyleluza:%23BickBheese21@jlcweb-dev-cluster.ypapion.mongodb.net/?retryWrites=true&w=majority&appName=jlcweb-dev-cluster";

app.use(cors()); // allows frontend to access backend
app.use(express.json()); // allows backend to read json bodies

// routes
app.post("/api/users", async (req, res) => {
  try {
    const { name, email, phone, location } = req.body;
    const newUser = new User({ name, email, phone, location });
    await newUser.save();
    res.status(201).json({ message: "User Created!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
});

async function connect() {
  try {
    await mongoose.connect(database_uri);
    console.log("Successful connection to MongoDB");
  } catch (error) {
    console.log(error);
  }
}
connect();
app.listen(PORT, () => console.log(`Server Started on ${PORT}`));
