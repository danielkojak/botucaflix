const express = require('express');
const { userModel } = require('../models');
const { userService } = require('../services');

const router = express.Router();

router.post('/', async (req, res) => {
  const { firstName, lastName, email, phone } = req.body;
  
  const serviceResponse = await userService.createUser({ firstName, lastName, email, phone });
  console.log(serviceResponse);
  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(400).json(serviceResponse.data);
  }
  return res.status(201).json(serviceResponse.data);
});

router.get('/', async (req, res) => {
  const serviceResponse = await userService.findAll();
  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(400).json(serviceResponse.data);
  }
  return res.status(200).json(serviceResponse.data);
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [[result]] = await userModel.findById(id);
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
    const [result] = await userModel.update(person, id);
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
    const [result] = await userModel.remove(id);
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