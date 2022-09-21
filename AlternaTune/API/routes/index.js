var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


const ctrlUser = require('../controllers/user.controller');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.post('/profile', fun1, ctrlUser, userProfile);

module.exports = router;
