// reviews.js

const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_TOKEN || 'your_strapi_token_here'; // Replace with your actual token

// GET /api/reviews/product
router.get('/product', async (req, res) => {
  try {
    const { userid, itemid } = req.query;

    // Fetch all reviews from Strapi
    const reviewsResponse = await axios.get(`${STRAPI_URL}/api/reviews?populate=*`, {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`
      }
    });

    const reviews = reviewsResponse.data.data;
    const filteredReviews = reviews.filter(review => {
      return review.attributes.reviewId.data.attributes.ItemId === itemid;
    });

    // Sort filtered reviews, user's review first if available
    filteredReviews.sort((a, b) => {
      if (a.attributes.user_id.data.attributes.userid === userid) return -1;
      if (b.attributes.user_id.data.attributes.userid === userid) return 1;
      return 0;
    });

    res.json(filteredReviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
