
const express = require('express')

module.exports = (app) => {
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json({ extended: false }))

    const cookieParser = require('cookie-parser')
    const cors = require('cors')
    app.use(cors({
        exposedHeaders: ['Location']
    }))

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        res.header("Access-Control-Expose-Headers", "Authorization");
        next();
        });

    app.use(cookieParser())
    app.set('trust proxy', 1)
}