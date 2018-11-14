const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express();

// BODY PARSER MIDDLEWARE
app.use(bodyParser.json())

// DB Config
const db = require('./config/keys').mongoURI;

// CONNECT TO MONGO
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server started on port 5000'));
// START SERVER USING npm run server