const express = require('express');

const router = express.Router();

const repositorioController = require('../controllers/repositorioController');

module.exports = function() {
    // post: /repositorio
    router.post('/repositorio', repositorioController.create);

    // get: /repositorio
    router.get('/repositorio', repositorioController.index);

    // get: /repositorio/:id
    router.get('/repositorio/:id', repositorioController.show);

    // put: /repositorio/:id
    router.put('/repositorio/:id', repositorioController.update);

    // delete: /repositorio/:id
    router.delete('/repositorio/:id', repositorioController.delete);

    return router;
};