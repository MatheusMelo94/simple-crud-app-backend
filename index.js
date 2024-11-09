const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require("./routes/product.route.js");

// Use middleware correctly with parentheses
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/products', productRoute);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
  res.send("Hello from Node API Server");
});




mongoose.connect('mongodb+srv://matheuscaique:Maninholoko09!@backenddb.s5ud8.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
  .then(() => console.log('Connected!'))
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
