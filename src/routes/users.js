const express = require("express");
const router = express.Router();
const {
  getUser,
  addUser,
  updateUserByEmail,
} = require("../services/usersService");

router.post("/add", async (req, res) => {
  //use findoc service here
  try {
    await addUser(req.body);
    res.send(200);
  } catch (e) {
    res.status(500).send(e.toString());
  }
});

router.post("/updateByEmail", async (req, res) => {
  //use findoc service here
  try {
    await updateUserByEmail(req.body);
    res.sendStatus(200);
  } catch (e) {
    res.status(500).send(e.toString());
  }
});

router.get("/getByEmail", async (req, res) => {
  try {
    const user = await getUser(req.query.email);
    res.send(user);
  } catch (e) {
    res.status(500).send(e.toString());
  }
});

router.get("/*", (req, res) => {
  console.log("no such route");
  res.status(404).send("no such route");
});

module.exports = router;
