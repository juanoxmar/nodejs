import fs from 'fs';
import path from 'path';
import rootDir from '../util/path';
import { nanoid } from 'nanoid';
import { productType } from 'src/@types/types';

const p = path.join(rootDir, 'data', 'products.json');

const getProductsFromFile = (cb?: any) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent.toString()));
    }
  });
};

export default class Product {
  title: string;
  imageUrl: string;
  description: string;
  price: string;
  id: string;

  constructor(
    title: string,
    imageUrl: string,
    description: string,
    price: string
  ) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    this.id = nanoid(8);
    getProductsFromFile((products: productType[]) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }

  static fetchAll(cb: any) {
    getProductsFromFile(cb);
  }

  static findById(id: string, cb: any) {
    getProductsFromFile((products: productType[]) => {
      const product = products.find((prod) => prod.id === id);
      cb(product);
    });
  }
}
