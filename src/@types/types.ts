import express from 'express';

export type productType = {
  title: string;
};

export type requestType = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => void;
