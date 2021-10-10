const express = require("express");
const router = express.Router();

/* GET editor page. */
router.get("/:blogId", function (req, res, next) {
  res.render("blog");
});

module.exports = router;
