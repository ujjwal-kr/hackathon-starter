import express from "express";
const router = express.Router();

import UserController from "../controllers/user.controller.js";
import UserMiddleware from "../middlewares/user.middleware.js";

router.get("/", async (req, res, next) => {
  try {
    let users = await UserController.getUsers();
    res.json(users);
  } catch (e) {
    res.statusCode = 400;
    next(e);
  }
});

router.post("/", UserMiddleware, async (req, res, next) => {
  try {
    await UserController.createUser(req.body, (user) => {
      return res.json(user)
    });
  } catch (e) {
    res.statusCode = 400;
    next(e);
  }
});

router.post("/login", (req, res, next) => {

})

export default router;
