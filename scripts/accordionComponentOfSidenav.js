/**
 * Accordion component is added on the sidenav component and now
 * requires a click event listener to handle its function.
 *
 * Get the CSS class named project-accordion-label
 */
var projectAccordionLabel = document.getElementsByClassName("project-accordion-label");
////console.log("projectAccordionLabel.length = "+projectAccordionLabel.length);
/**
 * add click event on the tab components
 */
//for (var i = 0; i < projectAccordionLabel.length; i++) {
  projectAccordionLabel[0].addEventListener("click", updateProjectAccordionContent, false);
//}

function updateProjectAccordionContent(evt) {

  ////console.log("what class: "+evt.currentTarget.id.toLowerCase());
  /**
   * get the current target element and then look up the value of its 
   * height
   */
  var el = document.getElementById(evt.currentTarget.id.toLowerCase());
  ////console.log("el.className = "+el.className);
  var styleOfContent = window.getComputedStyle(el);
  ////console.log("stylesOfContent = "+styleOfContent);
  var heightOfContent = styleOfContent.getPropertyValue('height');

  ////console.log("heigthOfContent = "+heightOfContent);

  ////console.log("evt.currentTarget.style.height: "+evt.currentTarget);

  /**
   * by default the height is reduced to 0, however, due to 
   * added css styling of 2px on padding-top, the actual height of 
   * the element is 2px 
   */
  //if (heightOfContent == "2px") {
  if (heightOfContent == "0px") {
    /**
     * reset all the active CSS class
     */
    //for (i = 0; i < projectAccordionLabel.length; i++) {
      projectAccordionLabel[0].className = projectAccordionLabel[0].className.replace(" project-accordion-label--active", "");

      document.getElementById(projectAccordionLabel[0].id.toLowerCase()).style.height = "0";
    //}

    evt.currentTarget.className += " project-accordion-label--active";

    /**
     * perform a hack to retrieve a specific accordion content id and then reveal its content by increasing its height 
     */
    document.getElementById(evt.currentTarget.id.toLowerCase()).style.height = "auto "; 
    document.getElementById(evt.currentTarget.id.toLowerCase()).style.marginTop = "5px";
  } else {

    /**
     * perform a hack to retrieve a specific accordion content id and 
     * then close it if its already opened
     */
    document.getElementById(evt.currentTarget.id.toLowerCase()).style.height = "0";
    document.getElementById(evt.currentTarget.id.toLowerCase()).style.marginTop = "0";            
  }
}

/**
 * Add click event listener on sidenav-menu
 * When any menu is click sidenav shutdown and bring anchored link into focus
 */
var sideNavMenu = document.getElementsByClassName("sidenav-menu");
////console.log("sideNavMenu.length = "+sideNavMenu.length);
for (var i = 0; i < sideNavMenu.length; i++) {
	sideNavMenu[i].addEventListener("click", shutdownSideNav, false);
}

/**
 * Shut down sidenav on sidenav menu click event
 */
function shutdownSideNav() {
  if (document.getElementById("mySidenav").style.width != "") {
  	document.getElementsByClassName("sidenav-icon")[0].classList.toggle("change");
    document.getElementById("mySidenav").style.width = "";
    document.getElementsByClassName("sidenav-icon")[0].style.marginLeft = "";
    document.getElementsByClassName("searchform")[0].style.display = "block";
  }	
}

/**
 * Add click event listener on sidenav-project-menu
 */
var sideNavProjMenu = document.getElementsByClassName("sidenav-project-menu");
////console.log("sideNavProjMenu.length = "+sideNavProjMenu.length);
for (var i = 0; i < sideNavProjMenu.length; i++) {
	sideNavProjMenu[i].addEventListener("click", shutdownSideNavProjMenu, false);
}
/**
 * Shut down sidenav on sidenav project menu click event
 */
function shutdownSideNavProjMenu() {
  if (document.getElementById("mySidenav").style.width != "") {
  	document.getElementsByClassName("sidenav-icon")[0].classList.toggle("change");
    document.getElementById("mySidenav").style.width = "";
    document.getElementsByClassName("sidenav-icon")[0].style.marginLeft = "";
    document.getElementsByClassName("searchform")[0].style.display = "block";
  }	
}


/* search form hover efffect transformation */
var searchInput = document.getElementsByClassName("searchform-input")[0];
searchInput.onclick = function() {
  document.getElementsByClassName("searchform-label")[0].style.top = "0px";
  document.getElementsByClassName("searchform-label")[0].style.fontSize = "80%";
  document.getElementsByClassName("searchform-window-modal")[0].style.display = "block";
}

/* search form modal mode */
var openSearchformModal = document.getElementsByClassName("searchform-open-modal")[0];
openSearchformModal.onclick = function() {
  document.getElementsByClassName("searchform-modal")[0].style.display = "block";
}

/* close the opened modal */
window.onclick = function(evt) {
  if (evt.target == document.getElementsByClassName("searchform-window-modal")[0]) {
    document.getElementsByClassName("searchform-window-modal")[0].style.display = "none";
    document.getElementsByClassName("searchform-label")[0].style.top = "23px";
    document.getElementsByClassName("searchform-label")[0].style.fontSize = "100%";
  }
  if (evt.target == document.getElementsByClassName("searchform-modal")[0]) {
    document.getElementsByClassName("searchform-modal")[0].style.display = "none";        
  }
}

