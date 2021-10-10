const express = require("express");
const router = express.Router();

/* GET editor page. */
router.get("/editor", function (req, res, next) {
  res.render("editor");
});

module.exports = router;
