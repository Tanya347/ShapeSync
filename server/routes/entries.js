import express from "express";
import {
  createEntry,
  deleteEntry,
  getEntry,
  getEntries,
  updateEntry,
} from "../controllers/entry.js";

const router = express.Router();

router.post("/", createEntry);
router.put("/:id", updateEntry);
router.delete("/:id", deleteEntry);
router.get("/:id", getEntry);
router.get("/", getEntries);

export default router;