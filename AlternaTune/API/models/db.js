const mongoose = require('mongoose');
const express = require('express');

//mongoose.connect('mongodb://localhost:27017/AlternatuneDB');


const app = express();
mongoose.connect('mongodb+srv://dbUser:alterapp@cluster0.zhvhzv8.mongodb.net/AlternatuneDB?retryWrites=true&w=majority');
app.get("/", (req, res) => {
    res.send("Updated!");
});

var user = require('./user.model');