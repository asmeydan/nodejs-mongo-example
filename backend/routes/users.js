import express from "express";
import User from "../models/users.js";

const router = express.Router();

//! VERİYİ ÇEKİP GÖSTERME
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//! VERİ EKLEME
router.post("/", (req, res) => {
  const user = new User({
    name: req.body.name,
    city: req.body.city,
  });
  user.save();
  res.json(user);
});

//! VERİ SİLME
router.delete("/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
});

export default router;
