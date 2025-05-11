const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Подключение к MongoDB
const client = new MongoClient(process.env.MONGODB_URI);
let db;

async function connectToDb() {
  try {
    await client.connect();
    db = client.db();
    console.log('✅ Connected to MongoDB');
  } catch (err) {
    console.error('❌ Failed to connect to MongoDB', err);
    throw err;
  }
}

// Создание маршрута для создания нового продукта
app.post('/products', async (req, res) => {
  try {
    const result = await db.collection('products').insertOne(req.body);
    res.status(201).json(result.ops?.[0] || req.body);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create product', details: err.message });
  }
});

// Создание маршрута для получения всех продуктов
app.get('/products', async (req, res) => {
  try {
    const products = await db.collection('products').find().toArray();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get products', details: err.message });
  }
});

// Создание маршрута для получения одного продукта по ID
app.get('/products/:id', async (req, res) => {
  try {
    const product = await db.collection('products').findOne({ _id: new ObjectId(req.params.id) });
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get product', details: err.message });
  }
});

// Создание маршрута для обновления продукта по ID
app.put('/products/:id', async (req, res) => {
  try {
    const result = await db.collection('products').findOneAndUpdate(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body },
      { returnDocument: 'after' }
    );
    if (!result.value) return res.status(404).json({ error: 'Product not found' });
    res.json(result.value);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update product', details: err.message });
  }
});

// Создание маршрута для удаления продукта по ID
app.delete('/products/:id', async (req, res) => {
  try {
    const result = await db.collection('products').deleteOne({ _id: new ObjectId(req.params.id) });
    if (result.deletedCount === 0) return res.status(404).json({ error: 'Product not found' });
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete product', details: err.message });
  }
});

// Подключение к базе данных и запуск сервера
connectToDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Server not started due to DB connection error');
  });
