const config = require('../knexfile.js')
const knex = require('knex')(config)

knex.migrate.latest([config]) //cria as tabelas ao iniciar a aplicacao
module.exports = knex