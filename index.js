import http from 'http';

const server = http.createServer((req, res)=>{
  res.writeHead(200, {'Comtent-Type': 'text/plain'});
  res.end('Hello, World');
});
server.listen(4000, () => console.log('server berjalan di http://localhost:4000'));
