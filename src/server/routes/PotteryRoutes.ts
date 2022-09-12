const express = require("express");
const router = express.Router();

import {
  getAllPots,
  createPot,
  deletePot,
  updatePot,
} from "../controllers/PotteryController";

router.get("/pots", getAllPots);
router.post("/create-pot", createPot);
router.put("/update-pot/:id", updatePot);
router.delete("/delete-pot/:id", deletePot);

module.exports = router;
