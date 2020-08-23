import express from 'express';

import {
  postAddProduct,
  getAddProduct,
  getProducts,
} from '../controllers/admin';

const router = express.Router();

router.get('/products', getProducts);
router.get('/add-product', getAddProduct);
router.post('/add-product', postAddProduct);

export default router;
