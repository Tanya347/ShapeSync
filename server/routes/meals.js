import express from "express";
import {
  createMeal,
  deleteMeal,
  getMeal,
  getMeals,
  updateMeal,
} from "../controllers/meal.js";

const router = express.Router();

router.post("/", createMeal);
router.put("/:id", updateMeal);
router.delete("/:id", deleteMeal);
router.get("/:id", getMeal);
router.get("/", getMeals);

export default router;