$(document).ready(function(){

  //mobile menu
  $(".menu-item-2, .menu-item-3").hover(function(){
   $(".site-nav").toggleClass("hover-state");

  });


});

$(function(){
  // Bind the swipeHandler callback function to the swipe event on div.box
  $( "body" ).on( "swipe", swipeHandler );
  // Callback function references the event target and adds the 'swipe' class to it
  function swipeHandler( event ){
    //$( event.target ).addClass( "swipe" );
    //$( "body" ).addClass( "swipe" );
    $(".site-wrapper").removeClass("moveLeft");
    $(".before-login").removeClass("moveLeft");
    $(".wrapper-normal").toggleClass("moveLeft");
    $(".main-application").toggleClass("moveLeft");
    $(".mobile-nav").toggleClass("show").toggleClass("hide");
  }
});