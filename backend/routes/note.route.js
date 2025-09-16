import express from "express";
import {
  createNote,
  getNotes,
  updateNote,
} from "../controllers/note.controller.js";

const router = express.Router();

router.post("/create-note", createNote);
router.get("/get-notes", getNotes);
router.put("/update-note/:id", updateNote);

export default router;
