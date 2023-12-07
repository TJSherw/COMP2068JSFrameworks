var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sherwood Company Limited' });
});


/* GET PreWorkout page. */
router.get('/preworkout', function(req, res, next) {
  res.render('preworkout/preworkout', { title: 'Pre-Workout' });
});



/* Get Protein Page */ 
router.get('/protein', function(req, res, next) {
  res.render('protein/protein', { title: 'Protein' });
});

/* GET Creatine page. */
router.get('/creatine', function(req, res, next) {
  res.render('creatine/creatine', { title: 'Creatine' });
});


module.exports = router;
