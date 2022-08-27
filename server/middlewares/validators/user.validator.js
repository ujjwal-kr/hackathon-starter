import Joi from "joi";

const userValidator = Joi.object({
  name: Joi.string().alphanum().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

async function UserValidatorMiddleware(req, res, next) {
  try {
    await userValidator.validateAsync(req.body);
  } catch (e) {
    res.statusCode = 400;
    next(Error(e.details[0].message));
  }
}

export default UserValidatorMiddleware;
