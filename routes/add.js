var data = require("../data.json");
var newItem_id = 8;

exports.view = function(req, res){
	console.log("add");
	res.render('add', data);
};

exports.addItem = function(req, res) {    

	// Get parameter values
	var owner = req.query.owner;
	var item_category = req.query.item_category;
	var item_name = req.query.item_name;
	var item_imageURL = req.query.item_imageURL;
	var expiration_date = req.query.expiration_date;
	var price = req.query.price;
	var shareable = req.query.shareable;
	var description = req.query.description;


	var newItem = {
		item_ID: newItem_id,
		owner: owner,
		item_category: "fruit",
		item_name: item_name,
		item_imageURL: item_imageURL,
		expiration_date: expiration_date,
		price: price,
		shareable: shareable,
		used_up: 0,
		removed: 0,
		description: description
	};
	newItem_id++;
	data.item.push(newItem);
	// Take you back to index route
	res.redirect('/home');
 }