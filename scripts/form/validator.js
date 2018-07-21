(function(window){

	var validator = {};
	validator.passwordErrMsg, validator.confirmPasswordErrMsg, validator.emailErrMsg = "";

	var isExpressionInArrs = function(arrs,exp) {
	   //console.log("arrs.... "+arrs);
	   var arrLen = arrs.length;
	   //console.log("exp.length: "+exp.length+" --- arrLen: "+arrLen);
		var frg = "";
	   var subStr = arrs;
	   while (arrLen > 0) {
	      for (var i = 0; i < arrLen; i++) {
	         subStr = arrs.slice(i);
	         //console.log("subStr is currently.... "+subStr);
	         frg = subStr.slice(0,exp.length);
	         //console.log("fragments.... "+frg);
	         //console.log("exp.... "+exp);
	         
	         if (frg === exp)
	            return true;
	      }      
	      //console.log(arrLen);
	      arrLen--;
	   }
		return false;
	}	

	var hasUppercaseLetter = function(str) {
		for (var i = 0; i < str.length; i++) {
			if (str[i] === "A" || str[i] === "B" || str[i] === "C" || str[i] === "D" || str[i] === "E" || str[i] === "F" || str[i] === "G" || str[i] === "H" || str[i] === "I" || str[i] === "J" || str[i] === "K" || str[i] === "L" || str[i] === "M" || str[i] === "N" || str[i] === "O" || str[i] === "P" || str[i] === "Q" || str[i] === "R" || str[i] === "S" || str[i] === "T" || str[i] === "U" || str[i] === "V" || str[i] === "W" || str[i] === "X" || str[i] === "Y" || str[i] === "Z") {
				return true;
			} 
		}
		return false;
	}

	var hasLowercaseLetter = function(str) {
		for (var i = 0; i < str.length; i++) {
			if (str[i] === "a" || str[i] === "b" || str[i] === "c" || str[i] === "d" || str[i] === "e" || str[i] === "f" || str[i] === "g" || str[i] === "H" || str[i] === "i" || str[i] === "j" || str[i] === "k" || str[i] === "l" || str[i] === "m" || str[i] === "n" || str[i] === "o" || str[i] === "p" || str[i] === "q" || str[i] === "r" || str[i] === "s" || str[i] === "t" || str[i] === "u" || str[i] === "v" || str[i] === "w" || str[i] === "x" || str[i] === "y" || str[i] === "z") {
				return true;
			} 
		}
		return false;
	}

	var hasNumber = function(numStr) {
		for (var i = 0; i < numStr.length; i++) {
			if (numStr[i] === "0" || numStr[i] === "1" || numStr[i] === "2" || numStr[i] === "3" || numStr[i] === "4" || numStr[i] === "5" || numStr[i] === "6" || numStr[i] === "7" || numStr[i] === "8" || numStr[i] === "9") {
				return true;
			}
		}
		return false;
	}

	/* return the position of a character (ie, @ or .) in a given email */
	var positionOfEmailChar = function(email, character) {
		for (var i = 0; i < email.length; i++) {
			if (email[i] === character) {
				return i+1;
			}
		}
	}

	/* return the number of times a character (ie, @ or .) appear in a given email */
	var numberOfEmailChar = function(email, character) {
		var count = 0;
		for (var i = 0; i < email.length; i++) {
			if (email[i] === character) {
				count++;
			}
		}	
		//console.log("in "+email+", "+character+" appears "+count+" times.");
		return count;	
	}

	/* check is email entered valid */
	validator.isEmailAddress = function (email) {
		if (isExpressionInArrs(email,"@") && isExpressionInArrs(email,".")) {
			if (email[0] === "@" || email[0] === "." || email[email.length - 1] === "@" || email[email.length - 1] === ".") {
				//console.log(email+" starts or end with '@' or '.' --therefore is invalid.");
				validator.emailErrMsg = email+" is not a valid email address";
				return false;
			}
			if (isExpressionInArrs(email,"@.") || isExpressionInArrs(email,".@")) {
				//console.log(email+" has expression '@.' or '.@' -- therefore is invalid.");
				validator.emailErrMsg = email+" is also not a valid email";
				return false;
			}
			if (numberOfEmailChar(email,"@") > 1 || numberOfEmailChar(email,".") > 1) {
				//console.log(email+" numberOfEmailChar(email,'@'): "+numberOfEmailChar(email,"@")+" and numberOfEmailChar(email,'.':) "+numberOfEmailChar(email,"."));				
				validator.emailErrMsg = email+" is still not valid email";
				return false;
			}
			if (positionOfEmailChar(email,"@") < positionOfEmailChar(email,".")) {
				//console.log(email+" positionOfEmailChar(email,'@'): "+positionOfEmailChar(email,"@")+" and positionOfEmailChar(email,'.':) "+positionOfEmailChar(email,"."));
				validator.emailErrMsg = "";
				return true;
			}
		}
		console.log(email+" missing '@' or '.' -- thus, invalid");
		validator.emailErrMsg = email+" is missing '@' or '.'";
		return false;
	}

	validator.isBeforeToday = function (input) {	
		var inputDate = new Date(input);
		//console.log("Input date is "+inputDate);
		var currDate = new Date();
		//console.log("Current date is "+currDate);
		if (currDate.getTime() > inputDate.getTime()){
			//console.log("date is before today");
			return true;
		}
		return false;
	}

	/* check is input field empty */
	validator.isEmpty = function (str) {
		if (str.length == 0 || str == "" || str == " ") {
			//console.log("field is empty...");
			return true;
		}
		return false;
	}

	/* check is password entered valid  */
	validator.isPassword = function (str) {
		if (str.length < 8) {
			validator.passwordErrMsg = "";			
			//console.log("password entered: "+str.length+" is < 8... ");
			validator.passwordErrMsg = "Password need min 8 character";
			return false;
		} else {
			validator.passwordErrMsg="";
			if (hasUppercaseLetter(str) && hasLowercaseLetter(str) && hasNumber(str)) {
				validator.passwordErrMsg = "";
				return true;
			} else {
				if (!hasUppercaseLetter(str)) {
					validator.passwordErrMsg = "Passcode need one uppercase letter"
				}

				if (!hasLowercaseLetter(str)) {
					validator.passwordErrMsg = "Password need one lowercase letter";
				}

				if (!hasNumber(str)) {
					validator.passwordErrMsg = "Password need one number";
				}
				return false;
			}
		}
	}

	validator.isConfirmPassword = function(password, confirmPassword) {

		if (validator.isPassword(password) && password === confirmPassword) {
			validator.confirmPasswordErrMsg = "";
		  return true;
	  }
		if (validator.isPassword(password) && password.length != confirmPassword) {
			validator.confirmPasswordErrMsg = "Password is not confirmed";
			//console.log("validator.isPassword(password): "+validator.confirmPasswordErrMsg);
		  return false;
	  }	  
		validator.confirmPasswordErrMsg = "Password cannot be confirmed";
		return false;
	}

	window.validator = validator; //expose to global	

})(window);