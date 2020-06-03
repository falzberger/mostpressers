/*custom jQuery for mostpressers.at */

/* change style of navbar when at top */
$(window).on('scroll', function() {
  if($(window).scrollTop()) {
    $('nav').addClass('white');
  }
  else if ($(window).width() > 576){
    $('nav').removeClass('white');
  }
})

/* hide navbar on click */
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

/* add white class to navbar on small devices */
jQuery(document).ready(function($) {
    if($(window).width() <= 576) {
      $('nav').addClass('white');
    }
});

/* smooth scrolling for in-page links and adjust to navbar
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {

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

*/



/* make carousel swipe-able */
$(".carousel").on("touchstart", function(event){
        var xClick = event.originalEvent.touches[0].pageX;
    $(this).one("touchmove", function(event){
        var xMove = event.originalEvent.touches[0].pageX;
        if( Math.floor(xClick - xMove) > 5 ){
            $(this).carousel('next');
        }
        else if( Math.floor(xClick - xMove) < -5 ){
            $(this).carousel('prev');
        }
    });
    $(".carousel").on("touchend", function(){
            $(this).off("touchmove");
    });
});


/* make table-rows in Termine clickable */
jQuery(document).ready(function($) {
    $(".clickable-row").click(function() {
      window.open($(this).data("href"), '_blank');
    });

});
