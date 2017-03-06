var data = require('../data.json');

exports.view = function(req, res){
	console.log("addlistItem");
	res.render('grocerylist', data);
};

exports.addlistItem = function(req, res) {    
	// Your code goes here
	console.log(data)

	// Get parameter values
	var name = req.query.name;
	
	// creates list item generated from user input
	var list_item = {
		name: name
	}

	data.item.push(list_item);
	// Take you back to index route
	// send item to list on grocery list page 

	res.redirect('/grocerylist');
 };