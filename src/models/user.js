// 操作数据库字段配置
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
// Create Schema(创建字段)
const UserSchema = new Schema()
// const UserSchema = new Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     age: {
//         type: Number,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     avatar: {
//         type: String
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     date: {
//         type: Date,
//         default:Date.now(), //返回创建时间戳
//     },
// })
 
/* 
    Model 代表的是数据库中的集合，通过Model才能对数据库进行操作
    第一个参数要映射的集合名；第二个创建的约束（Schema对象）
*/
module.exports = User = mongoose.model('user',UserSchema);