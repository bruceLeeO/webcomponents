
/**
 * tabComponent adds an event listener to the tab-index label to 
 * retrieved the tab content body of the vertical tab component
 *
 * let's start with getting the CSS class named tab-index-label
 */
var tabIndexLabel = document.getElementsByClassName("tab-index-label");

/**
 * add click event on the tab components
 */
for (var i = 0; i < tabIndexLabel.length; i++) {
  tabIndexLabel[i].addEventListener("click", updateTabContent, false);
}

function updateTabContent(evt) {

  /**
   * reset all the active CSS class
   */
  for (i = 0; i < tabIndexLabel.length; i++) {
    tabIndexLabel[i].className = tabIndexLabel[i].className.replace(" tab-index-label--active", "");

    document.getElementById(tabIndexLabel[i].id.toLowerCase()).style.display = "";
  }

  evt.currentTarget.className += " tab-index-label--active";

  //console.log("evt.currentTarget.className: "+evt.currentTarget.className+" & evt.currentTarget.id: "+evt.currentTarget.id);
  /**
   * perform a hack to retrieve a specific tab content id and then 
   * unblock its display style 
   */
  document.getElementById(evt.currentTarget.id.toLowerCase()).style.display = "block";
}