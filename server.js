const http = require('http');
const fs = require('fs');
const port = 4000;

const server = http.createServer((req, res) => {

    res.setHeader('content-Type', 'text/html')
    console.log(req.url);

    if (req.url == "/") {
        fs.readFile('./view/index.html', (err, data) => {
            if (err) {
                console.log(err);
                res.end();
            } else {
                res.write(data);
                res.end();
            }
        });
    } else if (req.url == "/person" && req.method == "POST") {
        res.end("The data was received successfully");
    }

})

server.listen(port, 'localhost', () => {
    console.log(`Server is running on port ${port}`);
})