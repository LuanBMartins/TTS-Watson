const { Sequelize } = require('sequelize');
require('dotenv').config()
// Conexão com o banco de dados


module.exports = new Sequelize(
    process.env.DATABASE,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: false, 
    }
)


