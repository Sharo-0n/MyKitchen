var data = require("../data.json");

exports.addItem = function(req, res) {    
	// Your code goes here
	console.log(data)

	// Get parameter values
	var name = req.query.name;
	var description = req.query.description;


	var newFriend = {
		name: name,
		description: description,
		imageURL: "http://lorempixel.com/400/400/people"
	}


	data.friends.push(newFriend);
	// Take you back to index route
	res.redirect('/');
 }