export function apiController(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    status: 'success',
    data: {
      message: 'API endpoint ready'
    }
  }));
}