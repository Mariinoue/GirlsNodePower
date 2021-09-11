require('dotenv').config()

let serverPort

try {
    serverPort = process.env.PORT
    serverPort = parseInt(serverPort)
} catch (error) {
    serverPort = 3000
}

const config = {
    server: {
        port: serverPort
    },
    database: {
        dialect: process.env.DATABASE_DIALECT,
        host: process.env.DATABASE_URL,
        port: process.env.DATABASE_PORT,
        name: process.env.DATABASE_NAME,
        userName: process.env.DATABASE_USER_NAME,
        password: process.env.DATABASE_PASSWORD
    }
}

module.exports = config