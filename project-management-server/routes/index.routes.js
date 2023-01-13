const express = require("express");
const router = express.Router();
const phonesJSON = require("../db/phones.json")
router.get("/phones", async (req, res, next) => {
   res.json(phonesJSON)
});

router.get("/phones/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const phone = await phonesJSON.findById(id);
    res.json(phone);
  } catch (error) {
    res.status(404).json({ message: "phone not found" });
  }
});
module.exports = router;
