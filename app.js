require('dotenv').config();
const express = require('express');
const cors = require('cors');


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

app.get('/', (req, res) => {
    res.send('🎉 Event Planner API is running!');
  });
  

module.exports = app;
