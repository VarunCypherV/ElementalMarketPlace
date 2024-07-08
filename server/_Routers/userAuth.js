const express = require("express");
const router = express.Router();
const User = require("../_Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const upload = multer();
const axios = require("axios");
require("dotenv").config();

const STRAPI_URL = process.env.STRAPI_URL;
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

// User registration
router.post("/register", upload.none(), async (req, res) => {
  const { userid, username, password } = req.body;
  console.log('Register Payload:', req.body);  // Log payload to check

  try {
    if (!userid || !username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ userid, username, password: hashedPassword });

    const savedUser = await newUser.save(); // Save user in MongoDB

    const token = STRAPI_TOKEN;
    try {
      const response = await axios.post(
        `${STRAPI_URL}/api/user-ids`,
        { "data": {"userid": userid} },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (!response.ok) {
        throw new Error("Error creating user ID in Strapi");
      }
    } catch (e) {
      console.error(e);
    }
    res
      .status(201)
      .json({ message: "User registered successfully", user: savedUser });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error registering user", error: error.message });
  }
});

router.post("/login", upload.none(), async (req, res) => {
  const { username, password } = req.body;
  console.log('Login Payload:', req.body);  // Log payload to check

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid username or password" });
    }
    const token = jwt.sign({ userid: user.userid }, "your_jwt_secret", {
      expiresIn: "1h",
    });
    const userid = user.userid
    res.status(200).json({ message: "Login successful", token , userid});
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
});

module.exports = router;
