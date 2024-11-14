const express = require('express')
const registerUser = require('../controller/registerUser')
const checkEmail = require('../controller/checkEmail')
const checkPassword = require('../controller/checkPassword')
const userDetails = require('../controller/userDetails')
const logout = require('../controller/logout')
const updateUserDetails = require('../controller/updateUserDetails')
const searchUser = require('../controller/searchUser')

const router = express.Router()

router.post('/register',registerUser)
router.post('/email',checkEmail)
router.post('/password',checkPassword)
router.get('/user-details',userDetails)
router.get('/logout',logout)
router.post('/update-user',updateUserDetails)
router.post('/search-user',searchUser)

module.exports = router