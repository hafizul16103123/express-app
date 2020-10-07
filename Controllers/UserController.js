const mongoose = require('mongoose')
const User = require("../Models/user")
exports.users=(req, res) => {
    User.find({}, function(err, users) {
        var userMap = {};
    
        users.forEach(function(user) {
          userMap[user._id] = user;
        });
    
        res.send(userMap);  
      });
    }

exports.register=(req, res) => {
    const user= new User(req.body);
    user.save((err,user)=>{
        if(err){
           return res.status(400).json({
               err
           }) 
        }
        res.json({
            user
        })
    });
}

exports.parameter=(req, res) => {
        res.json(req)
    }
