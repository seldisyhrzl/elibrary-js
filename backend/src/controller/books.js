import { findAllBooks, findBookById } from "../models/books.js";

const getAllBooks = (req, res) => {
  const book = findAllBooks();
  try {
    res.status(200).json({
      message: "sucess",
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      message: "error",
      status: error,
    });
  }
};

const getBookById = (req, res) => {
  const userId = parseInt(req.params.id);
  const book = findBookById(userId);
  res.status(200).json({
    message: "sucess",
    data: book,
  });
};

export { getAllBooks, getBookById };
