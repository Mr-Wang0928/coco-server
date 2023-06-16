import {resultSuccess,resultError} from '../utils/index.js'
var express = require('express');
var router = express.Router();
import User from '../src/models/user.js'

console.log("aaaa",resultSuccess({name:"tom"})); 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });
router.post('/register', async function(req, res, next) {
    const { username, password } = req.body

    if (!username || !password) return next({
        message: '用户名或密码有误',
        code: 1,
    })
    const resCount = await User.count({username})
    console.log("resCount",resCount);
    if(resCount){
        return next({
            message: '用户名已被注册',
            code: 1,
        })
    }
    next()
});
router.get('/logout', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
