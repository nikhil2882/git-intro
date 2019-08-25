var welcome_container = document.getElementById("welcome_container");

var login_form = document.getElementById("login_form");
var user_register = document.getElementById("user_register");

var user_login = document.getElementById("user_login");

user_login.addEventListener( "click", function()
{

  welcome_container.style.display = "none";
  login_form.style.display = "none";

});
