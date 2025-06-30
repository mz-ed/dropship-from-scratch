// server/routes/auth.js
const express = require("express");
const router = express.Router();
const db = require("../config/db"); // your MySQL connection

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(400).json({ message: "All fields required" });

  try {
    const [existing] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);
    if (existing.length > 0)
      return res.status(409).json({ message: "Email already registered" });

    await db.execute(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, password] // ✅ You should hash the password in production
    );
    res.json({ message: "User created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
