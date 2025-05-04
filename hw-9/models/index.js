// Используем ES модули
import { Sequelize, DataTypes } from 'sequelize';
import User from './user.js'; // Здесь импортируем модель User

const sequelize = new Sequelize('mysql://root:password@localhost:3306/database_name');

// Создаем объект с моделями
const models = {
  User: User(sequelize, DataTypes),
};

// Экспортируем объект моделей как по умолчанию
export default models;
