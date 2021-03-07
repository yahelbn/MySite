const express = require("express");
const router = express.Router();
const {
  addUserCompany,
  getByEmailAndStatus,
  getByEmailAndStatuses,
  getByEmail,
  getByIdAndStatus,
} = require("../services/userCompanyService");

router.post("/add", async (req, res) => {
  try {
    await addUserCompany(req.body);
    res.send(200);
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
});

router.get("/getByEmail", async (req, res) => {
  try {
    const userCompany = await getByEmail(req.query.email);
    res.send(userCompany);
  } catch (e) {
    console.error(e);
    res.status(500).send(e.toString());
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
    console.error(e);
    res.status(500).send(e.toString());
  }
});

router.get("/getByEmailAndStatuses", async (req, res) => {
  try {
    const userCompany = await getByEmailAndStatuses(
      req.query.email,
      req.query.statuses
    );
    res.send(userCompany);
  } catch (e) {
    console.error(e);
    res.status(500).send(e.toString());
  }
});

router.get("/getByIdAndStatus", async (req, res) => {
  try {
    const userCompanies = await getByIdAndStatus(
      req.query.id,
      req.query.status
    );
    res.send(userCompanies);
  } catch (e) {
    console.error(e);
    res.status(500).send(e.toString());
  }
});

router.get("/*", async (req, res) => {
  console.error("no such route");
  res.status(500).send("no such route");
});

module.exports = router;
