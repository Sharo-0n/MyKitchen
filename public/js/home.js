'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();

	//$(".click-listener").click(function(event) {
	//	event.preventDefault();
		
	//})
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
}

$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

