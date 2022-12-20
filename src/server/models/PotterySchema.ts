import { IPot } from "./../types/pot";
import { model, Schema } from "mongoose";

const PotterySchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: false,
    },
    clay: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: false,
    },
    stage: {
      type: String,
      required: false,
    },
    clay_weight: {
      type: String,
      required: false,
    },
    throw_height: {
      type: String,
      required: false,
    },
    throw_width: {
      type: String,
      required: false,
    },
    throw_notes: {
      type: String,
      required: false,
    },
    green_decorations: {
      type: String,
      required: false,
    },
    trim_notes: {
      type: String,
      required: false,
    },
    glazes: {
      type: String,
      required: false,
    },
    glaze_notes: {
      type: String,
      required: false,
    },
    result_height: {
      type: String,
      required: false,
    },
    result_width: {
      type: String,
      required: false,
    },
    result_notes: {
      type: String,
      required: false,
    },
    throw_date: {
      type: Date,
      required: false,
    },
    trim_date: {
      type: Date,
      required: false,
    },
    result_date: {
      type: Date,
      required: false,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  { collection: "Pots" }
);

export default model<IPot>("pot", PotterySchema);
