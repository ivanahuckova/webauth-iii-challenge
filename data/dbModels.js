const db = require('../data/dbConfig');

function addUser(username, password, department) {
  return db('users').insert({ username: username, password: password, department: department });
}

function findUserByName(username) {
  return db('users')
    .where({ username: username })
    .first();
}

function getAllUsers() {
  return db('users');
}

module.exports = {
  addUser,
  findUserByName,
  getAllUsers
};
