import express from "express";
import {
  createRoutine,
  deleteRoutine,
  getRoutine,
  getRoutines,
  updateRoutine,
} from "../controllers/routine.js";

const router = express.Router();

router.post("/", createRoutine);
router.put("/:id", updateRoutine);
router.delete("/:id", deleteRoutine);
router.get("/:id", getRoutine);
router.get("/", getRoutines);

export default router;