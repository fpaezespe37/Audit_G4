const express = require('express');

const router = express.Router();

const catalogoController = require('../controllers/catalogoController');

module.exports = function() {
    // post: /catalogo
    router.post('/catalogo', catalogoController.fileUpload, catalogoController.create);

    // get: /catalogo
    router.get('/catalogo', catalogoController.index);

    // put: /catalogo/:id
    router.put('/catalogo/:id', catalogoController.fileUpload, catalogoController.update);

    // delete: catalogo/:id
    router.delete('/catalogo/:id', catalogoController.delete);

    // get: /catalogo/search/:query
    router.get('/catalogo/search/:query', catalogoController.search);

    return router;
};