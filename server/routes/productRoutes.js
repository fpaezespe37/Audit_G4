const express = require('express');


const router = express.Router();

const customersController = require('../controllers/productController');

module.exports = function() {
    // post: /customers
    router.post('/producto', customersController.fileUpload, customersController.create);

    // get: /customers
    router.get('/producto', customersController.index);

    // get: /customers/:id
    router.get('/producto/:id', customersController.show);

    // put: /customers/:id
    router.put('/producto/:id', customersController.fileUpload, customersController.update);

    // delete: /customers/:id
    router.delete('/producto/:id', customersController.delete);

    return router;
};