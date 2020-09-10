import express from 'express';

export type ProductType = {
  title: string;
  imageUrl: string;
  description: string;
  price: string;
  id: string;
};

export type RequestType = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => void;

export type CartProduct = {
  id: string;
  qty: number;
};

export type CartType = {
  products: CartProduct[];
  totalPrice: number;
};
