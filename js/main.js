// Change header Background:

$(function(){
  $(window).scroll(function() {
    if($(window).scrollTop() >= 10) {
      $('nav').addClass('nav-background');
    }
    else {
      $('nav').removeClass('nav-background');
    }
  });
});
