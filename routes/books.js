const { Router } = require('express');
const books = require('../controllers/books');

const router = Router();

router.get('/', books.getBooks);

router.post('/', books.postBooks);

router.patch('/', books.patchBooks);

router.put('/', books.putBooks);

router.delete('/', books.deleteBooks);

module.exports = router;
