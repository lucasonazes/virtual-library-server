const { Router } = require('express');
const favorites = require('../controllers/favorites');

const router = Router();

router.get('/', favorites.getFavorites);

router.delete('/:id', favorites.deleteFavorite);

router.post('/:id', favorites.postFavorite);

module.exports = router;
