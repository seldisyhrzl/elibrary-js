// Dummy data untuk user
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

// Fungsi untuk mengambil semua user
const findAllBooks = () => users;

// Fungsi untuk mengambil user berdasarkan ID
const findBookById = (id) => users.find((user) => user.id === id);

export { findAllBooks, findBookById };
