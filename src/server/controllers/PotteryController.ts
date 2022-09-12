import { Express, NextFunction, Request, Response } from "express";
import { IPot } from "./../types/pot";
import PotterySchema from "../models/PotterySchema";

const getAllPots = async (req: Request, res: Response): Promise<void> => {
  try {
    const pots: IPot[] = await PotterySchema.find();
    res.status(200).json({ pots });
  } catch (error) {
    throw error;
  }
};
const createPot = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<IPot, "name" | "clay" | "category">;

    const pot: IPot = new PotterySchema({
      name: body.name,
      clay: body.clay,
      category: body.category,
    });

    const newPot: IPot = await pot.save();
    const allPots: IPot[] = await PotterySchema.find();

    res.status(201).json({ message: "Pot added", pot: newPot, pots: allPots });
  } catch (error) {
    console.log("No way");
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
    const allPots: IPot[] = await PotterySchema.find();
    res.status(200).json({
      message: "Pot updated",
      pot: updatePot,
      pots: allPots,
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

export { getAllPots, createPot, updatePot, deletePot };
