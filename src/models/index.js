const sequelize=require('../config/sequelize')
const Sequelize=require('sequelize')

const Clientes=require('./clientes')
const Produtos=require('./produtos')
const Lojas=require('./lojas')
const Compras=require('./compras')

const clientes=Clientes(sequelize,Sequelize.DataTypes)
const produtos=Produtos(sequelize,Sequelize.DataTypes)
const lojas=Lojas(sequelize,Sequelize.DataTypes)
const compras=Compras(sequelize,Sequelize.DataTypes)

// cliente é um pra produtos muitos 1:n
//clientes.hasMany(produtos)
//lojas.manyToMany(produtos)

const db={
    clientes,
    produtos,
    lojas,
    compras,
    sequelize
}

module.exports=db

