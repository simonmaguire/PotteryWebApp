import { Request, Response } from "express";
import { IPot } from "./../types/pot";
import { isValidObjectId } from "mongoose";
import PotterySchema from "../models/PotterySchema";

const getPots = async (req: Request, res: Response): Promise<void> => {
  try {
    if (isValidObjectId(req.params.userId)) {
      const pots: IPot[] = await PotterySchema.find({
        userId: req.params.userId,
      });
      res.status(200).json({ pots });
    }
  } catch (error) {
    throw error;
  }
};

//TODO: Feeling like the Pick here should be an omit?
const createPot = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<
      IPot,
      | "stage"
      | "clay"
      | "name"
      | "category"
      | "clay_weight"
      | "throw_height"
      | "throw_width"
      | "throw_notes"
      | "green_decorations"
      | "trim_notes"
      | "glazes"
      | "glaze_notes"
      | "result_height"
      | "result_width"
      | "result_notes"
      | "throw_date"
      | "trim_date"
      | "result_date"
      | "userId"
    >;

    const pot: IPot = new PotterySchema({
      stage: body.stage,
      clay: body.clay,
      name: body.name,
      category: body.category,
      clay_weight: body.clay_weight,
      throw_height: body.throw_height,
      throw_width: body.throw_width,
      throw_notes: body.throw_notes,
      green_decorations: body.green_decorations,
      trim_notes: body.trim_notes,
      glazes: body.glazes,
      glaze_notes: body.glaze_notes,
      result_height: body.result_height,
      result_width: body.result_width,
      result_notes: body.result_notes,
      throw_date: body.throw_date,
      trim_date: body.trim_date,
      result_date: body.result_date,
      userId: body.userId,
    });

    const newPot: IPot = await pot.save();

    res.status(201).json({ message: "Pot added", pot: newPot });
  } catch (error) {
    console.log("No way");
    throw error;
  }
};

const getPot = async (req: Request, res: Response): Promise<void> => {
  try {
    if (isValidObjectId(req.params.id)) {
      const pot: IPot | null = await PotterySchema.findById(req.params.id);
      res.status(200).json({ pot });
    }
  } catch (error) {
    throw error;
  }
};

const updatePot = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const updatePot: IPot | null = await PotterySchema.findByIdAndUpdate(
      { _id: id },
      body
    );
    res.status(200).json({
      message: "Pot updated",
      pot: updatePot,
    });
  } catch (error) {
    throw error;
  }
};

const deletePot = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedPot: IPot | null = await PotterySchema.findByIdAndRemove(
      req.params.id
    );
    const allPots: IPot[] = await PotterySchema.find();
    res.status(200).json({
      message: "Pot deleted",
      pot: deletedPot,
      pots: allPots,
    });
  } catch (error) {
    throw error;
  }
};

export { getPots, createPot, getPot, updatePot, deletePot };
