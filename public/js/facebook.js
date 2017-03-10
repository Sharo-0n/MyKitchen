/*
function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
  console.log("checkLoginState called");
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    console.log("user logged into facebook and app");
    // Logged into your app and Facebook.
    //window.location.href="/home";
  } else {
    console.log("user is not logged into facebook or app");
    alert("You are not logged into Facebook or the App");
    window.location.href="/";
  }
}

function changeUser(response) {
  //$(".facebookLogin").hide();
  console.log(response);
  
  //$("#user_name").text(response.name+"'s Pantry");
  //$("#user_photo").attr('src', response.picture.data.url);
}
*/
function logout() {
  FB.logout(function(response) {
    logoutCallback(response);
  });
  console.log("logout called");
}

function logoutCallback(response) {
  console.log(response);
  window.location.href="/";
}