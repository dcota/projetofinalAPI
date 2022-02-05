/*
MEIW - Programação Web Avançada - projeto final
Auhtor: Duarte Cota
Description: configurations of the API 
*/

require('dotenv').config({ path: '../private/.env'})
const credentials = require('../private/credentials')

module.exports = {
    mongodb: {
        uri: 'mongodb+srv://'+ credentials.auth.username + ':' + credentials.auth.password + '@cluster0.6qmly.mongodb.net/apds?retryWrites=true&w=majority',
        collections: {
            users: 'users',
            notifications: 'notifications',
            students: 'students'
        }
    },
    auth: {
        expiration_time: 15000, //in seconds
        issuer: 'ENTA'
    },
    sanitize: {
        alphabeth: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzŠŒŽšœžŸ¥µÀÁÂÃÄÅÆÇÈÉÊËẼÌÍÎÏĨÐÑÒÓÔÕÖØÙÚÛÜÝßàáâãäåæçèéêëẽìíîïĩðñòóôõöøùúûüýÿ\\ ',
        numerical: '0123456789'
    },
    email: {
        service: "Gmail",
        auth: {
            user: "pwacota@gmail.com",
            pass: "pwa12345"
        }
    }
}