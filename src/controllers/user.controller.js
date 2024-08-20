const userService = require('../services/user.service');

const getAllUsers = async (req, res) => {
  const users = await userService.getAll();
  
  return res.status(200).json(users);
};

module.exports = {
  getAllUsers
};
