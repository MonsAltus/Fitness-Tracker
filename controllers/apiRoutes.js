const router = require('express').Router();
const path = require('path');
const { Workout } = require('../models')
// REQUIRE MODELS

// Get last workout
router.get('/workouts', (req,res) => {
    Workout.find()
    .then(function(data){
        res.json(data)
    })
    .catch(function(err){
        res.status(400).json(err)
    })
});

// Add exercise
router.put('/workouts/:id', (req,res) => {
    Workout.findOneAndUpdate({_id: req.params.id}, {$push: {exercises: req.body}})
    .then(function(data){
        res.json(data)
    })
    .catch(function(err){
        res.status(400).json(err)
    })
})

// Create workout
router.post('/workouts', (req,res) => {
    Workout.create(req.body)
    .then(function(data){
        res.json(data)
    })
    .catch(function(err){
        res.status(400).json(err)
    })
})

// Get workouts in range
router.get('/workouts/range', (req,res) => {
    Workout.find()
    .sort({day: -1})
    .limit(7)
    .then(function(data){
        res.json(data)
    })
    .catch(function(err){
        res.status(400).json(err)
    })
});

module.exports = router;