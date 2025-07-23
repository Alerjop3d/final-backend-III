import { logger } from '../logger.js';

export const logRequest = (req, res, next) => {
  logger.info(`[${req.method}] ${req.originalUrl}`);
  next();
};


