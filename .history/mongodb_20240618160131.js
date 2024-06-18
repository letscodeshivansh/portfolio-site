const mongoose = require("mongoose");

const mongoURI = "mongodb://127.0.0.1:27017/contact-Protfolio";

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

const connectinfo = new mongoose.Schema({
    name: {
      type: String,
      required: true,
 // Ensure username is unique
    },
    password: {
      type: String,
      required: true
    },
    subject: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
});