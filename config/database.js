const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db_user', 'admin', 'admin', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;