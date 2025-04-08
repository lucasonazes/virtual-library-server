const fs = require('fs');

function getAllBooks() {
    return JSON.parse(fs.readFileSync('books.json'));
}

function getBookById(id) {
    const books = JSON.parse(fs.readFileSync('books.json'));

    return books.filter(book => book.id === id)[0];
}

function insertBook(book) {
    const books = JSON.parse(fs.readFileSync('books.json'));

    const newBooksList = [...books, book];

    fs.writeFileSync('books.json', JSON.stringify(newBooksList));
}

function modifyBook(modifications, id) {
    let books = JSON.parse(fs.readFileSync('books.json'));
    const index = books.findIndex(book => book.id === id);

    const changedContent = { ...books[index], ...modifications };

    books[index] = changedContent;

    fs.writeFileSync('books.json', JSON.stringify(books));
}

function removeBook(id) {
    const books = JSON.parse(fs.readFileSync('books.json'));
    const filteredBooks = books.filter(book => book.id !== id);

    fs.writeFileSync('books.json', JSON.stringify(filteredBooks));
}

module.exports = {
    getAllBooks,
    getBookById,
    insertBook,
    modifyBook,
    removeBook
}
