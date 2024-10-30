// thsi is code using routing for http

const http = require('http');

const server = http.createServer((req,res) =>{

    if (req.url =="/about"){
        res.end('the about page')
    }

    if (req.url =="/profile"){
        res.end('the profile page')
    }

    if (req.url =="/"){
        res.end('the home page')
    }
   // console.log(req.url)
   // res.end('hello world')
})

server.listen(3001)