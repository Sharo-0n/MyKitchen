var data = require("../data.json");
var newItem_id = 8;

exports.view = function(req, res){
	console.log("add");
	res.render('add', data);
};

exports.addItem = function(req, res) {    

	// Get parameter values
	var item_name = req.query.item_name;
	var expiration_date = req.query.expiration_date;
	var total_price = req.query.total_price;
	var expiration_month = req.query.expiration_month;
	var expiration_day = req.query.expiration_day;
	var expiration_year = req.query.expiration_year;
	var total_price = req.query.total_price;
	var shareable = req.query.shareable;


	var newItem = {
		item_ID: newItem_id,
		item_catalog: "fruit",
		item_name: item_name,
		item_imageURL: "http://lorempixel.com/400/400",
		expiration_month : expiration_month,
		expiration_day: expiration_day,
		expiration_year: expiration_year,
		price_per_unit: "1.99",
		unit: "lbs",
		amount: "3.2",
		total_price: total_price,
		shareable: shareable,
		wasted: "0",
		used_up: "0"
	};
	newItem_id++;
	data.item.push(newItem);
	// Take you back to index route
	res.redirect('/home');
 }