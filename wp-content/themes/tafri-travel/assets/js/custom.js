jQuery(function($){
 "use strict";
   jQuery('.main-menu-navigation > ul').superfish({
     delay:       0,                            
     animation:   {opacity:'show',height:'show'},  
     speed:       'fast'                        
   });

});

function resMenu_open() {
	document.getElementById("resmenu-sidebar").style.width = "250px";
}
function resMenu_close() {
  document.getElementById("resmenu-sidebar").style.width = "0";
}

// search

function search_open() {
  jQuery(".serach_outer").slideDown(100);
}
function search_close() {
  jQuery(".serach_outer").slideUp(100);
}

// scroll
jQuery(document).ready(function () {
	jQuery(window).scroll(function () {
	    if (jQuery(this).scrollTop() > 100) {
	        jQuery('.scrollup').fadeIn();
	    } else {
	        jQuery('.scrollup').fadeOut();
	    }
	});
	jQuery('.scrollup').click(function () {
	    jQuery("html, body").animate({
	        scrollTop: 0
	    }, 600);
	    return false;
	});
});