const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Users DB Model
const Users = require('../../data/dbModels');

const routes = express.Router();

//========== REGISTER ========= //
//Route
routes.post('/register', async (req, res) => {
  try {
    let { username, password, department } = req.body;

    if (username && password && department) {
      //password hashing
      let hashedPasword = bcrypt.hashSync(password, 10);
      password = hashedPasword;
      //create new user and store hashed password
      const newUser = await Users.addUser(username, password, department);
      res.status(201).json({ id: newUser[0], username, password, department });
    } else {
      res.status(400).json({ message: 'Make sure that you are including username, password, department ' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//========== LOGIN ========= //
//Create Token

function makeTokenFromUser(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    department: user.department
  };
  const token = jwt.sign(payload, process.env.TOKEN_SECRET);
  return token;
}
//Route
routes.post('/login', async (req, res) => {
  try {
    let { username, password } = req.body;
    if (username && password) {
      //get user by username
      const specificUser = await Users.findUserByName(username);
      //check if passwords match - as one is hashed and one is not, use bcrupt
      const doPasswordsMatch = bcrypt.compareSync(password, specificUser.password);
      if (specificUser && doPasswordsMatch) {
        const token = makeTokenFromUser(specificUser);
        res.status(200).json({ message: `Welcome ${username}!`, token });
      } else {
        res.status(400).json({ message: `Invalid credentials` });
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = routes;
