// Create a Web Server
// Create a Web Server that listen to the port 3000
const http = require('http');
const fs = require('fs');
const url = require('url');
const comments = require('./comments.js');
const querystring = require('querystring');
const port = 3000;

const server = http.createServer((req, res) => {
  const path = url.parse(req.url).pathname;
  console.log('path:', path);
  if (path === '/comments') {
    if (req.method === 'GET') {
      const data = comments.getComments();
      res.end(data);
    } else if (req.method === 'POST') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });
      req.on('end', () => {
        const post = querystring.parse(body);
        comments.addComment(post.comment);
        res.end('Comment added');
      });
    }
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
// Create a new file called comments.js