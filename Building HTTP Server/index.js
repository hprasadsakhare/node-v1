const http = require("http");
const fs = require("fs");


const myServer = http.createServer((req, res) => {
 //   console.log(req.headers);
    const log = `${Date.now()}: New Req Received`;
    fs.appendFile('log.txt',log,(err,data)=>{
        res.end("Hello from Server again");
    });
    
});

myServer.listen(8000, () => console.log("Server started on port 8000"));
