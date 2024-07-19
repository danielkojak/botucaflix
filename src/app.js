const express = require('express');
const userRoutes = require('./routes/user.route');

const app = express();

app.use(express.json());

app.use('/user', userRoutes);

app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));

module.exports = app;
