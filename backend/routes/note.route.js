import express from "express";
import { createNote } from "../controllers/note.controller.js"; // ES module import
import { getNotes,updateNote,deleteNote} from "../controllers/note.controller.js";
const router = express.Router();

router.post("/create-note", createNote);
router.get("/get-notes", getNotes);
router.put("/update-note/:id", updateNote);
router.delete("/delete-note/:id", deleteNote);

export default router; // ES module export