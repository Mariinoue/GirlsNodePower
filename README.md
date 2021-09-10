# GirlsNodePower
Projeto para conclusão do desafio do curso de node


Requisitos necessários para executar este projeto: 
 - node
 - npm
 - banco de dados postgres

## Como executar o projeto 

Faça clone deste repositório
Crie um banco de dados postgresSQL com o nome "GirlsNodePower_db"
** veja mais informações no arquivo /src/config/database.js 

------

no terminal, na pasta raiz o projeto  execute o comando 

```
npm install

``` 

ele irá instalar os seguintes módulos: 

``
    npm install express 
    npm install express-routes 
    npm install express-validation 
    npm install pg 
    npm install sequelize 
    npm install swagger-ui-express 
    npm install swagger-autogen 
    npm install sequelize pg 
`` 

---------------

para gerar a documentação do swagger execute: 

npm run swagger 
//script presente dentro do package.json

---------------

para subir o servidor ( executar o projeto )
npm start

--------------

Arquiterura do projeto: 
src - > códigos do projeto 
src/api -> 
node_modules -> dependências externas 
