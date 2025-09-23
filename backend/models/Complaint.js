const mongoose = require('mongoose');

const ComplaintSchema = new mongoose.Schema({
  citizenName: { type: String, required: true },
  photo: { type: String, required: true },
  location: {
    lat: Number,
    lng: Number
  },
  status: { type: String, default: 'Pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Complaint', ComplaintSchema);
