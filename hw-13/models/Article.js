const mongoose = require('mongoose');

// Импортируем модель Tag
const Tag = require('./Tag');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  tags: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tag'
  }]
});

const Article = mongoose.model('Article', articleSchema);
module.exports = Article;
