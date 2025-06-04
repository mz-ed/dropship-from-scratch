const app = require("./app");
const pool = require("./config/db"); // import your MySQL pool
const PORT = process.env.PORT || 5000;

// Optional: load .env if not already loaded in db.js
require("dotenv").config();

// Try connecting to the database first
pool.getConnection()
  .then((conn) => {
    console.log("✅ Connected to MySQL database");

    // Release the connection back to the pool
    conn.release();

    // Start the server
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to MySQL:", err.message);
    process.exit(1); // Exit with error
  });
