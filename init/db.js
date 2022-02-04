const mongoDB = require('mongoose')
require('dotenv').config({ path: './private/.env' })
const config = require('../config/config')

class MongoConnection {
    constructor(){
     if(! MongoConnection.mongoInstance){
        const connection = mongoDB.connect(config.mongodb.uri, {
            useNewUrlParser: true, 
            useUnifiedTopology: true}, (err)=>{
            if(err){
                throw err;
            }
            else {
                console.log('Connected to MongoDB')
            }
        })
       this.conn=connection
     }
     return MongoConnection.mongoInstance
    } 

    getconn(){
        return this.conn
    } 
}

const mongoInstance = new MongoConnection();
Object.freeze(mongoInstance)
module.exports = ((mongoInstance) => {
    mongoInstance
})