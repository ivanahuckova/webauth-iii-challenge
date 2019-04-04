const express = require('express');
const isAuthorized = require('../middleware/authorization');

//Users DB Model
const Users = require('../../data/dbQueries');

const routes = express.Router();

//========== SHOW USERS ========= //
routes.get('/users', isAuthorized, async (req, res) => {
  try {
    let { decodedToken } = req;
    if (decodedToken) {
      const allUsers = await Users.getAllUsers();
      res.status(200).json(allUsers);
    } else {
      res.status(400).json({ message: "Sorry, you don't have permission to do that" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//========== SHOW FROM YOUR DEPARTMENT ========= //
routes.get('/department', isAuthorized, async (req, res) => {
  try {
    let { decodedToken } = req;
    if (decodedToken) {
      const allUsersFromDepartment = await Users.getAllUsersFromDepartment(decodedToken.department);
      res.status(200).json(allUsersFromDepartment);
    } else {
      res.status(400).json({ message: "Sorry, you don't have permission to do that" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = routes;
