const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

const STRAPI_URL = process.env.STRAPI_URL;
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

// Function to fetch all items from Strapi
async function getAllItems() {
  try {
    const response = await axios.get(`${STRAPI_URL}/api/items-collections?populate=Images`, {
      headers: { 
        'Authorization': `Bearer ${STRAPI_TOKEN}`
      }
    });
    return response.data.data; // Assuming data is an array of items
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Handle or throw the error as needed
  }
}

async function getOneItem(id) {
  try {
    const response = await axios.get(`${STRAPI_URL}/api/items-collections/${id}?populate=Images`, {
      headers: { 
        'Authorization': `Bearer ${STRAPI_TOKEN}`
      }
    });
    return response.data.data; // Assuming data is an array of items
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Handle or throw the error as needed
  }
}

// Endpoint to filter items by tag name
router.get('/tagitems', async (req, res) => {
  const tagName = req.query.tagname;
  try {
    const allItems = await getAllItems();
    const filteredItems = allItems.filter(item => {
      return Object.values(item.attributes.Tags).includes(tagName);
    });
    
    res.json(filteredItems); // Return filtered items as JSON
  } catch (error) {
    console.error('Error filtering items:', error);
    res.status(500).json({ error: 'Error filtering items' }); // Handle error response
  }
});


router.get('/idItem', async (req, res) => {
  const id = req.query.id;
  try {
    const Items = await getOneItem(id);
    res.json(Items); // Return filtered items as JSON
  } catch (error) {
    console.error('Error filtering items:', error);
    res.status(500).json({ error: 'Error filtering items' }); // Handle error response
  }
});

module.exports = router;


