const { addUserSchema } = require('./schemas');

const validateNewUser = ({ firstName, lastName, email, phone }) => {
  const { error } = addUserSchema.validate({ firstName, lastName, email, phone });
  console.log('erro: ', error);
  if (error) {
    return { status: 'INVALID_USER_VALUE', message: error.message };
  }
};

module.exports = {
  validateNewUser,
};