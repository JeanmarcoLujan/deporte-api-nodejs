const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  jwt.verify(token, 'your_secret_key', (err, decodedToken) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.userId = decodedToken.userId;
    next();
  });
};

module.exports = { requireAuth };