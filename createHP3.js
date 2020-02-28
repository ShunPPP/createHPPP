$(window).scroll(function(){
    let scrollTop = $(window).scrollTop();
    if(scrollTop != 0)
     $('.header').stop().animate({'opacity':'0.2'},400);
    else
     $('.header').stop().animate({'opacity':'1'},400);
   });

$('.header').hover(
    function (e) {
        let scrollTop = $(window).scrollTop();
        if(scrollTop != 0){
        $('.header').stop().animate({'opacity':'1'},400);
        }
    },
    function (e) {
        let scrollTop = $(window).scrollTop();
        if(scrollTop != 0){
            $('.header').stop().animate({'opacity':'0.2'},400);
        }
    }
);

$(function(){
    $('.single-item').slick({
      accessibility: true,
      autoplay: true,
      autoplaySpeed: 1000,
      dots: true,
      fade: true,
    });
  });