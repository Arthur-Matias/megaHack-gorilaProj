const express = require('express');


const login = require('./controllers/login');
const UserController = require('./controllers/userController');
const getBrokers = require('./controllers/listBrokers');
const getInvestors = require('./controllers/listInvestors');

const routes = express.Router();

routes.post('/login', login.store);

routes.post('/registerUser', UserController.store);

routes.get('/listBrokers', getBrokers.show);

routes.get('/listInvestors', getInvestors.show)

module.exports = routes;