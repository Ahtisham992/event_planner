const bcrypt = require('bcryptjs');

// In-memory user storage
const users = [];

// Simulate user registration (save user)
async function createUser(name, email, password) {
  // Check if user already exists
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    throw new Error('User already exists');
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user object
  const newUser = {
    id: users.length + 1,
    name,
    email,
    password: hashedPassword
  };

  // Save to in-memory "DB"
  users.push(newUser);
  return newUser;
}

// Simulate user login (check credentials)
async function authenticateUser(email, password) {
  const user = users.find(u => u.email === email);
  if (!user) throw new Error('User not found');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');

  return user;
}

// Export functions and users array (for testing)
module.exports = {
  users,
  createUser,
  authenticateUser
};
