const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("ecommerce_db", "root", "@#S2000sdf", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
