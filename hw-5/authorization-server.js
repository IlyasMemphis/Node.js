const http = require('http');

const server = http.createServer((req, res) => {
    const authHeader = req.headers['authorization']

    if (!authHeader) {
        res.statusCode = 401;
        res.end('Authorization header received')
    } else {
        res.statusCode = 200; 
        res.end('Authorization header received')
    }
})

server.listen(3000, () => {
    console.log('Сервер запущен на порту 3000 (Authorization)');
    
})