import { createServer } from './server.js';
import { config } from './config.js';
import { logger } from './utils/logger.js';

const server = createServer();

server.listen(config.port, () => {
  logger.info(`Server running at http://localhost:${config.port}/`);
});