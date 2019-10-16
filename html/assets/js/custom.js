$(document).ready(function(){

      //Smooth scroll
      $('.page-down .button, .policy-links').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        $target = $(target);
        var scrollToPosition = $(target).offset().top;
        $('html, body').animate({
            'scrollTop': scrollToPosition
        }, 900, 'swing');
    });


  //menu hover
  $(".app-menu-list").hover(function(){
   $(".app-nav").toggleClass("hover-state");
  });
  //mobile footer menu
  $(".app-footer h6").click(function(){
    $(this).parent(".app-footer").siblings().find("nav").removeClass("show");
    $(this).parent("nav").toggleClass("show");
   });
   $(".footer-logo").click(function(){
    $(this).toggleClass("active");
    $(".policy-links").toggleClass("show");
   });
   $(".btn-mobileMenu").click(function(){
    $("body").toggleClass("translate-x");
    setTimeout(function(){
      $(".has-subMenu > a").removeClass("active").next(".level-1").removeClass("show", 1000, "easeInBack");
    }, 1000);
   });
   $(".offCanvas-nav button").click(function(){
    $("body").toggleClass("translate-x");

    setTimeout(function(){
    $(".has-subMenu > a").removeClass("active").next(".level-1").removeClass("show", 1000, "easeInBack");
  }, 1000);

   });
   $(".has-subMenu > a").click(function(){
    $(this).toggleClass("active").next(".level-1").toggleClass("show");
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
