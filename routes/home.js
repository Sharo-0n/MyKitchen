// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	data["nav"] = false;
	res.render('home', data);
};

exports.viewNav = function(req, res){
	console.log(data);
	data["nav"] = true;
	res.render('home', data);
};