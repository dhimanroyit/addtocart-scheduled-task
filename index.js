import express from "express";
import db from "./config/dbConnect.js";
import cartModel from "./model/cartModel.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("welcome cart");
});

app.post("/carts", (req, res, next) => {});

app.listen(5000, () => {
  console.log("server running on port 5000");
  try {
    db.sequelize.authenticate();
    console.log("db connected");
  } catch (e) {
    console.log("db error");
  }
});
