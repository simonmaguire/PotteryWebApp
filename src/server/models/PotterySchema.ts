import { IPot } from "./../types/pot";
import { model, Schema } from "mongoose";

const mongoose = require("mongoose");

const PotterySchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: false,
    },
    clay: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  { collection: "Pots" }
);

export default model<IPot>("pottery", PotterySchema);
// const Pottery = mongoose.model("pottery", PotterySchema);
// module.exports = Pottery;
