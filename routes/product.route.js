const express = require("express");
const router = express.Router(); // Use parentheses to call the function
const { getProducts, getProduct , createproduct, deleteProduct, updatedProduct} = require('../controllers/product.controller.js');

// Route definitions
router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', createproduct);
router.delete('/:id', deleteProduct);
router.put('/:id', updatedProduct);


// Correct export statement
module.exports = router;
