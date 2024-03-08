const Sequelize = require('sequelize');

const sequelize = new Sequelize('sustained', 'root', 'sugam112', {
    dialect: 'mysql',
    host: 'localhost'
});   

module.exports = sequelize;

