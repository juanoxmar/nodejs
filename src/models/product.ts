import fs from 'fs';
import path from 'path';
import rootDir from '../util/path';

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

  constructor(t: string) {
    this.title = t;
  }

  save() {
    getProductsFromFile((products: any) => {
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
}