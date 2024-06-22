// npm pkg set type="module" allows us to use import and stuff es6
// "type": "module" in package json

// EXPRESS IMPORTS
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const cors = require('cors');
const app = express();


const userRegisterRouter = require('./Routers/userRegisterRouter');
const userLoginRouter = require('./Routers/userLoginRouter');

// DATABASE CONNECTION
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://ElementalAdmin:ElementalSecurity2004@cluster0.caesc5r.mongodb.net/");
mongoose.connection.once('open', () => {
    console.log('connected to database');
});

// startServer();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/api', userRegisterRouter);
app.use('/api', userLoginRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});