const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose').set('debug', true);
const path = require('path');
const dotenv = require("dotenv");
//Server Optimisation
const compression = require('compression');


// Microservices
const microServices = require('./micro-services');
const userProfile = require('./micro-services/user-profile/users');
const feedBack = require('./micro-services/feedback/feedbacks');

const env = process.env.NODE_ENV || 'DEVELOPMENT';
dotenv.config();

const server = express();
server.use(compression());
server.use(bodyParser.json());

server.use('/api', microServices);
server.use('/api/feedback', feedBack);
server.use('/api/user-profile', userProfile);
//server.use('/api', microServices);

server.get('/', (req, res) => {
	res.send('Hello World!');
});
