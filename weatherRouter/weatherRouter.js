const express = require("express");
const weatherRouter = express.Router();

let data = [
  {
    activity: ["morning jog", "breakfast", "work", "lunch", "gym"],
    weather: "sunny",
  },
  {
    activity: ["work", "coffee break", "meetings", "dinner", "movie"],
    weather: "cloudy",
  },
  {
    activity: ["weekend", "hiking", "picnic", "reading", "gardening"],
    weather: "rainy",
  },
];

//GET retrieve the entire list
//http://localhost:8000/api/list
weatherRouter.get("/list", (req, res) => {
  res.send(data);
});

//GET items by query parameter (?activity=work)
//http://localhost:8000/api/activities?activity=movie
weatherRouter.get("/activities", (req, res) => {
  const activityToFind = req.query.activity;
  if (!activityToFind) {
    return res.status(400).send("Activity parameter is missing.");
  }
  const foundItems = data.filter((item) =>
    item.activity.includes(activityToFind)
  );
  if (foundItems.length === 0) {
    return res.status(404).send("Activity is not found");
  }
  res.send(foundItems);
});

//GET activities based on weather condition (/:condition/rainy)
//http://localhost:8000/api/activities/weather/rainy
weatherRouter.get("/activities/weather/:condition", (req, res) => {
  const weatherCondition = req.params.condition;
  const itemsWithCondition = data.filter(
    (item) => item.weather === weatherCondition
  );
  res.send(itemsWithCondition);
});

//POST add a new item
weatherRouter.post("/activities", (req, res) => {
  console.log("body", req.body);
  const { activity, weather } = req.body;
  if (!activity || !weather) {
    return res.status(400).send("Activity and weather are required.");
  }
  data.push({ activity, weather });
  res.status(201).send({ msg: "Add activity successfully" });
});

//DELETE items based on weather condition
//http://localhost:8000/api/activities/weather/rainy
weatherRouter.delete("/activities/weather/:condition", (req, res) => {
  const weatherCondition = req.params.condition;
  const foundIndex = data.findIndex(
    (item) => item.weather === weatherCondition
  );
  if (foundIndex === -1) {
    return res.status(404).send("Weather condition is not found");
  }
  const deletedWeather = data.splice(foundIndex, 1);
  res.send({
    msg: "Activities deleted",
    deletedWeather: deletedWeather[0],
  });
});

module.exports = weatherRouter;
