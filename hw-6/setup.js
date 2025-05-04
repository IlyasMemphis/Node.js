// setup.js
import db from './db.js';

const createTable = `
  CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
  )
`;

db.query(createTable, (err, result) => {
  if (err) {
    console.error('Ошибка при создании таблицы:', err);
  } else {
    console.log('Таблица "products" создана или уже существует');
  }
  db.end();
});
