const express = require("express");
const router = express.Router();
const { createFindoc } = require("../services/findocService");

router.post("/create", async (req, res) => {
  //use findoc service here
  await createFindoc(req.body);
  res.status(200).send("all worked fine");
});

router.get("/allFindocs", (req, res) => {});

module.exports = router;
