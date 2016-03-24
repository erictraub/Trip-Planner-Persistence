var mongoose = require('mongoose');
// var ActivitySchema = require('./activity')
// var Hotel = require('./hotel')


var DaySchema = new mongoose.Schema({
  number: Number,
  hotel: {type: mongoose.Schema.Types.ObjectId, ref: 'Hotel'},
  restaurants: [{type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant'}],
  activies: [{type: mongoose.Schema.Types.ObjectId, ref: 'Activiy'}]
})

module.exports = mongoose.model('Day', DaySchema);