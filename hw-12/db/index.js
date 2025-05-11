const { MongoClient } = require('mongodb');
require('dotenv').config();

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

function getDb() {
  return db;
}

module.exports = { connectToDb, getDb };
