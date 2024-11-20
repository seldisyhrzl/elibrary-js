import express from "express";
import morgan from "morgan";

const app = express();

const logRequest = app.use(morgan("dev"));

export default logRequest;
