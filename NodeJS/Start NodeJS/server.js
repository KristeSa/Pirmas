const http = require("http");

const port = 5000;
const randomNumber = Math.round(Math.random());

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  if (randomNumber) {
    res.statusCode = 403;
    res.end("Error! Something went wrong!");
  }

  res.statusCode = 200;

  res.end("Hello");
});

server.listen(port, () => {
  console.log(`Server is running ${randomNumber}.`);
});
