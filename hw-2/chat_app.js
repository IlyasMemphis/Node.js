const EventEmitter = require('events');

const chatEmitter = new EventEmitter();

function sendMessage(user, message, emitter) {
    emitter.emit('message', {user, message });
}

chatEmitter.on('message', ({ user, message }) => {
    console.log(`${user}: ${message}`);
});

sendMessage('Аня', 'Привет всем!', chatEmitter);
sendMessage('Борис', 'Как дела?', chatEmitter);
sendMessage('Катя', 'Отлично! А у тебя?', chatEmitter);