const { Router } = require('express');
const books = require('../controllers/books');

const router = Router();

router.get('/', books.getBooks);

router.get('/:id', books.getBook);

router.post('/', books.postBook);

router.patch('/:id', books.patchBook);

router.delete('/:id', books.deleteBooks);

module.exports = router;
