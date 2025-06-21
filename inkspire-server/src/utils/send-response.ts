import { Request, Response } from "express";

export const sendResponse = (
  res: Response,
  message: string,
  data: any,
  statusCode: number
) => {
  res.status(statusCode).json({
    data: data,
    message: message,
  });
};
