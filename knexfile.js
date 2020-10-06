// Update with your config settings.

module.exports = {
  // configuration for the development environment db connection
  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/food.db3' // which file am I using
    },
    useNullAsDefault: true // required for SQLite only 
  },

  // configuration for the production environment db connection
  production: {
    client: 'postgresql',
    connection: {
      host: "postgresql://pgontheweb.com/",
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
