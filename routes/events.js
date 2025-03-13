const express = require('express');
const router = express.Router();
const {
  createEvent,
  getEventsByUser
} = require('../models/Event');

// Create new event
router.post('/create', (req, res) => {
  const { userId, name, description, date, category, reminderTime } = req.body;
  try {
    const event = createEvent({ userId, name, description, date, category, reminderTime });
    res.status(201).json({ message: 'Event created!', event });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get events by user
router.get('/user/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  const userEvents = getEventsByUser(userId);
  res.json(userEvents);
});

module.exports = router;
