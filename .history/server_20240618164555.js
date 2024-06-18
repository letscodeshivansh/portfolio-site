const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const hbs = require("hbs");
const mongoose = require('mongoose');
const { Message } = require('./mongodb');

const app = express();

// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));

// Set view engine as hbs
app.set('view engine', 'hbs');
app.set('views', __dirname);  // Set the views directory to the current directory

// Serve static files from the 'files' directory
app.use(express.static(__dirname + '/files'));

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
            res.render('index' , 'Thank you for your message!');
        })
        .catch((error) => {
            console.error("Error saving message:", error);
            res.status(500).send('Error saving your message. Please try again later.');
        });
});

// Create and start the server
const server = http.createServer(app);
server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
