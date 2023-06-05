const express = require('express');

const router = express.Router();

const promotionController = require('../controllers/promotionController');

module.exports = function() {
    // post: /promotion
    router.post('/promotion', promotionController.create);

    // get: /customers
    router.get('/promotion', promotionController.index);

    // get: /promotion/:id
    router.get('/promotion/:id', promotionController.show);

    // put: /promotion/:id
    router.put('/promotion/:id', promotionController.update);

    // delete: /promotion/:id
    router.delete('/promotion/:id', promotionController.delete);

    return router;
};