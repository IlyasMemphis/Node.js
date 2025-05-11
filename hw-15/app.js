const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Обслуживаем папку public как статику
app.use(express.static(path.join(__dirname, 'public')));

// Обработка подключения через WebSocket
io.on('connection', (socket) => {
  console.log('🟢 Пользователь подключился');

  socket.on('chatMessage', (msg) => {
    console.log('📨 Получено сообщение от клиента:', msg);

    // Отправка подтверждения обратно клиенту
    socket.emit('messageFromServer', `Сообщение получено: "${msg}"`);
  });

  socket.on('disconnect', () => {
    console.log('🔴 Пользователь отключился');
  });
});

const PORT = 3015;
server.listen(PORT, () => {
  console.log(`🚀 Сервер запущен: http://localhost:${PORT}`);
});
