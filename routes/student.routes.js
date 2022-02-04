const express = require('express')
let router = express.Router()

const studentController = require('../controllers/student.controller')
const authController = require('../controllers/auth.controller')

const {
    body,
    param,
    sanitizeBody,
} = require('express-validator')

const CONFIG = require('../config/config')

router.route('/')
    .post([body('firstname').isString(),
        body('lastname').isString(),
        body('name').isString(),
        body('course').isString(),
        body('class').isString(),
        body('bdate').isISO8601(),
        body('email').isString(),
        body('mobile').isNumeric(),
        body('notifications').isBoolean(),
        sanitizeBody('firstname').whitelist(CONFIG.sanitize.alphabeth),
        sanitizeBody('lastname').whitelist(CONFIG.sanitize.alphabeth),
        sanitizeBody('name').whitelist(CONFIG.sanitize.alphabeth),
        sanitizeBody('course').whitelist(CONFIG.sanitize.alphabeth),
        sanitizeBody('class').whitelist(CONFIG.sanitize.alphabeth+CONFIG.sanitize.numerical),
        sanitizeBody('bdate').whitelist(CONFIG.sanitize.alphabeth+CONFIG.sanitize.numerical)
    ], studentController.create)
    .get(authController.checkAuth, studentController.get)

router.route('/:id')
    .get([param('id').isMongoId()], studentController.getone)
    .put([param('id').isMongoId()], studentController.put) 
    .delete([param('id').isMongoId()], studentController.delete) 

module.exports = router