const express = require('express');
const router = express.Router();
const User = require('../models/User');

// ✅ 1. Create (POST)
router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ 2. Read All (GET)
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// ✅ 3. Read One (GET by id)
router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

// ✅ 4. Update (PUT)
router.put('/:id', async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(user);
});

// ✅ 5. Delete (DELETE)
router.delete('/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User deleted successfully' });
});

module.exports = router;
