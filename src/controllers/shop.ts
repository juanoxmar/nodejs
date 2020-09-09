import { requestType } from 'src/@types/types';
import Product from '../models/product';
import Cart from '../models/cart';

export const getProducts: requestType = (req, res, next) => {
  Product.fetchAll((products: any) => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products',
    });
  });
};

export const getProduct: requestType = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, (prod: any) => {
    res.render('shop/product-detail', {
      product: prod,
      pageTitle: prod.title,
      path: '/products',
    });
  });
};

export const getIndex: requestType = (req, res, next) => {
  Product.fetchAll((products: any) => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
    });
  });
};

export const getCart: requestType = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart',
  });
};

export const postCart: requestType = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, (product: any) => {
    Cart.addProduct(prodId, +product.price);
  });
  res.redirect('/cart');
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
