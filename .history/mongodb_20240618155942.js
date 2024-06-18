const mongoose = require("mongoose");

const mongoURI = "mongodb://127.0.0.1:27017/contact-Protfolio";

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true // Ensure username is unique
    },
    password: {
      type: String,
      required: true
    }
});