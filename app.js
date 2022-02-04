/*
MEIW - Programação Web Avançada - projeto final
Auhtor: Duarte Cota
Description: API main file
*/

const express = require('express')
const app = express()

require('./init/middleware')(app)
require('./init/router')(app)

const port = process.env.PORT || 3000
const host = process.env.HOST || '0.0.0.0'

app.listen(port, host, (error) => {
    if (error) 
        throw error
    else 
        console.log(`App listening on port ${port} `)
})