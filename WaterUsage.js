const mongoose = require('mongoose');

const waterUsageSchema = new mongoose.Schema({
  meter_id: { type: String, required: true },
  timestamp: { type: Date, required: true },
  usage_liters: { type: Number, required: true },
});

module.exports = mongoose.model('WaterUsage', waterUsageSchema);
