const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/workouts", function(req, res) {
  db.Workout.find()
  .then(function(data) {
    console.log("data", data);
    res.json(data);
  })
})

router.put("/api/workouts/:id", function(req, res) {
  console.log(req.params.id);
  console.log(req.body);
  db.Workout.find({id:req.params.id}, req.body)
  .then(function(data) {
    console.log("data", data);
    res.json(data);
  })
})

router.post("/api/workouts", function(req, res) {
  console.log(req.body); // this will be empty
  db.Workout.create({})
  .then(function(data) {
    console.log("data", data);
    res.json(data);
  })
})

router.get("/api/workouts/range", function(req, res) {
  db.Workout.find()
  .then(function(data) {
    console.log("data", data);
    res.json(data);
  })
})

// module.exports = router;
