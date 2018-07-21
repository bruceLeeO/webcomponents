/* login form variables */
var loginForm = document.getElementById("loginForm");
var usernameOrEmail = document.getElementById("usernameOrEmail");
var password = document.getElementById("password");

var isLoginUsernameOrEmailFieldValid, isLoginPasswordFieldValid = false;

function checkFormField(evt) {

	evt.preventDefault();

	if (validator.isEmpty(usernameOrEmail.value)){
		console.log("usernameOrEmail is empty");
		usernameOrEmail.className = usernameOrEmail.className.replace(" input-invalid","");
		usernameOrEmail.className = usernameOrEmail.className.replace(" input-valid","");
		usernameOrEmail.className += " input-invalid";
		document.getElementById("showUsernameEmailErrMsg").innerHTML =  "Username or Email field is required";
	} else {
		console.log("usernameOrEmail is not empty");
		usernameOrEmail.className = usernameOrEmail.className.replace(" input-invalid","");
		usernameOrEmail.className = usernameOrEmail.className.replace(" input-valid",""); 		
		if (validator.isUsernameOrEmail(usernameOrEmail.value)){
			console.log(usernameOrEmail.value+" is valid");
			usernameOrEmail.className += " input-valid";
			document.getElementById("showUsernameEmailErrMsg").innerHTML = validator.usernameOrEmailErrMsg;
			isLoginUsernameOrEmailFieldValid = true;
		} else {
			console.log(usernameOrEmail.value+" is invalid");
			usernameOrEmail.className += " input-invalid";
			//emailErrorMsg = "Email is invalid";
			document.getElementById("showUsernameEmailErrMsg").innerHTML = validator.usernameOrEmailErrMsg;			
		}
	}

	if (validator.isEmpty(password.value)){
		password.className = password.className.replace(" input-valid","");
		password.className = password.className.replace(" input-invalid","");
		console.log("password is empty");
		password.className += " input-invalid";
		validator.passwordErrMsg = "Password field is required";
		document.getElementById("showPasswordErrMsg").innerHTML = validator.passwordErrMsg;
	} else {
		//console.log("password is not empty");
		password.className = password.className.replace(" input-valid","");		
		password.className = password.className.replace(" input-invalid","");		
		if (validator.isPassword(password.value)){		
			//console.log("password is valid");
			password.className += " input-valid";
			document.getElementById("showPasswordErrMsg").innerHTML = validator.passwordErrMsg;
			isSignupPasswordFieldValid = true;
		} else {			
			//console.log("password is invalid");
			password.className += " input-invalid";
			//passwordErrorMsg = "Password is invalid";	
			document.getElementById("showPasswordErrMsg").innerHTML = validator.passwordErrMsg;
		}						
	}
}

loginForm.addEventListener("submit", checkFormField,false);
