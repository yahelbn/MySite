const express = require("express");
const router = express.Router();
const { getById } = require("../services/addressService");

router.get("/getById", async (req, res) => {
  try {
    const address = await getById(req.query.id);
    res.send(address);
  } catch (e) {
    res.status(500).send(e.toString());
  }
});

router.get("/*", (req, res) => {
  console.log("no such route");
  res.status(404).send("no such route");
});

module.exports = router;
