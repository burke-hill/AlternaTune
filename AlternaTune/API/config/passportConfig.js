const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');


var User = mongoose.model('user');

passport.use(
    new localStrategy({ usernameField: 'username'},
        (username, password, done) => {
            User.findOne(
                (err, user) => {
                    if (err) {
                        return done(err);
                    }
                    else if (!user) {
                        return done(null, false, {message: 'No such username'});
                    }
                    else if (!user.verifyPassword(password)) {
                        return done(null, false, {message: 'Invalid Password'});
                    }
                    else {
                        return done(null, user);
                    }
                });
        })
);