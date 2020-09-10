import fs from 'fs';
import path from 'path';
import rootDir from '../util/path';
import { CartType, ProductType } from 'src/@types/types';

const p = path.join(rootDir, 'data', 'cart.json');

export default class Cart {
  static addProduct(id: string, productPrice: number): void {
    //Fetch Previous cart
    fs.readFile(p, (err, fileContent) => {
      let cart: CartType = { products: [], totalPrice: 0 };
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

  static deleteProduct(id: string, productPrice: number): void {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        return;
      }
      const updatedCart: CartType = { ...JSON.parse(fileContent.toString()) };
      const product = updatedCart.products.find((prod) => prod.id === id);
      const prodQty = product.qty;
      updatedCart.products = updatedCart.products.filter(
        (prod) => prod.id !== id
      );
      updatedCart.totalPrice = updatedCart.totalPrice - productPrice * prodQty;
      fs.writeFile(p, JSON.stringify(updatedCart), (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }
}
