(function($) {
    
    var animateCursor = function() {
        $(".cursor").animate({
            opacity: 0
        }, 'fast', 'swing').animate({
            opacity: 1
        }, 'fast', 'swing');    
    };
    
    var setToViewportSize = function() {
        var height = $(window).height();
        var width = $(window).width();
        $("#intro").css('min-height', height);
        $("#about").css('min-height', height);
        $("#contact").css('min-height', height);
        $("#fourohfour").css('min-height', height);
        if (width < 400) {
            $("#about.profile-detail").css('float', '');
        } else {
            $("#about.profile-detail").css('float', 'right');
        }
    };
    
    $(window).resize(function() {
        setToViewportSize();
    });
    
    $(document).ready(function() {
        
        //easter egg
        console.log('-------------------------------------------');
        console.log('    ...Caught you looking didn\'t I? ;)');
        console.log(' That\'s okay, I like your style!');
        console.log(' How about heading over to my contact page');
        console.log(' and getting in touch?');
        console.log('-------------------------------------------');
        
        //set height dynamically
        setToViewportSize();
        
        // blinking cursor animation
        setInterval(animateCursor, 1200);
        
        // smooth scrolling
        $(function() {
            $('a[href*=#]:not([href=#])').click(function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                    return false;
                    }
                }
            });
        });
        
        // parallax scrolling
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