const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();
const axios = require("axios");
require("dotenv").config();

const STRAPI_URL = process.env.STRAPI_URL;
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

router.post("/addToCart", upload.none(), async (req, res) => {
  const { userid, itemid } = req.body;
  console.log(userid, itemid);
  try {
    if (!userid || !itemid) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const token = STRAPI_TOKEN;

    // Step 1: Search for the user record to get the ID
    const searchResponse = await axios.get(`${STRAPI_URL}/api/user-ids`, {
      params: {
        filters: {
          userid: {
            $eq: userid,
          },
        },
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (searchResponse.data.data.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const foundId = searchResponse.data.data[0].id;

    // Step 2: Use the found ID to get user collection data
    const collectionResponse = await axios.get(
      `${STRAPI_URL}/api/user-collections/${foundId}?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(collectionResponse.data)
    res.status(200).json(collectionResponse.data);
  } catch (error) {
    console.error("Error adding to cart:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

module.exports = router;
