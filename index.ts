import http, { ServerResponse } from "http";

const server = http.createServer(
  (req: http.IncomingMessage, res: ServerResponse<http.IncomingMessage>) => {
    res.writeHead((res.statusCode = 200), {
      "content-type": "text/html",
    });
    console.log("");
    const data = req.rawHeaders[7].split('"')[1];
    console.log("Data: ", data);
    const Postdata = req.rawHeaders[6].split("-")[0];
    console.log("Postdata: ", Postdata);

    if (data === undefined) {
      res.write(`You are using ${Postdata} to access me!`);
    } else {
      res.write(`You are using ${data} to access me!`);
    }

    res.end();
  }
);

server.on("connection", () => {
  console.log("");
  console.log("Connection established");
});

server.listen(2323, () => {
  console.log("");
  console.log("Server is live using http channel");
});
