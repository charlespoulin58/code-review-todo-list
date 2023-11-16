import express from "express";

const { createTask, getTasks, getTaskById, updateTask, deleteTask} = require("../controllers/tasksControllers");

const tasksRouter = express.Router();


tasksRouter.post("/", createTask);
tasksRouter.get("/", getTasks);
tasksRouter.get("/:id", getTaskById);
tasksRouter.put("/:id", updateTask);
tasksRouter.delete("/:id", deleteTask);

export { tasksRouter }; 