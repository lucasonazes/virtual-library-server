function getBooks(req, res) {
    try {
        res.send('Get Books');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function postBooks(req, res) {
    try {
        res.send('Post Books');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function patchBooks(req, res) {
    try {
        res.send('Patch Books');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function putBooks(req, res) {
    try {
        res.send('Put Books');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function deleteBooks(req, res) {
    try {
        res.send('Delete Books');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getBooks,
    postBooks,
    patchBooks,
    putBooks,
    deleteBooks
}
