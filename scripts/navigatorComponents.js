/**
 * navigatorComponents.js is comprised of scrolls component like scrollspy,
 * showWidth and showHeight bubble, and return-to-top clickable bubble; 
 * it also checks window resize to unset width of sideNav menu
 */

// listen to the window resize, to unset width of sidenav and restore search form
//window.addEventListener('resize', goUnsetTheWidth);

//listen to the window scroll, use by scrollspy and return-to-top bubble component
window.addEventListener('scroll', goShowNavComponents);

/**
 * go show the bubbles and navigation components 
 */
function goShowNavComponents() { 

  //console.log("listening to scroll event.....");

  /**
   * show the height of the scroll for development and debug purpose
   */
  //document.querySelector('.scrollheight').innerText = window.scrollY;     

  /**
   * show the fixed scroll to return to top 
   */
  if (window.scrollY > 300) { 
    document.getElementById("return-to-top").style.display = "block";
  } else {
    document.getElementById("return-to-top").style.display = "none";
  }   

  /**
   * show or hide the scrollspy 
   */
  if (window.scrollY > 125) {
    document.getElementById("scrollspy-id").style.display = "block";
  } else {
    document.getElementById("scrollspy-id").style.display = "none";
  }


}
//var isWidthUnset = false;
/**
 * If sidenav is open and user resize the window, make sure to unset the topmain with to 
 * restore the responsiveness of the page; otherwise, it will stay lock on width=500px and 
 the page will rendered usresponsive to further window resize after it was opened
 */
//function goUnsetTheWidth() {

  /**
   * show the width of the screen for development and debug purpose
   */
  //document.querySelector('.screen-width').innerText = document.documentElement.clientWidth;

  /**
   * shut down sidenav when window screen is greater than 600px 
   */
//  if (document.documentElement.clientWidth > 600) {

//    if (isWidthUnset) {
      ////console.log("It's been unset... so do nothing...");
//    } else {
      /**
       * if sidenav is still open, shut it off
       * make sure to reset margin-left and re-display searchform
       * and set marker to true
       */
//      if (document.getElementById("mySidenav").style.width != "") {
//        document.getElementsByClassName("sidenav-icon")[0].classList.toggle("change");
//        document.getElementById("mySidenav").style.width = "";
//        document.getElementsByClassName("sidenav-icon")[0].style.marginLeft = "";
//        document.getElementsByClassName("searchform")[0].style.display = "block";
        /* now that it is unset, check it off as true */
//        isWidthUnset = true;        
//      } else {
//        isWidthUnset = false; // return it to default setting
//      }
//    }
//  } 
//}

/**
 * Showing the width bubble is one thing, making it functionaly useful
 * is something else.  So when user click the showWidth bubble a bubble will
 * pop up and will show the current width of the window.  It will continue 
 * update the size of the window as the window is resized.  Clicking on it 
 * will pop the bubble off. 
 */
//var screenWidth = document.getElementsByClassName("screen-width")[0];
//var shoWidBubl = document.getElementsByClassName("show-width-bubble")[0];
//shoWidBubl.onclick = function () {
//  screenWidth.style.display = "block";
//}
/* pop the width bubble off */
//screenWidth.onclick = function() {
//  screenWidth.style.display = "none";
//}

/**
 * Like the width bubble, when the page is scrolled up or down, the showHeight 
 * bubble displays the current position of the scroll starting at 0 position onward; 
 * likewise, clicking on the bubble will pop it off
 */ 
//var scrollHeight = document.getElementsByClassName("scrollheight")[0];
//var shoScrolHeightBubl = document.getElementsByClassName("show-scrollheight-bubble")[0];
//shoScrolHeightBubl.onclick = function () {
//  scrollHeight.style.display = "block";
//}
/* pop the height bubble off */
//scrollHeight.onclick = function() {
//  scrollHeight.style.display = "none";
//}

/** 
 * add an event listener to toggle between showing and unshowing 
 * sideNav on window resize
 */
var sideNavIcon = document.getElementsByClassName("sidenav-icon");
//var sideNavXIcon = document.getElementsByClassName("sidenav-x-icon");

sideNavIcon[0].addEventListener("click", toggleSideNav, false);
//sideNavXIcon[0].addEventListener("click", closeSideNav, false);

function toggleSideNav(evt) {
//sideNavIcon[0].onclick = function(evt) {    
  ////console.log("toggling side nav");
  ////console.log("document.getElementById('mySidenav').style.width = "+document.getElementById("mySidenav").style.width);
  /* toggle between change class */
  evt.currentTarget.classList.toggle("change");
  if (document.getElementById("mySidenav").style.width === "") {
    //console.log("opening side nav: "+document.getElementById("mySidenav").style.width);
    document.getElementById("mySidenav").style.width = "250px";
    //console.log("sidenav-icon margin-left: "+document.getElementsByClassName("sidenav-icon")[0].style.marginLeft); 
    document.getElementsByClassName("sidenav-icon")[0].style.marginLeft = "250px";
    //console.log("undisplay searchform...");
    document.getElementsByClassName("searchform")[0].style.display = "none"; 
    /* shut the project menu in case user left it open */
    document.getElementById("project-accordion-panel1").style.height = "0";   
  } else {
    //console.log("closing side nav: "+document.getElementById("mySidenav").style.width);
    document.getElementById("mySidenav").style.width = "";
    //console.log("sidenav-icon margin-left: "+document.getElementsByClassName("sidenav-icon")[0].style.marginLeft);
    document.getElementsByClassName("sidenav-icon")[0].style.marginLeft = "";
    //console.log("re-display searchform...");
    document.getElementsByClassName("searchform")[0].style.display = "block";   
  }
}

