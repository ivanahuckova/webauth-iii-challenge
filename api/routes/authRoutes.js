const express = require('express');
const bcrypt = require('bcrypt');
const Users = require('../../data/dbModels');

const routes = express.Router();

//========== REGISTER ROUTE ========= //
routes.post('/register', async (req, res) => {
  try {
    let { username, password, department } = req.body;
    if (username && password && department) {
      let hashedPaswword = bcrypt.hashSync(password, 10);
      password = hashedPaswword;
      const newUser = Users.addUser(username, password, department);
      res.status(201).json({ id: newUser[0], username, password, department });
    } else {
      res.status(400).json({ message: 'Make sure that you are including username, password, department ' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = routes;
