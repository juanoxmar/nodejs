import { RequestType, ProductType } from 'src/@types/types';
import Product from '../models/product';

export const getAddProduct: RequestType = (_req, res, _next): void => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false,
  });
};

export const postAddProduct: RequestType = (req, res, _next) => {
  // need body parser for req.body
  // products.push({ title: req.body.title });
  const product = new Product(
    req.body.title,
    req.body.imageUrl,
    req.body.description,
    req.body.price,
    null
  );
  product.save();
  res.redirect('/');
};

export const getEditProduct: RequestType = (req, res, _next): void => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId, (product) => {
    if (!product) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product,
    });
  });
};

export const postEditProduct: RequestType = (req, res, _next): void => {
  const updatedProduct = new Product(
    req.body.title,
    req.body.imageUrl,
    req.body.description,
    req.body.price,
    req.body.productId
  );
  updatedProduct.save();
  res.redirect('/admin/products');
};

export const getProducts: RequestType = (_req, res, _next) => {
  Product.fetchAll((products: ProductType[]) => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products',
    });
  });
};

export const postDeleteProduct: RequestType = (req, res, _next) => {
  Product.delete(req.body.productId);
  res.redirect('/admin/products');
};
