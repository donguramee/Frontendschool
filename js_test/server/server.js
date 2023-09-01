const http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200);
      res.end("main url");
    } else if (req.url === "/upload") {
      res.writeHead(200);
      res.end("upload url");
    } else if (req.url === "/delete") {
      res.writeHead(200);
      res.end("delete url");
    } else if (404) {
      res.writeHead(200);
      res.end("Not Found");
    }
  })
  .listen(3000, () => {
    console.log("3000 포트 서버 접속 완료~!!!");
  });

//포스트맨에서 안될땐 터미널에서 컨트롤c를 누른 후 다시 서버접속
