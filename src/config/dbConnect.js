import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize(
  `${process.env.DB_NAME}`,
  `${process.env.DB_USERNAME}`,
  `${process.env.DB_PASSWORD}`,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

const db = {
  sequelize,
  DataTypes,
};

export default db;
