const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const currencies = require("./currencies.js");

router.use(bodyParser.json());

router.use("/currencies", currencies);

router.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

module.exports = router;
