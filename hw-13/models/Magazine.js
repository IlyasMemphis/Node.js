const mongoose = require('mongoose');

// Импортируем модель Publisher
const Publisher = require('./Publisher');

const magazineSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  issueNumber: {
    type: Number,
    required: true
  },
  publisher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Publisher',
    required: true
  }
});

const Magazine = mongoose.model('Magazine', magazineSchema);
module.exports = Magazine;
