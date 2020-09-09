'use strict';
/*
Sticky footer Jquery Plugin
Main features;
- One or two offsets sizes (usefull to hide the sticky footer to show the normal footer or a CTA)
- only mobile, or also for desktop
- get Visible whit class is on top or on bottom


USAGE:
- Try to change the config values, it's is really simple
- see our css /scss file as example 
*/

$(function () {
    // !Sticky Footer
    let footerOffset, footerOffset2;

    //CONFIG
    //footerOffset = 800; //Uncomment to set a pixel height
    //footerOffset2 = 2700; //Uncomment to set a pixel height
    let mainStickyFooterClass = '.sticky-footer';
    let stickyOffsetClass1 = '.sticky-footer-offset-1';
    let stickyOffsetClass2 = '.sticky-footer-offset-2';
    let offSet1 = 100; //Change the position from top or bottom
    let offSet2 = 100; //The same, for the second class
    let bottomHeight = true; // set to false if you need the top height
    let classHeightMode = true // set to false if you chosee fix sizes
    let twoOffsetsMode = true // set to false if you want only one
    let maxWidth = 480; //set to 0 if you want to have the sticky footer in all sizes

    //END CONFIG//


    let footerStatus = false;
    setFooterOffsets();
    stickyFooterlogic();

    if (window.innerWidth >= maxWidth && maxWidth != 0) {
        $(mainStickyFooterClass).css('display', 'none');
    } //avoid error

    $(window).scroll(function () {
        //height > footerOffset AND < footerOffset2
        if (window.innerWidth <= maxWidth || maxWidth == 0) {
            stickyFooterlogic();
        }
    });

    function stickyFooterlogic() {
        if (($(window).scrollTop() > footerOffset && $(window).scrollTop() < footerOffset2)) {
            $(mainStickyFooterClass).slideDown(400);
        }
        else if (($(window).scrollTop() < footerOffset || $(window).scrollTop() > footerOffset2)) {
            $(mainStickyFooterClass).slideUp(400);
        }
    }

    $(window).resize(function () { //resize control
        if (window.innerWidth > maxWidth && maxWidth != 0) {
            $(mainStickyFooterClass).css('display', 'none');
        } else {
            setFooterOffsets();
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

    function setFooterOffsets(){
        if (classHeightMode) {
            footerOffset = getHeight(stickyOffsetClass1, bottomHeight) + offSet1;
            if(twoOffsetsMode){
                footerOffset2 = getHeight(stickyOffsetClass2, bottomHeight) + offSet2;
            } else {
                footerOffset2 = $(document).height();
            }
        }
    }
})