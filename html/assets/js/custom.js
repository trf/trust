$(document).ready(function(){

      //Smooth scroll
      $('.page-down .button').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        $target = $(target);
        var scrollToPosition = $(target).offset().top;
        $('html, body').animate({
            'scrollTop': scrollToPosition
        }, 900, 'swing');
    });


  //mobile menu
  $(".app-menu-list").hover(function(){
   $(".app-nav").toggleClass("hover-state");
  });


});

// $(function(){
//   // Bind the swipeHandler callback function to the swipe event on div.box
//   $( "body" ).on( "swipe", swipeHandler );
//   // Callback function references the event target and adds the 'swipe' class to it
//   function swipeHandler( event ){
//     //$( event.target ).addClass( "swipe" );
//     //$( "body" ).addClass( "swipe" );
//     $(".app-wrapper").removeClass("moveLeft");
//     $(".before-login").removeClass("moveLeft");
//     $(".wrapper-normal").toggleClass("moveLeft");
//     $(".main-application").toggleClass("moveLeft");
//     $(".mobile-nav").toggleClass("show").toggleClass("hide");
//   }
// });
