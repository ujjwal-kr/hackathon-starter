import express from "express";
const router = express.Router();

import UserController from "../controllers/user.controller.js";

router.get("/", (req, res, next) => {
  try {
    let users = UserController.getUsers()
    res.json(users)
  } catch (e) {
    res.statusCode = 400;
    next(e);
  }
});

export default router;
