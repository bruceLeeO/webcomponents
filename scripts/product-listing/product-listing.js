(function(window){

  /* declare event listener object variables */
  var removeItemBtn, editItemBtn, totalAmount, itemAddedCheckMarker, promoCodeLabel, promoCodeBtn;

	/* initialize the itemAddedCheckMarker variable */
	itemAddedCheckMarker = document.getElementsByClassName("product-item-added-checker");

	/* initialize the total amount variable */
	totalAmount = document.getElementsByClassName("total-amount");

	/* initialize add to cart btn variable */
	var addToCartBtn = document.getElementsByClassName("product-item-add-to-cart-btn");

	/* and then add event listener -- the lazy but efficient way through iteration */	
	for (var i = 0; i < addToCartBtn.length; i++) {
		addToCartBtn[i].addEventListener("click", addItemToCart, false);
	}

	function addItemToCart() {

		/* if it's true that it does not contain 'product-item-added' class, then add the item in the cart */
		if (!(this.classList.contains("product-item-added"))) {
			/* traverse through the doc and retrieve the current item info */
			var itemId = this.parentNode.id;
			var name = this.parentNode.childNodes[3].childNodes[0].nodeValue;
			var desc = this.parentNode.childNodes[7].childNodes[0].nodeValue;
			var price = this.parentNode.childNodes[5].childNodes[0].nodeValue;

			/* build and add item in the cart passing the itemId, name, desc, and price of the current 'this' item*/
			document.getElementById("shopping-cart").appendChild(buildShoppingCartItem(itemId,name,desc,price));
			
			/* add the product-item-added class */
			this.className+=" product-item-added";

			/* activate the item added check marker */
			this.parentNode.childNodes[9].className += " checker--active";

			/* add 'remove item btn' click event listener once an item is added */
			removeItemBtn = document.getElementsByClassName("remove-item-in-cart");
			if (removeItemBtn.length != 0) {			
				for (var i = 0; i < removeItemBtn.length; i++) {
					removeItemBtn[i].addEventListener("click",removeItemInCart,false);
				}
			}

			/* add 'edit item btn' click event listener when item is added*/
			editItemBtn = document.getElementsByClassName("edit-item-in-cart");
			if (editItemBtn.length != 0) {
				for (var i = 0; i < editItemBtn.length; i++) {
					editItemBtn[i].addEventListener("click",editItemInCart,false);
				}
			}

			/* reveal promo code form once an item has been added */
			document.getElementsByClassName("promo-code-q")[0].style.display = "block";
			document.getElementsByClassName("promocode-label")[0].style.display ="block";
			document.getElementsByClassName("promocode-applied-marker")[0].style.display = "none";

			/* retrieve all the edited price in the cart */
			var editedPrice = document.getElementsByClassName("item-in-cart-edited-price");

			/* update total amount as more item is being added */
			//totalAmount = document.getElementsByClassName("total-amount");
			totalAmount[0].childNodes[0].nodeValue = getTotalEditedAmount(editedPrice);
		} else {
			/* it's already added, so don't add it, ie, do nothing -- really! */
			//console.log("do nothing... really! --- " );
		}
	}

	function getTotalEditedAmount(editedSubtotal) {
		var totalEditedAmount = 0;	
		for (var i = 0; i < editedSubtotal.length; i++) {
			totalEditedAmount += parseFloat(remDollarSign(editedSubtotal[i].childNodes[0].nodeValue));
		}	
		return addDollarSign(totalEditedAmount.toFixed(2));		
	}

	function buildShoppingCartItem(itemId,name,desc, price) {
    var sci = document.createElement("div");
    sci.className = "product-in-cart-item";
    sci.id = "shopping-cart-item-"+itemId.slice(8);
    //console.log("sci.id: "+sci.id);
    sci.innerHTML ='<div class="item-in-cart-wrapper">\
    									<div class="item-in-cart-summary">\
	  										<img class="item-in-cart-img" src="http://placehold.it/50x40">\
	  										<div class="item-in-cart-desc-wrapper">\
	  											<p class="item-in-cart-name">'+name+'</p>\
	  											<p class="item-in-cart-desc">'+desc+'</p>\
	  										</div>\
	  									</div>\
	  									<div class="item-in-cart-qty">\
	  										<select class="item-in-cart-qty-selected" name="quantity">\
	  											<option value="1" selected>1</option>\
	  											<option value="2">2</option>\
	  											<option value="3">3</option>\
	  											<option value="4">4</option>\
	  											<option value="5">5</option>\
	  										</select>\
	  										<a class="remove-item-in-cart" href="#!">Remove</a>\
	  										<a class="edit-item-in-cart" href="#!">Edit</a>\
	  									</div>\
    									<p class="item-in-cart-price">'+price+'</p>\
    									<p class="item-in-cart-edited-price">'+price+'</p>\
    								</div>';
		return sci;    								
	}

	function removeItemInCart() {

		/* remove the 'product-item-active' class when item is remved in the cart */	
		addToCartBtn[parseInt(this.parentNode.parentNode.parentNode.id.slice(19))-1].className = addToCartBtn[parseInt(this.parentNode.parentNode.parentNode.id.slice(19))-1].className.replace(" product-item-added","");		

		/* remove the 'item added check marker' when item is removed in the cart */
		itemAddedCheckMarker[parseInt(this.parentNode.parentNode.parentNode.id.slice(19))-1].className = itemAddedCheckMarker[parseInt(this.parentNode.parentNode.parentNode.id.slice(19))-1].className.replace(" checker--active","");
		
		/* remove the item added in the cart */
		this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode.childNodes[0]);

		/* remove the event handler for the removeItemBtn */ 
		/* console.log("removing "+this.className+" event handler object...."); */
		this.removeEventListener("click", removeItemInCart);

		/* nice hack around -- remove promo code if there's no item in the cart by checking if there's still a remove btn */
		removeItemBtn = document.getElementsByClassName("remove-item-in-cart");
		if (removeItemBtn.length == 0) {			
			/* un-reveal promo code form */
			document.getElementsByClassName("promo-code-q")[0].style.display = "none";
			document.getElementsByClassName("promocode-label")[0].style.display ="none";
			document.getElementsByClassName("promocode-applied-marker")[0].style.display = "none";
		}	else {
			/* reset promo code form in case user remove an item to allow user to re-enter promo code with new total price */
			document.getElementsByClassName("promo-code-q")[0].style.display = "block";
			document.getElementsByClassName("promocode-label")[0].style.display ="block";
			document.getElementsByClassName("promocode-applied-marker")[0].style.display = "none";
		}	

		/* retrieve all editted price, ie, item(s) still in the cart */
		var editedPrice = document.getElementsByClassName("item-in-cart-edited-price");

		/* update total amount as more item is being removed */
		//totalAmount = document.getElementsByClassName("total-amount");
		totalAmount[0].childNodes[0].nodeValue = getTotalEditedAmount(editedPrice);		
	}

	function editItemInCart() {
		/* retrieve and set the nodeValue of the selected option value */
		this.parentNode.parentNode.childNodes[7].childNodes[0].nodeValue = addDollarSign((parseFloat(getSelectedText(this.parentNode.childNodes[1]))*remDollarSign(this.parentNode.parentNode.childNodes[5].childNodes[0].nodeValue)).toFixed(2));

		/* update sub-total amount as the quantity of an item is being editted */
		var editedPrice = document.getElementsByClassName("item-in-cart-edited-price");

		/* update the total amount with the new quantity of item being added */
		totalAmount[0].childNodes[0].nodeValue = getTotalEditedAmount(editedPrice);		

		/* reset promo code form in case user edit an item to allow user to re-enter the promo code */
		document.getElementsByClassName("promo-code-q")[0].style.display = "block";
		document.getElementsByClassName("promocode-label")[0].style.display ="block";
		document.getElementsByClassName("promocode-applied-marker")[0].style.display = "none";				
	}

	/* brilliant function from stackoverflow ref: https://stackoverflow.com/questions/610336/retrieving-the-text-of-the-selected-option-in-select-element */
	/* retrieve the 'quantity' value of the selected option */
	function getSelectedText(thisEvtObj) {

	    if (thisEvtObj.selectedIndex == -1)
	        return null;

	    return thisEvtObj.options[thisEvtObj.selectedIndex].text;
	}

	/* initialize and add click event listener to the 'Click here' label */
	//var promoCodeLabel = document.getElementsByClassName("promocode-label");
	promoCodeLabel = document.getElementsByClassName("promocode-label");
	promoCodeLabel[0].addEventListener("click",showPromoForm,false);

	function showPromoForm() {
		//document.getElementsByClassName("promocode-label")[0].style.display = "none";
		promoCodeLabel[0].style.display = "none";
		document.getElementsByClassName("promocode-text-input-wrapper")[0].style.display = "inline-block";
		document.getElementsByClassName("promocode-text-input")[0].style.display = "inline-block";
		document.getElementsByClassName("promocode-button")[0].style.display = "inline-block";		
	}

	/* initialize and add click event listener to the add promo btn */
	promoCodeBtn = document.getElementsByClassName("promocode-button");
	promoCodeBtn[0].addEventListener("click",addPromo,false);

	function addPromo() {
		/* update total amount as promocode is being added */		
		var totalAmountWithPromo = parseFloat(remDollarSign(totalAmount[0].childNodes[0].nodeValue)) * 0.5;
		totalAmount[0].childNodes[0].nodeValue = addDollarSign(totalAmountWithPromo.toFixed(2));

		/* remove the promo form and alert user promo has been applied */
		document.getElementsByClassName("promocode-text-input-wrapper")[0].style.display = "none";
		document.getElementsByClassName("promocode-button")[0].style.display = "none";	
		document.getElementsByClassName("promocode-applied-marker")[0].style.display = "inline-block";
	}	

  var remDollarSign = function(str) {
    var line = "";
    for (var i = 0; i < str.length; i++) {
      if (str[i] === "$") {
        line.slice(0,i);
        //console.log(line);
      }else {
        line+= str[i];
      }
    }
    //console.log(line);
    return line;
  };

  var addDollarSign = function(num) {
    var numStr = "$"+num;
    return numStr;
  };

  /* method to prevent form submission, must set form method='post' */
  function preventFormDefault(evt) {
  	//console.log("right b4 preventDefault....");
  	evt.preventDefault();
  }

  /* retrieve the promocode-form and attach submit event listener to it */
  var promoForm = document.getElementById("promocode-form-id");
  promoForm.addEventListener("submit",preventFormDefault,true);
  promoForm.removeEventListener("submit",preventFormDefault,true);

})(window);	