jQuery(document).ready(function($){
    var offset = 100;
    var speed = 250;
    var duration = 500;
        $(window).scroll(function(){
            if ($(this).scrollTop() < offset) {
                      $('.back-to-top-button') .fadeOut(duration);
            } else {
                      $('.back-to-top-button') .fadeIn(duration);
            }
        });
     $('.back-to-top-button').on('click', function(){
            $('html, body').animate({scrollTop:0}, speed);
            return false;
            });
});