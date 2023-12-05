const Sequelize = require("sequelize")
const db = require("../config/database")
const User = require("./User")

const { DataTypes } = Sequelize

//* nm_tabel, column, optional
const Product = db.define('products', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false, //! tidak boleh kosong
        validate: {
            notEmpty: true,
            len: [4, 50] //! min, max
        }
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false, //! tidak boleh kosong
        validate: {
            notEmpty: true
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false, //! tidak boleh kosong
        validate: {
            notEmpty: true
        }
    }
}, {
    freezeTableName: true
})

//*     :::   Relation One to Many   :::
User.hasMany(Product)
Product.belongsTo(User, {
    foreignKey: 'userId'
})

// db.sync().then(() => {
//     console.log('Product table created successfully!');
// }).catch((error) => {
//     console.error('Unable to create table : ', error);
// });

module.exports = Product