const Sequelize=require('sequelize')
const configDatabase=require('./database')

const sequelize= new Sequelize(configDatabase.url, {
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
})

module.exports=sequelize