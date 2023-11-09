var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function (req, res, next) {
  res.render('index', { title: 'My Dog Millie' });
});

/* adding get method View pages */

/* Puppy Millie */

router.get('/puppy', function (req, res, next) {
  res.render('puppy', { title: 'Puppy' });
});


/* Bad Millie */

router.get('/bad', function (req, res, next) {
  res.render('bad', { title: 'Bad' });
});


/* Good Millie */

router.get('/good', function (req, res, next) {
  res.render('good', { title: 'Good' });
});


/* Adult Millie */

router.get('/adult', function (req, res, next) {
  res.render('adult', { title: 'Adult' });
});

module.exports = router;
