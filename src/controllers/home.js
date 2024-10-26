export function homeController(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    message: 'Welcome to the Node.js API',
    version: '1.0.0'
  }));
}