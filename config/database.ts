const mongoose = require("mongoose");
const MONGO_LOCAL_URI = "mongodb://localhost:27017";

const connectDB = async () => {
    try {
        mongoose.connect(MONGO_LOCAL_URI);
        console.log("Connected to Mongo! Success!");
    } catch (err) {
        console.error((err as Error).message);
    }
};

export { connectDB };