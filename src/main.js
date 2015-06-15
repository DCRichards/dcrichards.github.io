(function($) {
    
    var animateCursor = function() {
        $(".cursor").animate({
            opacity: 0
        }, 'fast', 'swing').animate({
            opacity: 1
        }, 'fast', 'swing');    
    };
    
    $(document).ready(function(){
        
        setInterval(animateCursor, 1200);
        // cache the window object
        $window = $(window);
 
        $('section[data-type="background"]').each(function(){
            var $scroll = $(this);

            $(window).scroll(function() {                       
                var yPos = -($window.scrollTop() / $scroll.data('speed')); 
                var coords = '50% '+ yPos + 'px';
                $scroll.css({ backgroundPosition: coords });    
            }); 
       }); 
    });
    
}(jQuery));