/**
 * Now let's deal with the scrollspy's component, starting with
 * the problem of determining the position of the x and y coordinants.
 *
 * getPosition takes in an element, el, as param and returns
 * the x and y coordinants of the top, left corner of the element
 */
function getPosition(el) {
  var xPos = 0;
  var yPos = 0;
 
  while (el) {
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = el.scrollTop || document.documentElement.scrollTop;
 
      xPos += (el.offsetLeft - xScroll + el.clientLeft);
      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      // for all other non-BODY elements
      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }
 
    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };
}

// deal with the page getting resized or scrolled
window.addEventListener("scroll", updatePosition, false);
window.addEventListener("resize", updatePosition, false);

/**
 * updatePosition is used in an EventListener (ie, a scroll event 
 * or a resize event) to fish up the current position of the 
 * x and y coordinants of the targeted element
 */
function updatePosition() {

  /**
   * With the help of the resize and scroll EventListener, getPosition
   * will fish up the most up-to-the-second position of the x and y 
   * coordinants of the targeted element 
   */
  var positionOfAbout = getPosition(document.querySelector("#about"));
  var positionOfProjects = getPosition(document.querySelector("#projects"));
  var positionOfSkills = getPosition(document.querySelector("#skills"));
  var positionOfContact = getPosition(document.querySelector("#contact"));

  /**
   * The targeted CSS classes that will be updated 
   */
  //var topNavLink = document.getElementsByClassName("topnav-link");
  var scrollNavLink = document.getElementsByClassName("scrollnav-link");

  /**
   * positionOfAbout.y fish out the position of where "about" id is
   *
   * positionOfSkills.y fish out the position of where "skills" id is
   *
   * checking the position way ahead of the zero markers (ie, 
   * positionOfAbout.y <= 20 and positionOfSkills > 10) allows for 
   * the needed offset to enable the EventListener to instantly update
   * the css class "scrollnav-link--active" and thus instantly rendering 
   * the scrollspy links (ie, About, Projects, Skills and Contact)
   *
   * this if statement checks to see if the current view is in the "about"
   * section
   */
  if (positionOfAbout.y <= 20 && positionOfProjects.y > 10) {
    ////console.log("in the about section");
    //for (i = 0; i < topNavLink.length; i++) {
    //  topNavLink[i].className = topNavLink[i].className.replace(" topnav-link--active", "");
    //}       
    //topNavLink[0].className += " topnav-link--active";

    /**
     * this for loop loops through the class name "scrollnav-link" and replace 
     * any class name "scrollnav-link--active" with an empty string --  in other words,
     * this loop reset all the links in scrollspy components 
     */
    for (i = 0; i < scrollNavLink.length; i++) {
      scrollNavLink[i].className = scrollNavLink[i].className.replace(" scrollnav-link--active", "");
    } 

    /**
     * since the current view is in the about section, add the active class
     * scrollnav-link--active so css can render it active
     */     
    scrollNavLink[0].className += " scrollnav-link--active";

    /**
     * this if statement check if the current view is in the "projects" section
     */
  } else if (positionOfProjects.y <= 20 && positionOfSkills.y > 10) {
    ////console.log("in the skills section");
    //for (i = 0; i < topNavLink.length; i++) {
    //  topNavLink[i].className = topNavLink[i].className.replace(" topnav-link--active", "");
    //}       
    //topNavLink[1].className += " topnav-link--active";
    
    /**
     * reset the scrollspy's link class
     */
    for (i = 0; i < scrollNavLink.length; i++) {
      scrollNavLink[i].className = scrollNavLink[i].className.replace(" scrollnav-link--active", "");
    }

    /**
     * add the active class to the current section
     */       
    scrollNavLink[1].className += " scrollnav-link--active";      
  } else if (positionOfSkills.y <= 20 && positionOfContact.y > 10) {
    ////console.log("in the skills section");
    //for (i = 0; i < topNavLink.length; i++) {
    //  topNavLink[i].className = topNavLink[i].className.replace(" topnav-link--active", "");
    //}       
    //topNavLink[1].className += " topnav-link--active";
    
    /**
     * reset the scrollspy's link class
     */
    for (i = 0; i < scrollNavLink.length; i++) {
      scrollNavLink[i].className = scrollNavLink[i].className.replace(" scrollnav-link--active", "");
    }

    /**
     * add the active class to the current section
     */       
    scrollNavLink[2].className += " scrollnav-link--active";      
  } else {
    
    /**
     * if statement to check if the current view is in the "contact" section
     */
    if (positionOfContact.y <= 20) {
      ////console.log("in the contact");
      //for (i = 0; i < topNavLink.length; i++) {
      //  topNavLink[i].className = topNavLink[i].className.replace(" topnav-link--active", "");
      //}       
      //topNavLink[2].className += " topnav-link--active";
      for (i = 0; i < scrollNavLink.length; i++) {
        scrollNavLink[i].className = scrollNavLink[i].className.replace(" scrollnav-link--active", "");
      }       
      scrollNavLink[3].className += " scrollnav-link--active";                
    } else {
      ////console.log("it's in neither one of the section");
      //for (i = 0; i < topNavLink.length; i++) {
      //  topNavLink[i].className = topNavLink[i].className.replace(" topnav-link--active", "");
      //}

      /**
       * reset the scrollspy's link class
       */
      for (i = 0; i < scrollNavLink.length; i++) {
        scrollNavLink[i].className = scrollNavLink[i].className.replace(" scrollnav-link--active", "");
      }               
    }   
  }       
} 

