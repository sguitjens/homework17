const express = require("express");
const router = express.Router();
const Workout = require("../models/workout");
// const db = require("../models");

// get last workout (used by getLastWorkout())
router.get("/api/workouts", (req, res) => {
  console.log("**** router.get('/api/workouts'...");
  console.log("REQUEST BODY", req.body);
  Workout.find({})
  .then(data => {
    console.log("data", data);
    res.json(data);
  })
  .catch(err => {
    console.log("error in GET /api/workouts:", err);
  })
})


// add an exercise to a workout (used by addExercise(data))
router.put("/api/workouts/:id", (req, res) => {
  console.log("**** router.put('/api/workouts/:id'...");
  console.log("req.params.id", req.params.id);
  // Workout.findById(id) // is this the one?
  Workout.find({id:req.params.id}, req.body)
  // Workout.find({_id:req.params.id}, { $push: {exercises: req.body} }) // not sure here
  .then(data => {
    console.log("data", data);
    res.json(data);
  })
  .catch(err => {
    console.log("error in PUT /api/workouts/:id:", err);
  })
})

// create a new workout (used by createWorkout())
router.post("/api/workouts", (req, res) => {
  console.log("**** router.post('/api/workouts'...");
  // console.log("req.body", req.body); // this will be empty
  Workout.create({})
  .then(data => {
    console.log("data", data);
    res.json(data);
  })
  .catch(err => {
    console.log("error in POST /api/workouts", err);
  })
})

// get workouts in a date range (used by getWorkoutsInRange())
// router.get("/api/workouts/range", (req, res) => {
//   console.log("*** router.get('/api/workouts/range'...");
//   let endDate = new Date();
//   let startDate = new Date(endDate - (7 * 24 * 60 * 60 * 1000));
//   console.log("START", startDate);
//   console.log("END", endDate);
//   Workout.find({ day: { $gte: startDate, $lte: endDate } })
//   .then(data => {
//     // console.log("LAST SEVEN DAYS", data);
//     console.log("LAST SEVEN DOCUMENTS", data);
//     return res.json(data);
//   })
//   .catch(err => {
//     console.log("error in POST /api/workouts", err);
//   })
// })

// get the last seven workouts (used by getWorkoutsInRange())
router.get("/api/workouts/range", (req, res) => {
  console.log("*** router.get('/api/workouts/range'...");
  Workout.find({}) // this gets all of the data - how do we filter on dates? 7 days?
  .limit(7) // I think this is wrong, I saw it somewhere in the class chat
  .then(data => {
    console.log("LAST SEVEN DOCUMENTS", data);
    res.json(data);
  })
  .catch(err => {
    console.log("error in GET /api/workouts/range", err);
  })
})

module.exports = router;
