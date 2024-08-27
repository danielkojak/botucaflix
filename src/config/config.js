require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DEV_DB_USER || 'root',
    password: process.env.DEV_DB_PASSWORD || 'password',
    database: process.env.DEV_DB_NAME || 'botucaflixdb_dev',
    host: process.env.DEV_DB_HOST || 'db',
    port: 3306,
    dialect: process.env.DEV_DB_DIALECT || 'mysql',
  },
  test: {
  username: process.env.TEST_DB_USER || 'root',
  password: process.env.TEST_DB_PASSWORD || 'password',
  database: process.env.TEST_DB_NAME || 'botucaflixdb_test',
  host: process.env.TEST_DB_HOST || 'db',
  port: 3306,
  dialect: process.env.TEST_DB_DIALECT || 'mysql',
},
  production: {
    username: process.env.PROD_DB_USER || 'root',
    password: process.env.PROD_DB_PASSWORD || 'password',
    database: process.env.PROD_DB_NAME || 'botucaflixdb_prod',
    host: process.env.PROD_DB_HOST || 'db',
    port: 3306,
    dialect: process.env.PROD_DB_DIALECT || 'mysql',
  },
};