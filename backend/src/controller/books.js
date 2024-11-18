import { findAllBooks, findBookById } from "../models/books.js";

const getAllBooks = (req, res) => {
  const book = findAllBooks();
  res.json({
    message: "sucess",
    data: book,
  });
};

const getBookById = (req, res) => {
  const userId = parseInt(req.params.id);
  const book = findBookById(userId);
  res.json({
    message: "sucess",
    data: book,
  });
};

export { getAllBooks, getBookById };
