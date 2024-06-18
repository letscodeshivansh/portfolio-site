const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const hbs = require("hbs");
const mongoose = require('mongoose');
const { Message } = require('./mongodb');

const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/contact-Portfolio", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));

// Set view engine as hbs
app.set('view engine', 'hbs');

// Serve static files
app.use(express.static('files'));
app.set('views', __dirname); 

// Route to render the contact form
app.get('/', (req, res) => {
    res.render('index');
});

// Route to handle form submission
app.post('/submit', (req, res) => {
    const { NAME, EMAIL, SUBJECT, MESSAGE } = req.body;

    const newMessage = new Message({
        name: NAME,
        email: EMAIL,
        subject: SUBJECT,
        message: MESSAGE
    });

    newMessage.save()
        .then(() => {
            res.send('Thank you for your message!');
        })
        .catch((error) => {
            console.error("Error saving message:", error);
            res.status(500).send('Error saving your message. Please try again later.');
        });
});

// Create and start the server
const server = http.createServer(app);

const PORT = 6969;
server.listen(PORT, () => {
    console.log(`Server is running on port $(PORT)`);
});
