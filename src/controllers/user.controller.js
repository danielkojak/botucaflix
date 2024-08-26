const userService = require('../services/user.service');
const errorMap = require('../utils/errorMap');

const getAllUsers = async (req, res) => {
  console.log('chegou aqui');
  const serviceResponse = await userService.getAll();
  console.log('serviceResponse: ', serviceResponse)

  // return res.status(errorMap(serviceResponse.status)).json(serviceResponse.data);
  return res.status(200).json(serviceResponse);
};

module.exports = {
  getAllUsers
};
