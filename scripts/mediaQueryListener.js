(function(window) {

  console.log("populating carousel is intended to run only once at start up....");
  populateCarousel();

  var onTrackWithAccordionComponent, onParWithTabComponent, isWidthUnset = false; 

  /* listen to window re-size and sparks up carousel component binding and sidenav component shut off */
  window.addEventListener('resize', sparklers);

  function sparklers() { 

    console.log("listening to window resize event....");

    /**
     * append the carousel component to the accordion component
     */
    if (document.documentElement.clientWidth < 700) {
      onParWithTabComponent = false;
      //console.log("document.documentElement.clientWidth = "+document.documentElement.clientWidth);

      if (onTrackWithAccordionComponent) {
        //console.log("ontrack with accordion... do nothing...");
      } else {
        //console.log("it is not on track with accordion, onTrackWithAccordionComponent = "+onTrackWithAccordionComponent);
        onTrackWithAccordionComponent = true;

        /**
         *  since menu components already exist, append it to accordion components
         */
        document.getElementById("accordion-menu").appendChild(document.getElementById("menu-id"));  

        /**
         *  since image-gallery components already exist, append it to accordion components
         */
        document.getElementById("accordion-image-gallery").appendChild(document.getElementById("image-gallery-id"));

        /**
         *  since tabpanel components already exist, append it to accordion components
         */
        document.getElementById("accordion-tabpanel").appendChild(document.getElementById("tabpanel-id"));

        /**
         *  since accordion components already exist, append it to accordion components
         */
        document.getElementById("accordion-accordion").appendChild(document.getElementById("accordion-id"));  

        /**
         *  since business-card components already exist, append it to business-card components
         */
        document.getElementById("accordion-business-card").appendChild(document.getElementById("business-card-id"));  

        /**
         *  since ui-framework components already exist, append it to ui-framework components
         */
        document.getElementById("accordion-ui-framework").appendChild(document.getElementById("ui-framework-id"));  

        /**
         *  since Books.MD components already exist, append it to ui-framework components
         */
        document.getElementById("accordion-books-md-id").appendChild(document.getElementById("books-md-id"));  

        /**
         *  since calculator components already exist, append it to accordion components
         */
        document.getElementById("accordion-calculator").appendChild(document.getElementById("calculator-id"));  

        /**
         *  since product-listing components already exist, append it to accordion components
         */
        document.getElementById("accordion-product-listing").appendChild(document.getElementById("product-listing-id"));

        /**
         *  since multiple form components already exist, append it to accordion components
         */
        document.getElementById("accordion-multiple-form").appendChild(document.getElementById("multiple-form-id"));        
      
      }
    
    } else {
    
      /**
       * client window width is > than 700, append the carousel component to the tab component
       */

      //console.log("document.documentElement.clientWidth: "+document.documentElement.clientWidth);

      //console.log("document.getElementById('mySidenav').style.width: "+document.getElementById("mySidenav").style.width);

      if (document.getElementById("mySidenav").style.width === "250px") {
        //console.log("sidenav is still open.... so close it...");
        document.getElementById("mySidenav").style.width = "0px";
        document.getElementsByClassName("sidenav-icon")[0].classList.toggle("change");
        document.getElementsByClassName("sidenav-icon")[0].style.marginLeft = "0px";
        document.getElementsByClassName("searchform")[0].style.display = "block";
        /* now that it is unset, check it off as true */      
      }

      onTrackWithAccordionComponent = false;
      
      if (onParWithTabComponent) {
        //console.log("on par with tab component... do nothing...");
      } else {
        //console.log("it is not on par with tab, onParWithTabComponent = "+onParWithTabComponent);
        onParWithTabComponent = true;

        //console.log("document.documentElement.clientWidth = "+document.documentElement.clientWidth);

        /**
         *  since menu components already exist, append it to tab components
         */        
        document.getElementById("tab-menu").appendChild(document.getElementById("menu-id"));       

        /**
         *  since image-gallery components already exist, append it to tab components
         */        
        document.getElementById("tab-image-gallery").appendChild(document.getElementById("image-gallery-id"));       

        /**
         *  since tab components already exist, append it to tab components
         */        
        document.getElementById("tab-tabpanel").appendChild(document.getElementById("tabpanel-id"));       

        /**
         *  since accordion components already exist, append it to tab components
         */        
        document.getElementById("tab-accordion").appendChild(document.getElementById("accordion-id"));       

        /**
         *  since digital business card components already exist, append it to tab components
         */        
        document.getElementById("tab-business-card").appendChild(document.getElementById("business-card-id"));       

        /**
         *  since ui framework components already exist, append it to tab components
         */        
        document.getElementById("tab-ui-framework").appendChild(document.getElementById("ui-framework-id"));       

        /**
         *  since Books.MD components already exist, append it to tab components
         */        
        document.getElementById("tab-books-md-id").appendChild(document.getElementById("books-md-id"));       

        /**
         *  since calculator components already exist, append it to tab components
         */        
        document.getElementById("tab-calculator").appendChild(document.getElementById("calculator-id"));       

        /**
         *  since product-listing components already exist, append it to tab components
         */        
        document.getElementById("tab-product-listing").appendChild(document.getElementById("product-listing-id"));

        /**
         *  since multiple form components already exist, append it to tab components
         */        
        document.getElementById("tab-multiple-form").appendChild(document.getElementById("multiple-form-id"));               

      }
    }

  }

	function populateCarousel() {

    console.log("populate carousel once....");

    /**
     * load the carousel component to the accordion component
     */
    if (document.documentElement.clientWidth < 700) {

      /**
       * load the menu component on the accordion component 
       */   
      document.getElementById("accordion-menu").appendChild(buildCarouselComponent1());
              
      /**
       * load the image-gallery component on the accordion component 
       */   
      document.getElementById("accordion-image-gallery").appendChild(buildCarouselComponent2());      
              
      /**
       * load the tabpanel component on the accordion component 
       */   
      document.getElementById("accordion-tabpanel").appendChild(buildCarouselComponent3());      
                    
      /**
       * load the accordion component on the accordion component 
       */   
      document.getElementById("accordion-accordion").appendChild(buildCarouselComponent4());      

      /**
       * load the business-card component on the business-card component 
       */   
      document.getElementById("accordion-business-card").appendChild(buildCarouselComponent5());
      
      /**
       * load the ui-framework component on the ui-framework component 
       */   
      document.getElementById("accordion-ui-framework").appendChild(buildCarouselComponent6());      

      /**
       * load the Books.MD component on the ui-framework component 
       */   
      document.getElementById("accordion-books-md-id").appendChild(buildCarouselComponent7());      

      /**
       * load the calculator component on the accordion component 
       */   
      document.getElementById("accordion-calculator").appendChild(buildCarouselComponent8());      
      
      /**
       * load the product-listing component on the accordion component 
       */   
      document.getElementById("accordion-product-listing").appendChild(buildCarouselComponent9());

      /**
       * load the multiple form component on the accordion component 
       */   
      document.getElementById("accordion-multiple-form").appendChild(buildCarouselComponent10());            
              
    }  else {       
    
      /**
       * if client width is greater than 700, load the carousel component to the tab component
       */

      /**
       * load the menu component on the tab component
       */   
      document.getElementById("tab-menu").appendChild(buildCarouselComponent1());
                
      /**
       * load the image-gallery component on the tab component
       */   
      document.getElementById("tab-image-gallery").appendChild(buildCarouselComponent2());
                
      /**
       * load the tab component on the tab component
       */   
      document.getElementById("tab-tabpanel").appendChild(buildCarouselComponent3());
                
      /**
       * load the accordion component on the tab component
       */   
      document.getElementById("tab-accordion").appendChild(buildCarouselComponent4());
                
      /**
       * load the digital business card component on the tab component
       */   
      document.getElementById("tab-business-card").appendChild(buildCarouselComponent5());
                
      /**
       * load the ui framework component on the tab component
       */   
      document.getElementById("tab-ui-framework").appendChild(buildCarouselComponent6());
                
      /**
       * load the Books.MD component on the tab component
       */   
      document.getElementById("tab-books-md-id").appendChild(buildCarouselComponent7());
                
      /**
       * load the calculator component on the tab component
       */   
      document.getElementById("tab-calculator").appendChild(buildCarouselComponent8());
                
      /**
       * load the product-listing component on the tab component
       */   
      document.getElementById("tab-product-listing").appendChild(buildCarouselComponent9());

      /**
       * load the multiple form component on the tab component
       */   
      document.getElementById("tab-multiple-form").appendChild(buildCarouselComponent10());      
         
    }

  }

  function buildCarouselComponent1() {
  	console.log("building the menu carousel using buildMenuComponent1....");
    var cal = document.createElement("div");
    cal.className = "carousel-3d c-3d-1";
    cal.id = "menu-id";
    cal.innerHTML ='<div class="carousel-3d-axis c-3d-1-axis">\
                      <div class="carousel-3d-item c-3d-1-item f1-of-3d-quad">\
                        <div class="carousel-3d-content">\
                          <div>\
                            <img width="375" height="200" src="../img/pa2/drop-down-menu/drop-down-menu.jpg" alt="Drop-down Menu">\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-item c-3d-1-item f2-of-3d-quad">\
                        <div class="carousel-3d-content">\
                          <div>\
                            <video width="375" height="280" autoplay loop muted>\
                              <source src="../img/pa2/drop-down-menu/drop-down-menu.mp4">\
                            </video>\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-item c-3d-1-item f3-of-3d-quad">\
                        <div class="carousel-3d-content">\
                          <div>\
                            <img width="375" height="200" src="../img/pa2/flipnav/flipnav.jpg" alt="Flipnav Menu">\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-item c-3d-1-item f4-of-3d-quad">\
                        <div class="carousel-3d-content">\
                          <div>\
                            <video width="375" height="280" autoplay loop muted>\
                              <source src="../img/pa2/flipnav/flipnav.mp4">\
                            </video>\
                          </div>\
                        </div>\
                      </div>\
                    </div>\
                    <span class="carousel-3d-item--indicator-quad c-3d-1-indy itemsIn3d-1--active" id="c-3d-1-item-1"></span>\
                    <span class="carousel-3d-item--indicator-quad c-3d-1-indy" id="c-3d-1-item-2"></span>\
                    <span class="carousel-3d-item--indicator-quad c-3d-1-indy" id="c-3d-1-item-3"></span>\
                    <span class="carousel-3d-item--indicator-quad c-3d-1-indy" id="c-3d-1-item-4"></span>\
                    <span class="carousel-3d-item--next c-3d-1-next">\
                      <svg class="tab-next-chevron form-icon-small"><use xlink:href="#icon-chevron-right"></use></svg>\
                    </span>\
                    <span class="carousel-3d-item--prev c-3d-1-prev">\
                      <svg class="form-icon-small"><use xlink:href="#icon-chevron-left"></use></svg>\
                    </span>\
                    <span class="carousel-3d-item--next-a c-3d-1-next-a">\
                      <svg class="tab-next-chevron form-icon-small"><use xlink:href="#icon-chevron-right"></use></svg>\
                    </span>\
                    <span class="carousel-3d-item--prev-a c-3d-1-prev-a">\
                      <svg class="form-icon-small"><use xlink:href="#icon-chevron-left"></use></svg>\
                    </span>\
                  </div>';

    return cal;    
  }

  function buildCarouselComponent2() {
    console.log("building the menu carousel using buildCarouselComponent2....");
    var cal = document.createElement("div");
    cal.className = "carousel-3d c-3d-2";
    cal.id = "image-gallery-id";
    cal.innerHTML ='<div class="carousel-3d-axis c-3d-2-axis">\
                      <div class="carousel-3d-item c-3d-2-item f1-of-3d-quad">\
                        <div class="carousel-3d-content">\
                          <div>\
                            <img width="375" height="200" src="../img/pa2/image-gallery/image-gallery-nonjs.jpg" alt="Non JS Image Gallery">\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-item c-3d-2-item f2-of-3d-quad">\
                        <div class="carousel-3d-content">\
                          <div>\
                            <video width="375" height="280" autoplay loop muted>\
                              <source src="../img/pa2/image-gallery/image-gallery-nonjs.mp4">\
                            </video>\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-item c-3d-2-item f3-of-3d-quad">\
                        <div class="carousel-3d-content">\
                          <div>\
                            <img width="375" height="200" src="../img/pa2/image-gallery/image-gallery.jpg" alt="Image Gallery JS">\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-item c-3d-2-item f4-of-3d-quad">\
                        <div class="carousel-3d-content">\
                          <div>\
                            <video width="375" height="280" autoplay loop muted>\
                              <source src="../img/pa2/image-gallery/image-gallery.mp4">\
                            </video>\
                          </div>\
                        </div>\
                      </div>\
                    </div>\
                    <span class="carousel-3d-item--indicator-quad c-3d-2-indy itemsIn3d-2--active" id="c-3d-2-item-1"></span>\
                    <span class="carousel-3d-item--indicator-quad c-3d-2-indy" id="c-3d-2-item-2"></span>\
                    <span class="carousel-3d-item--indicator-quad c-3d-2-indy" id="c-3d-2-item-3"></span>\
                    <span class="carousel-3d-item--indicator-quad c-3d-2-indy" id="c-3d-2-item-4"></span>\
                    <span class="carousel-3d-item--next c-3d-2-next">\
                      <svg class="tab-next-chevron form-icon-small"><use xlink:href="#icon-chevron-right"></use></svg>\
                    </span>\
                    <span class="carousel-3d-item--prev c-3d-2-prev">\
                      <svg class="form-icon-small"><use xlink:href="#icon-chevron-left"></use></svg>\
                    </span>\
                    <span class="carousel-3d-item--next-a c-3d-2-next-a">\
                      <svg class="tab-next-chevron form-icon-small"><use xlink:href="#icon-chevron-right"></use></svg>\
                    </span>\
                    <span class="carousel-3d-item--prev-a c-3d-2-prev-a">\
                      <svg class="form-icon-small"><use xlink:href="#icon-chevron-left"></use></svg>\
                    </span>\
                  </div>';

    return cal;    
  }

  function buildCarouselComponent3() {
    console.log("building the menu carousel using buildCarouselComponent3....");
    var cal = document.createElement("div");
    cal.className = "carousel-3d c-3d-3";
    cal.id = "tabpanel-id";
    cal.innerHTML ='<div class="carousel-3d-axis c-3d-3-axis">\
                      <div class="carousel-3d-item c-3d-3-item f1-of-3d-quad">\
                        <div class="carousel-3d-content">\
                          <div>\
                            <img width="375" height="200" src="../img/pa2/tab/tab-nonjs.jpg" alt="Tab Ui Component">\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-item c-3d-3-item f2-of-3d-quad">\
                        <div class="carousel-3d-content">\
                          <div>\
                            <video width="375" height="280" autoplay loop muted>\
                              <source src="../img/pa2/tab/tab-nonjs.mp4">\
                            </video>\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-item c-3d-3-item f3-of-3d-quad">\
                        <div class="carousel-3d-content">\
                          <div>\
                            <img width="375" height="200" src="../img/pa2/tab/tab-nonjs.jpg" alt="Tab UI Component">\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-item c-3d-3-item f4-of-3d-quad">\
                        <div class="carousel-3d-content">\
                          <div>\
                            <video width="375" height="280" autoplay loop muted>\
                              <source src="../img/pa2/tab/tab-nonjs2.mp4">\
                            </video>\
                          </div>\
                        </div>\
                      </div>\
                    </div>\
                    <span class="carousel-3d-item--indicator-quad c-3d-3-indy itemsIn3d-3--active" id="c-3d-3-item-1"></span>\
                    <span class="carousel-3d-item--indicator-quad c-3d-3-indy" id="c-3d-3-item-2"></span>\
                    <span class="carousel-3d-item--indicator-quad c-3d-3-indy" id="c-3d-3-item-3"></span>\
                    <span class="carousel-3d-item--indicator-quad c-3d-3-indy" id="c-3d-3-item-4"></span>\
                    <span class="carousel-3d-item--next c-3d-3-next">\
                      <svg class="tab-next-chevron form-icon-small"><use xlink:href="#icon-chevron-right"></use></svg>\
                    </span>\
                    <span class="carousel-3d-item--prev c-3d-3-prev">\
                      <svg class="form-icon-small"><use xlink:href="#icon-chevron-left"></use></svg>\
                    </span>\
                    <span class="carousel-3d-item--next-a c-3d-3-next-a">\
                      <svg class="tab-next-chevron form-icon-small"><use xlink:href="#icon-chevron-right"></use></svg>\
                    </span>\
                    <span class="carousel-3d-item--prev-a c-3d-3-prev-a">\
                      <svg class="form-icon-small"><use xlink:href="#icon-chevron-left"></use></svg>\
                    </span>\
                  </div>';

    return cal;    
  }

  function buildCarouselComponent4() {
    console.log("building the menu carousel using buildCarouselComponent4....");
    var cal = document.createElement("div");
    cal.className = "carousel-3d c-3d-4";
    cal.id = "accordion-id";
    cal.innerHTML ='<div class="carousel-3d-axis c-3d-4-axis">\
                      <div class="carousel-3d-item c-3d-4-item f1-of-3d-quad">\
                        <div class="carousel-3d-content">\
                          <div>\
                            <img width="375" height="200" src="../img/pa2/accordion/non-js/accordion1.jpg" alt="Accordion NonJS UI Component">\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-item c-3d-4-item f2-of-3d-quad">\
                        <div class="carousel-3d-content">\
                          <div>\
                            <video width="375" height="280" autoplay loop muted>\
                              <source src="../img/pa2/accordion/non-js/accordion2.mp4">\
                            </video>\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-item c-3d-4-item f3-of-3d-quad">\
                        <div class="carousel-3d-content">\
                          <div>\
                            <img width="375" height="200" src="../img/pa2/accordion/accordion3.jpg" alt="Accordion UI Component">\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-item c-3d-4-item f4-of-3d-quad">\
                        <div class="carousel-3d-content">\
                          <div>\
                            <video width="375" height="280" autoplay loop muted>\
                              <source src="../img/pa2/accordion/accordion4.mp4">\
                            </video>\
                          </div>\
                        </div>\
                      </div>\
                    </div>\
                    <span class="carousel-3d-item--indicator-quad c-3d-4-indy itemsIn3d-4--active" id="c-3d-4-item-1"></span>\
                    <span class="carousel-3d-item--indicator-quad c-3d-4-indy" id="c-3d-4-item-2"></span>\
                    <span class="carousel-3d-item--indicator-quad c-3d-4-indy" id="c-3d-4-item-3"></span>\
                    <span class="carousel-3d-item--indicator-quad c-3d-4-indy" id="c-3d-4-item-4"></span>\
                    <span class="carousel-3d-item--next c-3d-4-next">\
                      <svg class="tab-next-chevron form-icon-small"><use xlink:href="#icon-chevron-right"></use></svg>\
                    </span>\
                    <span class="carousel-3d-item--prev c-3d-4-prev">\
                      <svg class="form-icon-small"><use xlink:href="#icon-chevron-left"></use></svg>\
                    </span>\
                    <span class="carousel-3d-item--next-a c-3d-4-next-a">\
                      <svg class="tab-next-chevron form-icon-small"><use xlink:href="#icon-chevron-right"></use></svg>\
                    </span>\
                    <span class="carousel-3d-item--prev-a c-3d-4-prev-a">\
                      <svg class="form-icon-small"><use xlink:href="#icon-chevron-left"></use></svg>\
                    </span>\
                  </div>';

    return cal;    
  }

  function buildCarouselComponent5() {
    console.log("building the menu carousel using buildCarouselComponent5....");
    var cal = document.createElement("div");
    cal.className = "carousel-3d c-3d-5";
    cal.id = "business-card-id";
    cal.innerHTML ='<div class="carousel-3d-axis c-3d-5-axis">\
                      <div class="carousel-3d-item c-3d-5-item f1-of-3d-tri">\
                        <div class="carousel-3d-content">\
                          <div>\
                            <img width="375" height="200" src="../img/pa2/digital-business-card/digital-business-card-nonjs-1.jpg" alt="Digital Business Card UI Component">\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-item c-3d-5-item f2-of-3d-tri">\
                        <div class="carousel-3d-content">\
                          <div>\
                            <img width="375" height="200" src="../img/pa2/digital-business-card/digital-business-card-nonjs-2.jpg" alt="Digital Business Card UI Component">\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-item c-3d-5-item f3-of-3d-tri">\
                        <div class="carousel-3d-content">\
                          <div>\
                            <video width="375" height="280" autoplay loop muted>\
                              <source src="../img/pa2/digital-business-card/digital-business-card-nonjs.mp4">\
                            </video>\
                          </div>\
                        </div>\
                      </div>\
                    </div>\
                    <span class="carousel-3d-item--indicator-tri c-3d-5-indy itemsIn3d-5--active" id="c-3d-5-item-1"></span>\
                    <span class="carousel-3d-item--indicator-tri c-3d-5-indy" id="c-3d-5-item-2"></span>\
                    <span class="carousel-3d-item--indicator-tri c-3d-5-indy" id="c-3d-5-item-3"></span>\
                    <span class="carousel-3d-item--next c-3d-5-next">\
                      <svg class="tab-next-chevron form-icon-small"><use xlink:href="#icon-chevron-right"></use></svg>\
                    </span>\
                    <span class="carousel-3d-item--prev c-3d-5-prev">\
                      <svg class="form-icon-small"><use xlink:href="#icon-chevron-left"></use></svg>\
                    </span>\
                    <span class="carousel-3d-item--next-a c-3d-5-next-a">\
                      <svg class="tab-next-chevron form-icon-small"><use xlink:href="#icon-chevron-right"></use></svg>\
                    </span>\
                    <span class="carousel-3d-item--prev-a c-3d-5-prev-a">\
                      <svg class="form-icon-small"><use xlink:href="#icon-chevron-left"></use></svg>\
                    </span>\
                  </div>';

    return cal;    
  }

  function buildCarouselComponent6() {
    console.log("building the menu carousel using buildCarouselComponent6....");
    var cal = document.createElement("div");
    cal.className = "carousel-3d c-3d-6";
    cal.id = "ui-framework-id";
    cal.innerHTML ='<div class="carousel-3d-axis c-3d-6-axis">\
                      <div class="carousel-3d-item c-3d-6-item f1-of-3d-tri">\
                        <div class="carousel-3d-content">\
                          <div>\
                            <img width="375" height="200" src="../img/pa2/ui-framework/ui-framework-nonjs-1.jpg" alt="Orchestra UI Framework">\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-item c-3d-6-item f2-of-3d-tri">\
                        <div class="carousel-3d-content">\
                          <div>\
                            <img width="375" height="200" src="../img/pa2/ui-framework/ui-framework-nonjs-2.jpg" alt="Orchestra UI Framework">\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-item c-3d-6-item f3-of-3d-tri">\
                        <div class="carousel-3d-content">\
                          <div>\
                            <video width="375" height="280" autoplay loop muted>\
                              <source src="../img/pa2/ui-framework/ui-framework-nonjs.mp4">\
                            </video>\
                          </div>\
                        </div>\
                      </div>\
                    </div>\
                    <span class="carousel-3d-item--indicator-tri c-3d-6-indy itemsIn3d-6--active" id="c-3d-6-item-1"></span>\
                    <span class="carousel-3d-item--indicator-tri c-3d-6-indy" id="c-3d-6-item-2"></span>\
                    <span class="carousel-3d-item--indicator-tri c-3d-6-indy" id="c-3d-6-item-3"></span>\
                    <span class="carousel-3d-item--next c-3d-6-next">\
                      <svg class="tab-next-chevron form-icon-small"><use xlink:href="#icon-chevron-right"></use></svg>\
                    </span>\
                    <span class="carousel-3d-item--prev c-3d-6-prev">\
                      <svg class="form-icon-small"><use xlink:href="#icon-chevron-left"></use></svg>\
                    </span>\
                    <span class="carousel-3d-item--next-a c-3d-6-next-a">\
                      <svg class="tab-next-chevron form-icon-small"><use xlink:href="#icon-chevron-right"></use></svg>\
                    </span>\
                    <span class="carousel-3d-item--prev-a c-3d-6-prev-a">\
                      <svg class="form-icon-small"><use xlink:href="#icon-chevron-left"></use></svg>\
                    </span>\
                  </div>';

    return cal;    
  }

  function buildCarouselComponent7() {
    console.log("building the menu carousel using buildCarouselComponent7....");
    var cal = document.createElement("div");
    cal.className = "carousel-3d c-3d-7";
    cal.id = "books-md-id";
    cal.innerHTML ='<div class="carousel-3d-axis c-3d-7-axis">\
                      <div class="carousel-3d-item c-3d-7-item f1-of-3d-tri">\
                        <div class="carousel-3d-content">\
                          <div>\
                            <img width="375" height="200" src="../img/pa2/books-md/books-md-nonjs-1.jpg" alt="Books.MD Site">\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-item c-3d-7-item f2-of-3d-tri">\
                        <div class="carousel-3d-content">\
                          <div>\
                            <img width="375" height="200" src="../img/pa2/books-md/books-md-nonjs-2.jpg" alt="Books.MD Site 2">\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-item c-3d-7-item f3-of-3d-tri">\
                        <div class="carousel-3d-content">\
                          <div>\
                            <video width="375" height="280" autoplay loop muted>\
                              <source src="../img/pa2/books-md/books-md-nonjs.mp4">\
                            </video>\
                          </div>\
                        </div>\
                      </div>\
                    </div>\
                    <span class="carousel-3d-item--indicator-tri c-3d-7-indy itemsIn3d-7--active" id="c-3d-7-item-1"></span>\
                    <span class="carousel-3d-item--indicator-tri c-3d-7-indy" id="c-3d-7-item-2"></span>\
                    <span class="carousel-3d-item--indicator-tri c-3d-7-indy" id="c-3d-7-item-3"></span>\
                    <span class="carousel-3d-item--next c-3d-7-next">\
                      <svg class="tab-next-chevron form-icon-small"><use xlink:href="#icon-chevron-right"></use></svg>\
                    </span>\
                    <span class="carousel-3d-item--prev c-3d-7-prev">\
                      <svg class="form-icon-small"><use xlink:href="#icon-chevron-left"></use></svg>\
                    </span>\
                    <span class="carousel-3d-item--next-a c-3d-7-next-a">\
                      <svg class="tab-next-chevron form-icon-small"><use xlink:href="#icon-chevron-right"></use></svg>\
                    </span>\
                    <span class="carousel-3d-item--prev-a c-3d-7-prev-a">\
                      <svg class="form-icon-small"><use xlink:href="#icon-chevron-left"></use></svg>\
                    </span>\
                  </div>';

    return cal;    
  }

  function buildCarouselComponent8() {
    console.log("building the menu carousel using buildCarouselComponent8....");
    var cal = document.createElement("div");
    cal.className = "carousel-3d c-3d-8";
    cal.id = "calculator-id";
    cal.innerHTML ='<div class="carousel-3d-axis c-3d-8-axis">\
                      <div class="carousel-3d-item c-3d-8-item f1-of-3d-quad">\
                        <div class="carousel-3d-content">\
                          <div>\
                            <img width="375" height="200" src="../img/pa2/calculator/real-calculator1.jpg" alt="Real Calculator">\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-item c-3d-8-item f2-of-3d-quad">\
                        <div class="carousel-3d-content">\
                          <div>\
                            <img src="../img/pa2/calculator/real-calculator2.jpg" alt="Real Calculator">\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-item c-3d-8-item f3-of-3d-quad">\
                        <div class="carousel-3d-content">\
                          <div>\
                            <video width="375" height="280" autoplay loop muted>\
                              <source src="../img/pa2/calculator/real-calc-video.mp4">\
                            </video>\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-item c-3d-8-item f4-of-3d-quad">\
                        <div class="carousel-3d-content">\
                          <div class="calculator">\
                            <div class="calculator-panel">\
                              <h2 class="calculator-title"><span>Calculator</span></h2>\
                            </div>\
                            <div class="calculator-panel">\
                              <input type="text" name="display" class="calculator-display calculator-form-input" id="display" disabled>\
                            </div>\
                            <div class="calculator-panel">\
                              <div class="calculator-button" id="clear" onclick="calc.clearBtn()">C</div>\
                              <div class="calculator-button" id="percent" onclick="calc.percentBtn()">%</div>\
                              <div class="calculator-button arithmetic-symbol" id="plus-minus" onclick="calc.plusMinusBtn()">&#177</div>\
                              <div class="calculator-button" id="del" onclick="calc.delBtn()">&#9003</div>\
                            </div>\
                            <div class="calculator-panel">\
                              <div class="calculator-button" id="seven" onclick="calc.sevenBtn()">7</div>\
                              <div class="calculator-button" id="eight" onclick="calc.eightBtn()">8</div>\
                              <div class="calculator-button" id="nine" onclick="calc.nineBtn()">9</div>\
                              <div class="calculator-button arithmetic-symbol" id="divide" onclick="calc.divideBtn()">&#247</div>\
                            </div>\
                            <div class="calculator-panel">\
                              <div class="calculator-button" id="four" onclick="calc.fourBtn()">4</div>\
                              <div class="calculator-button" id="five" onclick="calc.fiveBtn()">5</div>\
                              <div class="calculator-button" id="six" onclick="calc.sixBtn()">6</div>\
                              <div class="calculator-button arithmetic-symbol" id="multiply" onclick="calc.multiplyBtn()">&#215</div>\
                            </div>\
                            <div class="calculator-panel">\
                              <div class="calculator-button" id="one" onclick="calc.oneBtn()">1</div>\
                              <div class="calculator-button" id="two" onclick="calc.twoBtn()">2</div>\
                              <div class="calculator-button" id="three" onclick="calc.threeBtn()">3</div>\
                              <div class="calculator-button arithmetic-symbol" id="minus" onclick="calc.minusBtn()">&#x2212</div>\
                            </div>\
                            <div class="calculator-panel">\
                              <div class="calculator-button" id="zero" onclick="calc.zeroBtn()">0</div>\
                              <div class="calculator-button arithmetic-symbol" id="dot" onclick="calc.dotBtn()">&#8901</div>\
                              <div class="calculator-button arithmetic-symbol" id="plus" onclick="calc.plusBtn()">+</div>\
                              <div class="calculator-button arithmetic-symbol" id="equal" onclick="calc.equalBtn()">=</div>\
                            </div>\
                            <div class="calculator-panel">\
                              <span><small>2018 v.1.02</small></span>\
                            </div>\
                          </div>\
                        </div>\
                      </div>\
                    </div>\
                    <span class="carousel-3d-item--indicator-quad c-3d-8-indy itemsIn3d-8--active" id="c-3d-8-item-1"></span>\
                    <span class="carousel-3d-item--indicator-quad c-3d-8-indy" id="c-3d-8-item-2"></span>\
                    <span class="carousel-3d-item--indicator-quad c-3d-8-indy" id="c-3d-8-item-3"></span>\
                    <span class="carousel-3d-item--indicator-quad c-3d-8-indy" id="c-3d-8-item-4"></span>\
                    <span class="carousel-3d-item--next c-3d-8-next">\
                      <svg class="tab-next-chevron form-icon-small"><use xlink:href="#icon-chevron-right"></use></svg>\
                    </span>\
                    <span class="carousel-3d-item--prev c-3d-8-prev">\
                      <svg class="form-icon-small"><use xlink:href="#icon-chevron-left"></use></svg>\
                    </span>\
                    <span class="carousel-3d-item--next-a c-3d-8-next-a">\
                      <svg class="tab-next-chevron form-icon-small"><use xlink:href="#icon-chevron-right"></use></svg>\
                    </span>\
                    <span class="carousel-3d-item--prev-a c-3d-8-prev-a">\
                      <svg class="form-icon-small"><use xlink:href="#icon-chevron-left"></use></svg>\
                    </span>\
                  </div>';

    return cal;    
  }

  function buildCarouselComponent9() {
    console.log("building the menu carousel using buildCarouselComponent9....");
    var cal = document.createElement("div");
    cal.className = "carousel-3d c-3d-9";
    cal.id = "product-listing-id";
    cal.innerHTML ='<div class="carousel-3d-axis c-3d-9-axis">\
                      <div class="carousel-3d-item c-3d-9-item f1-of-3d-tri">\
                        <div class="carousel-3d-content">\
                          <div>\
                            <img width="375" height="200" src="../img/pa2/product-listing/product-listing-1.jpg" alt="Product Listing Site 1">\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-item c-3d-9-item f2-of-3d-tri">\
                        <div class="carousel-3d-content">\
                          <div>\
                            <img width="375" height="200" src="../img/pa2/product-listing/product-listing-2.jpg" alt="Product Listing Site 2">\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-item c-3d-9-item f3-of-3d-tri">\
                        <div class="carousel-3d-content">\
                          <div>\
                            <video width="375" height="280" autoplay loop muted>\
                              <source src="../img/pa2/product-listing/product-listing.mp4">\
                            </video>\
                          </div>\
                        </div>\
                      </div>\
                    </div>\
                    <span class="carousel-3d-item--indicator-tri c-3d-9-indy itemsIn3d-9--active" id="c-3d-9-item-1"></span>\
                    <span class="carousel-3d-item--indicator-tri c-3d-9-indy" id="c-3d-9-item-2"></span>\
                    <span class="carousel-3d-item--indicator-tri c-3d-9-indy" id="c-3d-9-item-3"></span>\
                    <span class="carousel-3d-item--next c-3d-9-next">\
                      <svg class="tab-next-chevron form-icon-small"><use xlink:href="#icon-chevron-right"></use></svg>\
                    </span>\
                    <span class="carousel-3d-item--prev c-3d-9-prev">\
                      <svg class="form-icon-small"><use xlink:href="#icon-chevron-left"></use></svg>\
                    </span>\
                    <span class="carousel-3d-item--next-a c-3d-9-next-a">\
                      <svg class="tab-next-chevron form-icon-small"><use xlink:href="#icon-chevron-right"></use></svg>\
                    </span>\
                    <span class="carousel-3d-item--prev-a c-3d-9-prev-a">\
                      <svg class="form-icon-small"><use xlink:href="#icon-chevron-left"></use></svg>\
                    </span>\
                  </div>';

    return cal;    
  }
  
  function buildCarouselComponent10() {
    console.log("building the menu carousel using buildCarouselComponent10....");
    var cal = document.createElement("div");
    cal.className = "carousel-3d c-3d-10";
    cal.id = "multiple-form-id";
    cal.innerHTML ='<div class="carousel-3d-axis c-3d-10-axis">\
                      <div class="carousel-3d-item c-3d-10-item f1-of-3d-sexta">\
                        <div class="carousel-3d-content">\
                          <div>\
                            <video width="375" height="280" autoplay loop muted>\
                              <source src="../img/pa2/multiple-forms/login-demo.mp4">\
                            </video>\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-item c-3d-10-item f2-of-3d-sexta">\
                        <div class="carousel-3d-content">\
                          <div>\
                            <video width="375" height="280" autoplay loop muted>\
                              <source src="../img/pa2/multiple-forms/signup-demo.mp4">\
                            </video>\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-item c-3d-10-item f3-of-3d-sexta">\
                        <div class="carousel-3d-content">\
                          <div>\
                            <video width="375" height="280" autoplay loop muted>\
                              <source src="../img/pa2/multiple-forms/rgb-color-picker.mp4">\
                            </video>\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-item c-3d-10-item f4-of-3d-sexta">\
                        <div class="carousel-3d-content">\
                          <div>\
                            <video width="375" height="280" autoplay loop muted>\
                              <source src="../img/pa2/multiple-forms/shipping-billing-demos.mp4">\
                            </video>\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-item c-3d-10-item f5-of-3d-sexta">\
                        <div class="carousel-3d-content">\
                          <div>\
                            <video width="375" height="280" autoplay loop muted>\
                              <source src="../img/pa2/multiple-forms/ccdc-demo.mp4">\
                            </video>\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-item c-3d-10-item f6-of-3d-sexta">\
                        <div class="carousel-3d-content">\
                          <div>\
                            <video width="375" height="280" autoplay loop muted>\
                              <source src="../img/pa2/multiple-forms/scheduling-form-demo.mp4">\
                            </video>\
                          </div>\
                        </div>\
                      </div>\
                    </div>\
                    <span class="carousel-3d-item--indicator-sexta c-3d-10-indy itemsIn3d-10--active" id="c-3d-10-item-1"></span>\
                    <span class="carousel-3d-item--indicator-sexta c-3d-10-indy" id="c-3d-10-item-2"></span>\
                    <span class="carousel-3d-item--indicator-sexta c-3d-10-indy" id="c-3d-10-item-3"></span>\
                    <span class="carousel-3d-item--indicator-sexta c-3d-10-indy" id="c-3d-10-item-4"></span>\
                    <span class="carousel-3d-item--indicator-sexta c-3d-10-indy" id="c-3d-10-item-5"></span>\
                    <span class="carousel-3d-item--indicator-sexta c-3d-10-indy" id="c-3d-10-item-6"></span>\
                    <span class="carousel-3d-item--next c-3d-10-next">\
                      <svg class="tab-next-chevron form-icon-small"><use xlink:href="#icon-chevron-right"></use></svg>\
                    </span>\
                    <span class="carousel-3d-item--prev c-3d-10-prev">\
                      <svg class="form-icon-small"><use xlink:href="#icon-chevron-left"></use></svg>\
                    </span>\
                    <span class="carousel-3d-item--next-a c-3d-10-next-a">\
                      <svg class="tab-next-chevron form-icon-small"><use xlink:href="#icon-chevron-right"></use></svg>\
                    </span>\
                    <span class="carousel-3d-item--prev-a c-3d-10-prev-a">\
                      <svg class="form-icon-small"><use xlink:href="#icon-chevron-left"></use></svg>\
                    </span>\
                  </div>';

    return cal;    
  }

})(window);