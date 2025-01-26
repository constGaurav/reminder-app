import express from "express";
import dotenv from "dotenv";
dotenv.config();
import reminderRouter from "./routes";

const app = express();
app.use(express.json());

app.use("/api", reminderRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running at 3000");
});
