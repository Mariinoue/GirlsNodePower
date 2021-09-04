const express=require('express')
const routers=require('./api')
const {sequelize}=require('./models')
const app=express()


app.use(express.json())
//app.use('/',routers)

sequelize.sync({force:true}).then(()=>{
    console.log('conectado com sucesso');
})

app.listen(6060,()=>{
    console.log(`Servidor rodando na porta 6060`);
})