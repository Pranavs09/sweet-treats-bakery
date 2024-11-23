const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { Sequelize } = require("sequelize");
const MongoItem = require("./models/Products");

require("dotenv").config();

const app = express(); // Declare 'app' before use

// Enable CORS for cross-origin requests (important if frontend is on a different port)
app.use(cors());

// Middleware
app.use(bodyParser.json());

// Environment Variables
const PORT = process.env.PORT || 5001;
const mongoURI = process.env.MONGO_URI; // Store Mongo URI in .env
if (!mongoURI) {
    console.error("MONGO_URI is not defined in the .env file!");
    process.exit(1);  // Exit the application if the URI is missing
  }

// MongoDB Connection
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

app.get("/api/mongo/products", async (req, res) => {
  try {
    const items = await MongoItem.find();
    console.log("Retrieved items:", items); // Log the query results
    res.json(items);
  } catch (err) {
    console.error("Error fetching products:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// Basic Route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
