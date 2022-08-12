import Joi from "joi";

const userValidator = Joi.object({
  name: Joi.string().alphanum().required(),

  age: Joi.number().required(),

  email: Joi.string().email().required(),
});

export default userValidator;
