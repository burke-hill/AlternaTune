const mongoose = require('mongoose');

const User = mongoose.model('user');

module.exports.register = (req, res, next) => {

    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.save((err, doc) => {
        if(!err)
            res.send(doc);
        else
        console.log(err);
    });
}