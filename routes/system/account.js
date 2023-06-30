import {resultSuccess,resultError,resultPageSuccess} from '../../utils/index'
var express = require('express');
var router = express.Router();
import User from '../../src/models/user.js'

/* GET home page. */
router.get('/getAccountList', async function(req, res, next) {
    console.log("req",req.query);
    const {page,pageSize,account} = req.query
    const name = new RegExp(account,'i')
    const findRes = await User.find({username:name}).sort({_id:1}).skip((page -1)*pageSize).limit(pageSize).exec()
    console.log("findRes",findRes); 
    res.send(resultPageSuccess(page,pageSize,findRes))
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

module.exports = router;
