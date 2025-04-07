const express = require('express');
const booksRoute = require('./routes/books');
const cors = require('cors');

const app = express();
const port = 8000

app.use(express.json());
app.use(cors({origin: '*'}));

app.use('/books', booksRoute);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
