import {resultSuccess,resultError} from '../utils/index.js'
var express = require('express');
var router = express.Router();
import User from '../src/models/user.js'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/logins', async function(req, res, next) {
    const { username, password } = req.body
    console.log("username",username);
    if (!username || !password) res.send(resultError('用户名或密码有误'))

    const findres = await User.findOne({username,password}).select('-password -_v')
    if(!findres){
        res.send(resultError({},{message:'用户名或密码有误'}))
    }else{
        res.send(resultSuccess(findres))
    }
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
        res.send(resultError('此用户名已被注册,请更换用户名'))
    }else{
        const userModel = new User({username,password})
        const saveRes = await userModel.save();
        console.log("saveRes",saveRes);
        res.send(resultSuccess())
    }
});
router.get('/logout', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
