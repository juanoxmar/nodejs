import express from 'express';

import {
  getProducts,
  getCart,
  getCheckout,
  getIndex,
  getOrders,
  getProduct,
  postCart,
} from '../controllers/shop';

const router = express.Router();

router.get('/', getIndex);
router.get('/products', getProducts);
router.get('/products/:productId', getProduct);
router.get('/cart', getCart);
router.post('/cart', postCart);
router.get('/orders', getOrders);
router.get('/checkout', getCheckout);

export default router;
