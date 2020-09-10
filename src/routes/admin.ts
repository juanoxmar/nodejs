import express from 'express';

import {
  postAddProduct,
  getAddProduct,
  getProducts,
  getEditProduct,
  postEditProduct,
} from '../controllers/admin';

const router = express.Router();

router.get('/add-product', getAddProduct);
router.get('/products', getProducts);
router.post('/add-product', postAddProduct);
router.get('/edit-product/:productId', getEditProduct);
router.post('/edit-product', postEditProduct);

export default router;
