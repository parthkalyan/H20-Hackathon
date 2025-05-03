// ----------- App Setup (Back-End Setup) -----------
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// ----------- Models (User Data and Water Data) -----------
const WaterUsage = require('./models/WaterUsage'); // Water Data Model
const User = require('./models/User'); // User Data Model

const app = express();

// Middleware for parsing JSON bodies
app.use(bodyParser.json());

// ----------- MongoDB Connection (App Setup) -----------
mongoose.connect('mongodb://localhost:27017/water_usage', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB connection error:', err));

// ----------- Routes (App Setup and User Data / Water Data) -----------

// 1. GET /usage - Fetch all water usage data (Water Data)
app.get('/usage', async (req, res) => {
  try {
    const waterUsageData = await WaterUsage.find();
    res.json(waterUsageData);
  } catch (err) {
    res.status(500).json({ message: "Error fetching data" });
  }
});

// 2. POST /usage - Save new water usage data (Water Data)
app.post('/usage', async (req, res) => {
  const { meter_id, timestamp, usage_liters } = req.body;
  try {
    const newUsage = new WaterUsage({ meter_id, timestamp, usage_liters });
    await newUsage.save();
    res.status(201).json({ message: 'Water usage data saved successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error saving data' });
  }
});

// ----------- User Registration and Login (User Data) -----------

// 3. POST /register - Register a new user (User Data)
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10); // Hash password
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error registering user' });
  }
});
