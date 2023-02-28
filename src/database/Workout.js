// Create a Workout File that stores all workout specific methods in /src/database
const DB = require('../database/db.json');
const { saveToDatabase } = require('./utils');

const getAllWorkouts = () => {
  return DB.workouts;
};

const createdNewWorkout = (newWorkout) => {
  const isAlreadyAdded =
    DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
  if (isAlreadyAdded) {
    return;
  }
  DB.workouts.push(newWorkout);
  saveToDatabase(DB);
  return newWorkout;
};

module.exports = {
  getAllWorkouts,
  createdNewWorkout,
};
