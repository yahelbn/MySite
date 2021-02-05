const express = require("express");
const router = express.Router();
const { getUser, addUser } = require("../services/userCompanyService");

router.post("/add", async (req, res) => {
  //use findoc service here
  try {
    await addUser(req.body);
    res.status(200);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/getByEmail", async (req, res) => {
  try {
    const user = await getUser(req.body.email);
    res.send(user);
    res.status(200);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/*", async (req, res) => {
  res.status(500).send("no such route");
});

module.exports = router;
