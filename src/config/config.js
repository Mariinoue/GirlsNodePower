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
        url: process.env.DATABASE_URL
    }
}

module.exports = config