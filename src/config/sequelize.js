const Sequelize=require('sequelize')
const configDatabase=require('./database')

const sequelize= new Sequelize(configDatabase.url, {dialect: 'postgres'})

module.exports=sequelize