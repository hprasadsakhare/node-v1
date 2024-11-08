const http = require("http");

const myServer = http.createServer((req,res)=>{
    console.log("new Req Rec.")
    rec.end("Hello From Seerveer");
});

