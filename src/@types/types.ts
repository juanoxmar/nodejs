import express from 'express';

export type productType = {
  title: string;
  imageUrl: string;
  description: string;
  price: string;
  id: string;
};

export type requestType = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => void;

export type cartProduct = {
  id: string;
  qty: number;
};

export type cartType = {
  products: cartProduct[];
  totalPrice: number;
};
