const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>Cześć, Node</h1>");
    res.write(`<h3>Oto skrypt</h3>`);
    res.write(`<script src="./code.js"></script>`);
    res.end();
  })
  .listen(3000, "localhost");
