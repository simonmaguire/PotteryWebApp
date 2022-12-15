const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
import UserSchema from "../models/UserSchema";
import { NextFunction, Request, Response } from "express";

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
      res.json({ message: "User Registered" });
    }
  } catch (error) {
    throw error;
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const userLoggingIn = req.body;

    UserSchema.findOne({ username: userLoggingIn.username }).then((dbUser) => {
      if (!dbUser) {
        return res.json({
          message: "Invalid Username or Password",
        });
      }
      bcrypt
        .compare(userLoggingIn.password, dbUser.password)
        .then((isCorrect: boolean) => {
          if (isCorrect) {
            const payload = {
              id: dbUser._id,
              username: dbUser.username,
            };
            jwt.sign(
              payload,
              process.env.JWT_SECRET,
              { expiresIn: 86400 },
              (err: Error, token: string) => {
                if (err) return res.json({ message: err });
                return res.json({
                  message: "Success",
                  token: "Bearer " + token,
                });
              }
            );
          } else {
            return res.json({
              message: "Invalid Username or Password",
            });
          }
        });
    });
  } catch (error) {
    throw error;
  }
};
type TokenType = { id: string; username: string; pfp: string };

const flattenTokenString = (headerToken: string[]) => {
  let accumulator: string[] = [];
  headerToken.forEach((element) => {
    accumulator.concat(element);
  });
  return accumulator;
};

const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
  // removes 'Bearer` from token
  let accessToken = req.headers["x-access-token"];

  while (Array.isArray(accessToken)) {
    accessToken = flattenTokenString(accessToken);
  }

  const token = accessToken?.split(" ")[1];

  if (token) {
    jwt.verify(
      token,
      process.env.JWT_SECRET,
      (err: Error, decoded: TokenType) => {
        if (err)
          return res.json({
            isLoggedIn: false,
            message: "Failed To Authenticate",
          });
        req.body = {};
        req.body.id = decoded.id;
        req.body.username = decoded.username;
        req.body.pfp = decoded.pfp;
        next();
      }
    );
  } else {
    res.json({ message: "Incorrect Token Given", isLoggedIn: false });
  }
};

export { registerUser, login, verifyJWT };
