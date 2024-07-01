
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userid: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

  const User = mongoose.model('User', userSchema,"Users");

module.exports = User;