const db = require('mongoose')
exports.mongoose = () =>{
    db.connect('mongodb://localhost:27017/node-app', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
      console.log("Database Connected")
    })
    .catch(err =>console.log(err));
}

