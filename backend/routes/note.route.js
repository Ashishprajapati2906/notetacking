import express from "express";
import { createNote, getNotes } from "../controllers/note.controller.js";

const router = express.Router();

router.post("/create-note", createNote);
router.get("/get-notes", getNotes);

export default router;
