const express = require("express");
const { predictHandler } = require("../controllers/predictController");
const { uploadMiddleware } = require("../middleware/middleware");

const predictRoute = express.Router();
predictRoute.post("/", uploadMiddleware.single("image"), predictHandler);

module.exports = predictRoute;