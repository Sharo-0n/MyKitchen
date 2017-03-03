/*var data = require('../data.json');

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
 };*/
var data = require('../data.json');

var options = {
  valueNames: [ 'id', 'name']
};

// Init list
var contactList = new List('groceryList', options);

var id = $('#id-field'),
    name = $('#name-field'),
    addBtn = $('#add-btn'),
    editBtn = $('#edit-btn').hide(),
    removeBtns = $('.remove-item-btn'),
    editBtns = $('.edit-item-btn');

// Sets callbacks to the buttons in the list
refreshCallbacks();

addBtn.click(function() {
  contactList.add({
    id: Math.floor(Math.random()*110000),
    name: nameField.val(),
  });
  clearFields();
  refreshCallbacks();
});

editBtn.click(function() {
  var item = contactList.get('id', idField.val())[0];
  item.values({
    id:idField.val(),
    name: nameField.val(),
  });
  clearFields();
  editBtn.hide();
  addBtn.show();
});

function refreshCallbacks() {
  // Needed to add new buttons to jQuery-extended object
  removeBtns = $(removeBtns.selector);
  editBtns = $(editBtns.selector);
  
  removeBtns.click(function() {
    var itemId = $(this).closest('tr').find('.id').text();
    contactList.remove('id', itemId);
  });
  
  editBtns.click(function() {
    var itemId = $(this).closest('tr').find('.id').text();
    var itemValues = contactList.get('id', itemId)[0].values();
    idField.val(itemValues.id);
    nameField.val(itemValues.name);
    editBtn.show();
    addBtn.hide();
  });
}

function clearFields() {
  nameField.val('');
}