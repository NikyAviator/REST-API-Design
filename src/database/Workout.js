// Create a Workout File that stores all workout specific methods in /src/database
const DB = require('../database/db.json');

const getAllWorkouts = () => {
  return DB.workouts;
};

module.exports = { getAllWorkouts };
