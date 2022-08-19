const express = require('express')
const app = express()
const consig = require('consign')
const db = require('./config/db')

app.db = db //coloca a database dentro do consig

consig() //passa a variavel app p/ o middlewares.js gerenciando dependencias, nao precisa ficar importando os arquivos ->
    .then('./config/middlewares.js') //-> que estado no consig
    .then('./api') //necessario carregar api antes das rotas
    .then('./config/routes.js')
    .into(app) //todos os arquivos estao dentro da variavel 'app'

app.listen(3000, () =>{
    console.log('Backend executando...')
})