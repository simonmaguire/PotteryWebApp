const mongoose = require("mongoose");
import * as path from "path";
require("dotenv").config();
//
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
    });

    console.log("MongoDB is Connected...");
  } catch (err) {
    let message;
    if (err instanceof Error) message = err.message;
    else message = String(err);
    console.error(message);
    process.exit(1);
  }
};

module.exports = connectDB;
