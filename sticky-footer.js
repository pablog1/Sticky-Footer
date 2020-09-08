'use strict';

$(function () {

  // !Sticky Footer
  var footerOffset = 800;
  var footerOffset2 = 2700;
  var footerStatus = false;
  var maxWidth = 480;

  if (window.innerWidth <= maxWidth) {
    $(".sticky-footer").css('display', 'none');
    $(window).scroll(function () {
      console.log($(this).scrollTop());
      //height > footerOffset AND < footerOffset2
      if (footerStatus == false && ($(this).scrollTop() > footerOffset && $(this).scrollTop() < footerOffset2)) {
        $(".sticky-footer").slideDown(400);
        footerStatus = true;
      } 
        //height < footerOffset OR > footerOffset2
        else if (footerStatus == true && ($(this).scrollTop() < footerOffset || $(this).scrollTop() > footerOffset2)) {
        $(".sticky-footer").slideUp(400);
        footerStatus = false;
      }
    });
  }

  $(window).resize(function(){ //resize control
    //console.log('resize');
    if (window.innerWidth > maxWidth){
      $(".sticky-footer").css('display', 'none');
    } else {
      if (footerStatus == true) {
        $(".sticky-footer").slideDown(400);
      } else { // if false
        $(".sticky-footer").slideUp(400);
      }
    }
  });
   

})