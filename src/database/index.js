const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Pessoas = require('../models/Pessoas');

const connection = new Sequelize(dbConfig);

Pessoas.init(connection);

// Pessoas.associate(connection.models);

module.exports = connection;