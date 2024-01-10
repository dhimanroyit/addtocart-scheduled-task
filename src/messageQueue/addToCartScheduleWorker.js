import { Worker } from "bullmq";

export const addToCartScheduleWorker = new Worker(
  "cart-schedule-notify",
  async (job) => {
    // add any task in this function (like send email, push notification or message)
    console.log("worker", job.data);
  },
  {
    autorun: false,
    connection: {
      host: "127.0.0.1",
      port: 6379,
    },
  }
);
