const bcrypt = require("bcrypt");
import UserSchema from "../models/UserSchema";
import { Request, Response } from "express";

const registerUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    let takenUser = await UserSchema.findOne({ username: user.username });
    takenUser = takenUser ?? (await UserSchema.findOne({ email: user.email }));

    if (takenUser) {
      res.json({
        takenUser: takenUser,
        message: "Username or email has already been taken",
      });
    } else {
      user.password = await bcrypt.hash(req.body.password, 10);
      const dbUser = new UserSchema({
        username: user.username.toLowerCase(),
        email: user.email.toLowerCase(),
        password: user.password,
      });
      dbUser.save();
      res.json({ message: "Success" });
    }
  } catch (error) {
    throw error;
  }
};

export { registerUser };
