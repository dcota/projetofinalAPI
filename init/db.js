/*
MEIW - Programação Web Avançada - projeto final
Auhtor: Duarte Cota
Description: connection to MongoDB Atlas
*/
const CONFIG = require('../config/config');
const credentials = require('../private/credentials')

module.exports = (app, callback) => {
    const mongoose = require('mongoose');
    let settings = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    global.mongoConnection = mongoose.connect(CONFIG.mongodb.uri, settings, (error) => {
        if (error) throw error;
        console.log('---Connected to DB');
        return callback();
    })

}