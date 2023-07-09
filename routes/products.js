import express from 'express';
import { createProduct } from '../controllers/products.js';
import auth from '../middleware/auth.js';
const products = express.Router();

products.post('/', auth, createProduct);

export default products;
