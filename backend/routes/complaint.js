const express = require('express');
const router = express.Router();
const Complaint = require('../models/Complaint');

// Get all complaints
router.get('/', async (req, res) => {
  try {
    const complaints = await Complaint.find().sort({ createdAt: -1 });
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create complaint
router.post('/', async (req, res) => {
  try {
    const newComplaint = new Complaint(req.body);
    await newComplaint.save();
    res.json({ message: 'Complaint submitted!', complaint: newComplaint });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update complaint status
router.put('/:id', async (req, res) => {
  try {
    await Complaint.findByIdAndUpdate(req.params.id, { status: req.body.status });
    res.json({ message: 'Status updated!' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
