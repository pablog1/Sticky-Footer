'use strict';

$(function () {
    // !Sticky Footer
    let footerOffset, footerOffset2;

    //CONFIG
    //footerOffset = 800;
    //footerOffset2 = 2700;
    let stickyOffsetClass1 = '.sticky-footer-offset-1';
    let stickyOffsetClass2 = '.sticky-footer-offset-2';
    let bottomHeight = true; // set to false if you need the top height
    let classHeightMode = true // set to false if you chosee fix sizes
    let maxWidth = 480;

    //END CONFIG//


    let footerStatus = false;
    if (classHeightMode == true) {
        footerOffset = getHeight(stickyOffsetClass1, bottomHeight);
        footerOffset2 = getHeight(stickyOffsetClass2, bottomHeight);
    }

    if (window.innerWidth <= maxWidth) {
        $(".sticky-footer").css('display', 'none');
    }

    $(window).scroll(function () {
        //height > footerOffset AND < footerOffset2
        if (window.innerWidth <= maxWidth) {
            stickyFooterlogic();
        }
    });

    function stickyFooterlogic() {
        if (($(window).scrollTop() > footerOffset && $(window).scrollTop() < footerOffset2)) {
            $(".sticky-footer").slideDown(400);
        }
        else if (($(window).scrollTop() < footerOffset || $(window).scrollTop() > footerOffset2)) {
            $(".sticky-footer").slideUp(400);
        }
        console.log('footerStatus in Scroll function = ' + footerStatus);
    }

    $(window).resize(function () { //resize control
        console.log('resize');
        if (window.innerWidth > maxWidth) {
            $(".sticky-footer").css('display', 'none');
        } else {
            if (classHeightMode == true) {
                footerOffset = getHeight(stickyOffsetClass1, bottomHeight);
                footerOffset2 = getHeight(stickyOffsetClass2, bottomHeight);
            }
            stickyFooterlogic();
        }
    });

    function getHeight(element, bottomHeight) {
        let elHeight;
        try { //avoid error if class not exist
            elHeight = Math.ceil($(element).offset().top);
        } catch (err) {
            return;
        }
        if (bottomHeight) {
            elHeight -= $(window).height();
        }
        return elHeight;
    }
})