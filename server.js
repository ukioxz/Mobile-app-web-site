const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');

const jsonParser = express.json()

const hostname = '127.0.0.1';
const port = 3000;
const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

server.listen(port, hostname, () => {
  console.log(`Server running at http ${port}`);
});
