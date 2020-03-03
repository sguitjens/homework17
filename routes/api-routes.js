const express = require("express");
const router = express.Router();
const Workout = require("../models/workout");
// let db = require("../models");

// db.dbModel.findByIdAndUpdate({ _id: req.params.id }, { $push: { fieldGroup: req.body } })
//     .then(dbModel => {
//       res.json(dbModel);
//     })
//     .catch(err => {
//       console.log(err);
//     });

// get last workout (used by getLastWorkout())
router.get("/api/workouts", function(req, res) {
  console.log("**** router.get('/api/workouts'...");
  console.log("REQUEST BODY", req.body);
  Workout.create({})
  .then(function(data) {
    console.log("data", data);
    res.json(data);
  })
  .catch(err => {
    console.log("error in GET /api/workouts:", err);
  })
})

// add an exercise to a workout (used by addExercise(data))
router.put("/api/workouts/:id", function(req, res) {
  console.log("**** router.put('/api/workouts/:id'...");
  console.log("req.params.id", req.params.id);
  console.log("req.body", req.body);
  // Workout.findById(id) // is this the one?
  Workout.find({id:req.params.id}, req.body)
  .then(function(data) {
    console.log("data", data);
    res.json(data);
  })
  .catch(err => {
    console.log("error in PUT /api/workouts/:id:", err);
  })
})

// create a new workout (used by createWorkout())
router.post("/api/workouts", function(req, res) {
  console.log("**** router.post('/api/workouts'...");
  console.log("req.body", req.body); // this will be empty
  Workout.create({})
  .then(function(data) {
    console.log("data", data);
    res.json(data);
  })
  .catch(err => {
    console.log("error in POST /api/workouts", err);
  })
})

// get workouts in a date range (used by getWorkoutsInRange())
// router.get("/api/workouts/range", function(req, res) {
//   console.log("*** router.get('/api/workouts/range'...");
//   let endDate = new Date();
//   let startDate = new Date(endDate - (7 * 24 * 60 * 60 * 1000));
//   console.log("START", startDate);
//   console.log("END", endDate);
//   Workout.find({ day: { $gte: startDate, $lte: endDate } })
//   .then(function(data) {
//     // console.log("LAST SEVEN DAYS", data);
//     console.log("LAST SEVEN DOCUMENTS", data);
//     return res.json(data);
//   })
//   .catch(err => {
//     console.log("error in POST /api/workouts", err);
//   })
// })

// get the last seven workouts (used by getWorkoutsInRange())
router.get("/api/workouts/range", function(req, res) {
  console.log("*** router.get('/api/workouts/range'...");
  Workout.find({}) // this gets all of the data - how do we filter on dates? 7 days?
  .limit(7)
  .then(function(data) {
    console.log("LAST SEVEN DAYS", data);
    return res.json(data);
  })
  .catch(err => {
    console.log("error in GET /api/workouts/range", err);
  })
})

module.exports = router;
