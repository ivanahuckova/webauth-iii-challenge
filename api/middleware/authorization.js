const jwt = require('jsonwebtoken');

function isAuthorized(req, res, next) {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: 'Not authorized' });
      } else {
        req.decodedToken = decodedToken;
        next();
      }
    });
  } else {
    res.status(400).json({ message: 'No credentials provided' });
  }
}

module.exports = isAuthorized;
