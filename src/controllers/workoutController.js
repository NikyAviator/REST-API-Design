// Inside our router we will call a different method handled by our controller for each endpoint.
const workoutService = require('../services/workoutService');

// Go to localhost:3000/api/v1/workouts inside your browser and you should see the response JSON.
const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts();
  res.send({ status: 'OK', data: allWorkouts });
};

const getOneWorkout = (req, res) => {
  const workout = workoutService.getOneWorkout();
  res.send('Get an existing workout');
};

const createNewWorkout = (req, res) => {
  const createdWorkout = workoutService.createNewWorkout();
  res.send('Create a new workout');
};

const updateOneWorkout = (req, res) => {
  const updatedWorkout = workoutService.updateOneWorkout();
  res.send('Update an existing workout');
};

const deleteOneWorkout = (req, res) => {
  workoutService.deleteOneWorkout();
  res.send('Delete an existing workout');
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
