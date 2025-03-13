const express = require('express');
const router = express.Router();
const { createUser, authenticateUser } = require('../models/User');

// Register route
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await createUser(name, email, password);
    res.status(201).json({ message: 'User registered!', user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await authenticateUser(email, password);
    res.json({ message: 'Login successful!', user });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

module.exports = router;
