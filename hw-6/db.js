// db.js
import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'an2641218#*', 
  database: 'product_db'
});

connection.connect(err => {
  if (err) {
    console.error('Ошибка подключения к MySQL:', err);
  } else {
    console.log('Успешное подключение к MySQL');
  }
});

export default connection;
