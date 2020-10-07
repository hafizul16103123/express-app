const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const app = express()

// middleware
app.use(morgan('dev'))
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/node-app', {useNewUrlParser: true})
  .then(()=>{
    console.log("Database Connected")
  })
  .catch(err =>console.log(err));

// import controllers
const {users,register,parameter} = require('./Controllers/UserController')
app.get('/',users )
app.post('/register',register )
app.post('/parameter/:number',parameter )


// Not found route,it will be last route
app.get('*',(req,res)=>{
  res.send("404");
})

// define port and listen that port
const port = 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})