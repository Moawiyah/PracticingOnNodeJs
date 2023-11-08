const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('content-Type', 'text')
    res.write("Welcome to vast!");
    res.end();
})

server.listen(port, 'localhost', () => {
    console.log(`Server is running on port ${port}`);
})