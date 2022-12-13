import { Express, NextFunction, Request, Response } from "express";
import * as express from "express";

const connectDB = require("./config/db");
const cors = require("cors");
const bodyParser = require("body-parser");
const app: Express = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(bodyParser.json());

//Takes care of cross-origin
app.use(function (
  inRequest: Request,
  inResponse: Response,
  inNext: NextFunction
) {
  inResponse.header("Access-Control-Allow-Origin", "*");
  inResponse.header("Access-Control-Allow-Methods", "GET,POST,DELETE,OPTIONS");
  inResponse.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  inNext();
});

// Connect Database
connectDB();

//routes
const potteryRoutes = require("./routes/PotteryRoutes");
const userRoutes = require("./routes/UserRoutes");
app.use(userRoutes);
app.use(potteryRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on port ${port}`));
