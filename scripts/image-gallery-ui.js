(function(window){

  var objImage = {};
  
  var slideIndex = 1;
  
  /*
  objImage.plusSlide = function(n) {
    showSlides(slideIndex += n);
  }
  */
 
  objImage.currentSlide = function(n) {

  	/* debug log to determine the value of slideIndex before */
  	console.log("n = "+n);
  	console.log("slideIndex before 'slideIndex = n' is "+ slideIndex);

    showSlides(slideIndex = n);
  }

  var showSlides = function(n) {

    /* debug log to compare slideIndex and n */
  	console.log("slideIndex: "+slideIndex+" n: "+n);

    var i;
    var slides = document.getElementsByClassName("galImageJS");

    /* debug log to find out slides.length */
    //console.log("slides.length = "+slides.length);

    var dots = document.getElementsByClassName("galImgThumbnailJS");

    /* reset slideIndex = 1 in case n > slides.length */
    if (n > slides.length) {slideIndex = 1}  
    /* set slideIndex = slides.length in case n < 1 */	
    if (n < 1) {slideIndex = slides.length}
    

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      slides[i].className = slides[i].className.replace(" gal-img--active", "");  
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" gal-img--active", "");
    }

    /* debug log to check slideIndex-1 */
    //console.log("slideIndex-1 = "+(slideIndex-1));

    slides[slideIndex-1].style.display = "block";
    slides[slideIndex-1].className += " gal-img--active";  
    dots[slideIndex-1].className += " gal-img--active";
  }

  showSlides(slideIndex);

  window.objImage = objImage;

})(window);