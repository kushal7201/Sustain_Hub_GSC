const { DataTypes } = require('sequelize');
const sequelize = require('../util/database');
const Form = require('./form'); // Import the Form model

const Image = sequelize.define('Image', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  filename: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data: {
    type: DataTypes.BLOB('long'),
    allowNull: false,
  },
});

// Define association between Image and Form
Image.belongsTo(Form, { foreignKey: 'formId' });

module.exports = Image;
