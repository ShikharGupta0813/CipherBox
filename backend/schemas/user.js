const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema=new Schema({
    name:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true,
        unique:true,
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})
const User = mongoose.model('User', userSchema);

module.exports= User;