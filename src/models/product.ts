import fs from 'fs';
import path from 'path';
import rootDir from '../util/path';
import { nanoid } from 'nanoid';
import { ProductType } from 'src/@types/types';

const p = path.join(rootDir, 'data', 'products.json');

type CB = (product: ProductType) => void;
type AllProdCB = (products: ProductType[]) => void;

const getProductsFromFile = (cb?: AllProdCB) => {
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
    price: string,
    id: string
  ) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
    this.id = id;
  }

  save(): void {
    getProductsFromFile((products: ProductType[]) => {
      if (this.id) {
        const existProdIndex = products.findIndex(
          (prod) => prod.id === this.id
        );
        const updatedProducts = [...products];
        updatedProducts[existProdIndex] = this;
        fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
          if (err) {
            console.log(err);
          }
        });
      } else {
        this.id = nanoid(8);
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), (err) => {
          if (err) {
            console.log(err);
          }
        });
      }
    });
  }

  static fetchAll(cb: AllProdCB): void {
    getProductsFromFile(cb);
  }

  static findById(id: string, cb: CB): void {
    getProductsFromFile((products: ProductType[]) => {
      const product = products.find((prod) => prod.id === id);
      cb(product);
    });
  }
}
