const express = require('express')
const { register, login } = require('../controllers/user-controllers')

const router = express.Router()

router.post('/login', login)
router.post('/register', register)

module.exports = router
