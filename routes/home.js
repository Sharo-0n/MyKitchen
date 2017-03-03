// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	data["nav"] = false;
	res.render('home', data);
};

exports.viewNav = function(req, res){
	console.log("viewing Nax");
	data["nav"] = true;
	res.render('home', data);
};


exports.removeItem = function(req, res) {    
	var item_ID = req.query.item_ID;
	console.log("remove called");
	console.log("removing "+item_ID);
	// Get parameter values
	var newItem = {
		item_ID: item_ID,
		item_catalog: "",
		item_name: "",
		item_imageURL: "",
		expiration_month : "",
		expiration_day: "",
		expiration_year: "",
		price_per_unit: "",
		unit: "",
		amount: "",
		total_price: "",
		shareable: 0,
		wasted: "0",
		used_up: 1
	};

	data.item.splice(item_ID, 1, newItem);
	// Take you back to index route
	res.redirect('/home');
 }