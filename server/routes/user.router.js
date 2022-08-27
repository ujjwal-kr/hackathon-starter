import express from "express";
const router = express.Router();

import UserController from "../controllers/user.controller.js";
import UserMiddleware from "../middlewares/user.middleware.js";
import UserValidatorMiddleware from "../middlewares/validators/user.validator.js";

router.get("/", async (req, res, next) => {
  try {
    let users = await UserController.getUsers();
    res.json(users);
  } catch (e) {
    res.statusCode = 400;
    next(e);
  }
});

router.post("/", UserValidatorMiddleware, async (req, res, next) => {
  try {
    await UserController.createUser(req.body, (user) => {
      return res.json(user);
    });
  } catch (e) {
    res.statusCode = 400;
    next(e);
  }
});

router.post("/login", UserValidatorMiddleware, async (req, res, next) => {
  try {
    await UserController.login(req.body, (userWithToken) => {
      return res.json(userWithToken);
    });
  } catch (e) {
    res.statusCode = 400;
    next(e);
  }
});

export default router;
