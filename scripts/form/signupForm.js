/* sign-up form variables */
var signupForm = document.getElementById("signupForm");
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirm-password");

var usernameErrorMsg = "";
//var isSignupUsernameFieldValid, isSignupEmailFieldValid, isSignupPasswordFieldValid, isSignupConfirmPasswordFieldValid = false;

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
		//isSignupUsernameFieldValid = true;
	}

	if (validator.isEmpty(email.value)){
		console.log("email is empty");
		email.className = email.className.replace(" input-invalid","");
		email.className = email.className.replace(" input-valid","");
		email.className += " input-invalid";
		validator.emailErrMsg = "Email field is required";
		document.getElementById("showEmailErrMsg").innerHTML = validator.emailErrMsg;
	} else {
		console.log("email is not empty");
		email.className = email.className.replace(" input-invalid","");
		email.className = email.className.replace(" input-valid",""); 		
		if (validator.isEmailAddress(email.value)){
			console.log("email is valid");
			email.className += " input-valid";
			document.getElementById("showEmailErrMsg").innerHTML = validator.emailErrMsg;
			//isSignupEmailFieldValid = true;
		} else {
			console.log("email is invalid");
			email.className += " input-invalid";
			//emailErrorMsg = "Email is invalid";
			document.getElementById("showEmailErrMsg").innerHTML = validator.emailErrMsg;			
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
			//isSignupPasswordFieldValid = true;
		} else {			
			//console.log("password is invalid");
			password.className += " input-invalid";
			//passwordErrorMsg = "Password is invalid";	
			document.getElementById("showPasswordErrMsg").innerHTML = validator.passwordErrMsg;
		}						
	}	

	if (validator.isEmpty(confirmPassword.value)){
		//console.log("confirmPassword is empty");
		confirmPassword.className = confirmPassword.className.replace(" input-valid","");		
		confirmPassword.className = confirmPassword.className.replace(" input-invalid","");		
		confirmPassword.className += " input-invalid";
		validator.confirmPasswordErrMsg = "Confirm Password field is required";
		document.getElementById("showConfirmPasswordErrMsg").innerHTML = validator.confirmPasswordErrMsg;		
	} else {
		//console.log("confirm password is not empty");
		confirmPassword.className = confirmPassword.className.replace(" input-valid","");		
		confirmPassword.className = confirmPassword.className.replace(" input-invalid","");
		if (validator.isConfirmPassword(password.value,confirmPassword.value)) {
			console.log("password is confirm");
			confirmPassword.className += " input-valid";
			document.getElementById("showConfirmPasswordErrMsg").innerHTML = validator.confirmPasswordErrMsg;
			//isSignupConfirmPasswordFieldValid = true;
		} else {			
			console.log("password is not confirm");
			confirmPassword.className += " input-invalid";
			//validator.confirmPasswordErrMsg = "Password is not confirmed";	
			document.getElementById("showConfirmPasswordErrMsg").innerHTML = validator.confirmPasswordErrMsg;			
		}
	}

	/* remove signupForm event listener when all fields are valid */
	//if (isSignupUsernameFieldValid == true && isSignupEmailFieldValid == true && isSignupPasswordFieldValid == true && isSignupConfirmPasswordFieldValid == true) {
	//	console.log("removing signupForm event listener....");
	//	signupForm.removeEventListener("submit",checkFormField,false);		
	//} else {
	//	console.log("not removing signupForm event listener....");
	//}
}

signupForm.addEventListener("submit",checkFormField,false);



