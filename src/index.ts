import express, { type Express, type Request, type Response } from "express";
import cors from "cors";
import { connectDB } from "../config/database";
import { tasksRouter } from "./routes/tasksRouter";

// Application Setup
const app: Express = express();
const port = 3000;

connectDB();

app.use(express.json());
app.use(cors());

app.use("/tasks", tasksRouter);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});