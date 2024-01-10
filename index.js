import express from "express";
import "dotenv/config.js";
import db from "./src/config/dbConnect.js";
import cartModel from "./src/model/cartModel.js";
import { addToCartScheduleQueue } from "./src/messageQueue/addToCartScheduleQueue.js";
import { addToCartScheduleWorker } from "./src/messageQueue/addToCartScheduleWorker.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("welcome cart");
});

app.post("/carts", async (req, res, next) => {
  const { user_id } = req.body;

  await addToCartScheduleQueue.remove(user_id);

  await addToCartScheduleQueue.add(
    `${user_id}`,
    {
      data: req.body,
    },
    {
      delay: 5000, // variable time it's upto you
      jobId: `${user_id}`,
    }
  );

  const cart = await cartModel.create(req.body);

  res.json({
    message: "cart add successfully",
    data: cart,
  });
});

addToCartScheduleWorker.run();

app.use((err, req, res, next) => {
  if (err) {
    console.log(err);
    res.json({
      message: "error",
      data: err,
    });
  }
});

app.listen(5000, () => {
  console.log("server running on port 5000");
  try {
    db.sequelize.authenticate();
    console.log("database connected successfully");
    db.sequelize.sync({
      // alter: true,
    });
  } catch (err) {
    console.log("database error occur", err);
  }
});
