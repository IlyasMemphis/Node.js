const express = require('express');
const app = express();

// Миддлвар для обработки JSON данных
app.use(express.json());

// Массив продуктов
let products = [
  { id: 1, name: 'Product One', price: 29.99 },
  { id: 2, name: 'Product Two', price: 49.99 },
];

// Маршрут для получения всех продуктов
app.get('/products', (req, res) => {
  res.json(products);
});

// Маршрут для получения продукта по ID
app.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));

  
    if (!product) return res.status(404).json({ message: 'Product not found' });
  
    res.json(product);
  });
  

// Запуск сервера на порту 3011
app.listen(3011, () => {
  console.log('Server is running on http://localhost:3011');
});
