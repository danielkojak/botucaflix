require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'botucaflixdb',
    host: process.env.DB_HOST || 'localhost',
    port: 33061,
    dialect: process.env.DB_DIALECT || 'mysql',
  },
  test: {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'botucaflixdb',
  host: process.env.DB_HOST || 'localhost',
  port: 33061,
  dialect: process.env.DB_DIALECT || 'mysql',
},
  production: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'botucaflixdb',
    host: process.env.DB_HOST || 'localhost',
    port: 33061,
    dialect: process.env.DB_DIALECT || 'mysql',
  },
};