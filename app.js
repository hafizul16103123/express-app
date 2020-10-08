const express = require('express')
const morgan = require('morgan')
const { body, validationResult } = require('express-validator');
const{ mongoose } = require('./db/connection');
//import routes
const userRouter = require("./routes/user")

//creating app instance
const app = express()

// mongoose db connection
mongoose()

// app middleware
app.use(morgan('dev'))
app.use(express.json())

//route middleware
app.use('/users',userRouter )

// Not found route,it will be last route
app.get('*',(req,res)=>{
  res.send("404");
})

// define port and listen that port
const port = 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})