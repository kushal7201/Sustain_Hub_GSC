const { DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const Form = sequelize.define('Form', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  longitude: {
    type: DataTypes.STRING,
  },
  latitude: {
    type: DataTypes.STRING,
  },
});

module.exports = Form;
