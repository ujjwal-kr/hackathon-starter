import express from "express";
const router = express.Router();

import UserController from "../controllers/user.controller.js";

router.get("/", async (req, res, next) => {
  try {
    let users = await UserController.getUsers();
    res.json(users);
  } catch (e) {
    res.statusCode = 400;
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    await UserController.createUser(req.body, (user) => {
      return res.json(user);
    });
  } catch (e) {
    res.statusCode = 400;
    next(e);
  }
});

router.post("/login", async (req, res, next) => {
  try {
   const { email, password } = req.body
    await UserController.login({email, password}, (userWithToken) => {
      return res.json(userWithToken);
    });
  } catch (e) {
    res.statusCode = 400;
    next(e);
  }
});

export default router;
