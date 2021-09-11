const config = require('./config')

module.exports = {
    dialect: config.database.dialect,
    host: config.database.host,
    port: config.database.port,
    database: config.database.name,
    username: config.database.userName,
    password: config.database.password
}