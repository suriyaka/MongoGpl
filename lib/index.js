import express from "express";
// import { connectToDatabase } from "./services/database.service";
// import { gamesRouter } from "./routes/games.router";

const { connectToDatabase } = require("./services/database.service");
const { gamesRouter } = require ("./routes/games.router");

const app = express();
const port = 8080; // default port to listen
// ** TODO ** Replace this code with a call to your games router class to handle all calls to /games endpoint
connectToDatabase()
    .then(() => {
    app.use("/games", gamesRouter);
    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`);
    });
})
    .catch((error) => {
    console.error("Database connection failed", error);
    process.exit();
});
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
    // ** TODO ** Call to Game Service to initiate connection
});
