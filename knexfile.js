require('dotenv').config()
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env

module.exports = {
  client: 'mysql',
  connection: {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    timezone: 'utc',
  },
  migrations: {
    directory: './src/database/migrations',
  },
  seeds: {
    directory: './src/database/seeds',
  },
}