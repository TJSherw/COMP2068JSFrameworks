var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'T.J. Sherwood' });
});


// Get for About me page 
router.get('/about', (req, res, next) => {
  res.render('about', { title: 'About Me' });
});

// Get for Projects
router.get('/projects', (req, res, next) => {
  res.render('projects', { title: 'Projects' });
});


// Get for Contact Me 
router.get('/contact', (req, res, next) => {
  res.render('contact', { title: 'Contact' });
});

// export
module.exports = router;
