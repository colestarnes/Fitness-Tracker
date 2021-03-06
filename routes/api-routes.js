const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      console.log(err)
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ day: -1 })
    .then(workout => {
      return res.json(workout);
    })
    .catch(err => {
      console.log(err)
      return res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(params.id, { $push: { exercise: body } }, { new: true, runValidators: true })
    .then(workout => {
      res.json(workout);
    }).catch(err => {
      console.log(err)
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", ({ body }, res) => {
  Workout.find({}).limit(5)
    .then(workout => {

      res.json(workout);
    })

});

module.exports = router;