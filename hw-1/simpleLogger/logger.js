const fs = require('fs');
const path = require('path');

function logMessage(message) {
  const logPath = path.join(__dirname, 'log.txt');
  const timestamp = new Date().toISOString();
  const fullMessage = `[${timestamp}] ${message}\n`;

  fs.appendFile(logPath, fullMessage, (err) => {
    if (err) {
      console.error('Ошибка при записи в лог:', err);
    } else {
      console.log('Сообщение записано в лог.');
    }
  });
}

module.exports = { logMessage };
