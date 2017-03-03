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


exports.removeItem = function(req, res) {    
	console.log("remove called");
	// Get parameter values
	var item_ID = req.query.item_ID;

	data.item.splice(item_ID, 1);
	// Take you back to index route
	res.redirect('/home');
 }