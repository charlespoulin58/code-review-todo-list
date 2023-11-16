import { ObjectId } from "mongodb";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now(),
    },
    description: {
        type: String
    },
    isCompleted : {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Task", TaskSchema);