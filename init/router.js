module.exports = (app) => {
    app.use('/student', require('../routes/student.routes'))
    app.use('/user', require('../routes/user.routes'))
    app.use('/auth', require('../routes/auth.routes'))
}