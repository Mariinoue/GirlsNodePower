const config = require('./config')

module.exports = {
    dialect: config.database.dialect,
    url: config.database.url
}