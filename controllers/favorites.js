const fs = require('fs');
const { getAllFavorites, deleteFavoriteById, insertFavorite } = require('../services/favorites');

function getFavorites(req, res) {
    try {
        const favorites = getAllFavorites();
        res.send(favorites);
    } catch (error) {
        res.status(500);
        console.error(error.message);
    }
}

function deleteFavorite(req, res) {
    try {
        const id = req.params.id;

        if (id && Number(id)) {
            deleteFavoriteById(id);
            res.send('Favorite deleted successfully');
        } else {
            res.status(422);
            res.send('Invalid id');
        }
    
    } catch (error) {
        res.status(500);
        console.error(error.message);
    }
}

function postFavorite(req, res) {
    try {
        const id = req.params.id;

        if (id && Number(id)) {
            insertFavorite(id);
            res.send('Favorite inserted successfully');
        } else {
            res.status(422);
            res.send('Invalid id');
        }

    } catch (error) {
        res.status(500);
        console.error(error.message);
    }
}

module.exports = {
    getFavorites,
    deleteFavorite,
    postFavorite
}
