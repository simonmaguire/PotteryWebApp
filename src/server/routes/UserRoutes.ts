import { registerUser, login, verifyJWT } from "../controllers/UserController";

const express = require("express");
const router = express.Router();

import { Request, Response } from "express";

router.post("/register", registerUser);
router.post("/login", login);
router.get("/isUserAuth", verifyJWT, (req: Request, res: Response) => {
  return res.json({
    isLoggedIn: true,
    username: req.body.username,
    userId: req.body.id,
  });
});

module.exports = router;
