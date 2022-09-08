const mongoose = require('mongoose');
const express = require('express');

mongoose.connect('mongodb://localhost:27017/AlternatuneDB');

const app = express();

app.get("/", (req, res) => {
    res.send("Updated!");
});

app.listen(3000, () => {
    console.log("Server has been started at port 3000");
})