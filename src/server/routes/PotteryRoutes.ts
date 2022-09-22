const express = require("express");
const router = express.Router();

import {
  getAllPots,
  createPot,
  getPot,
  deletePot,
  updatePot,
} from "../controllers/PotteryController";

router.get("/pots", getAllPots);
router.get("/pot/:id", getPot);
router.post("/create-pot", createPot);
router.put("/update-pot/:id", updatePot);
router.delete("/delete-pot/:id", deletePot);

module.exports = router;
