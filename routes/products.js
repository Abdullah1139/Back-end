import express from 'express'
import { createProduct } from '../controllers/products.js'
const products = express.Router();

products.post('/', createProduct);

export default products;