import { Request, Response, NextFunction } from 'express';
import { HttpException } from '../exceptions/httpException.js';

export interface ErrorResponse {
  error: string;
  details?: unknown;
  statusCode: number;
}

export const errorMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  let statusCode = 500;
  let message = 'Internal Server Error';
  let details: unknown = undefined;

  if (err instanceof HttpException) {
    statusCode = err.statusCode;
    message = err.message;
    details = err.details;
  } else if (err.name === 'ValidationError') {
    statusCode = 400;
    message = 'Validation failed';
    details = (err as any).errors || err.message;
  } else if (err.name === 'CastError') {
    statusCode = 400;
    message = 'Invalid ID format';
    details = err.message;
  } else if (err.name === 'MongoServerError' || err.name === 'MongoError') {
    statusCode = 500;
    message = 'Database operation failed';
    details = err.message;
  }

  const response: ErrorResponse = {
    error: message,
    statusCode,
  };

  if (details && process.env.NODE_ENV !== 'production') {
    response.details = details;
  }

  res.status(statusCode).json(response);
};