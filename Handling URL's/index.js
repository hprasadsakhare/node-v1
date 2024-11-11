const http = require("http");
const fs = require("fs");


const myServer = http.createServer((req, res) => {
 //   console.log(req.headers);
    const log = `${Date.now()}: ${req.url} New Req Received\n`;
    fs.appendFile('log.txt',log,(err,data)=>{
        switch(req.url){
            case '/': res.end("HomePage");
            break;
            case '/about': res.end("The About Page");
            break;
            default: res.end("404 Not Found");
        }
    });
    
});

myServer.listen(8000, () => console.log("Server started on port 8000"));
