/**
 * Cursor animation on page
 *
 * @author DCRichards
 **/

(function($) {
    
    var animateCursor = function() {
        $(".cursor").animate({
            opacity: 0
        }, 'fast', 'swing').animate({
            opacity: 1
        }, 'fast', 'swing');    
    };
    
    $(document).ready(function() {
        setInterval(animateCursor, 1200);
    });
    
}(jQuery));