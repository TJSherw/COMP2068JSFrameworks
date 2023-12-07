var express = require('express');
var router = express.Router();

const Preworkout = require('../models/preworkout'); //pre js
const preworkout = require('../models/preworkout');

const Protein = require('../models/protein'); //pre js

const Creatine = require('../models/creatine');

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

  Protein.find((err, proteins) => {
    if (err) {
      console.log(err);
    } else {

      res.render('proteins/protein', { title: 'Protein', dataset: proteins, });
    }
  });
});

/* GET Creatine page. */
router.get('/creatine', function (req, res, next) {

  Creatine.find((err, creatines) => {
    if (err) {
      console.log(err);
    } else {

      res.render('creatines/creatine', { title: 'Creatine', dataset: creatines, });
    }
  });
});


// PreWorkout ****************************************************************************************** 

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

// U > Update a given project in DB by ID
// GET /projects/edit/ID
router.get("/edit/:_id", (req, res, next) => {
  Preworkout.findById(req.params._id, (err, preworkoutObj) => {
    Preworkout.find((err, preworkout) => {
      res.render("preworkouts/edit",
        {
          title: "Edit a Pre-Workout",
          preworkout: preworkoutObj,

        });
    });
  });
});
// POST /projects/edit/ID
router.post("/edit/:_id", (req, res, next) => {
  Preworkout.findOneAndUpdate(
    { _id: req.params._id }, // filter to find the project
    {
      product: req.body.product,
      image: req.body.image,
      price: req.body.price,
      description: req.body.description
    }, // updated project info
    (err, updatedPreworkout) => { res.redirect("../preworkout"); } // callback function
  );
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
// *****************************************************************************************


// Creatine  ****************************************************************************************** 

// GET handle
router.get('/addCreatine', function (req, res, next) {
  res.render('creatines/addCreatine', { title: 'Add' });
});

//Post 
router.post('/addCreatine', (req, res, next) => {
  Creatine.create({
    product: req.body.product,
    image: req.body.image,
    price: req.body.price,
    description: req.body.description
  }, (err, newCreatine) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('../creatine')
    }
  })
});


// edit
router.get("/editCreatine/:_id", (req, res, next) => {
  Creatine.findById(req.params._id, (err, creatineObj) => {
    Creatine.find((err, creatine) => {
      res.render("creatines/editCreatine",
        {
          title: "Edit a Creatine",
          creatine: creatineObj,

        });
    });
  });
});


// POST /projects/edit/ID
router.post("/editCreatine/:_id", (req, res, next) => {
  Creatine.findOneAndUpdate(
    { _id: req.params._id }, // filter to find the project
    {
      product: req.body.product,
      image: req.body.image,
      price: req.body.price,
      description: req.body.description
    }, // updated project info
    (err, updatedCreatine) => { res.redirect("../creatine"); } // callback function
  );
});

// deleted
router.get('/deleteCreatine/:_id', (req, res, next) => {

  let creatineId = req.params._id;

  Creatine.remove(
    { _id: creatineId }, // find id 
    (err) => {
      res.redirect('../creatine');
    });
});


// *****************************************************************************************


// Protein  ****************************************************************************************** 


// GET handle
router.get('/addProtein', function (req, res, next) {
  res.render('proteins/addProtein', { title: 'Add' });
});

//Post 
router.post('/addProtein', (req, res, next) => {
  Protein.create({
    product: req.body.product,
    image: req.body.image,
    price: req.body.price,
    description: req.body.description
  }, (err, newProtein) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('../protein')
    }
  })
});


// edit
router.get("/editProtein/:_id", (req, res, next) => {
  Protein.findById(req.params._id, (err, proteinObj) => {
    Protein.find((err, protein) => {
      res.render("proteins/editProtein",
        {
          title: "Edit a Protein",
          protein: proteinObj,

        });
    });
  });
});


// POST /projects/edit/ID
router.post("/editProtein/:_id", (req, res, next) => {
  Protein.findOneAndUpdate(
    { _id: req.params._id }, // filter to find the project
    {
      product: req.body.product,
      image: req.body.image,
      price: req.body.price,
      description: req.body.description
    }, // updated project info
    (err, updatedProtein) => { res.redirect("../protein"); } // callback function
  );
});

// deleted
router.get('/deleteProtein/:_id', (req, res, next) => {

  let proteinId = req.params._id;

  Protein.remove(
    { _id: proteinId }, // find id 
    (err) => {
      res.redirect('../protein');
    });
});

// *****************************************************************************************

module.exports = router;
