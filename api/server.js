const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

//Routes Importt
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

//Server
const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

//Server use routes
server.use('/api', authRoutes);
server.use('/api', userRoutes);

server.get('/', (req, res) => {
  res.status(200).json('It is working');
});

module.exports = server;
