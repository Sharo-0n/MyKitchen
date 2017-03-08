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

	var owner = req.query.owner;
	var item_category = req.query.item_category;
	var item_name = req.query.item_name;
	var item_imageURL = req.query.item_imageURL;
	var expiration_date = req.query.expiration_date;
	var price = req.query.price;
	var shareable = req.query.shareable;
	var description = req.query.description;
	var used_up = req.query.used_up;

	// Get parameter values
	
	var newItem = {
		item_ID: item_ID,
		owner: owner,
		item_category: item_category,
		item_name: item_name,
		item_imageURL: item_imageURL,
		expiration_date: expiration_date,
		price: price,
		shareable: shareable,
		used_up: used_up,
		removed: 1,
		description: description
	};

	data.item.splice(item_ID, 1, newItem);
	// Take you back to index route
	res.redirect('/home');
 }