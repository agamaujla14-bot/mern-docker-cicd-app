const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

// GET all notes
router.get("/", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

// CREATE note
router.post("/", async (req, res) => {
  const newNote = new Note(req.body);
  await newNote.save();
  res.json(newNote);
});

// DELETE note
router.delete("/:id", async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;