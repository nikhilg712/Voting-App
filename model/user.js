const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required:true
    },
    age : {
        type : Number,
        required: true
    },
    email : {
        type : String
    },
    mobile : {
        type : String
    },
    aadhaarNumber : {
        type : Number,
        required : true,
        unique : true
    } ,
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        enum : ['admin','voter'],
        default : 'voter'
    },
    hasVoted : {
        type : Boolean,
        default : false
    }

})

const User = mongoose.model('User', userSchema);
module.exports = User;
