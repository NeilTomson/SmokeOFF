const express = require("express");
const SmokeModule = require("../model/smoke");
const router = express.Router();

router.get("/", (req, res) => {
  SmokeModule.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
router.post("/new", async (req, res) => {
  const smoke = req.body;
  const newSmoke = new SmokeModule(smoke);
  await newSmoke.save();
  res.json(smoke);
});
router.delete("/delete/:id", async (req, res) => {
  await SmokeModule.findByIdAndDelete(req.params.id);

});
router.put("/update/:id", async (req, res) => {
  smoke = await SmokeModule.findById(req.params.id);
  try {
    smoke.date = req.body.date;
    smoke.number  = req.body.number;
    await smoke.save();
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
