const express = require('express');

const router = express.Router();

const tipoProductController = require('../controllers/TipoProductController');

module.exports = function() {
    // post: /customers
    router.post('/tipoproducto', tipoProductController.create);

    // get: /customers
    router.get('/tipoproducto', tipoProductController.index);

    // get: /customers/:id
    router.get('/tipoproducto/:id', tipoProductController.show);

    // put: /customers/:id
    router.put('/tipoproducto/:id', tipoProductController.update);

    // delete: /customers/:id
    router.delete('/tipoproducto/:id', tipoProductController.delete);

    return router;
};