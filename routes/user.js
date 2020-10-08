const express = require('express')
const router = express.Router()
// import controllers
const {users,register} = require('../Controllers/UserController')

router.get('/',users)
router.get('/register',register)

module.exports = router