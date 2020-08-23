import { requestType, productType } from 'src/@types/types';
import Product from '../models/product';

export const getAddProduct: requestType = (req, res, next): void => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

export const postAddProduct: requestType = (req, res, next) => {
  // need body parser for req.body
  // products.push({ title: req.body.title });
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

export const getProducts: requestType = (req, res, next) => {
  Product.fetchAll((products: any) => {
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};
