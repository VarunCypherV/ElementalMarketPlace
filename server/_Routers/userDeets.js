const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();
const axios = require("axios");
require("dotenv").config();

const STRAPI_URL = process.env.STRAPI_URL;
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;
const UserDetails = require("../_Models/UserDetails");


router.get("/addresses", async (req, res) => {
  const { userId } = req.query;

  try {
    const userDetails = await UserDetails.findOne({ userId });

    if (!userDetails) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ addresses: userDetails.addresses });
  } catch (error) {
    res.status(500).json({ message: "Error fetching addresses", error: error.message });
  }
});


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
    console.log(foundId);
    // Step 2: Use the found ID to get user collection data
    const collectionResponse = await axios.get(
      `${STRAPI_URL}/api/user-collections/${foundId}?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    
    const userCollection = collectionResponse.data.data.attributes;
    console.log(userCollection.Cart.data)
    // Step 3: Add the itemid to the cart attribute in user collection
    const updatedCart = [...new Set([...userCollection.Cart.data.map(item => item.id), Number(itemid)])];

    await axios.put(
      `${STRAPI_URL}/api/user-collections/${foundId}`,
      {
        data: {
          Cart: updatedCart,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    res.status(200).json({ message: "Item added to cart successfully" });
  } catch (error) {
    // console.error("Error adding to cart:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});



router.get("/getCart", upload.none(), async (req, res) => {
  const { userid } = req.query; 
  try {
    if (!userid) {
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
    
    const userCollection = collectionResponse.data.data.attributes;
      res.status(200).json({ cart: userCollection.Cart.data });
  } catch (error) {
    // console.error("Error adding to cart:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});





module.exports = router;

