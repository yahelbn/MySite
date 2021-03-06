const express = require("express");
const router = express.Router();
const { getEnumsByTableName } = require("../services/enumsService");

//also adds contacts
router.post("/addCompany", async (req, res) => {
  try {
    const enums = await getEnumsByTableName(
      req.body.companyData,
      req.body.addressData,
      req.body.userCompany,
      req.body.contactPersons
    );
    res.send(enums);
  } catch (e) {
    res.status(500).send(e.toString());
  }
});

router.get("/*", (req, res) => {
  console.log("no such route");
  res.status(404).send("no such route");
});

module.exports = router;
