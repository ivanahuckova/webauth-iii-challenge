const express = require('express');

const routes = express.Router();

// ========== REGISTER ROUTE ========= //
// routes.post('register', async (req, res) => {
//   try {
//     let { username, password } = req.body;
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

module.exports = routes;
