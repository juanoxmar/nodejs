import { RequestType, ProductType } from 'src/@types/types';
import Product from '../models/product';
import Cart from '../models/cart';

export const getProducts: RequestType = (_req, res, _next) => {
  Product.fetchAll((products: ProductType[]) => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products',
    });
  });
};

export const getProduct: RequestType = (req, res, _next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, (prod: ProductType) => {
    res.render('shop/product-detail', {
      product: prod,
      pageTitle: prod.title,
      path: '/products',
    });
  });
};

export const getIndex: RequestType = (_req, res, _next) => {
  Product.fetchAll((products: ProductType[]) => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
    });
  });
};

export const getCart: RequestType = (_req, res, _next) => {
  Cart.getCart((cart) => {
    Product.fetchAll((products) => {
      const cartProducts = [];
      for (const product of products) {
        const cartProdData = cart.products.find(
          (prod) => prod.id === product.id
        );
        if (cartProdData) {
          cartProducts.push({ productData: product, qty: cartProdData.qty });
        }
      }
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: cartProducts,
      });
    });
  });
};

export const postCart: RequestType = (req, res, _next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, (product: ProductType) => {
    Cart.addProduct(prodId, +product.price);
  });
  res.redirect('/cart');
};

export const postCartDeleteProduct: RequestType = (req, res, _next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, (product) => {
    Cart.deleteProduct(prodId, +product.price);
    res.redirect('/cart');
  });
};

export const getOrders: RequestType = (_req, res, _next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders',
  });
};

export const getCheckout: RequestType = (_req, res, _next) => {
  res.render('shop/checkout', {
    path: 'checkout',
    pagetTitle: 'Checkout',
  });
};
