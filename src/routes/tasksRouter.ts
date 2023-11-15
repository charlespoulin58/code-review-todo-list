import express from "express";

const { createTask } = require("../controllers/tasksControllers");

const tasksRouter = express.Router();

tasksRouter.post("/", createTask);

export { tasksRouter }; 