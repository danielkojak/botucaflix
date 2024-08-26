const express = require('express');
const { User } = require('./models');

const app = express();

app.use(express.json());

app.post('/users', async (req, res) => {
  const { name, email, birthday } = req.body;

  try {
  await User.create({ name, email, birthday });

  const datas = await User.findAll();

  return res.status(201).json(datas);
  } catch (error) {
    console.error("Erro ao criar usurário", error);
    return res.status(500).json({ message: 'Erro ao criar usuário', error: error.message });
  }
});

module.exports = app;