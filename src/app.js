const express=require('express')
const routers=require('./api/index')
const {sequelize}=require('./models')
const app=express()


app.use(express.json())
app.use('/',routers)

// usar force:true -> somente para deletar todo o banco
// sequelize.sync({force:true}).then(()=>{
sequelize.sync().then(()=>{
    console.log('conectado com sucesso');
})

app.listen(3000,()=>{
    console.log(`Servidor rodando na porta 3000`);
})