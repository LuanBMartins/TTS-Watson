const { Sequelize } = require('sequelize');
// Conexão com o banco de dados


module.exports = new Sequelize(
    'ttsWatson',
    'root',
    'admin',
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: false, 
    }
)


