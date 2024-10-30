const http = require('http');

const server = http.createServer((req,res) =>{
    console.log(req.url)
    res.end('hello world')
})

server.listen(3001)