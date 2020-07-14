const express = require('express');
const db = require('../models');
const router = express.Router();

// Get Workouts
router.get("/workouts", (req, res) => {
    db.Workout.find({})
        .then((dbWorkouts) => {
            res.json(dbWorkouts);
        })
        .catch((err) => {
            res.json(err);
        });
});

// Post Workout
router.post("/workouts", ({ body }, res) => {
    db.Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
});