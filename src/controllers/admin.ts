import { requestType } from 'src/@types/types';
import Product from '../models/product';

export const getAddProduct: requestType = (req, res, next): void => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
  });
};

export const postAddProduct: requestType = (req, res, next) => {
  // need body parser for req.body
  // products.push({ title: req.body.title });
  const product = new Product(
    req.body.title,
    req.body.imageurl,
    req.body.description,
    req.body.price
  );
  product.save();
  res.redirect('/');
};

export const getProducts: requestType = (req, res, next) => {
  Product.fetchAll((products: any) => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products',
    });
  });
};
