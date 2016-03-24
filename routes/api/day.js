var models = require('../../models');
var Day = models.Day;
var express = require('express');
var router = express.Router();

console.log('in router/day.js');

router.get('/', function(req, res, next) {
	Day.find({}).then(function(days) {
		// SEND ALL DAYS BACK AND APPEND THEM TO CORRECT SPOT ON DOM
		res.send(days);
	});
});


router.post('/', function(req, res, next) {
	var newDay = new Day({
		number: null,
		hotel: null,
		restaruants: null,
		activities: null
	});

	newDay.save().then(function(newDay) {
		res.send(newDay);
	}).catch(function(err) {
		console.error(err);
	});
});


router.get('/:number', function(req, res, next) {
	console.log('GOT IN THE DAY NUMBER HANDLER ' , req.params.number);
	Day.find({ number: req.params.number }).then(function(day) {
		res.send(day);
	});


	// Day.find({ _id = id }).then(function(day) {
	// 	res.json(days);
	// });
});


// //RESTAURANTS
// router.get('/:id/restaruants', function(req, res, next) {

// });

// router.post('/:id/restaruants', function(req, res, next) {

// });

// router.delete('/:id/restaruants', function(req, res, next) {

// });


// //HOTELS
// router.get('/:id/hotels', function(req, res, next) {

// });

// router.post('/:id/hotels', function(req, res, next) {

// });

// router.delete('/:id/hotels', function(req, res, next) {

// });


// //ACTIVITIES
// router.get('/:id/activities', function(req, res, next) {

// });

// router.post('/:id/activities', function(req, res, next) {

// });

// router.delete('/:id/activities', function(req, res, next) {

// });

module.exports = router;