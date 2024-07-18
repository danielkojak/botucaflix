const Joi = require('joi');

const addUserSchema = Joi.object({
  firstName: Joi.string().min(2),
  lastName: Joi.string().min(2),
  email: Joi.string().email().required(),
  phone: Joi.string().min(2),
});

module.exports = { addUserSchema };