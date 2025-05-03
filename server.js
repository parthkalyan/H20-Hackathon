const express = require('express'); // Import Express
const app = express(); // Initialize Express
const bodyParser = require('body-parser'); // Import body-parser (optional, for parsing JSON)

// Middleware to parse JSON requests
app.use(bodyParser.json());

const waterUsageData = [
  { date: 'May 1', usage: 40 },
  { date: 'May 2', usage: 55 },
  { date: 'May 3', usage: 30 },
  { date: 'May 4', usage: 45 },
  { date: 'May 5', usage: 70 },
];

// Route to get water usage data for bar chart
app.get('/water-usage', (req, res) => {
  res.json(waterUsageData);
});

// Example route for user registration
app.post('/register', async (req, res) => {
  try {
    const newUser = new User(req.body); // Assuming `User` is a model
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error registering user' });
  }
});
