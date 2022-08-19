// Update with your config settings.

module.exports = {

  client: 'postgresql',
  connection: {
    database: 'cod3r_projeto',
    user: 'postgres',
    password: '12345'
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
