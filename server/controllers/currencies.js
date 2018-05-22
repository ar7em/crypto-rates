const express = require("express");
const model = require("../models/currencies");

const router = express.Router();

router.post("/", async (req, res) => {
  /* if not in DB */
  try {
    const price = await model.fetch(req.body.code);
    return res.status(200).json({price});
  } catch(err) {
    return res.status(500).json({error: err.message});
  }
});

module.exports = router;
