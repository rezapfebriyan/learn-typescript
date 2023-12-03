import { Sequelize } from "sequelize"
import dotenv from "dotenv"
dotenv.config()

const host = process.env.DB_HOST
const port = process.env.DB_PORT
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const dbName = process.env.DB_NAME
const connect = process.env.DB_CONNECTION

const db = new Sequelize(`${connect}://${username}:${password}@${host}:${port}/${dbName}`)

export default db