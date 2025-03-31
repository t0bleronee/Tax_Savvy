const mongoose = require('mongoose');
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });
// Local MongoDB Compass connection
const localDB = mongoose.createConnection("mongodb://127.0.0.1:27017/user",);

// MongoDB Atlas (Cloud) connection
const comDB = mongoose.createConnection(
  "mongodb+srv://kurlepurajesh18:EFrpJGLzLU8kWfbg@cluster0.0xebg.mongodb.net/products?retryWrites=true&w=majority&appName=Cluster0",

);

// Check connection status
localDB.once("open", () => console.log("✅ Connected to User data MongoDB"));
comDB.once("open", () => console.log("✅ Connected to Tax Data MongoDB"));

// Export databases
module.exports = { localDB, comDB };
