const mongoose = require("mongoose");

const mongoURI = process.env.mongoURI || "mongodb://127.0.0.1:27017/contact-Portfolio";

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

const senderInfoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
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

const Message = mongoose.model('Message', senderInfoSchema);
module.exports = { Message };
