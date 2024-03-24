const http = require("http");

const PORT = process.env.PORT || 3000;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    const url = req.url;
    const method = req.method;
    console.log(url);
    console.log(method);
    res.write("<h1>Cześć, Node</h1>");
    res.write(`<h3>Routing</h3>`);
    res.write(`<p>Server working on port ${PORT}</p>`);
    res.write(`<p>URL: ${url}</p>`);
    res.write(`<p>Method ${method}</p>`);
    res.end();
  })
  .listen(PORT, "localhost", () => {
    console.log(`Server working on port ${PORT}`);
  });
