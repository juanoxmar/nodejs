import fs from 'fs';
import path from 'path';
import rootDir from '../util/path';
import { cartType } from 'src/@types/types';

const p = path.join(rootDir, 'data', 'cart.json');

export default class Cart {
  static addProduct(id: string, productPrice: number) {
    //Fetch Previous cart
    fs.readFile(p, (err, fileContent) => {
      let cart: cartType = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent.toString());
      }

      //Analyze the Cart
      const existingProductIndex = cart.products.findIndex(
        (prod) => prod.id === id
      );
      const existingProduct = cart.products[existingProductIndex];
      let updatedProduct;

      // Add New Product / Increase Qty.
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      cart.totalPrice = +cart.totalPrice + productPrice;
      fs.writeFile(p, JSON.stringify(cart), (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }
}
