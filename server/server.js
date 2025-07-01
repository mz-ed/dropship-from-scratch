// server.js
const app = require("./app");
const pool = require("./config/db"); // import your MySQL pool
const PORT = process.env.PORT || 5000;

// Load environment variables
require("dotenv").config();

// Import routes
const signupRoute = require("./routes/Signup");
app.use("/api/Signup", signupRoute);

const authRoutes = require("./routes/auth");
app.use("/api", authRoutes);

// Connect to DB and start server
pool.getConnection()
  .then((conn) => {
    console.log("✅ Connected to MySQL database");
    conn.release();

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to MySQL:", err.message);
    process.exit(1);
  });

  const cartRoutes = require("./routes/cart");
app.use("/api/cart", cartRoutes);

