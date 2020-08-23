import express from 'express';

import {
  getProducts,
  getCart,
  getCheckout,
  getIndex,
  getOrders,
} from '../controllers/shop';

const router = express.Router();

router.get('/', getIndex);
router.get('/products', getProducts);
router.get('/orders', getOrders);
router.get('/cart', getCart);
router.get('/checkout', getCheckout);

export default router;
