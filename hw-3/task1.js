const fs = require('fs');

// Создание каталога 'myFolder'
fs.mkdir('myFolder', (err) => {
  if (err) {
    console.error('Ошибка при создании каталога:', err);
  } else {
    console.log('Каталог "myFolder" успешно создан.');

    // Удаление каталога 'myFolder'
    fs.rmdir('myFolder', (err) => {
      if (err) {
        console.error('Ошибка при удалении каталога:', err);
      } else {
        console.log('Каталог "myFolder" успешно удалён.');
      }
    });
  }
});
