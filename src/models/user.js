import dayjs from "dayjs"
// 操作数据库字段配置
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 
// Create Schema(创建字段)
// const UserSchema = new Schema()
const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type: String,
        default:'user', //返回创建时间戳
    },
    age: {
        type: Number,
    },
    email: {
        type: String,
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default:dayjs().format('YYYY-MM-DD HH:mm:ss'), //返回创建时间戳
    },
})
 
/* 
    Model 代表的是数据库中的集合，通过Model才能对数据库进行操作
    第一个参数要映射的集合名；第二个创建的约束（Schema对象）
*/
const User = mongoose.model('user',UserSchema);
export default User