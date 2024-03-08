const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const Form = require("./form"); // Import the Form model

const User = sequelize.define("User", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// Define association between User and Form
User.hasMany(Form, { foreignKey: "userId" });

module.exports = User;
