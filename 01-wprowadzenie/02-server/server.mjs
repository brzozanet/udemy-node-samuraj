// const http = require("http");
import http from "http";

const server = http.createServer((request, response) => {
  console.log(request.url);
  response.writeHead(200, { "Content-Type": "text/html" });
  response.end("<h1>Hello React.js!</h1>");
});

server.listen(5500, "127.0.0.1", () => console.log("Localhost server started"));
