const express = require('express');
const userDB = require('../db/userDB');

const router = express.Router();

router.post('/', async (req, res) => {
  const user = req.body;
  try {
    const [result] = await userDB.insert(user);
    res.status(201).json({
      message: `Usuário cadastrado com sucesso com o id ${result.insertId}` });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Ocorreu um erro ao cadastrar um usuário' });
    }
});

router.get('/', async (req, res) => {
  try {
    const [result] = await userDB.findAll();
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.sqlMessage });
  }
  });

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [[result]] = await userDB.findById(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: 'Pessoa não encontrada' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.sqlMessage });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const person = req.body;
    const [result] = await userDB.update(person, id);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: `Pessoa de id ${id} atualizada com sucesso` });
    } else {
      res.status(404).json({ message: 'Pessoa não encontrada' });
    }
  } catch (err) {
    res.status(500).json({ message: err.sqlMessage });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await userDB.remove(id);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: `Pessoa de id ${id} excluída com sucesso` });
    } else {
      res.status(404).json({ message: 'Pessoa não encontrada' });
    }
  } catch (err) {
    res.status(500).json({ message: err.sqlMessage });
  }
});

module.exports = router;