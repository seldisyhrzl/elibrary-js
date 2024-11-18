import express from "express";
import { getAllBooks, getBookById } from "../controller/books.js";

const router = express.Router();

router.get("/books", getAllBooks);

router.get("/books/:id", getBookById);

export default router;
