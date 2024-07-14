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

router.get('/filterByTag', async (req, res) => {
    const tagName = req.query.tagname;
    const sortParam = req.query.sort; // 'a' for ascending, 'd' for descending
    
    try {
        const allItems = await getAllItems();
        let filteredItems = allItems.filter(item => {
            return Object.values(item.attributes.Tags).includes(tagName);
        });
        
        // Sort alphabetically
        if (sortParam === 'a') {
            filteredItems.sort((a, b) => {
                const nameA = a.attributes.Name.toUpperCase();
                const nameB = b.attributes.Name.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            });
        } else if (sortParam === 'd') {
            filteredItems.sort((a, b) => {
                const nameA = a.attributes.Name.toUpperCase();
                const nameB = b.attributes.Name.toUpperCase();
                if (nameA > nameB) {
                    return -1;
                }
                if (nameA < nameB) {
                    return 1;
                }
                return 0;
            });
        }

        res.json(filteredItems); // Return filtered and sorted items as JSON
    } catch (error) {
        console.error('Error filtering or sorting items:', error);
        res.status(500).json({ error: 'Error filtering or sorting items' }); // Handle error response
    }
});

// Endpoint to filter items by price range
router.get('/filterByPrice', async (req, res) => {
  const priceParam = parseInt(req.query.priceparam); // Parse the query parameter
  let filteredItems = [];

  try {
    const allItems = await getAllItems();

    switch (priceParam) {
      case 2:
        filteredItems = allItems.filter(item => item.attributes.SP < 500);
        break;
      case 3:
        filteredItems = allItems.filter(item => item.attributes.SP >= 500 && item.attributes.SP <= 1000);
        break;
      case 4:
        filteredItems = allItems.filter(item => item.attributes.SP > 1000 && item.attributes.SP <= 5000);
        break;
      case 5:
        filteredItems = allItems.filter(item => item.attributes.SP > 5000);
        break;
      default:
        filteredItems = allItems; // No filter applied
        break;
    }

    res.json(filteredItems);
  } catch (error) {
    console.error('Error filtering items by price:', error);
    res.status(500).json({ error: 'Error filtering items by price' });
  }
});

router.get('/filterByReviews', async (req, res) => {
  
});




module.exports = router;


