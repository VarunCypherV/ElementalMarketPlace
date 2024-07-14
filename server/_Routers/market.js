const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();
const axios = require("axios");
require("dotenv").config();
const mongoose = require('mongoose');

const DB_PSWD = process.env.DB_PSWD;
const DB = `mongodb+srv://ElementalAdmin:${DB_PSWD}@cluster0.caesc5r.mongodb.net/UserAuth?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


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

// https://api.stripe.com/v1/payment_intents/pi_3PcOOGJwJk61G0HF1m1bw4k7 to get paymentintentdetails
router.post('/saveOrder', upload.none(),async (req, res) => {
  const { userid, Price, Address, PaymentIntent } = req.body;
  const searchResponse = await axios.get(`${STRAPI_URL}/api/user-ids`, {
    params: {
      filters: {
        userid: {
          $eq: userid,
        },
      },
    },
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
  });

  if (searchResponse.data.data.length === 0) {
    return res.status(404).json({ message: "User not found" });
  }

  const foundId = searchResponse.data.data[0].id;


  const Items=JSON.parse(req.body.Items)
  const items = Items.reduce((acc, current) => {
    return { ...acc, ...current };
  }, {});
  try {
    const response = await axios.post(`${STRAPI_URL}/api/orders`, {
      data:{
        userid: foundId,
        Items: Items,
        Price: Price,
        Address: Address,
        PaymentIntent: PaymentIntent
      }
    }, {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });
    res.status(200).json({ message: 'Order saved successfully'});
  } catch (error) {
    console.error('Error saving order:', error);
    res.status(500).json({ message: 'Error saving order', error: error.statusCode });
  }
});




const User = require("../_Models/User");


// Assuming Mongoose connection is already established in your server.js

router.get('/getOrders', upload.none(), async (req, res) => {
  try {
    // Hit Strapi API to get orders
    const ordersResponse = await axios.get(`${STRAPI_URL}/api/orders`, {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`
      }
    });

    // Extract relevant data from Strapi response
    const orders = ordersResponse.data.data; // Assuming orders are in data property

    // Fetch user details from MongoDB based on userid (replace with your logic)
    const { userid } = req.params;
    const user = await User.findOne({ userId: userid });

    if (!user) {
      throw new Error("User not found");
    }

    // Constructing the response for each order
    const ordersData = orders.map(order => {
      const { Price, Items, Address, PaymentIntent, createdAt } = order.attributes;
      console.log(order.attributes);
      // Extract first 10 characters of paymentIntent for Invoice Id
      const invoiceId = `#${PaymentIntent.slice(0, 10)}`;
      const regularDate = new Date(createdAt);

      const day = regularDate.getUTCDate();
      const month = regularDate.getUTCMonth() + 1; // Months are zero-indexed, so we add 1
      const year = regularDate.getUTCFullYear();
      
      const Datee = `${day}/${month}/${year}`;

      return {
        "Ordered Date": Datee,
        "Order Value": `₹${Price}`,
        "Invoice Id": invoiceId,
        "Shipping Address": Address,
        "Name": user.username, 
        "Products": Items, 
        "Status": "Ordered", 
        "Expected Date Of Delivery": calculateExpectedDeliveryDate(),
      };
    });

    // Sending the constructed response
    res.json(ordersData);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Function to calculate expected delivery date (5 days from current date)
function calculateExpectedDeliveryDate() {
  const currentDate = new Date();
  const expectedDate = new Date(currentDate.setDate(currentDate.getDate() + 5));
  return expectedDate.toLocaleDateString('en-IN'); // Adjust locale as needed
}

module.exports = router;


module.exports = router;