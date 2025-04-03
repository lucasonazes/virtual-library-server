const fs = require('fs');

const currentData = (JSON.parse(fs.readFileSync('books.json')));
const newData = { id: '3', name: 'Livro mais que demais' };

fs.writeFileSync('books.json', JSON.stringify([...currentData, newData]));

console.log(JSON.parse(fs.readFileSync('books.json')));