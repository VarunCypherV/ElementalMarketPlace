const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();
const axios = require("axios");
require("dotenv").config();

const STRAPI_URL = process.env.STRAPI_URL;
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;
const UserDetails = require("../_Models/UserDetails");

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
    console.error("Error adding to cart:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});


// ================================================================ visited


router.post("/addToVisited", upload.none(), async (req, res) => {
  const { userid, itemid } = req.body;
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
    
    const userCollection = collectionResponse.data.data.attributes;
    const updatedVisited = [...new Set([...userCollection.items_visited.data.map(item => item.id), Number(itemid)])];
    console.log(updatedVisited)
    await axios.put(
      `${STRAPI_URL}/api/user-collections/${foundId}`,
      {
        data: {
          items_visited: updatedVisited,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    res.status(200).json({ message: "Item added to Visited successfully" });
  } catch (error) {
    console.error("Error adding to Visited:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});



router.get("/getVisited", upload.none(), async (req, res) => {
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
    const collectionResponse = await axios.get(
      `${STRAPI_URL}/api/user-collections/${foundId}?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    
    const userCollection = collectionResponse.data.data.attributes;
    const visitedItems = userCollection.items_visited.data;
    console.log(userCollection.items_visited.data)
    
    const itemsDetails = await Promise.all(
      visitedItems.map(async (item) => {
        const itemDetails = await getOneItem(item.id);
        return itemDetails;
      })
    );

    res.status(200).json({ Visited: itemsDetails });
  } catch (error) {
    console.error("Error adding to Visited:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

// ================================================================favoutires


router.post("/addToFav", upload.none(), async (req, res) => {
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
    
    const userCollection = collectionResponse.data.data.attributes;
    const updatedFavourites = [...new Set([...userCollection.favourites.data.map(item => item.id), Number(itemid)])];

    await axios.put(
      `${STRAPI_URL}/api/user-collections/${foundId}`,
      {
        data: {
          favourites: updatedFavourites,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    res.status(200).json({ message: "Item added to Favourites successfully" });
  } catch (error) {
    console.error("Error adding to Favourites:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});



router.get("/getFav", upload.none(), async (req, res) => {
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
    
    const favouritesItems = userCollection.favourites.data;
    console.log(userCollection.favourites.data)
    
    const itemsDetails = await Promise.all(
      favouritesItems.map(async (item) => {
        const itemDetails = await getOneItem(item.id);
        return itemDetails;
      })
    );

    res.status(200).json({ Favourites: itemsDetails });

  } catch (error) {
    console.error("Error adding to Favourites:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});


module.exports = router;

