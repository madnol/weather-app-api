const express = require("express");
const searchRouter = express.Router();
const axios = require("axios");

searchRouter.get("/", async (req, res, next) => {
  try {
    const { q } = req.query;
    const results = await axios.get(
      `${process.env.WEATHER_APP_API_URL}/weather?q=${q}&appid=${process.env.API_KEY}`
    );
    const data = await results.data;
    res.send(data);
  } catch (error) {
    next(error);
    console.log(error);
  }
});

searchRouter.get("/currentdate", async (req, res, next) => {
  try {
    const { lat, lon } = req.query;
    const results = await axios.get(
      `${process.env.WEATHER_APP_API_URL}/onecall?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`
    );
    const data = await results.data;
    res.send(data);
  } catch (error) {
    next(error);
    console.log(error);
  }
});

module.exports = searchRouter;
