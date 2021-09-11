const express=require('express')
const routers=require('./api')
const {sequelize}=require('./models')
const app=express()

//variáveis para doc api Swagger
const swaggerUi =  require('swagger-ui-express');
const swaggeFile =  require('./swagger_output.json');

//rota da documentação com swagger
app.use( '/docs', swaggerUi.serve , swaggerUi.setup(swaggeFile) );
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