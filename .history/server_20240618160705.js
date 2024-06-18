const http = require("http");
const hbs = require("hbs")
const express = require("express")
const mongoose = require('mongoose');
const { Message } = require('./mongodb');

const app = express();
const server = http.creatServer(app);


app.get('/', (req, res) => {
    res.render('index');
});