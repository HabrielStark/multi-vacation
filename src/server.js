import http from 'http';
import { router } from './router.js';
import { logger } from './utils/logger.js';

export function createServer() {
  return http.createServer((req, res) => {
    logger.info(`${req.method} ${req.url}`);
    router(req, res);
  });
}