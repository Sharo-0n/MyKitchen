'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();

  //$(".click-listener").click(function(event) {
  //  event.preventDefault();
    
  //})
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
  console.log("Javascript connected!");
}

$( ".private_shelf" ).hide();
$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
  $( ".menu" ).slideToggle( "slow", function() {
    $( ".cross" ).show();8
  });
});

$( ".cross" ).click(function() {
  $( ".menu" ).slideToggle( "slow", function() {
    $( ".cross" ).hide();
    $( ".hamburger" ).show();
  });
});

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

var data;

function removeItem(cid) {
  console.log("removing");
  if (data) {
    data.item.splice(cid, 1);
  } else {
    console.log("data is not fetched yet")
  }
}


$.getJSON('/data.json', function(data) {
  //do stuff with your data here
  data = data;
});

/* function to toggle the locations of buttons relative to window size */
/*function windowSize() {
  var w= 
}*/
