const express = require('express');
const booksRoute = require('./routes/books');

const app = express();
const port = 8000

app.use('/books', booksRoute);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
