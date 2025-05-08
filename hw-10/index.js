const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const SECRET = 'my_secret_key';

let users = [
  {
    id: 1,
    username: 'admin',
    email: 'admin@example.com',
    password: bcrypt.hashSync('admin123', 10),
    role: 'admin'
  },
  {
    id: 2,
    username: 'user1',
    email: 'user1@example.com',
    password: bcrypt.hashSync('user123', 10),
    role: 'user'
  }
];

function authenticateJWT(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.sendStatus(401);

  const token = authHeader.split(' ')[1];
  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

function authorizeRole(role) {
  return (req, res, next) => {
    if (req.user.role !== role) return res.status(403).json({ error: 'Access denied' });
    next();
  };
}

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({
    id: user.id,
    username: user.username,
    role: user.role
  }, SECRET, { expiresIn: '1h' });

  res.json({ token });
});

app.put('/update-email', authenticateJWT, (req, res) => {
  const { email } = req.body;
  const user = users.find(u => u.id === req.user.id);
  if (!user) return res.status(404).json({ error: 'User not found' });

  user.email = email;
  res.json({ message: 'Email updated', user });
});

app.delete('/delete-account', authenticateJWT, (req, res) => {
  const userId = req.user.id;
  const exists = users.find(u => u.id === userId);
  if (!exists) return res.status(404).json({ error: 'User not found' });

  users = users.filter(u => u.id !== userId);
  res.json({ message: 'Account deleted' });
});

app.put('/update-role', authenticateJWT, authorizeRole('admin'), (req, res) => {
  const { id, newRole } = req.body;
  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).json({ error: 'User not found' });

  user.role = newRole;
  res.json({ message: 'Role updated', user });
});

app.post('/refresh-token', authenticateJWT, (req, res) => {
  const user = users.find(u => u.id === req.user.id);
  if (!user) return res.status(404).json({ error: 'User not found' });

  const newToken = jwt.sign({
    id: user.id,
    username: user.username,
    role: user.role
  }, SECRET, { expiresIn: '1h' });

  res.json({ token: newToken });
});

app.listen(3010, () => {
  console.log('Server started on http://localhost:3010');
});
