import express from 'express';

import {
  postAddProduct,
  getAddProduct,
  getProducts,
} from '../controllers/admin';

const router = express.Router();

router.get('/add-product', getAddProduct);
router.get('/products', getProducts);
router.post('/add-product', postAddProduct);

export default router;
