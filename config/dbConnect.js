import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("cart", "cart", "$Dhiman8151", {
  host: "localhost",
  dialect: "mysql",
});

const db = {
  sequelize,
  DataTypes,
};

export default db;
