// app.js

import express from 'express';
import userRoutes from './routes/userRoutes.js'; // Импортируем маршруты

const app = express();

// Middleware для обработки JSON
app.use(express.json());

// Подключаем маршруты
app.use('/users', userRoutes);

app.listen(3000, () => {
  console.log('Сервер работает на порту 3000');
});
