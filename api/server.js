const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

//Routes Importt
const authRoutes = require('./routes/authRoutes');

//DB Import
const db = require('../data/dbConfig');

//Middleware Import

//Server
const server = express();

//Cookie configuration

server.use(helmet());
server.use(express.json());
server.use(cors());

//Server use routes
server.use('/api', authRoutes);

server.get('/', (req, res) => {
  res.status(200).json('It is working');
});

module.exports = server;
