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

na raiz do projeto crie um arquivo chamado `.env` com as seguintes variáveis:
```
PORT=porta do servidor  
DATABASE_DIALECT=dialeto do banco  
DATABASE_URL=endereco do banco  
DATABASE_PORT=porta do banco  
DATABASE_NAME=nome do banco  
DATABASE_USER_NAME=usuário do banco  
DATABASE_PASSWORD=senha do banco
```

```
Exemplo de arquivo `.env`  

PORT=5000
DATABASE_DIALECT=postgres
DATABASE_URL=localhost
DATABASE_PORT=5432
DATABASE_NAME=GirlsNodePower_db
DATABASE_USER_NAME=postgres
DATABASE_PASSWORD=root
```

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

--------------