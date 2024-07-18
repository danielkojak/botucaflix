const { validateNewUser } = require('../validations/validationsInputsValues');
const { userModel } = require('../models');

const createUser = async ({ firstName, lastName, email, phone }) => {
  const error = validateNewUser({ firstName, lastName, email, phone });
  
  if (error) {
    return { status: error.status, data: { message: error.message } };
  }

  const [{ insertId }] = await userModel.insert({ firstName, lastName, email, phone });
  console.log('insertID: ', insertId);
  const newUser = {
    id: insertId,
    firstName,
    lastName,
    email,
    phone,
  };

  return { status: 'SUCCESSFUL', data: newUser };
};

const findAll = async () => {
  const [users] = await userModel.findAll();
  return { status: 'SUCCESSFUL', data: users };
};

module.exports = {
  createUser,
  findAll,
};