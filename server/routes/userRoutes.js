const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');


module.exports = function() {
    // post: /user
    router.post('/user', userController.create);

    // get: /customers
    router.get('/user', userController.index);

    // get: /user/:id
    router.get('/user/:username', userController.show);

    // put: /user/:id
    router.put('/user/:id', userController.update);

    // delete: /user/:id
    router.delete('/user/:id', userController.delete);

    return router;
};