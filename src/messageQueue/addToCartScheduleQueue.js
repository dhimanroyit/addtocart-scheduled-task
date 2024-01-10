import { Queue } from "bullmq";

export const addToCartScheduleQueue = new Queue("cart-schedule-notify", {
  connection: {
    host: "127.0.0.1",
    port: 6379,
  },
});
