import { ObjectId } from "mongodb";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    task: {
        type: String,
        required: true
    },
    isCompleted : {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model("Task", TaskSchema);