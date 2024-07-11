const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();
const axios = require("axios");
require("dotenv").config();

const STRAPI_URL = process.env.STRAPI_URL;
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

router.get("/coupons", upload.none(), async (req, res) => {
  const { Usercode } = req.query;
  try {
    // Fetch coupons from Strapi backend
    const response = await axios.get(`${STRAPI_URL}/api/coupons`, {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
    });

    // Find coupon matching Usercode
    console.log(response.data.data);
    const coupon = response.data.data.find(
      (coupon) => coupon.attributes.Code === Usercode
    );

    if (coupon) {
      // If coupon found, send coupon details
      res.status(200).json({ coupon });
    } else {
      // If coupon not found, send appropriate message or status
      res.status(404).json({ message: "Coupon not found" });
    }
  } catch (error) {
    console.error("Error fetching coupons:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
