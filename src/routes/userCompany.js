const express = require("express");
const router = express.Router();
const {
  addUserCompany,
  getByEmailAndStatus,
  getByEmailAndStatuses,
} = require("../services/userCompanyService");

router.post("/add", async (req, res) => {
  try {
    await addUserCompany(req.body);
    res.send(200);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/getByEmailAndStatus", async (req, res) => {
  try {
    const userCompany = await getByEmailAndStatus(
      req.body.email,
      req.body.status
    );
    res.send(userCompany);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/getByEmailAndStatuses", async (req, res) => {
  try {
    console.log(req.query);
    const userCompany = await getByEmailAndStatuses(
      req.query.email,
      req.query.statuses
    );
    res.send(userCompany);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/*", async (req, res) => {
  res.status(500).send("no such route");
});

module.exports = router;
