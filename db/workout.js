const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({ 
  
  type: {
type: String, 
tirm: true, 
required: "Resistance or Cardio"
  },
  name: {
    type: String,
    trim: true
  },

  weight: {
    type: Number
  },

  sets: {
 type: Number
  },

  reps: {
    type: Number
  },
  duration: {
    type: Number, 
    required: "Minutes of duration for exercise"
  }, 
  distance: {
    type: Number, 
    required: "Miles traveled"
  }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;