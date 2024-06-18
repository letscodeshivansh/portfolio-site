const mongoose = require("mongoose");

const mongoURI = "mongodb://127.0.0.1:27017/contact-Prot";

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });