const express = require('express');
const bcrypt = require('bcrypt');
// const User = require('../models/User'); gatsby Auto Includes

const userLoginRouter = express.Router();

userLoginRouter.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).send('Invalid username or password');
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).send('Invalid username or password');
    }
    res.send('Login successful');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error logging in');
  }
});

module.exports = userLoginRouter;
