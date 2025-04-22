const fs = require('fs');
const dotenv = require('dotenv');

// Загрузка переменных окружения
dotenv.config();

// Получение имени файла из .env
const filename = process.env.FILENAME;

// Запись в файл
fs.writeFile(filename, 'Это содержимое было записано из Node.js!', (err) => {
  if (err) {
    console.error('Ошибка при записи файла:', err);
  } else {
    console.log(`Файл "${filename}" успешно создан.`);

    // Чтение из файла
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        console.error('Ошибка при чтении файла:', err);
      } else {
        console.log(`Содержимое файла "${filename}":`);
        console.log(data);
      }
    });
  }
});
