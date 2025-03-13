const jwt = require('jsonwebtoken');
const { users } = require('../models/User'); // Import the hardcoded users array

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Match decoded user ID/email to in-memory user list
    const user = users.find(u => u.id === decoded.id);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user; // Attach full user to request
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};
