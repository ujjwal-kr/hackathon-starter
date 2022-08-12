import express from "express";
const router = express.Router();

import UserController from "../controllers/user.controller.js";
import UserMiddleware from "../middlewares/user.middleware.js";

router.get("/", (req, res, next) => {
  try {
    let users = UserController.getUsers();
    res.json(users);
  } catch (e) {
    res.statusCode = 400;
    next(e);
  }
});

router.post("/", UserMiddleware, (req, res, next) => {
  try {
    let newUser = UserController.createUser(req.body);
    res.json(newUser);
  } catch (e) {
    res.statusCode = 400;
    next(e);
  }
});

router.get("/:mail", (req, res, next) => {
  try {
    let user = UserController.getUserByMail(req.params.mail);
    res.json(user);
  } catch (e) {
    res.statusCode = 400;
    next(e);
  }
});

export default router;
