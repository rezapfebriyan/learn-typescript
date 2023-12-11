const Sequelize = require("sequelize")
const db = require("../config/database")

const { DataTypes } = Sequelize

const User = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [4, 50]
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    role: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: true
        }
    }
}, {
    freezeTableName: true
})

// db.sync().then(() => {
//     console.log('User table created successfully!')
// }).catch((error) => {
//     console.error('Unable to create table : ', error)
// });

module.exports = User
