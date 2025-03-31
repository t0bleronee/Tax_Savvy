const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const taxRoutes = require("./TaxCalculator/routes/taxRoutes");
const reportRoutes =require( "./BudgetInsights/routes/reportRoutes");
const authRoutes = require("./userprofile/authroutes"); // User authentication routes
const financialTipsRoutes = require("./fintips/fintip_route");
const featuresRoutes = require("./BudgetFeatures/server/app.js"); // Budget features routes
dotenv.config();

const app = express();

// Enhanced CORS configuration (applies to all routes)
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:3001", "http://localhost:3000", "http://localhost:3002"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
  }));

// Middleware
app.use(cors());
app.use(express.json()); // Express has built-in JSON parsing
app.use(express.urlencoded({ extended: true })); // For form submissions


// Tax Calculation Routes
app.use("/tax", taxRoutes);
app.use("/api", reportRoutes);
app.use("/auth", authRoutes); // User authentication routes
app.use("/get-financial-tips", financialTipsRoutes); // Financial tips routes
app.use("/budget-features", featuresRoutes); // Budget features routes


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
