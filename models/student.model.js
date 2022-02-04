const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema({
    firstname: String,
    lastname: String,
    name: String,
    course: String,
    class: String,
    mobile: Number,
    email: String,
    bdate: String,
    notifications: Boolean,
    accepted: Boolean
})

module.exports = mongoose.model('student',studentSchema);