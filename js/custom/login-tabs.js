var log = document.getElementById("log");
var sign = document.getElementById("sign");

function openSignup() {	
    
	document.getElementById("signup-tab").style.display = "block";
    document.getElementById("login-tab").style.display = "none";
	sign.classList.toggle("sh-btn-outline__allwhite");
    log.classList.add("sh-btn-outline__white");
    log.classList.remove("sh-btn-outline__allwhite");
    log.removeAttribute("disabled");
    
	document.getElementById("animation-sing").classList.add("animationA");
}

function openLogin() {

	document.getElementById("login-tab").style.display = "block";
	document.getElementById("signup-tab").style.display = "none";
	log.classList.add("sh-btn-outline__allwhite");
    sign.classList.remove("sh-btn-outline__allwhite");
    sign.classList.add("sh-btn-outline__white");

	document.getElementById("animation-log").classList.add("animationB");
}

function showTextInput() {
	var icon = document.getElementById("eye");

	if (icon.classList.contains('icon-eye')) {
		icon.classList.remove('icon-eye');
		icon.classList.add('icon-lock');
	  } else {
		icon.classList.add('icon-eye');
	  }
	
	
	var x = document.getElementById("password");
	if (x.type === "password") {
	  x.type = "text";
	} else {
	  x.type = "password";
	}
	
  } 