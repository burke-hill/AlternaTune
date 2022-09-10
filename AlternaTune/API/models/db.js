const mongoose = require('mongoose');
const express = require('express');

mongoose.connect('mongodb://localhost:27017/AlternatuneDB');
const app = express();

app.get("/", (req, res) => {
    res.send("Updated!");
});

var user = require('./user.model');