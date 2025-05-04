// routes/userRoutes.js

import models from '../models/index.js'; // Импортируем объект моделей
const { User } = models; // Извлекаем модель User

// Пример маршрута для регистрации
import express from 'express';
import bcrypt from 'bcrypt';

const router = express.Router();

const checkPasswordChange = require('../middleware/checkPasswordChange.js')

router.post('/change-password', checkPasswordChange, async (req, res) => {
    const { userId, newPassword } = req.body

    const hashedPassword = await bcrypt.hash(newPassword, 10)

    const user = await User.findByPk(userId)
    user.password = hashedPassword
    user.mustChangePassword = false

    await user.save()

    res.status(200).json({ message: 'Пароль успешно изменён'})
})

// Маршрут регистрации
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  // Проверка на уникальность email
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    return res.status(400).json({ message: 'Email уже зарегистрирован' });
  }

  // Хэширование пароля
  const hashedPassword = await bcrypt.hash(password, 10);

  // Создание нового пользователя
  const newUser = await User.create({
    email,
    password: hashedPassword,
    mustChangePassword: false,
    role: 'user',
  });

  res.status(201).json(newUser);
});

router.post('/delete-account', async (req, res) => {
    const { userId, password } = req.body

    const user = await User.fundByPk(userId)
    if (!user) {
        return res.status(404).json({ message: 'Пользователь не найден'})
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
        return res.status(400).json({ message: 'Неверный пароль'})
    }

    await user.destroy()

    res.status(200).json({ message: 'Аккаунт успешно удалён'})
})

const checkRole = require('../middleware/checkRole.js')

router.get('/admin', checkRole('admin'), (req, res) => {
    res.status(200).json({ message: "Добро пожаловать, администратор!"})
})

router.post('/change-email', async (req, res) => {
    const { userId, currentPassword, newEmail } = req.body

    const user = await User.findByPk(userId)
    if (!user) {
        return res.status(404).json({ message: "Пользователь не найден"})
    }

    const isPasswordValid = await bcrypt.compare(currentPassword, user.password)
    if (!isPasswordValid) {
        return res.status(400).json({ message: 'Неверный пароль'})
    }

    const existingUser = await User.findOnes({ where: { email: newEmail } })
    if (existingUser) {
        return res.status(400).json({ message: 'Email уже зарегистрирован'})
    }

    user.email = newEmail
    await user.save()

    res.status(200).json({ message: 'Email успешно изменён'})
})

export default router;
