(function(window){

	var calc = {};

	calc.result = "";

	calc.display = document.getElementById('display');

	calc.sevenBtn = function(){
		var line = "";
		var len = this.display.value.length;
	   if (len === 1 && this.display.value[len-1] === "0") {
	   	for (var i = 0; i < len; i++) {
            if (this.display.value[i] === "0") {
          		line.slice(0,i);
				   line += "7";
            }
         }
         this.display.value = line;
      } else {
      	this.display.value += document.getElementById('seven').firstChild.nodeValue;
      }
	}; 

	calc.eightBtn = function(){
		var line = "";
		var len = this.display.value.length;
	   if (len === 1 && this.display.value[len-1] === "0") {
	   	for (var i = 0; i < len; i++) {
            if (this.display.value[i] === "0") {
          		line.slice(0,i);
				   line += "8";
            }
         }
         this.display.value = line;
      } else {
      	this.display.value += document.getElementById('eight').firstChild.nodeValue;
      }
	};

	calc.nineBtn = function(){
		var line = "";
		var len = this.display.value.length;
	   if (len === 1 && this.display.value[len-1] === "0") {
	   	for (var i = 0; i < len; i++) {
            if (this.display.value[i] === "0") {
          		line.slice(0,i);
				   line += "9";
            }
         }
         this.display.value = line;
      } else {
      	this.display.value += document.getElementById('nine').firstChild.nodeValue;
      }
	};

	calc.divideBtn = function(){
		var len = this.display.value.length;
		if (!(len <= 0 || this.display.value[len-1] === "+" || this.display.value[len-1] === document.getElementById('minus').firstChild.nodeValue || this.display.value[len-1] === document.getElementById('multiply').firstChild.nodeValue || this.display.value[len-1] === document.getElementById('divide').firstChild.nodeValue || this.display.value[len-1] === "%" || this.display.value[len-1] === ".")) {
		   this.display.value += document.getElementById('divide').firstChild.nodeValue;
		}

	};

	calc.fourBtn = function(){
		var line = "";
		var len = this.display.value.length;
	   if (len === 1 && this.display.value[len-1] === "0") {
	   	for (var i = 0; i < len; i++) {
            if (this.display.value[i] === "0") {
          		line.slice(0,i);
				   line += "4";
            }
         }
         this.display.value = line;
      } else {
      	this.display.value += document.getElementById('four').firstChild.nodeValue;
      }
	};

	calc.fiveBtn = function(){
		var line = "";
		var len = this.display.value.length;
	   if (len === 1 && this.display.value[len-1] === "0") {
	   	for (var i = 0; i < len; i++) {
            if (this.display.value[i] === "0") {
          		line.slice(0,i);
				   line += "5";
            }
         }
         this.display.value = line;
      } else {
      	this.display.value += document.getElementById('five').firstChild.nodeValue;
      }
	}; 

	calc.sixBtn = function(){
		var line = "";
		var len = this.display.value.length;
	   if (len === 1 && this.display.value[len-1] === "0") {
	   	for (var i = 0; i < len; i++) {
            if (this.display.value[i] === "0") {
          		line.slice(0,i);
				   line += "6";
            }
         }
         this.display.value = line;
      } else {
      	this.display.value += document.getElementById('six').firstChild.nodeValue;
      }
	};

	calc.multiplyBtn = function(){
		var len = this.display.value.length;
		if (!(len <= 0 || this.display.value[len-1] === "+" || this.display.value[len-1] === document.getElementById('minus').firstChild.nodeValue || this.display.value[len-1] === document.getElementById('multiply').firstChild.nodeValue || this.display.value[len-1] === document.getElementById('divide').firstChild.nodeValue || this.display.value[len-1] === "%" || this.display.value[len-1] === ".")) {
		   this.display.value += document.getElementById('multiply').firstChild.nodeValue;
		}
	};

	calc.oneBtn = function(){
		var line = "";
		var len = this.display.value.length;
	   if (len === 1 && this.display.value[len-1] === "0") {
	   	for (var i = 0; i < len; i++) {
            if (this.display.value[i] === "0") {
          		line.slice(0,i);
				   line += "1";
            }
         }
         this.display.value = line;
      } else {
      	this.display.value += document.getElementById('one').firstChild.nodeValue;
      }
	};

	calc.twoBtn = function(){
		var line = "";
		var len = this.display.value.length;
	   if (len === 1 && this.display.value[len-1] === "0") {
	   	for (var i = 0; i < len; i++) {
            if (this.display.value[i] === "0") {
          		line.slice(0,i);
				   line += "2";
            }
         }
         this.display.value = line;
      } else {
      	this.display.value += document.getElementById('two').firstChild.nodeValue;
      }
	};  


	calc.threeBtn = function(){
		var line = "";
		var len = this.display.value.length;
	   if (len === 1 && this.display.value[len-1] === "0") {
	   	for (var i = 0; i < len; i++) {
            if (this.display.value[i] === "0") {
          		line.slice(0,i);
				   line += "3";
            }
         }
         this.display.value = line;
      } else {
      	this.display.value += document.getElementById('three').firstChild.nodeValue;
      }
	};

	calc.minusBtn = function(){
		var len = this.display.value.length;
		if (!(len <= 0 || this.display.value[len-1] === "+" || this.display.value[len-1] === document.getElementById('minus').firstChild.nodeValue || this.display.value[len-1] === document.getElementById('multiply').firstChild.nodeValue || this.display.value[len-1] === document.getElementById('divide').firstChild.nodeValue || this.display.value[len-1] === "%" || this.display.value[len-1] === ".")) {
		   this.display.value += document.getElementById('minus').firstChild.nodeValue;
		}
	};

	calc.zeroBtn = function(){
		var len = this.display.value.length;
		if (len === 1 && this.display.value[len-1] === "0") {
           this.display.value += ".0"; 	
		} else if (len <= 0 || this.display.value[len-1] === "+" || this.display.value[len-1] === document.getElementById('minus').firstChild.nodeValue || this.display.value[len-1] === document.getElementById('multiply').firstChild.nodeValue || this.display.value[len-1] === document.getElementById('divide').firstChild.nodeValue || this.display.value[len-1] === "%") {
			this.display.value += document.getElementById('zero').firstChild.nodeValue + ".0"; 	
		} else {
			if (this.display.value[len-1] === "0" || this.display.value[len-1] === "1" || this.display.value[len-1] === "2" || this.display.value[len-1] === "3" || this.display.value[len-1] === "4" || this.display.value[len-1] === "5" || this.display.value[len-1] === "6" || this.display.value[len-1] === "7" || this.display.value[len-1] === "8" || this.display.value[len-1] === "9" || this.display.value[len-1] === ".") {
				this.display.value += document.getElementById('zero').firstChild.nodeValue; 	
			}
		}
	}; 
  
	calc.dotBtn = function(){
		var line ="";
		var len = this.display.value.length;
		if (len <= 0 || this.display.value === "0.") {
         this.display.value = "0."
		} else {
  			if (!isItemInArrs(this.display.value,".")) {
	         this.display.value += document.getElementById('dot').firstChild.nodeValue;
	         for (var i = 0; i < this.display.value.length; i++) {
	           	if (this.display.value[i] === document.getElementById('dot').firstChild.nodeValue) {
	           		line.slice(0,i);
	           		line += ".";
	           	} else {	
	           		line += this.display.value[i];
	           	}
			   }
			  this.display.value = line;  				
  			} else {
				if (this.display.value[len-1] === "+" || this.display.value[len-1] === document.getElementById('minus').firstChild.nodeValue || this.display.value[len-1] === document.getElementById('multiply').firstChild.nodeValue || this.display.value[len-1] === document.getElementById('divide').firstChild.nodeValue || this.display.value[len-1] === "%") {
			   	this.display.value += document.getElementById('dot').firstChild.nodeValue;
					for (var i = 0; i < this.display.value.length; i++) {
						if (this.display.value[i] === document.getElementById('dot').firstChild.nodeValue) {
							line.slice(0,i);
					   	line += "0.";
						} else {
					  		line += this.display.value[i];
						}
					}
					this.display.value = line;
		  		} else {
               var line1 = this.display.value;
		  			var line1rev = reverse(line1);
		  			var sliceLine2 = "";
		  			var sliceLine1 = "";
		  			for (var i = 0; i < line1rev.length; i++) {
		  				if (line1rev[i] === "+" || line1rev[i] === document.getElementById('minus').firstChild.nodeValue || line1rev[i] === document.getElementById('multiply').firstChild.nodeValue || line1rev[i] === document.getElementById('divide').firstChild.nodeValue) {
                     sliceLine1 = line1rev.slice(i);
                     sliceLine2 = line1rev.slice(0,i);
                     break;
		  				}
		  			}
               var slice1Reverse = reverse(sliceLine1);
               var slice2Reverse = reverse(sliceLine2);
		  			if (!isItemInArrs(slice2Reverse,".")) {
			         slice2Reverse += document.getElementById('dot').firstChild.nodeValue;
			         for (var i = 0; i < slice2Reverse.length; i++) {
			           	if (slice2Reverse[i] === document.getElementById('dot').firstChild.nodeValue) {
			           		line.slice(0,i);
			           		line += ".";
			           	} else {
                        line += slice2Reverse[i];
			           	}
					   }
					   this.display.value = slice1Reverse + line;  				
		  			}
		  		}
		  	}
		}
	};

	var reverse = function (s) {
	  var o = '';
	  for (var i = s.length - 1; i >= 0; i--)
	    o += s[i];
	  return o;
	}

	calc.plusBtn = function(){
		var len = this.display.value.length;
		if (!(len <= 0 || this.display.value[len-1] === "+" || this.display.value[len-1] === document.getElementById('minus').firstChild.nodeValue || this.display.value[len-1] === document.getElementById('multiply').firstChild.nodeValue || this.display.value[len-1] === document.getElementById('divide').firstChild.nodeValue || this.display.value[len-1] === "%" || this.display.value[len-1] === ".")) {
		   this.display.value += document.getElementById('plus').firstChild.nodeValue;
		}
	};

	calc.clearBtn = function() {
		this.display.value = "";
	};

	calc.percentBtn = function() {
		var len = this.display.value.length;
		console.log("len... "+len);
		//if (len>0) {
      if (!(this.display.value === "")) {
         this.display.value += document.getElementById("percent").firstChild.nodeValue;
			len = this.display.value.length;
         

			console.log("len2... "+len);
			console.log("this.display.value.... "+this.display.value);

			/* 
			 *  handling the x+y% problem
			 */
      	if (isItemInArrs(this.display.value, "+")) {
      		if (!isExpressionInArrs(this.display.value, "+%")) {
					console.log("handling x+y% problem... "+this.display.value);
				   var line = "";
				   var x = "";
				   var y = "";
				   for (var i = 0; i < this.display.value.length; i++) {
				   	if (this.display.value[i] === "+") {
	                  x = this.display.value.slice(0,[i]);
	                  y = this.display.value.slice([i]);
				   	}
				   }

				   var ySlice = y.slice(1,y.length-1);
				   console.log("x = "+x);
	            console.log("ySlice = "+ySlice);
	            line = x + " + " + x + " * " + ySlice;
	            for (var i = 0; i < this.display.value.length; i++) {
	 			   	if (this.display.value[i] === "%") {
	 			   		line.slice(0,i)
							line += "*1/100";
						}       	
	            }
	          
					console.log("is line ready for processing....  "+line);
					this.display.value = eval(line);	
      		} else {
      			alert("invalid expression provided... make sure expression follow 'x+y%'");
      			this.display.value = "";
      		}
			}  

	      /**
	       *  handling the x-y% problem
	       */
	     	if (isItemInArrs(this.display.value, document.getElementById("minus").firstChild.nodeValue)) {
	     		if (!isExpressionInArrs(this.display.value, document.getElementById('minus').firstChild.nodeValue+"%")) {
				   console.log("handling x-y% problem... "+this.display.value);
				   var line = "";
				   var x = "";
				   var y = "";
				   for (var i = 0; i < this.display.value.length; i++) {
				   	if (this.display.value[i] === document.getElementById("minus").firstChild.nodeValue) {
	                  x = this.display.value.slice(0,[i]);
	                  y = this.display.value.slice([i]);
				   	}
				   }

				   var ySlice = y.slice(1,y.length-1);
				   console.log("x = "+x);
	            console.log("ySlice = "+ySlice);
	            line = x + " - " + x + " * " + ySlice;
	            for (var i = 0; i < this.display.value.length; i++) {
	 			   	if (this.display.value[i] === "%") {
	 			   		line.slice(0,i)
							line += "*1/100";
						}       	
	            }
	          
					console.log("is line ready for processing....  "+line);
					this.display.value = eval(line);
			   }  else {
      			alert("invalid expression provided... make sure expression follow 'x-y%'");
      			this.display.value = "";
      		}
         }

         /**
          * handling the x*y% problem
          */
         if (isItemInArrs(this.display.value, document.getElementById("multiply").firstChild.nodeValue)) {
            if (!isExpressionInArrs(this.display.value, document.getElementById('multiply').firstChild.nodeValue+"%")) {
               console.log("handling x*y% problem... "+this.display.value);
				   var line = "";
				   var x = "";
				   var y = "";
				   for (var i = 0; i < this.display.value.length; i++) {
				   	if (this.display.value[i] === document.getElementById("multiply").firstChild.nodeValue) {
	                  x = this.display.value.slice(0,[i]);
	                  y = this.display.value.slice([i]);
				   	}
				   }

				   var ySlice = y.slice(1,y.length-1);
				   console.log("x = "+x);
	            console.log("ySlice = "+ySlice);
	            line = x + " * " + ySlice;
	            for (var i = 0; i < this.display.value.length; i++) {
	 			   	if (this.display.value[i] === "%") {
	 			   		line.slice(0,i)
							line += "*1/100";
						}       	
	            }
	          
					console.log("is line ready for processing....  "+line);
					this.display.value = eval(line);
			   }  else {
      			alert("invalid expression provided... make sure expression follow 'x*y%'");
      			this.display.value = "";
      		}
         }

         /**
          * handling the x/y% problem
          */
         if (isItemInArrs(this.display.value, document.getElementById("divide").firstChild.nodeValue)) {
            if (!isExpressionInArrs(this.display.value, document.getElementById('divide').firstChild.nodeValue+"%")) {
               console.log("handling x/y% problem... "+this.display.value);
				   var line = "";
				   var x = "";
				   var y = "";
				   for (var i = 0; i < this.display.value.length; i++) {
				   	if (this.display.value[i] === document.getElementById("divide").firstChild.nodeValue) {
	                  x = this.display.value.slice(0,[i]);
	                  y = this.display.value.slice([i]);
				   	}
				   }

				   var ySlice = y.slice(1,y.length-1);
				   console.log("x = "+x);
	            console.log("ySlice = "+ySlice);
	            line = x + " / " + "(" + ySlice;
	            for (var i = 0; i < this.display.value.length; i++) {
	 			   	if (this.display.value[i] === "%") {
	 			   		line.slice(0,i)
							line += "*1/100)";
						}       	
	            }
	          
					console.log("is line ready for processing....  "+line);
					this.display.value = eval(line);
			   }  else {
      			alert("invalid expression provided... make sure expression follow 'x/y%'");
      			this.display.value = "";
      		}
         }


			if (isItemInArrs(this.display.value,"%")) {
	         console.log("len3... "+len);
		 		
		 		if (len>0) {
				   console.log("fixing percent display... "+this.display.value);
				   var line = "";
				   for (var i = 0; i < this.display.value.length; i++) {
				   	
				   	if (this.display.value[i] === "%") {
							line += "*1/100";
						} else {
							line += this.display.value[i];
						}
					}
					this.display.value = eval(line);
				}  
	      } 
      } else {
			alert("invalid expression provided... make sure expression follow 'x%' at minimum");
			this.display.value = "";				
	   }
	};

	calc.delBtn = function(){
		var removeNum = this.display.value.length;
		if(this.display.value !== ""){
			removeNum = removeNum - 1;
			this.display.value = this.display.value.slice(0,removeNum);
		}
	};

	var isItemInArrs = function(arrs,item) {
		for (var i = 0; i < arrs.length; i++) {
			if (arrs[i] === item) {
				return true;
			}
		}
		return false;
	};

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
	      console.log(arrLen);
	      arrLen--;
	   }
		return false;
	}

	calc.plusMinusBtn = function(){
		var line;
		var strExp = this.display.value;
		console.log("strExp.... "+strExp);
		var strExpRev = reverse(strExp);
		console.log("strExpRev.... "+strExpRev);
		var slicedStrExpRev1 = "";
		var slicedStrExpRev2 = "";

		var len = strExp.length;
		console.log("len.... "+len);

      for (var i = 0; i < strExpRev.length; i++) {
      	console.log("start for loop..... ");
      	if (strExpRev[i] === "+" || strExpRev[i] === document.getElementById('minus').firstChild.nodeValue || strExpRev[i] === document.getElementById('multiply').firstChild.nodeValue || strExpRev[i] === document.getElementById('divide').firstChild.nodeValue) {
      		console.log("strExpRe[i].... "+strExpRev[i]);
      		slicedStrExpRev1 = strExpRev.slice(i);
      		slicedStrExpRev2 = strExpRev.slice(0,i);
      		console.log("right b4 break.....");
      		break;
      	}
      }
 
      console.log("slicedStrExpRev1.... "+slicedStrExpRev1);
      console.log("slicedStrExpRev2.... "+slicedStrExpRev2);

      var slicedStr1 = reverse(slicedStrExpRev1);
      var slicedStr2 = reverse(slicedStrExpRev2);

      console.log("slicedStr1.... "+slicedStr1);
      console.log("slicedStr2.... "+slicedStr2);

		if (isExpressionInArrs(strExp,"(-")) {
			console.log("if (isExpressionInArrs(strExp,'(-')) { ....... ");

         if (len >= 2 && !(isItemInArrs(strExp,"+") || isItemInArrs(strExp,document.getElementById('minus').firstChild.nodeValue) || isItemInArrs(strExp,document.getElementById('multiply').firstChild.nodeValue) || isItemInArrs(strExp,document.getElementById('divide').firstChild.nodeValue))) {
            console.log("removing minus sign in strExp, "+strExp+" + remMinusSign(strExp)..... "+remMinusSign(strExp));
            line = remMinusSign(strExp);
         } else {
         	console.log("if (isExpressionInArrs(slicedStr2,'(-'')){.....  "+slicedStr2);
         	if (isExpressionInArrs(slicedStr2,"(-")){
         		console.log("removing '(-' in slicedStr2...... "+slicedStr2);
         		line = slicedStr1 + remMinusSign(slicedStr2);
         	} else {
         		line = slicedStr1 + "(-" + slicedStr2;
         	}
         }
		} else {					
			if (len < 1) {
			   console.log("len < 1, i.e. len: "+len);
			   line = addMinusSign(this.display.value);
		   } else {
				if (len > 0) {
					console.log("len > 0, i.e. len: "+len);
					if (len === 1 && (this.display.value[0] === "0" || this.display.value[0] === "1" || this.display.value[0] === "2" || this.display.value[0] === "3" || this.display.value[0] === "4" || this.display.value[0] === "5" || this.display.value[0] === "6" || this.display.value[0] === "7" || this.display.value[0] === "8" || this.display.value[0] === "9")) {
					//if (!(isItemInArrs(this.display.value,"+") || isItemInArrs(this.display.value,document.getElementById('minus').firstChild.nodeValue) || isItemInArrs(this.display.value,document.getElementById('multiply').firstChild.nodeValue) || isItemInArrs(this.display.value,document.getElementById('divide').firstChild.nodeValue))) {
						console.log("len is exactly 1 and arrs[0] is a number...... ");
						line = "(-" + this.display.value;
					} else {
						if (len === 2 && isExpressionInArrs(this.display.value, "0.") || len ===3 && isExpressionInArrs(this.display.value, "0.0") || len > 0 && !(isItemInArrs(this.display.value,"+") || isItemInArrs(this.display.value,document.getElementById('minus').firstChild.nodeValue) || isItemInArrs(this.display.value,document.getElementById('multiply').firstChild.nodeValue) || isItemInArrs(this.display.value,document.getElementById('divide').firstChild.nodeValue))) {
							console.log("handling the case when '0.' or '0.0' is present or when len > 0.... ");
							line = "(-" + this.display.value;
	 					} else if (this.display.value[len-1] === "+" || this.display.value[len-1] === document.getElementById('minus').firstChild.nodeValue || this.display.value[len-1] === document.getElementById('multiply').firstChild.nodeValue || this.display.value[len-1] === document.getElementById('divide').firstChild.nodeValue) {
							console.log("+ - x / is the last character in arrs.... ");
							line = this.display.value + "(-";
						} else {
							console.log("x number is the last character in arrs.... ");
							var line1 = this.display.value;
							console.log ("line1.... "+line1);
							var line1rev = reverse(line1);
							console.log("line1rev.... "+line1rev);
							var sliceLine2 = "";
							var sliceLine1 = "";

				  			for (var i = 0; i < line1rev.length; i++) {
				  				if (line1rev[i] === "+" || line1rev[i] === document.getElementById('minus').firstChild.nodeValue || line1rev[i] === document.getElementById('multiply').firstChild.nodeValue || line1rev[i] === document.getElementById('divide').firstChild.nodeValue) {
	                  		sliceLine1 = line1rev.slice(i);
	                  		sliceLine2 = line1rev.slice(0,i);
	                  		break;
				  				}
				  			}

	            		var slice1Reverse = reverse(sliceLine1);
	            		var slice2Reverse = reverse(sliceLine2);
	            		console.log("slice1Reverse.... "+slice1Reverse);
	            		console.log("slice2Reverse.... "+slice2Reverse);
				  			
				  			var line2 = "(-" + slice2Reverse;	
							line = slice1Reverse + line2;  	

							console.log("line = slice1Reverse + line2 = "+line);							  			
						}
					}
				}			
			}
		}
		this.display.value = line;
	}

	var remMinusSign = function(str) {
		var line = "";
		for (var i = 0; i < str.length; i++) {
			if (str[i] === "(" || str[i] === "-") {
				line.slice(0,i);
				//console.log(line);
			}else {
				line+= str[i];
			}
		}
		//console.log(line);
		return line;
	}

	var addMinusSign = function (str){
		var line = "(-"+str;
		return line;
	}

	var fillParam = function (str) {
		var line = str;
		for (var i = 0; i < str.length; i++) {
			if (str[i] === "(") {
				line += ")";
			}
		}
		console.log("@fillParam return line.... "+line);
		return line;
	}

	var convertOperator = function(str) {
		var line = "";
		for (var i = 0; i < str.length; i++) {
			
			if (str[i] === document.getElementById('divide').firstChild.nodeValue) {
				line.slice(0,i);
				line += "/";
			} else if (str[i] === document.getElementById('multiply').firstChild.nodeValue) {
				line.slice(0,i);
				line += "*";
			} else if (str[i] === document.getElementById('minus').firstChild.nodeValue) {
				line.slice(0,i);
				line += "-";
			} else if (str[i] === "%") {
				line.slice(0,i);
				line += "*1/100";
			} else {
				line += str[i];
			}
		}
		console.log("@convertOperator return line.... "+line);
		return line;
	}

	calc.equalBtn = function(){
		console.log(convertOperator(this.display.value));
		
		this.result = eval(convertOperator(fillParam(this.display.value)));
		this.display.value = this.result;
	};

	window.calc = calc;

})(window);