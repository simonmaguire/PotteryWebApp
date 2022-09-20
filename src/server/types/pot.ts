import { Document } from "mongoose";

export interface IPot extends Document {
  stage?: string;
  clay?: string;
  name?: string;
  category?: string;
  clay_weight?: string;
  throw_height?: string;
  throw_width?: string;
  throw_notes?: string;
  green_decorations?: string;
  trim_notes?: string;
  glazes?: string;
  glaze_notes?: string;
  result_height?: string;
  result_width?: string;
  result_notes?: string;
}
