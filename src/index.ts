import express, { type Express, type Request, type Response } from "express";

// Application Setup
const app: Express = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});