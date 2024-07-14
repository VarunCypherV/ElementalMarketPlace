const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors module

const userAuthRouter = require('./_Routers/userAuth'); // Adjust the path as necessary
const tagCardRouter = require('./_Routers/tagcard'); // Adjust the path as
const reviewsRouter = require('./_Routers/reviews'); // Adjust the path as
const userDeetsRouter = require('./_Routers/userDeets'); //
const marketRouter = require('./_Routers/market'); //
const filtersRouter = require('./_Routers/filters'); //


require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const DB_PSWD = process.env.DB_PSWD;
const DB = `mongodb+srv://ElementalAdmin:${DB_PSWD}@cluster0.caesc5r.mongodb.net/UserAuth?retryWrites=true&w=majority&appName=Cluster0`;

// Connect to MongoDB
mongoose.connect(DB, {
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Middleware
app.use(cors({
  origin: ['http://localhost:3001',"https://clientnext.lcl.host:44383","https://clientnext.localhost:44383"], // Allow requests from this origin
  methods: ['GET', 'POST'], // Allow specific HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/auth', userAuthRouter);
app.use('/tagcard', tagCardRouter);
app.use('/reviews', reviewsRouter);
app.use('/userDeets', userDeetsRouter);
app.use('/market',marketRouter);
app.use('/filters', filtersRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
