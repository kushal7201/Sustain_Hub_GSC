const { DataTypes } = require('sequelize');
const sequelize = require('../util/database');
const User = require('./user'); // Import the User model

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

// Define association between Form and User
Form.belongsTo(User, { foreignKey: 'userId' });

module.exports = Form;
