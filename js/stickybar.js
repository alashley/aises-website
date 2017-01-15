$(document).ready(function(){
   $(window).bind('scroll', function() {
   var navHeight = $( window ).height() - 100;
         if ($(window).scrollTop() > navHeight) {
             $('nav').addClass('fixed');
             console.log("Class Added")
         }
         else {
             $('nav').removeClass('fixed');
             console.log("Class Removed")
         }
    });
});