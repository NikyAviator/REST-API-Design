// STEP 3:
// Inside our router we will call a different method handled by our controller for each endpoint.
const express = require('express');
const workoutController = require('../../controllers/workoutController');

const router = express.Router();

router.get('/', workoutController.getAllWorkouts);

router.get('/:workoutId', workoutController.getOneWorkout);

router.post('/', workoutController.createNewWorkout);

router.patch('/:workoutId', workoutController.updateOneWorkout);

router.delete('/:workoutId', workoutController.deleteOneWorkout);

module.exports = router;
