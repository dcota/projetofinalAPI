module.exports = {
    mongodb: {
        uri: process.env.MONGOURL,
        collections: {
            students: 'students',
            users: 'users'
        }
    },
    auth: {
        expiration_time: 15000, //in seconds
        issuer: 'ENTA'
    },
    sanitize: {
        alphabeth: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzÁÉÍÓÚáéíóúÀÈÌÒÙàèìòãõâêô\\ ',
        numerical: '0123456789'
    }
}