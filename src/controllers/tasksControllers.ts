import { ObjectId } from "mongodb";
const Task = require("../models/Task");

import express, { type Request, type Response } from "express";

const createTask = async (req: Request, res: Response) => {
    try {
        const { name, date, description, isCompleted } = req.body;

        if (!name) {
            return res.status(400).send({ message: "Missing required field" });
        }

        let newTask = new Task({ name, date, description, isCompleted });
        let task = await newTask.save();

        return res.status(201).json(task);
    }  catch (err: any) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
}

const getTasks = async (req: Request, res: Response) => {
    try {
        let tasks = await Task.find();
        return res.status(200).json(tasks);
    } catch (err: any) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
}

const getTaskById = async (req: Request, res: Response) => {
    try {
        let id = req.params.id;

       // Check if id is valid
       if (!ObjectId.isValid(id)) {
           return res.status(400).send({ message: "Invalid id" });
       }

       let task = await Task.findById(id);

       if (!task) {
           return res.status(404).send({ message: "Task not found" });
       }
        return res.status(200).json(task);
    } catch (err: any) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
}

const updateTask = async (req: Request, res: Response) => {
    try {
        let id = req.params.id; //only param
        //Check if id is valid
        if (!ObjectId.isValid(id)) {
            return res.status(400).send({ message: "Invalid id" });
        }

        let task = await Task.findByIdAndUpdate(id, req.body, { new: true });
        return res.status(200).json(task);
    } catch (err: any) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
}

const deleteTask = async (req: Request, res: Response) => {
    try {
        let id = req.params.id; //only param
        //Check if id is valid
        if (!ObjectId.isValid(id)) {
            return res.status(400).send({ message: "Invalid id" });
        }

        let task = await Task.findByIdAndDelete(id);
        return res.status(200).json(task);
    } catch (err: any) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    } 

}

module.exports = { createTask, getTasks, getTaskById, updateTask, deleteTask};