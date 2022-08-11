import express from "express";
const app = express();

// essentials

import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";

app.use(morgan(":method :url :status :response-time ms"));
app.use(cors());
app.use(helmet());
app.use(express.json());
dotenv.config();

// routes

app.get("/", (req, res) => {
  res.send("Hello from express");
});

export default app;
