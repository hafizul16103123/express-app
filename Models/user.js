const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:10
    },
    age:{
        type:Number,
        required:true,
        minlength:3,
        maxlength:10
    }
},{timestamps:true})

module.exports = mongoose.model("User",UserSchema)