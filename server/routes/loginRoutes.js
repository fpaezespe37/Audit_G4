const express = require('express');

const router = express.Router();

const loginController = require('../controllers/login');


module.exports = function() {
    router.post("/login", loginController.create);

    router.get('/login', loginController.index);

    router.get('/login/:id', loginController.show);

    // put: /customers/:id
    router.put('/login/:id', loginController.update);

    // delete: /customers/:id
    router.delete('/login/:id', loginController.delete);

    return router;
};