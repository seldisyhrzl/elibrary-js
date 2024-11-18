import express from "express";
import dotenv from "dotenv";
import bookRoute from "./routes/books.js";
import logRequest from "./middleware/logs.js";

const app = express();

app.use(logRequest);

app.use("/api", bookRoute);

dotenv.config();
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
