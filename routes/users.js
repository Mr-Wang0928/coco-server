var express = require('express');
var router = express.Router();
const User = require('../src/models/user');
/* GET users listing. */
router.get('/', function(req, res, next) {
    User.find({})
        .then((user) => {
            res.send(user);
        })
    // res.send('respond with a resource');
});

module.exports = router;
