const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const Publisher = require('./models/Publisher');
const Magazine = require('./models/Magazine');
const Tag = require('./models/Tag');
const Article = require('./models/Article');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Подключение к MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Маршрут по умолчанию
app.get('/', (req, res) => {
  res.send('Hello from Express + Mongoose App');
});


// ===== ЗАДАНИЕ 2: Один ко многим (Publisher → Magazine) =====

// Создать Publisher
app.post('/publishers', async (req, res) => {
  try {
    const publisher = new Publisher(req.body);
    await publisher.save();
    res.status(201).json(publisher);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Создать Magazine с ссылкой на Publisher
app.post('/magazines', async (req, res) => {
  try {
    const magazine = new Magazine(req.body);
    await magazine.save();
    res.status(201).json(magazine);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Получить все журналы с данными издателя
app.get('/magazines', async (req, res) => {
  try {
    const magazines = await Magazine.find().populate('publisher');
    res.json(magazines);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ===== ЗАДАНИЕ 3: Многие ко многим (Tag ↔ Article) =====

// Создать Tag
app.post('/tags', async (req, res) => {
  try {
    const tag = new Tag(req.body);
    await tag.save();
    res.status(201).json(tag);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Создать Article и связать с тегами
app.post('/articles', async (req, res) => {
  try {
    const article = new Article(req.body);
    await article.save();

    // Обновить каждый тег, добавив ссылку на статью
    if (article.tags && article.tags.length > 0) {
      await Tag.updateMany(
        { _id: { $in: article.tags } },
        { $addToSet: { articles: article._id } }
      );
    }

    res.status(201).json(article);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Получить статьи с тегами
app.get('/articles', async (req, res) => {
  try {
    const articles = await Article.find().populate('tags');
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Получить теги с их статьями
app.get('/tags', async (req, res) => {
  try {
    const tags = await Tag.find().populate('articles');
    res.json(tags);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
