require('dotenv').config(); // Load environment variables

const app = require('./app');

// Get port from .env or default to 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
