import { requestType } from 'src/@types/types';
import Product from '../models/product';

export const getIndex: requestType = (req, res, next) => {
  Product.fetchAll((products: any) => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'All Products',
      path: '/',
    });
  });
};

export const getProducts: requestType = (req, res, next) => {
  Product.fetchAll((products: any) => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'Shop',
      path: '/products',
    });
  });
};

export const getCart: requestType = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart',
  });
};

export const getOrders: requestType = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders',
  });
};

export const getCheckout: requestType = (req, res, next) => {
  res.render('shop/checkout', {
    path: 'checkout',
    pagetTitle: 'Checkout',
  });
};
