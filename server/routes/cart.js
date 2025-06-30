// routes/cart.js
const express = require("express");
const router = express.Router();
const db = require("../config/db");

// POST to add/update item in cart
router.post("/add", async (req, res) => {
  const { user_id, product_id, quantity } = req.body;

  try {
    const [result] = await db.query("CALL AddOrUpdateCartItem(?, ?, ?)", [
      user_id,
      product_id,
      quantity,
    ]);

    res.json({ message: "Cart updated successfully." });
  } catch (err) {
    console.error("Cart update failed:", err);
    res.status(500).json({ message: "Database error", error: err.message });
  }
});

router.post("/remove", async (req, res) => {
    const { user_id, product_id } = req.body;
  
    try {
      await db.query(
        "DELETE FROM cart WHERE user_id = ? AND product_id = ?",
        [user_id, product_id]
      );
      res.json({ message: "Item removed from cart." });
    } catch (err) {
      console.error("Failed to remove item:", err);
      res.status(500).json({ message: "Error removing item", error: err.message });
    }
  });
  
module.exports = router;
