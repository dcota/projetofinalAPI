/*
MEIW - Programação Web Avançada - projeto final
Auhtor: Duarte Cota
Description: authentication route
*/

const express = require('express')
let router = express.Router()

const {
  body
} = require('express-validator')

const authController = require('../controllers/auth.controller')

router.route('/')
  .post([body('username').isAlphanumeric(),
  body('password').isString()], authController.login)
  
  .get(authController.checkAuth, authController.getInfo)

module.exports = router