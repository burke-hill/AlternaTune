const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({

    username: {type: String, required: true, unique: true, index: true},
    password: String,
    image: String,
});

const usersModel = mongoose.model('users', usersSchema);

module.expoerts = usersModel;