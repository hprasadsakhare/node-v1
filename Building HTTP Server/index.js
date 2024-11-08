const http = require("http");

const myServer = http.createServer((req, res) => {
    console.log("New request received");
    res.end("Hello from Server");
});

myServer.listen(8000, () => console.log("Server started on port 8000"));
