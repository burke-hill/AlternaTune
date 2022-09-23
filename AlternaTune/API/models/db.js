const mongoose = require('mongoose');
const express = require('express');
const dotenv = require("dotenv");


//mongoose.connect('mongodb://localhost:27017/AlternatuneDB');

dotenv.config();
const app = express();
mongoose.connect('mongodb+srv://{process.env.DB_USERNAME}:{process.env.DB_PASSWORD}@cluster0.zhvhzv8.mongodb.net/AlternatuneDB?retryWrites=true&w=majority');
app.get("/", (req, res) => {
    res.send("Updated!");
});

var user = require('./user.model');