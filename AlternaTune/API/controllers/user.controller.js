const mongoose = require('mongoose');
const passport = require('passport');
const User = mongoose.model('user');
const _ = require('lodash');

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


module.exports.authenticate = (req, res, next) => {

    // Just local for right now
    passport.authenticate('local', (err, user, info) => {

        // error from passport
        if (err) return res.status(400).json(err);
        // user exists
        else if (user) return res.status(200).json({"token": user.generateJwt()});
        // unknown user or password
        else return res.status(404).json(info);
    })(req, res);
}


module.exports.userProfile = (req, res, next) => {
    User.findOne({ _id: req._id },
            (err, user) => {
                if (!user) {
                    return res.status(404).json({ status: false, message: "User not found"});
                }
                else
                    return res.status(200).json({ status: true, user: _.pick(user, ['username']) });
            }
        );
}