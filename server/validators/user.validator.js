import Joi from "joi";

const userValidator = Joi.object({
  name: Joi.string().alphanum().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

export default userValidator;
