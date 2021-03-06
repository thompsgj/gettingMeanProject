var mongoose = require('mongoose');
require('./locations');
var locationSchema = new mongoose.Schema({
	name: {type: String, required: true},
	address: String,
	rating: {type: Number, "default": 0, min: 0, max: 5},
	facilities: [String],
	coords: {type: [Number], index: '2dsphere'}
});
/*GET Home Page */
module.exports.homelist = function(req,res) {
  res.render('locations-list', {
  	title: 'Loc8r - find a place to work with wifi',
  	pageHeader: {
  		title: 'Loc8r',
  		strapline: 'Find places to work with wifi near you!'
  	},
  	sidebar: "Looking for wifi and a seat?  Loc8r helps you find place to work when out and about.  Perhaps with coffee, cake or a pint?  Let Loc8r help you find the place you're looking for.",
  	locations: [{
  		name: 'Starcups',
  		address: '125 High Street, Reading, RG6 1PS',
  		rating: 3,
  		facilities: ['Hot Drinks', 'Food', 'Premium Wifi'],
  		distance: '100m'
  	},{
  		name: 'Cafe Hero',
  		address: '125 High Street, Reading, RG6 1PS',
  		rating: 4,
  		facilities: ['Hot Drinks', 'Food', 'Premium Wifi'],
  		distance: '200m'
  	},{
  		name: 'Burger Queen',
  		address: '125 High Street, Reading, RG6 1PS',
  		rating: 2,
  		facilities: ['Hot Drinks', 'Food', 'Premium Wifi'],
  		distance: '250m'
  	}]
  });
};
/*GET Location Info Page */
module.exports.locationInfo = function(req,res) {
  res.render('location-info', {
  	title: 'Starcups',
  	pageHeader: {title: 'Starcups'},
  	sidebar: {
  		context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
  		callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
  	},
  	location: {
  		name: 'Starcups',
  		address: '125 High Street, Reading, RG6 1PS',
  		rating: 3,
  		facilities: ['Hot Drinks', 'Food', 'Premium Wifi'],
  		coords: {lat: 51.45501, lng: -0.9690884},
  		openingTimes: [{
  			days: 'Monday - Friday',
  			opening: '7:00am',
  			closing: '7:00pm',
  			closed: false
  		},{
  			days: 'Saturday',
   			opening: '8:00am',
  			closing: '5:00pm',
  			closed: false 			
  		},{
  			days: 'Sunday',
  			closed: true
  		}],
  		reviews: [{
  			author: 'Simon Holmes',
  			rating: 5,
  			timestamp: '16 July 2013',
  			reviewText: 'What a great place.  I can\'t say enough good things about it.'
  		},{
			author: 'Charlie Chaplin',
  			rating: 3,
  			timestamp: '16 July 2013',
  			reviewText: 'It was okay.  Coffee wasn\'t great, but the wifi was fast.'
  		}]
  	}
  });
};
/*GET Add Review Page */
module.exports.addReview = function(req,res) {
  res.render('location-review-form', {
  	title: 'Review Starcups on Loc8r',
  	pageHeader: {title: 'Review Starcups'}
  });
};
