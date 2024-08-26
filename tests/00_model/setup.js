const { Sequelize, DataTypes } = require('sequelize');
const UserSchema = require('../../src/models/user.model');

const sequelize = new Sequelize('sqlite::memory:'); // Usando SQLite em memória

const User = UserSchema(sequelize, DataTypes);

before(async () => {
  await sequelize.sync({ force: true }); // Cria as tabelas
});

after(async () => {
  await sequelize.close(); // Fecha a conexão
});

module.exports = { sequelize, User };