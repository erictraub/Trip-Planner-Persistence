var express = require('express');
var router = express.Router();
var models = require('../../models');
var Hotel = models.Hotel;
var Activity = models.Activity;
var Restaurant = models.Restaurant;
var Place = models.Place;
// var Day = models.Days;


router.get('/hotels', function(req, res, next) {
	Hotel.find({})
	.then(function(hotels) {
		res.send(hotels);
	})
	.catch(function(err){
		console.error(err);
	})
});


router.get('/restaurants', function(req, res, next) {
	Restaurant.find({}).then(function(restaurants) {
		res.send(restaurants);
	});
});


router.get('/activities', function(req, res, next) {
	Activity.find({}).then(function(activities) {
		res.json(activities);
	});
});




module.exports = router;
