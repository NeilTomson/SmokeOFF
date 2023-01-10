const express = require("express");
const SettingModule = require("../model/settings");
const router = express.Router();

router.get("/", (req, res) => {
  SettingModule.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
router.post("/new", async (req, res) => {
  const setting = req.body;
  const newSmoke = new SettingModule(setting);
  await newSmoke.save();
  res.json(setting);
});
// router.delete("/delete/:id", async (req, res) => {

//   await SettingModule.findByIdAndDelete(req.params.id);
// });
router.put("/update/:id", async (req, res) => {
  console.log(req.params.id)
  console.log(req.params)

  setting = await SettingModule.findById(req.params.id);
  
  try {
    setting.pack  = req.body.pack;
    setting.costOfPack  = req.body.costOfPack;
    setting.timeOfSmoke  = req.body.timeOfSmoke;

    await setting.save();
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
