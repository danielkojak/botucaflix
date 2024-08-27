const { User } = require('../models');

const Sequelize = require('sequelize');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);


const createUser = async ({ name, email, phone, password }) => {
  const userCreated = await User.create({ name, email, phone, password });
  return { status: 'SUCCESSFUL', data: {userCreated}}
};

const getAll = async () => {
  try {
    const allUsers = await User.findAll();
    return { status: 'SUCCESSFUL', data: allUsers }  
  } catch (error) {
    return { status: 'ERROR', data: { message: 'Não foi possível acessar o banco de dados'} }    
  }
  
  
};

const getById = async (id) => {
  const user = await User.findOne({
    where: { id },
  });
  return user;
};

const updateUser = async (id, { name, email, phone, password }) => {
  const [updated] = await User.update(
    { name, email, phone, password },
    { where: { id }},
  );

  return updated > 0;
};

const removeUser = async (id) => {
  const removed = await User.destroy({
    where: { id }
  });

  return removed > 0;
};


module.exports = {
  createUser,
  getAll,
  getById,
  updateUser,
  removeUser
}