const express = require("express");
const router = express.Router();
const { add, getByCid, updateByCid } = require("../services/companiesService");

router.post("/add", async (req, res) => {
  try {
    await add(req.body);
    res.send(200);
  } catch (e) {
    res.status(500).send(e.toString());
  }
});

router.post("/update", async (req, res) => {
  try {
    await updateByCid(req.body);
    res.sendStatus(200);
  } catch (e) {
    res.status(500).send(e.toString());
  }
});

router.get("/getByCid", async (req, res) => {
  try {
    const company = await getByCid(req.query.cid);
    res.send(company);
  } catch (e) {
    res.status(500).send(e.toString());
  }
});

router.get("/*", (req, res) => {
  console.log("no such route");
  res.status(404).send("no such route");
});

module.exports = router;
