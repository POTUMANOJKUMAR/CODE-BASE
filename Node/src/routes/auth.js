const express = require('express');
const router = express.Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middleware');

router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = new User({ email, password });
    await user.save();
    res.status(201).json({ message: 'User registered' });
  } catch (err) {
    res.status(400).json({ error: 'User already exists' });
  }
});

router.post('/login', async (req, res) => {

  const { email, password } = req.body;
  console.log(email,password,"email")
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: 'Invalid credentials', });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({message: 'Invalid credentials' });

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    const cookieOptions = {
      httpOnly: true, // prevents JS access
      secure: false,   // ensures cookie is sent only over HTTPS
      sameSite: 'Lax', // use 'None' for cross-site; requires 'secure' to be true  
      maxAge: 60 * 60 * 1000, // 1 hour
    };

    res.cookie('token', token, cookieOptions).json({ status: true, message: 'Login Successfully' });

});

router.get('/all-users', verifyToken, async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json({ status: true, data:users ,message:" Data Fetched SuccessFully" });
  } catch (err) {
    res.status(500).json({ status: false, message: 'Server error'});
  }
});

module.exports = router;
