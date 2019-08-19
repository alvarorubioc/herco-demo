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

