const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") return res.end();

    const log = `${Date.now()}: ${req.method} ${req.url} New Req Received\n`;
    const myUrl = url.parse(req.url, true);

    console.log(myUrl);

    fs.appendFile('log.txt', log, (err) => {
        if (err) {
            console.error("Error writing to log file:", err);
            res.statusCode = 500;
            return res.end("Internal Server Error");
        }

        switch (myUrl.pathname) {
            case '/':
                res.end("HomePage");
                break;
                
            case '/about':
                const username = myUrl.query.username;
                res.end(`Hi, ${username}`);
                break;

            case '/search':
                const search = myUrl.query.search_query;
                res.end("Here are your results for " + search);
                break;

            default:
                res.statusCode = 404;
                res.end("404 Not Found");
        }
    });
});

myServer.listen(8000, () => console.log("Server started on port 8000"));
