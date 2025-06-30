// routes/signup.js
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  // Dummy response – replace with actual signup logic
  res.json({ message: "Signup route working!" });
});

module.exports = router;
