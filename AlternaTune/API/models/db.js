const mongoose = require('mongoose');
const express = require('express');
const path = require('path')
const dotenv = require('dotenv').config({ path: path.resolve(__dirname, '../.env') })



//mongoose.connect('mongodb://localhost:27017/AlternatuneDB');


const app = express();
mongoose.connect(process.env.MONGO_URL);


app.get("/", (req, res) => {
    res.send("Updated!");
});

var user = require('./user.model');