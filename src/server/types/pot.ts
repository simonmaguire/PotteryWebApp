import { Document } from "mongoose";

export interface IPot extends Document {
  name: string;
  clay: string;
  category: string;
}
