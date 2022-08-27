import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

async function UserMiddleware(req, res, next) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const id = decoded.id;
    await User.findById(id, (err, user) => {
      if (!user) {
        res.statusCode = 404;
        throw Error("User not found");
      }
      req.body = user;
    });

    return next();
  } catch (e) {
    req.body.user == null;
    return next();
  }
}

export default UserMiddleware;
