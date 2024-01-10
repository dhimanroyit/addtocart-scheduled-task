import db from "../config/dbConnect.js";
const { sequelize, DataTypes } = db;
const cart = sequelize.define("cart", {
  user_id: {
    type: DataTypes.STRING,
  },
  cart_item: {
    type: DataTypes.STRING,
  },
});

export default cart;
