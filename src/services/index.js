const express = require("express");
const searchRoutes = require("./search");
const apiRouter = express.Router();

apiRouter.use("/search", searchRoutes);

module.exports = apiRouter;
