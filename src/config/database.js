const Sequelize = require("sequelize")
require("dotenv").config()

const host = process.env.DB_HOST
const port = process.env.DB_PORT
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const dbName = process.env.DB_NAME
const connect = process.env.DB_CONNECTION

const db = new Sequelize(`${connect}://${username}:${password}@${host}:${port}/${dbName}`)

module.exports = db