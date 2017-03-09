

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