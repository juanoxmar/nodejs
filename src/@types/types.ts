import express from 'express';

export type productType = {
  title: string;
  imageUrl: string;
  description: string;
  price: string;
};

export type requestType = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => void;
