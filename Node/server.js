const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require("cookie-parser");
require('dotenv').config();

const app = express();
app.use(cors({
  origin: 'http://localhost:5173', // your frontend domain
  credentials: true
}));

app.use(express.json());

app.use(cookieParser());
mongoose.connect("mongodb://localhost:27017/")
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use('/api/auth', require('./src/routes/auth'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
