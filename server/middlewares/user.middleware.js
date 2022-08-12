import userValidator from "../validators/user.validator.js";

async function UserMiddleware(req, res, next) {
  try {
    await userValidator.validateAsync(req.body);
    next();
  } catch (e) {
    res.statusCode = 400
    next(Error(e.details[0].message))
  }
}

export default UserMiddleware;
