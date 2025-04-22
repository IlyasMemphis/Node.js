const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    try {
        throw new Error('Произошла тестовая ошибка')
    } catch (error) {
        const logMessage = `[${new Date().toISOString()}] ${error.message}\n`;

        fs.appendFile('errors.log', logMessage, (err) => {
            if (err) console.error('Ошибка при записи в лог:', err);
        })

        res.writeHead(500, { 'Content-Type': 'text/plain' });
    }
})

server.listen(3000, () => {
    console.log('Сервер запущен на порту 3000 (Errr Logging');
})