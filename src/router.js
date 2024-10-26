import { homeController } from './controllers/home.js';
import { apiController } from './controllers/api.js';

export function router(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  
  if (url.pathname === '/') {
    return homeController(req, res);
  }
  
  if (url.pathname.startsWith('/api')) {
    return apiController(req, res);
  }
  
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not Found' }));
}