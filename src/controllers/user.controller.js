const userService = require('../services/user.service');
const mapStatusHttp = require('../utils/mapStatusHttp');

const getAllUsers = async (req, res) => {  
  const serviceResponse = await userService.getAll();

  return res.status(mapStatusHttp(serviceResponse.status)).json(serviceResponse.data);
  // return res.status(200).json(serviceResponse);
};

module.exports = {
  getAllUsers
};