const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Users DB Model
const Users = require('../../data/dbModels');

const routes = express.Router();

//========== REGISTER ROUTE ========= //
routes.post('/register', async (req, res) => {
  try {
    let { username, password, department } = req.body;
    if (username && password && department) {
      let hashedPasword = bcrypt.hashSync(password, 10);
      password = hashedPasword;
      const newUser = await Users.addUser(username, password, department);
      res.status(201).json({ id: newUser[0], username, password, department });
    } else {
      res.status(400).json({ message: 'Make sure that you are including username, password, department ' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//========== LOGIN ROUTE ========= //
routes.post('/login', async (req, res) => {
  try {
    let { username, password } = req.body;
    if (username && password) {
      const specificUser = await Users.findUserByName(username);
      const doPasswordsMatch = bcrypt.compareSync(password, specificUser.password);
      if (specificUser && doPasswordsMatch) {
        res.status(200).json({ message: `Welcome ${username}!` });
      } else {
        res.status(400).json({ message: `Invalid credentials` });
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = routes;
