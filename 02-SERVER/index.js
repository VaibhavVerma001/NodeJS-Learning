const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    // console.log(req);
    // console.log(req.headers);

    const log = `${Date.now()}: ${req.url} New Req Received\n`;
    fs.appendFile("log.txt", log, (err, data) => {
        switch(req.url){
            case '/': res.end("HomePage");
            break
            case '/about': res.end("I am Vaibhav Verma");
            break
            default:
                res.end("404 Not Found");
        }
        // res.end("Hello From Server");
    });

    // res.end("Hello From Server");
});

myServer.listen(8000, () => console.log("Server Started!"));