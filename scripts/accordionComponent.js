/**
 * accordionComponent adds a click event listener to the accordion-label 
 * to reveal the contents of the listed menu.
 *
 * Get the CSS class named accordion-label
 */
var accordionLabel = document.getElementsByClassName("accordion-label");

/**
 * add click event on the tab components
 */
for (var i = 0; i < accordionLabel.length; i++) {
  accordionLabel[i].addEventListener("click", updateAccordionContent, false);
}

function updateAccordionContent(evt) {

  //console.log("what class: "+evt.currentTarget.id.toLowerCase());
  /**
   * get the current target element and then look up the value of its 
   * height
   */
  var el = document.getElementById(evt.currentTarget.id.toLowerCase());
  //console.log("el.className = "+el.className);
  //console.log("el.id = "+el.id);
  var styleOfContent = window.getComputedStyle(el);
  //console.log("stylesOfContent = "+styleOfContent);
  var heightOfContent = styleOfContent.getPropertyValue('height');

  //console.log("heigthOfContent = "+heightOfContent);
  var carouselClassName = "carousel-3d-"+el.id.substring(15,16); 
  //console.log("carousel class name = "+carouselClassName);

  //document.getElementsByClassName(carouselClassName)[0].style.transform = "scale(1)";

  /**
   * by default the height is reduced to 0, however, due to 
   * added css styling of 2px on padding-top, the actual height of 
   * the element is 2px 
   */
  if (heightOfContent == "2px") {
    /**
     * reset all the active CSS class
     */
    for (i = 0; i < accordionLabel.length; i++) {
      accordionLabel[i].className = accordionLabel[i].className.replace(" accordion-label--active", "");

      document.getElementById(accordionLabel[i].id.toLowerCase()).style.height = "0";
    }

    evt.currentTarget.className += " accordion-label--active";

    /**
     * perform a hack to retrieve a specific accordion content id and then reveal its content by increasing its height 
     */
    document.getElementById(evt.currentTarget.id.toLowerCase()).style.height = "auto"; 
  } else {

    /**
     * perform a hack to retrieve a specific accordion content id and 
     * then close it if its already opened
     */
    document.getElementById(evt.currentTarget.id.toLowerCase()).style.height = "0";             
  }
}
