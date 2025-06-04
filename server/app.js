const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", require("./routes/products"));

module.exports = app;
