const express = require('express');
const db = require('./db.js'); // подключаем базу данных

const app = express();
const PORT = 3002;

app.use(express.json());

// Главная страница
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Получение всех продуктов
app.get('/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Ошибка при получении продуктов');
    }
    res.json(results);
  });
});

// Добавление продукта
app.post('/products', (req, res) => {
  const { name, price } = req.body;

  if (!name || price === undefined) {
    return res.status(400).send('Нужны поля: name и price');
  }

  const sql = 'INSERT INTO products (name, price) VALUES (?, ?)';
  db.query(sql, [name, price], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Ошибка при добавлении продукта');
    }
    res.json({ message: 'Продукт добавлен', id: result.insertId });
  });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
