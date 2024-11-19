// Dummy data untuk user
const book = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

// Fungsi untuk mengambil semua user
const findAllBooks = () => book;

// Fungsi untuk mengambil user berdasarkan ID
const findBookById = (id) => book.find((book) => book.id === id);

export { findAllBooks, findBookById };
