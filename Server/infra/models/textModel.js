const {DataTypes} = require('sequelize')
const connection = require('./../database')
// Conectando (e criando se necessário) a uma tabela 


const Text = connection.define('text', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    message: {
        type: DataTypes.TEXT,
        required: true
    },
    song: {
        type: DataTypes.JSON,
        required: true
    }
}, {
    tableName: 'text',
    timestamps: false
})
Text.sync()

module.exports = Text
