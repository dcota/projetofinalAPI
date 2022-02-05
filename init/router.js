/*
MEIW - Programação Web Avançada - projeto final
Auhtor: Duarte Cota
Description: API routes definition
*/

module.exports = (app) => {
    app.use('/notification', require('../routes/notification.routes'))
    app.use('/user', require('../routes/user.routes'))
    app.use('/auth', require('../routes/auth.routes'))
}