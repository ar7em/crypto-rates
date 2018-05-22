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

router.get("/", async (req, res) => {
  try {
    const currencies = await model.getAll();
    return res.status(200).json(currencies);
  } catch(err) {
    return res.status(500).json({error: "Failed to fetch currencies"});
  }
});

router.delete("/:code", async (req, res) => {
  try {
    await model.remove(req.params.code);
    return res.status(200);
  } catch(err) {
    return res.status(500).json({error: `Failed to delete currency ${req.params.code}`});
  }
});

module.exports = router;
