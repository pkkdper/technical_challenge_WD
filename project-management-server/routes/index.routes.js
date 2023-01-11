const express = require("express");
const router = express.Router();
const Phone = require('../models/Phone.model')
router.get("/phones", async (req, res, next) => {
  const phones = await Phone.find()
//  res.json(phones)
 res.json("hi")
});

router.get("/phones/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const phone = await phone.findById(id);
    res.json(phone);
  } catch (error) {
    res.status(404).json({ message: "phone not found" });
  }
});
module.exports = router;
