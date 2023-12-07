var express = require('express');
var router = express.Router();

const Preworkout = require('../models/preworkout'); //pre js

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Sherwood Company Limited' });
});


/* GET PreWorkout page. */
router.get('/preworkout', function (req, res, next) {
  //res.render('preworkouts/preworkout', { title: 'Pre-Workout' });

  Preworkout.find((err, preworkouts) => {
    if (err) {
      console.log(err);
    } else {
      res.render('preworkouts/preworkout', { title: 'Pre-Workout', dataset: preworkouts, });
    }
  });
});



/* Get Protein Page */
router.get('/protein', function (req, res, next) {
  res.render('proteins/protein', { title: 'Protein' });
});

/* GET Creatine page. */
router.get('/creatine', function (req, res, next) {
  res.render('creatines/creatine', { title: 'Creatine' });
});


// PreWorkout 

// GET handle
router.get('/add', function (req, res, next) {
  res.render('preworkouts/add', { title: 'Add' });
});

//Post 
router.post('/add', (req, res, next) => {
  Preworkout.create({
    product: req.body.product,
    image: req.body.image,
    price: req.body.price,
    description: req.body.description
  }, (err, newPreworkout) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('../preworkout')
    }
  })
});


// deleted
router.get('/delete/:_id', (req, res, next) => {

  let preworkoutId = req.params._id;

  Preworkout.remove(
    { _id: preworkoutId }, // find id 
    (err) => {
      res.redirect('../preworkout');
    });
});

// Creatine


// Protein 

module.exports = router;
