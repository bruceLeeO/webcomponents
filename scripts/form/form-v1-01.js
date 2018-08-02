/* sign-up form variables */
var signupForm = document.getElementById("signupForm");
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirm-password");

var usernameErrorMsg = "";
var emailErrorMsg = "";
//var passwordErrorMsg = "";
var confirmPasswordErrorMsg = "";

function checkFormField(evt) {
	//console.log("preventing default...");		
  evt.preventDefault();

	if (validator.isEmpty(username.value)){
		//console.log("user name is empty");
		username.className = username.className.replace(" input-invalid","");
		username.className = username.className.replace(" input-valid","");
		username.className += " input-invalid";
		usernameErrorMsg = "Username field is required";
		document.getElementById("showUsernameErrMsg").innerHTML = usernameErrorMsg;
	} else {

		//console.log("user name is not empty");
		username.className = username.className.replace(" input-invalid","");
		username.className = username.className.replace(" input-valid","");
		username.className += " input-valid";
		document.getElementById("showUsernameErrMsg").innerHTML = "";		
	}

	if (validator.isEmpty(email.value)){
		//console.log("email is empty");
		email.className = email.className.replace(" input-invalid","");
		email.className = email.className.replace(" input-valid","");
		email.className += " input-invalid";
		emailErrorMsg = "Email field is required";
		document.getElementById("showEmailErrMsg").innerHTML = emailErrorMsg;		
	} else {
		//console.log("email is not empty");
		email.className = email.className.replace(" input-invalid","");
		email.className = email.className.replace(" input-valid",""); 		
		if (validator.isEmailAddress(email.value)){
			console.log("email is valid");
			email.className += " input-valid";
			document.getElementById("showEmailErrMsg").innerHTML = "";
		} else {
			//console.log("email is invalid");
			email.className += " input-invalid";
			emailErrorMsg = "Email is invalid";
			document.getElementById("showEmailErrMsg").innerHTML = emailErrorMsg;				
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
		console.log("password is not empty");
		password.className = password.className.replace(" input-valid","");		
		password.className = password.className.replace(" input-invalid","");
		if (validator.isPassword(password.value)){
			console.log("password is valid");
			password.className += " input-valid";
			document.getElementById("showPasswordErrMsg").innerHTML = validator.passwordErrMsg;
		} else {
			console.log("password is invalid");
			password.className += " input-invalid";
			//passwordErrorMsg = "Password is invalid";	
			document.getElementById("showPasswordErrMsg").innerHTML = validator.passwordErrMsg;
		}						
	}	

	if (validator.isEmpty(confirmPassword.value)){
		//console.log("confirmPassword is empty");
		password.className = password.className.replace(" input-valid","");		
		password.className = password.className.replace(" input-invalid","");		
		confirmPassword.className += " input-invalid";
		confirmPasswordErrorMsg = "Confirm Password field is required";
		document.getElementById("showConfirmPasswordErrMsg").innerHTML = confirmPasswordErrorMsg;		
	} else {
		//console.log("confirm password is not empty");
		password.className = password.className.replace(" input-valid","");		
		password.className = password.className.replace(" input-invalid","");
		document.getElementById("showConfirmPasswordErrMsg").innerHTML = "";		
	}

	//document.getElementById("errorMsg").innerHTML = errorMsg;
}

signupForm.addEventListener("submit",checkFormField,false);
//signupForm.removeEventListener("submit",checkFormField,false);
/*
function validateUsername() {
	console.log("listening to username");
	if (!validator.isEmpty(this.value)) {
		username.className += " input-valid";
	}	
}

username.addEventListener("input",validateUsername,false);
username.removeEventListener("input",validateUsername,false);	

function validateEmail() {
	console.log("listening to email");
	if (validator.isEmailAddress(this.value)){
		email.className += " input-valid";
	} else {
		email.className += " input-invalid";
	}	
}

email.addEventListener("input",validateEmail,false);
email.removeEventListener("input",validateEmail,false);

function validatePassword() {
	console.log("listening to password");
	if (validator.isPassword(this.value)) {
		password.className += " input-valid";
	} else {
		password.className += " input-invalid";
	}	
}

password.addEventListener("input",validatePassword,false);
password.removeEventListener("input",validatePassword,false);	

function validateConfirmPassword() {
	console.log("listening to confirm password");
	if (!validator.isEmpty(this.value)) {
		confirmPassword.className += " input-valid";
	}
}

confirmPassword.addEventListener("input",validateConfirmPassword,false);
confirmPassword.removeEventListener("input",validateConfirmPassword,false);	

*/

